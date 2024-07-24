import { View, Text, Image, ImageSourcePropType } from 'react-native'
import {getTimeAgoFormat} from '@/helpers/getTimeAgoFormat';
import { IUser } from '@/interfaces/user.interface';

const UserMainData = ({user}: {user: IUser}) => {
    const userFacts = [
        {title: 'Joined', value: user.createdAt && getTimeAgoFormat(user.createdAt)},
        {title: 'Interests', value: user.interests?.length},
        {title: 'Exercises', value: user.completedExerciseSets?.length},
    ];

  return (
    <View className='pb-8'>
      <View className='w-[90%] mx-auto  mt-20 border-[0.2px] rounded-md flex justify-between relative'>
        <View className='absolute flex items-center self-center justify-center w-24 h-24 mx-auto bg-gray-300 rounded-full -top-12'>
          <Image className='w-[75%] h-[75%]' source={require('../../assets/images/duck-logo.png') as ImageSourcePropType} />
        </View>
        <View className='self-center pb-5 my-auto pt-14'>
            <Text className='text-2xl font-semibold text-center text-white'>
              {user.name}
            </Text>
            <View className='flex flex-row items-baseline'>
            <Image className='w-6 h-6' source={require('../../assets/icons/city.png') as ImageSourcePropType} />
            {user.city && <Text className='self-center ml-2 text-lg font-semibold text-blue-300'>
              {user.city}
            </Text>}
          </View>
        </View>
        <View className='flex flex-row items-stretch self-end w-full border-t-4 border-blue-900'>
          {userFacts?.map((userFact) => <View key={userFact.title} className={`items-center flex-1 h-16 pt-2 border-blue-900 ${userFacts.indexOf(userFact) !== userFacts.length - 1 && 'border-r-4'}`}>
            <Text className='text-xl font-bold text-gray-300'>
              {userFact.title}
            </Text>
            <Text className='text-lg font-semibold text-blue-300'>
              {userFact.value}
            </Text>
        </View>)}
        </View>
      </View>
    </View>
  )
}

export default UserMainData