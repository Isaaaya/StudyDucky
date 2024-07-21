import {useState, useEffect} from 'react'
import axios, {AxiosError} from 'axios';
import { BASE_URL } from '@/constants/base_url';
import { IFlashcardSet } from '@/interfaces/flashcardSet.interface';
import { Toast } from 'toastify-react-native'

const useGetCommonFlashcardSets = () => {
 const [commonFlashcardSets, setCommonFlashcardSets] = useState<[IFlashcardSet] | []>([]);
 const [commonFlashcardsAreLoading, setCommonFlashcardsAreLoading] = useState(false);

useEffect(() => {
  
  const getCommonFlashcardSets = async() => {
    setCommonFlashcardsAreLoading(true); 
    try {
      const res = await axios(`${BASE_URL}/flashcard-sets`);
      setCommonFlashcardSets(res.data);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
         Toast.error(error?.response?.data.msg, 'top');
        }
   }
    setCommonFlashcardsAreLoading(false);
  }
  
  getCommonFlashcardSets();
}, [])

    return {commonFlashcardSets, commonFlashcardsAreLoading};

}

export default useGetCommonFlashcardSets