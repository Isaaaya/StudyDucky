import axios, { AxiosError } from 'axios';
import { BASE_URL } from '@/constants/base_url';
import { useState } from 'react';

const useDeleteCustomFlashcardSet = (customFlashcardSetId: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

    const deleteCustomFlashcardSet = async() => {
      setIsLoading(true);
        try {
            await axios.post(`${BASE_URL}/flashcard-sets/delete`, { customFlashcardSetId });
          } catch (error: unknown) {
            if (error instanceof AxiosError) {
              setErrorMessage(error.response?.data.msg);
            }
          }
        setIsLoading(false);
    }

    return { deleteCustomFlashcardSet, isLoading, errorMessage};
}

export default useDeleteCustomFlashcardSet