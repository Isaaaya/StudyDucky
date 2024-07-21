import { ScrollView } from 'react-native'
import {UserInterestsList, UserMainData, UserAchievementsList, ThemedActivityIndicator, ThemedTouchableOpacity, ThemedContainer } from '@/components/index';
import {useGetUser} from '@/hooks/index';
import {router} from 'expo-router'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
const {user, userIsLoading} = useGetUser();
const {signOut, errorMessage} = useContext(AuthContext);

const handleSignOut = () => {
  if (signOut) {
    signOut();
    router.replace('/auth/sign-in');
  } 
}

  return (
    <ThemedContainer customStyles='h-full'>
      <ScrollView>
        {userIsLoading ? 
        <ThemedActivityIndicator /> : 
          <>
            <UserMainData user={user} />
            {user.interests && <UserInterestsList userInterests={user.interests} />}
            <UserAchievementsList user={user} />
            <ThemedTouchableOpacity caption='Sign Out' onPress={handleSignOut} isError={!!errorMessage} customStyles='bg-red-100 w-[90%] mx-auto mb-5 rounded-lg border-red-500 border-2 py-3' textStyles='text-xl font-bold text-red-600'  />
          </>}
      </ScrollView>
    </ThemedContainer>
  )
}

export default Profile