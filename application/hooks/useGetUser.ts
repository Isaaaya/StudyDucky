import { useEffect, useState } from "react"
import axios, {AxiosError} from 'axios';
import { BASE_URL } from "@/constants/base_url";
import { IUser } from "@/interfaces/user.interface";
import { Toast } from 'toastify-react-native'


const useGetUser = () => {
    const [user, setUser] = useState<IUser>({_id: '', name: '', email: '', city: '', interests: [], createdAt: new Date(), completedExerciseSets: [], favoriteFlashcards: []});
    const [userIsLoading, setUserIsLoading] = useState(false);

    useEffect(() => {
        const getUser = async() => {
            setUserIsLoading(true);
                try {
                    const res = await axios(`${BASE_URL}/user/get-user`);
                    if (res.data) {
                    setUser(res.data);
                    }
                  } catch (error: unknown) {
                       if (error instanceof AxiosError) {
                           Toast.error(error.response?.data.msg, 'top')
                       }
                } 
              setUserIsLoading(false);
          };
      
          getUser();
    }, [])

    return {user, userIsLoading};
}

export default useGetUser