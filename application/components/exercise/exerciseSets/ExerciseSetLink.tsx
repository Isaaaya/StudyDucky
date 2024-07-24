import { View, Image, Text, TouchableOpacity } from 'react-native'
import { router } from 'expo-router';
import { IExerciseSet } from '@/interfaces/exerciseSet.interface';

const ExerciseSetLink = ({index, exerciseSet, isCompleted, isAvailable}: {index: number, exerciseSet: IExerciseSet, isCompleted: boolean, isAvailable: boolean}) => {

    const completedLinkStyles = 'bg-[#449e48]';
    const availableLinkStyles = 'bg-secondary';
    const unavailableLinkStyles = 'bg-[#eeeeee]/50';

    const onPress = () => {
        if (isCompleted || isAvailable) router.replace(`/exercise-sets/${exerciseSet._id}`);
        else return;
    }
    
    return (
        <TouchableOpacity className={`${index % 2 !== 0 ? 'self-end' : 'self-start'}`} onPress={onPress}>
            <View className='flex flex-col'>
                <View className={`p-[4px] border-[5px] rounded-full ${isCompleted && isAvailable ? 'border-[#397b3c]' : isAvailable ? 'border-[#f3992a]' : 'border-gray-500' }`}>
                    <View className={`flex items-center justify-center w-30 h-30 rounded-full ${isCompleted && isAvailable ? completedLinkStyles : isAvailable ? availableLinkStyles : unavailableLinkStyles}`}>
                        <Image style={{opacity: isAvailable ? 1 : 0.7 }} className='w-28 h-28' source={{uri: exerciseSet.icon}} />
                    </View>
                </View>
                <Text className='mt-1 text-lg font-bold text-center text-blue-300 capitalize'>
                    {exerciseSet.title}
                </Text>
            </View>
        </TouchableOpacity>
  )
}

export default ExerciseSetLink