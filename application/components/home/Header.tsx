import { View, Text, Image, ImageSourcePropType, TouchableWithoutFeedback } from 'react-native'
import {useEffect, useState} from 'react'
import Tooltip from '@/components/modals/Tooltip'

const Header = () => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useEffect(() => {
    if (tooltipVisible) setTimeout(() => {
      setTooltipVisible(false);
    }, 2000);
  }, [tooltipVisible])

  return (
    <TouchableWithoutFeedback onPress={() => setTooltipVisible(true)}>
      <View className='bg-[#01255b] h-[5vh] shadow-md z-50'>
        <View className='relative flex flex-row items-center justify-between h-full px-3'>
          <Image className='mx-1 w-9 h-9' source={require('@/assets/icons/ukraine-flag.png') as ImageSourcePropType} alt='Ukraine icons created by Freepik - Flaticon</a>' />
          <View className='flex flex-row items-center self-center justify-center h-full'>
            <Text className='text-lg font-semibold text-blue-200'>
              Ukrainian
            </Text>
            <Image className='mx-1 w-7 h-7' source={require('@/assets/icons/swap-arrows.png') as ImageSourcePropType} />
            <Text className='text-lg font-semibold text-blue-200'>
              English
            </Text>
          </View>
          <Image className='mx-1 w-9 h-9' source={require('@/assets/icons/united-kingdom-flag.png') as ImageSourcePropType} alt='United kingdom icons created by Freepik - Flaticon</a>' />
        </View>
        {tooltipVisible && <Tooltip text='New languages available soon...' />}
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Header