import { View, Text, Image, TouchableWithoutFeedback, ImageSourcePropType } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import {useState} from 'react'
import AchievementTipModal from '@/components/modals/AchievementTipModal';

const UserAchievementItem = ({achievement}: {achievement: {title: string, icon: string, isAchieved: boolean, tooltip: string}}) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  
  return ( 
    <TouchableWithoutFeedback onPress={() => setTooltipVisible(true)}>
      <LinearGradient
            colors={achievement.isAchieved ? ['red', 'yellow', 'green' ] : []}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '47%',
              padding: 3,
              marginTop: 10,
              marginBottom: 5,
              borderRadius: 10,
            }}
          >
        <View className={`w-full rounded-md h-[220px] shadow-lg flex justify-start items-center pt-7 ${achievement.isAchieved ? 'bg-primary/80' : 'bg-gray-500/50'}`}>
          <Text className='self-center mb-2 text-xl font-bold text-white'>
            {achievement.title}
          </Text>
          <View className='flex items-center justify-center w-24 h-24 bg-white rounded-full'>
            <Image className='w-[80%] h-[80%]' style={{opacity: achievement.isAchieved ? 1 : 0.2 }} source={achievement.icon as ImageSourcePropType} />
          </View>
          {achievement.isAchieved && 
          <View className='bg-[#f3d323] mt-3 px-2 py-[3px] rounded'>
            <Text className='text-[16px] font-bold'>Completed</Text>
          </View>}
        </View>
        <AchievementTipModal tooltip={achievement.tooltip} visible={tooltipVisible} setTooltipVisible={setTooltipVisible} />
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

export default UserAchievementItem