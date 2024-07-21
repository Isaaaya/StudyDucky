import {  useEffect, useState } from "react"
import axios, {AxiosError} from 'axios';
import { BASE_URL } from "@/constants/base_url";
import {IExerciseSet} from '@/interfaces/exerciseSet.interface'

const useExerciseSet = (id: string) => {
const [exerciseSet, setExerciseSet] = useState<IExerciseSet>();
const [exerciseSetIsLoading, setExerciseSetIsLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
    const getExerciseSet = async () => {
        setExerciseSetIsLoading(true);
        try {
        const res = await axios(`${BASE_URL}/exercise-sets/${id}`);
        setExerciseSet(res.data);
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
              setErrorMessage(error.response?.data.msg);
            }
          }
        setExerciseSetIsLoading(false);
    };
    getExerciseSet();

    }, [id]);

    return {exerciseSet, exerciseSetIsLoading, errorMessage};
}

export default useExerciseSet