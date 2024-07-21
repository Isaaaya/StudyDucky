import { View, Text } from 'react-native'
import UserAchievementItem from './UserAchievementItem';
import {useGetUserAchievements} from '@/hooks/index';
import { IUser } from '@/interfaces/user.interface';

const UserAchievementsList = ({user}: {user: IUser}) => {
const {achievements} = useGetUserAchievements(user);
  return (
    <View className='w-full p-6 mt-3 '>
      <View className='mx-auto space-y-1'>
          <Text className='text-2xl font-semibold text-white'>
            Achievements
          </Text>
          <View className='flex-row flex-wrap justify-between'>
              {achievements.map((achievement) =>    
              <UserAchievementItem key={achievement.title} achievement={achievement} />
              )}
          </View>
      </View>
    </View>
  )
}

export default UserAchievementsList