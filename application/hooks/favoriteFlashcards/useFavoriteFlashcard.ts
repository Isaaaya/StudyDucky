import {useState, useEffect} from 'react'
import axios, {AxiosError} from 'axios';
import { BASE_URL } from '@/constants/base_url';
import useGetUser from '@/hooks/useGetUser';
import { IFavoriteCard } from '@/interfaces/favoriteCard.interface';

const useFavoriteFlashcard = (flashcard: IFavoriteCard) => {
    const {user} = useGetUser();
    const {english, ukrainian} = flashcard;
    const [isFavorite, setIsFavorite] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
      const isInFavorites = user.favoriteFlashcards?.find((element) => element.english === flashcard.english);
      if (isInFavorites?._id) setIsFavorite(true);
      else setIsFavorite(false);
    }, [user.favoriteFlashcards]);

  
    const handleFavorites = async () => {
      if (isFavorite) setIsFavorite(false);
      else setIsFavorite(true);
      try {
        await axios.post(`${BASE_URL}/user/handle-favorite-flashcard`, {_id: user._id, english, ukrainian});
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
           setErrorMessage(error?.response?.data.msg);}
        else setErrorMessage('Unexpected error');
     }
    };
      return {handleFavorites, isFavorite, errorMessage};
}

export default useFavoriteFlashcard