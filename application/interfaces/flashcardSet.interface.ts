export interface IFlashcardSet {
    _id?: string,
    title: string,
    bgColor?: string,
    words: {english: string, ukrainian: string, _id?: string}[];
  }