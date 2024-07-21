import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { useContext } from 'react'
import { CountUp } from 'use-count-up'
import {router} from 'expo-router';
import {ExerciseContext} from '../context'
import {ThemedContainer, ThemedTouchableOpacity} from '@/components/index'

const CompletedExerciseSetStats = () => {
  const {correctAnswers, mistakes} = useContext(ExerciseContext);
  
    return (
    <ThemedContainer customStyles='flex items-center justify-center h-full'>
      <Text className='text-4xl font-bold text-white'>
        Exercise completed!
      </Text>
      <View className='flex items-center justify-center w-52 h-52 border-4 border-dotted rounded-full border-secondary bg-[#202b53] my-10'>
        <Image className='w-32 h-32' source={require('@/assets/icons/trophy.png') as ImageSourcePropType} />
      </View>
      <View className='self-start ml-5 space-y-2'>
        <Text className='text-2xl font-semibold text-white'>
          Correct answers: <CountUp isCounting end={correctAnswers} />
        </Text>
        <Text className='text-2xl font-semibold text-red-400'>
          Mistakes: <CountUp isCounting end={mistakes} />
        </Text>
      </View>
      <ThemedTouchableOpacity caption='Got it' onPress={() => router.push('/home')} customStyles='px-10 py-2 rounded-lg mt-14 bg-secondary' textStyles='text-3xl font-semibold text-white' />
    </ThemedContainer>
  )
}

export default CompletedExerciseSetStats