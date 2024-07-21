import { View, Text, Image, ImageSourcePropType } from 'react-native'
import {interestsIcons} from '@/assets/interestsIcons/index';

const UserInterestItem = ({userInterest, itemColor}: {userInterest: string, itemColor: string}) => {
  const interest = userInterest.toLowerCase().split(" ").join('');
  const iconSource = interestsIcons[interest];

  return (
    <View style={{backgroundColor: itemColor}} className='w-[28vw] aspect-square mr-3 flex justify-center items-center rounded-xl space-y-1'>
      <Image className='w-10 h-10' source={iconSource as ImageSourcePropType} />
      <Text className='text-lg font-bold text-white'>
        {userInterest}
      </Text>
    </View>
  )
}

export default UserInterestItem