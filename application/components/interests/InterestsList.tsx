import { View } from 'react-native'
import {interests} from '@/constants/interests';
import InterestItem from './InterestItem';

const InterestsList = ({selectedInterests, handleInterest}: {selectedInterests: string[], handleInterest: (interest: string) => void}) => {
  
  return (
    <View className='flex flex-row flex-wrap'>
        {interests.map((interest) => <InterestItem key={interest} isSelected={selectedInterests.includes(interest)} interest={interest} handleInterest={handleInterest} />)}
    </View>
  )
}

export default InterestsList