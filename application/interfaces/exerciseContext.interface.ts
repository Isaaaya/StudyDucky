import { IExerciseSet } from "./exerciseSet.interface"

export interface IExerciseContext {
    exerciseSet?: IExerciseSet, 
    exerciseSetIsLoading?: boolean, 
    exerciseIndex?: number, 
    increaseIndex?: () => void, 
    isUserAnswerChecked?: boolean, 
    isUserAnswerCorrect?: boolean, 
    userAnswer?: string, 
    setUserAnswer?: (prev: string) => void, 
    onAnswer?: (userAnswer: string, correctAnswer: string) => void, 
    correctAnswers?: number, 
    mistakes?: number,
    errorMessage?: string,
    exerciseSetErrorMessage?: string,
  }
  