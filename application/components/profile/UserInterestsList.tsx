import {View, Text, ScrollView } from 'react-native'
import UserInterestItem from './UserInterestItem';
import { interestsColors } from '@/constants/interests';

const UserInterestsList = ({userInterests}: {userInterests: string[]}) => {
  return (
    <View className='space-y-1 w-[90%] mx-auto'>
      <Text className='text-2xl font-semibold text-white'>
        Interests
      </Text>
      <ScrollView horizontal>
        {userInterests.map((userInterest, index) => <UserInterestItem itemColor={`${interestsColors[index % interestsColors.length]}`} key={userInterest} userInterest={userInterest} />)}
      </ScrollView>
    </View>
  )
}

export default UserInterestsList