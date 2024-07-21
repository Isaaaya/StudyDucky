import { IFavoriteCard } from "./favoriteCard.interface";
import { IFlashcardSet } from "./flashcardSet.interface";

export interface IUser {
    _id?: string, 
    name?: string, 
    email: string, 
    city?: string, 
    interests?: string[], 
    createdAt?: Date, 
    completedExerciseSets?: string[] | [], 
    favoriteFlashcards?: {
      _id: string, 
      english: string, 
      ukrainian: string
    }[] | [];
    customFlashcardSets?: {
      _id?: string,
      title: string,
      bgColor?: string,
      words: {english: string, ukrainian: string, _id: string}[];
    }[] | [],
  }