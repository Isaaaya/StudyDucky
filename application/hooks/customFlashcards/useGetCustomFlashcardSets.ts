import { useEffect, useState } from "react"
import axios, {AxiosError} from 'axios'
import { BASE_URL } from '@/constants/base_url'
import useGetUser from "../useGetUser"
import { IFlashcardSet } from "@/interfaces/flashcardSet.interface"

const useGetCustomFlashcardSets = () => {
    const [customFlashcardSets, setCustomFlashcardSets] = useState<IFlashcardSet[] | []>([]);
    const {user} = useGetUser();
    const [customFlashcardSetsAreLoading, setCustomFlashcardSetsAreLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const getCustomFlashcardSets = async() => {
            setCustomFlashcardSetsAreLoading(true);
            if (user._id) {
                try {
                    const res = await axios.get(`${BASE_URL}/user/get-custom-flashcard-sets`);
                    setCustomFlashcardSets(res.data);
                } catch (error: unknown) {
                    if (error instanceof AxiosError) {
                       setErrorMessage(error?.response?.data.msg);}
                    else setErrorMessage('Unexpected error');
                 }
            }
            setCustomFlashcardSetsAreLoading(false);
        };
        getCustomFlashcardSets();
    }, [user._id])

    return {customFlashcardSets, setCustomFlashcardSets, customFlashcardSetsAreLoading, errorMessage};
}

export default useGetCustomFlashcardSets