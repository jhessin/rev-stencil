/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Appendices, Bible, Font } from "./models";
export namespace Components {
    interface AppRoot {
    }
    interface AppendixView {
        "appendix": Appendices;
    }
    interface ChapterView {
        "bible": Bible;
    }
    interface CommentaryLink {
        "verse": number;
    }
    interface CommentaryView {
        "bible": Bible;
    }
    interface ContentView {
        "bible": Bible;
    }
    interface FontPicker {
    }
    interface OptionScreen {
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppendixViewElement extends Components.AppendixView, HTMLStencilElement {
    }
    var HTMLAppendixViewElement: {
        prototype: HTMLAppendixViewElement;
        new (): HTMLAppendixViewElement;
    };
    interface HTMLChapterViewElement extends Components.ChapterView, HTMLStencilElement {
    }
    var HTMLChapterViewElement: {
        prototype: HTMLChapterViewElement;
        new (): HTMLChapterViewElement;
    };
    interface HTMLCommentaryLinkElement extends Components.CommentaryLink, HTMLStencilElement {
    }
    var HTMLCommentaryLinkElement: {
        prototype: HTMLCommentaryLinkElement;
        new (): HTMLCommentaryLinkElement;
    };
    interface HTMLCommentaryViewElement extends Components.CommentaryView, HTMLStencilElement {
    }
    var HTMLCommentaryViewElement: {
        prototype: HTMLCommentaryViewElement;
        new (): HTMLCommentaryViewElement;
    };
    interface HTMLContentViewElement extends Components.ContentView, HTMLStencilElement {
    }
    var HTMLContentViewElement: {
        prototype: HTMLContentViewElement;
        new (): HTMLContentViewElement;
    };
    interface HTMLFontPickerElement extends Components.FontPicker, HTMLStencilElement {
    }
    var HTMLFontPickerElement: {
        prototype: HTMLFontPickerElement;
        new (): HTMLFontPickerElement;
    };
    interface HTMLOptionScreenElement extends Components.OptionScreen, HTMLStencilElement {
    }
    var HTMLOptionScreenElement: {
        prototype: HTMLOptionScreenElement;
        new (): HTMLOptionScreenElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "appendix-view": HTMLAppendixViewElement;
        "chapter-view": HTMLChapterViewElement;
        "commentary-link": HTMLCommentaryLinkElement;
        "commentary-view": HTMLCommentaryViewElement;
        "content-view": HTMLContentViewElement;
        "font-picker": HTMLFontPickerElement;
        "option-screen": HTMLOptionScreenElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface AppendixView {
        "appendix"?: Appendices;
    }
    interface ChapterView {
        "bible"?: Bible;
    }
    interface CommentaryLink {
        "verse"?: number;
    }
    interface CommentaryView {
        "bible"?: Bible;
    }
    interface ContentView {
        "bible"?: Bible;
    }
    interface FontPicker {
        "onFontChange"?: (event: CustomEvent<Font>) => void;
    }
    interface OptionScreen {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "appendix-view": AppendixView;
        "chapter-view": ChapterView;
        "commentary-link": CommentaryLink;
        "commentary-view": CommentaryView;
        "content-view": ContentView;
        "font-picker": FontPicker;
        "option-screen": OptionScreen;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "appendix-view": LocalJSX.AppendixView & JSXBase.HTMLAttributes<HTMLAppendixViewElement>;
            "chapter-view": LocalJSX.ChapterView & JSXBase.HTMLAttributes<HTMLChapterViewElement>;
            "commentary-link": LocalJSX.CommentaryLink & JSXBase.HTMLAttributes<HTMLCommentaryLinkElement>;
            "commentary-view": LocalJSX.CommentaryView & JSXBase.HTMLAttributes<HTMLCommentaryViewElement>;
            "content-view": LocalJSX.ContentView & JSXBase.HTMLAttributes<HTMLContentViewElement>;
            "font-picker": LocalJSX.FontPicker & JSXBase.HTMLAttributes<HTMLFontPickerElement>;
            "option-screen": LocalJSX.OptionScreen & JSXBase.HTMLAttributes<HTMLOptionScreenElement>;
        }
    }
}
