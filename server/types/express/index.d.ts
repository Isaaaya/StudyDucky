import express from "express";

declare global {
  namespace Express {
    interface Request {
      user?: Record<string, {
        _id?: string, 
        name?: string, 
        email: string, 
        city?: string, 
        interests?: string[], 
        createdAt?: Date, 
        completedExerciseSets?: string[] | [], 
        favoriteFlashcards?: IFavoriteCard[] | [];
        customFlashcardSets?: ICustomFlashcardSet[],
      }, null>
    }
  }
}