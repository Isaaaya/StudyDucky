import {  useEffect, useState } from "react"
import axios, {AxiosError} from 'axios';
import { BASE_URL } from "@/constants/base_url";
import {IExerciseSet} from '@/interfaces/exerciseSet.interface'

const useExerciseSets = () => {
const [exerciseSets, setExerciseSets] = useState<IExerciseSet[] | []>([]);
const [exerciseSetsAreLoading, setExerciseSetsAreLoading] = useState(false);
const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const getExerciseSets = async () => {
            setExerciseSetsAreLoading(true);
            try {
            const res = await axios(`${BASE_URL}/exercise-sets`);
            setExerciseSets(res.data);
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                setErrorMessage(error.response?.data.msg);
                }
            }
            setExerciseSetsAreLoading(false);
        };
        getExerciseSets();
    }, []);

    return {exerciseSets, exerciseSetsAreLoading, errorMessage};
}

export default useExerciseSets