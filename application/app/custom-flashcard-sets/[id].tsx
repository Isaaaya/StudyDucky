import { useLocalSearchParams } from 'expo-router';
import {useGetCustomFlashcardSet} from '@/hooks/index';
import ErrorScreen from '../screens/ErrorScreen';
import FlashcardScreen from '../screens/FlashcardScreen';

const CustomFlashcardSet = () => {
  const {id} = useLocalSearchParams();
  const {customFlashcardSet} = useGetCustomFlashcardSet(id as string);
  
  return (
    !customFlashcardSet ? 
    <ErrorScreen errorMessage={''} /> : 
    <FlashcardScreen flashcardSet={customFlashcardSet} flashcardSetIsLoading={false} />
  )
};

export default CustomFlashcardSet