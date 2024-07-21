import { View, ScrollView, Text } from 'react-native'
import { Link, router } from 'expo-router';
import {InterestsList, ThemedContainer, ThemedTouchableOpacity} from '@/components/index';
import {useGetUser, useUserInterest} from '@/hooks/index';

const Interests = () => {
  const {user} = useGetUser();  
  const {isLoading, handleInterest, saveInterests, selectedInterests} = useUserInterest();

  const handleContinue = () => {
    saveInterests(selectedInterests);
    router.push('/home');
  }

  return (
    <ThemedContainer customStyles='h-full'>
      <ScrollView className='w-[90%] mx-auto'>
        <View className='mt-12 space-y-2'>
          <Text className='text-4xl font-semibold text-white'>
            Welcome, {user.name}!
          </Text>
          <Text className='text-xl font-semibold text-white'>
            Would you like to pick some interests?
          </Text>
          <Link replace className='mb-5 text-xl font-semibold text-secondary' href='/home'>
            Maybe later
          </Link>
        </View>
        <InterestsList selectedInterests={selectedInterests} handleInterest={handleInterest} />
        <ThemedTouchableOpacity caption='Continue' isLoading={isLoading} onPress={handleContinue} customStyles='bg-blue-300 mt-5' textStyles='text-3xl text-white font-semibold '  />
      </ScrollView>  
    </ThemedContainer>
  )
}

export default Interests