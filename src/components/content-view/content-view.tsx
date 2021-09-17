import { Component, h, Host, State } from '@stencil/core';
import { Appendices, Bible, BiblePath, Commentary, Resource } from '../../models';
import { state } from '../../state';

@Component({
  tag: 'content-view',
  styleUrl: 'content-view.css',
  shadow: false,
})
export class ContentView {
  @State() bible: Bible;
  @State() commentary: Commentary;
  @State() appendix: Appendices;

  hasNext(): boolean {
    let path: BiblePath = {
      book: state.book,
      chapter: state.chapter,
      verse: state.verse,
    };

    switch (state.resource) {
      case Resource.Bible:
        return path !== this.bible.nextChapter(path);
      case Resource.Commentary:
        return path !== this.commentary.next(path);
      case Resource.Appendix:
        return path.book !== this.appendix.next(path.book);
    }
  }

  hasPrev(): boolean {
    let path: BiblePath = {
      book: state.book,
      chapter: state.chapter,
      verse: state.verse,
    };

    switch (state.resource) {
      case Resource.Bible:
        return path !== this.bible.prevChapter(path);
      case Resource.Commentary:
        return path !== this.commentary.prev(path);
      case Resource.Appendix:
        return path.book !== this.appendix.prev(path.book);
    }
  }

  next() {
    let path: BiblePath = {
      book: state.book || 'Genesis',
      chapter: state.chapter || 1,
    };

    switch (state.resource) {
      case Resource.Bible:
        path = this.bible.nextChapter(path);
        state.book = path.book;
        state.chapter = path.chapter;
        window.scrollTo(0, 0);
        return;
      case Resource.Commentary:
        path.verse = state.verse;
        path = this.commentary.next(path);
        state.book = path.book;
        state.chapter = path.chapter;
        state.verse = path.verse;
        window.scrollTo(0, 0);
        return;
      case Resource.Appendix:
        state.book = this.appendix.next(path.book);
        window.scrollTo(0, 0);
        return;
    }
  }

  prev() {
    let path: BiblePath = {
      book: state.book || 'Revelation',
      chapter: state.chapter || 22,
    };

    const scrollTarget = document.body.scrollHeight;

    switch (state.resource) {
      case Resource.Bible:
        path = this.bible.prevChapter(path);
        state.book = path.book;
        state.chapter = path.chapter;
        window.scrollTo(0, scrollTarget);
        return;
      case Resource.Commentary:
        path.verse = state.verse;
        path = this.commentary.prev(path);
        state.book = path.book;
        state.chapter = path.chapter;
        state.verse = path.verse;
        window.scrollTo(0, scrollTarget);
        return;
      case Resource.Appendix:
        state.book = this.appendix.prev(path.book);
        window.scrollTo(0, scrollTarget);
        return;
    }
  }

  render() {
    if (!this.bible || !this.commentary || !this.appendix)
      return (
        <Host>
          {this.bible ? (
            <ion-title>Bible Loaded!</ion-title>
          ) : (
            Bible.onReady().then(b => (this.bible = b)) && [<ion-title>Loading Bible...</ion-title>, <ion-progress-bar type="indeterminate" />]
          )}
          {this.commentary ? (
            <ion-title>Commentary Loaded!</ion-title>
          ) : (
            Commentary.onReady().then(c => (this.commentary = c)) && [<ion-title>Loading Commentary...</ion-title>, <ion-progress-bar type="indeterminate" />]
          )}
          {this.appendix ? (
            <ion-title>Appendices Loaded!</ion-title>
          ) : (
            Appendices.onReady().then(a => (this.appendix = a)) && [<ion-title>Loading Appendices...</ion-title>, <ion-progress-bar type="indeterminate" />]
          )}
        </Host>
      );

    if (state.showOptions)
      return (
        <Host>
          <option-screen />
        </Host>
      );
    switch (state.resource) {
      case Resource.Bible:
        return (
          <Host>
            <ion-buttons slot="start" class="flexbase">
              <ion-button disabled={!this.hasPrev()} onClick={() => this.prev()}>
                <ion-icon name="arrow-back-outline" />
              </ion-button>
              <ion-title class="title">
                {state.book} {state.chapter}
              </ion-title>
              <ion-button disabled={!this.hasNext()} onClick={() => this.next()}>
                <ion-icon name="arrow-forward-outline" />
              </ion-button>
            </ion-buttons>
            <chapter-view bible={this.bible} />
            <ion-buttons slot="start" class="flexbase">
              <ion-button disabled={!this.hasPrev()} onClick={() => this.prev()}>
                <ion-icon name="arrow-back-outline" />
              </ion-button>
              <ion-button disabled={!this.hasNext()} onClick={() => this.next()}>
                <ion-icon name="arrow-forward-outline" />
              </ion-button>
            </ion-buttons>
          </Host>
        );
      case Resource.Appendix:
        return (
          <Host>
            <ion-buttons slot="start" class="flexbase">
              <ion-button disabled={!this.hasPrev()} onClick={() => this.prev()}>
                <ion-icon name="arrow-back-outline" />
              </ion-button>
              <ion-button disabled={!this.hasNext()} onClick={() => this.next()}>
                <ion-icon name="arrow-forward-outline" />
              </ion-button>
            </ion-buttons>
            <appendix-view appendix={this.appendix} />
            <ion-buttons slot="start" class="flexbase">
              <ion-button disabled={!this.hasPrev()} onClick={() => this.prev()}>
                <ion-icon name="arrow-back-outline" />
              </ion-button>
              <ion-button disabled={!this.hasNext()} onClick={() => this.next()}>
                <ion-icon name="arrow-forward-outline" />
              </ion-button>
            </ion-buttons>
          </Host>
        );
      case Resource.Commentary:
        return (
          <Host>
            <ion-buttons slot="start" class="flexbase">
              <ion-button disabled={!this.hasPrev()} onClick={() => this.prev()}>
                <ion-icon name="arrow-back-outline" />
              </ion-button>
              <ion-title class="title">
                Commentary for
                <br />
                {state.book} {state.chapter}
                {state.verse && `:${state.verse}`}
              </ion-title>
              <ion-button disabled={!this.hasNext()} onClick={() => this.next()}>
                <ion-icon name="arrow-forward-outline" />
              </ion-button>
            </ion-buttons>
            <commentary-view commentary={this.commentary} />
            <ion-buttons slot="start" class="flexbase">
              <ion-button disabled={!this.hasPrev()} onClick={() => this.prev()}>
                <ion-icon name="arrow-back-outline" />
              </ion-button>
              <ion-button onClick={() => this.next()}>
                <ion-icon name="arrow-forward-outline" />
              </ion-button>
            </ion-buttons>
          </Host>
        );
      default:
        return (
          <Host>
            <ion-title class="title"> Select resource.</ion-title>
            <ion-list>
              <ion-item>
                <ion-button onClick={() => (state.resource = Resource.Bible)}>Bible</ion-button>
              </ion-item>
              <ion-item>
                <ion-button onClick={() => (state.resource = Resource.Commentary)}>Commentary</ion-button>
              </ion-item>
              <ion-item>
                <ion-button onClick={() => (state.resource = Resource.Appendix)}>Appendices</ion-button>
              </ion-item>
            </ion-list>
          </Host>
        );
    }
  }
}
