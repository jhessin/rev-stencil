export interface iData<T> {
  data: T[];
}

export interface iSerializeData<T> {
  data: T[];
  updated: Date;
}

export enum Resource {
  Bible = 'Bible',
  Appendix = 'Appendix',
  Commentary = 'Commentary',
}

export class Asynclock {
  disable = () => {};
  promise = Promise.resolve();

  enable() {
    this.promise = new Promise(resolve => (this.disable = resolve));
  }
}

export interface BiblePath {
  book: string;
  chapter: number;
  verse?: number;
  resource?: Resource;
}

export function stripStyle(verse: string): string {
  verse = verse?.replace(/\[hpbegin\]/g, ' ');
  verse = verse?.replace(/\[hpend\]/g, ' ');
  verse = verse?.replace(/\[hp\]/g, ' ');

  verse = verse?.replace(/\[listbegin\]/g, ' ');
  verse = verse?.replace(/\[listend\]/g, ' ');
  verse = verse?.replace(/\[li\]/g, ' ');

  verse = verse?.replace(/\[lb\]/g, ' ');
  verse = verse?.replace(/\[br\]/g, ' ');
  verse = verse?.replace(/\[fn\]/g, ' ');
  verse = verse?.replace(/\[pg\]/g, ' ');
  verse = verse?.replace(/\[bq\]/g, ' ');
  verse = verse?.replace(/\[\/bq\]/g, ' ');

  // FINALLY replace the brackets for questionable text.
  verse = verse?.replace(/\[\[/g, '<em class="questionable">');
  verse = verse?.replace(/\]\]/g, '</em>');
  verse = verse?.replace(/\[/g, '<em>');
  verse = verse?.replace(/\]/g, '</em>');

  return verse;
}

export function DaysSince(date: Date): number {
  const now: number = Date.now();
  const since = now - date.getTime();
  return since / (1000 * 60 * 60 * 24);
}
