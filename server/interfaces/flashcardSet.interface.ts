export default interface IFlashcardSet {
    _id: string,
    title: string,
    words: {english: string, ukrainian: string}[];
  }