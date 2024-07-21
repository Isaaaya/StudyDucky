import { useState } from 'react';
import axios, {AxiosError} from 'axios';
import { BASE_URL } from "@/constants/base_url";

const useAddExerciseToCompleted = (exerciseId: string) => {
    const [errorMessage, setErrorMessage] = useState('');

    const addExerciseSetToCompleted = async () => {
            try {
                await axios.post(`${BASE_URL}/user/add-exercise-to-completed`, {exerciseId})
            } catch (error: unknown) {
                if (error instanceof AxiosError) {
                  setErrorMessage(error.response?.data.msg);
                }
              }
    }
    return {addExerciseSetToCompleted, errorMessage};
}

export default useAddExerciseToCompleted