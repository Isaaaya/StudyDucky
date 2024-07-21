import { useEffect, useState } from "react"
import axios, {AxiosError} from 'axios'
import { BASE_URL } from '@/constants/base_url'
import useGetUser from "../useGetUser";

const useFavoriteFlashcards = () => {
    const [favoriteFlashcards, setFavoriteFlashcards] = useState<[{_id: string, english: string, ukrainian: string}] | []>([]);
    const [favoriteFlashcardsAreLoading, setFavoriteFlashcardsAreLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {user} = useGetUser();

    useEffect(() => {
        const getFavoriteFlashcards = async() => {
            setFavoriteFlashcardsAreLoading(true);
            if (user._id) {
                try {
                    const res = await axios.get(`${BASE_URL}/user/get-favorite-flashcards`);
                    setFavoriteFlashcards(res.data);
                } catch (error: unknown) {
                    if (error instanceof AxiosError) {
                       setErrorMessage(error?.response?.data.msg);}
                    else setErrorMessage('Unexpected error');
                 }
            }
            setFavoriteFlashcardsAreLoading(false);
        };
        getFavoriteFlashcards();
    }, [user._id])

    return {favoriteFlashcards, favoriteFlashcardsAreLoading, errorMessage};
}

export default useFavoriteFlashcards