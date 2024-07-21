import {useState} from 'react'
import axios, {AxiosError} from 'axios';
import { BASE_URL } from '@/constants/base_url';
import {IFlashcardSet} from '@/interfaces/flashcardSet.interface'

const useCreateCustomFlashcardSet = () => {
    const [flashcardsSet, setFlashcardsSet] = useState<IFlashcardSet>({ title: '', words: []});
    const [wordsSet, setWordsSet] = useState<{ english: string, ukrainian: string  }>({ english: '', ukrainian: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const create = async() => {
      setIsLoading(true);
        try {
          const res = await axios.post(`${BASE_URL}/flashcard-sets/create`, { title: flashcardsSet.title, words: flashcardsSet.words});
          setFlashcardsSet({ title: '', words: []});
          return res.data.msg;
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
            setErrorMessage(error?.response?.data.msg);
            }
       }
        setIsLoading(false);
    };

    const add = () => {
        setFlashcardsSet({...flashcardsSet, words: [...flashcardsSet.words, wordsSet]});
        setWordsSet({ english: '', ukrainian: ''});
      }
    
      const remove = (english: string, ukrainian: string) => {
        setFlashcardsSet({...flashcardsSet, words: flashcardsSet.words.filter((element) => element.english !== english && element.ukrainian !== ukrainian)})
      }

      return {add, remove, create, flashcardsSet, setFlashcardsSet, wordsSet, setWordsSet, isLoading, errorMessage};
}

export default useCreateCustomFlashcardSet