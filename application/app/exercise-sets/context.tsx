import { useState, createContext, ReactNode} from 'react';
import { useLocalSearchParams, router } from 'expo-router'
import {useExerciseSet, useAddExerciseToCompleted} from '@/hooks/index';
import { IExerciseContext } from '@/interfaces/exerciseContext.interface';
import { Toast } from 'toastify-react-native';

export const ExerciseContext = createContext<IExerciseContext>({});

const ExerciseContextProvider = ({children}: {children: ReactNode}) => {
    const { id } = useLocalSearchParams();
    const [userAnswer, setUserAnswer] = useState('');
    const [isUserAnswerChecked, setIsUserAnswerChecked] = useState(false);
    const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState<boolean>();
    
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const {exerciseSet, exerciseSetIsLoading, errorMessage: exerciseSetErrorMessage} = useExerciseSet(id as string);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const {addExerciseSetToCompleted, errorMessage: addExerciseSetToCompletedErrorMessage} = useAddExerciseToCompleted(id as string);
  
    const increaseIndex = () => {
      const isLastExercise = exerciseIndex + 1 === exerciseSet?.exercises?.length;
      if (isLastExercise) {
        if (addExerciseSetToCompletedErrorMessage){
          Toast.error(addExerciseSetToCompletedErrorMessage, 'top');
        } else {
          addExerciseSetToCompleted();
          router.push(`/exercise-sets/${id}/stats`);
          setExerciseIndex(0);
        } 
    }
      else setExerciseIndex((prev) => prev + 1);
    }
  
    const checkUserInput = (userAnswer: string, correctAnswer: string) => {
      if (userAnswer.toLowerCase().trim() === correctAnswer.toLowerCase().trim()) {
        setIsUserAnswerCorrect(true)
        setCorrectAnswers((prev) => prev + 1);
    }
      else setIsUserAnswerCorrect(false);
      setIsUserAnswerChecked(true);
  }
  
  const onAnswer = (userAnswer: string, correctAnswer: string) => {
    if (isUserAnswerChecked) {
      setUserAnswer('');
      setIsUserAnswerChecked(false);
      increaseIndex();
    }
    else checkUserInput(userAnswer, correctAnswer);
  }
  return (
    <ExerciseContext.Provider value={{exerciseSet, exerciseSetIsLoading, exerciseSetErrorMessage, exerciseIndex, increaseIndex, isUserAnswerChecked, isUserAnswerCorrect, userAnswer, setUserAnswer, onAnswer, correctAnswers, mistakes: exerciseSet?.exercises && exerciseSet?.exercises?.length - correctAnswers}}>
      {children}
    </ExerciseContext.Provider>
  )
}

export default ExerciseContextProvider