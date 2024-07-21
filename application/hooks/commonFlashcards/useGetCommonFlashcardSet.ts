import { useEffect, useState } from "react"
import axios, {AxiosError} from 'axios'
import { BASE_URL } from '@/constants/base_url'
import { IFlashcardSet } from "@/interfaces/flashcardSet.interface"

const useGetCommonFlashcardSet = (id: string) => {
    const [flashcardSet, setFlashcardSet] = useState<IFlashcardSet | null>(null);
    const [flashcardSetIsLoading, setFlashcardSetIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
      const getCommonFlashcardSet = async() => {
        setFlashcardSetIsLoading(true);
        try {
          const res = await axios(`${BASE_URL}/flashcard-sets/${id}`);
          setFlashcardSet(res.data);
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
            setErrorMessage(error?.response?.data.msg);
            }
       }
        setFlashcardSetIsLoading(false);
      }

      getCommonFlashcardSet();
    }, []);

    return {flashcardSet, flashcardSetIsLoading, errorMessage};
}

export default useGetCommonFlashcardSet