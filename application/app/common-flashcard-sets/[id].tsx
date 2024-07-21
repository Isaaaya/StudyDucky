import { useLocalSearchParams } from 'expo-router';
import {useGetCommonFlashcardSet} from '@/hooks/index';
import ErrorScreen from '../screens/ErrorScreen';
import FlashcardScreen from '../screens/FlashcardScreen';

const FlashcardSet = () => {
  const {id} = useLocalSearchParams();
  const {flashcardSet, flashcardSetIsLoading, errorMessage} = useGetCommonFlashcardSet(id as string);

     return ( 
      (!flashcardSet && !flashcardSetIsLoading) ? 
        <ErrorScreen errorMessage={errorMessage} /> : 
        <FlashcardScreen flashcardSet={flashcardSet} flashcardSetIsLoading={flashcardSetIsLoading} />
      )
    };

    export default FlashcardSet