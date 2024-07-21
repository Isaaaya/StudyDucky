import { useState } from 'react'
import axios, {AxiosError} from 'axios';
import { BASE_URL } from '@/constants/base_url';
import useGetUser from '@/hooks/useGetUser';
import { Toast } from 'toastify-react-native'

const useUserInterest = () => {
    const {user} = useGetUser();  
    const [selectedInterests, setSelectedInterests] = useState<Array<string>>([]);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleInterest = (interest: string) => {
      if (selectedInterests.includes(interest)) {
        setSelectedInterests(selectedInterests.filter((chosenInterest) => chosenInterest !== interest));
      } else setSelectedInterests((prev) => [...prev, interest])
    };
  
    const saveInterests = async (selectedInterests: string[]) => {
      setIsLoading(true);
      try {
         await axios.post(`${BASE_URL}/user/edit`, {_id: user._id, interests: selectedInterests});
       
      } catch (error: unknown) {
        if (error instanceof AxiosError) {
            Toast.error(error?.response?.data.msg, 'top')
        }
     }
      setIsLoading(false);
    };

    return {isLoading, handleInterest, saveInterests, selectedInterests}
}

export default useUserInterest