import { View, Text, Image, ImageSourcePropType , KeyboardAvoidingView, ScrollView} from 'react-native'
import {useContext} from 'react'
import {ExerciseTipModal, ThemedContainer} from '@/components/index';
import { Link } from 'expo-router';
import {ExerciseContext} from './context'
import ErrorScreen from '../screens/ErrorScreen';
import ExerciseScreen from '../screens/ExerciseScreen';
import CustomProgressBar from '@/components/common/CustomProgressBar';

const ExerciseSet = () => {
  const {exerciseSet, exerciseIndex, exerciseSetIsLoading, errorMessage} = useContext(ExerciseContext);
 
  if (!exerciseSet && errorMessage) return <ErrorScreen errorMessage={errorMessage} />

  else return (
    <>
    <ExerciseTipModal exerciseSetIsLoading={exerciseSetIsLoading!} tip={exerciseSet?.tip} />
    <ThemedContainer customStyles='relative p-5 h-full'>
      <ScrollView className='w-[90%] mx-auto'>
      <KeyboardAvoidingView className='mb-8' behavior='position' keyboardVerticalOffset={70}>
        <Text className='py-3 text-2xl font-semibold text-white'>
          {exerciseSet?.title}
        </Text>
        <View className='flex flex-row items-center pb-7'>
          <Link replace href='/home'>
            <Image className='mr-4 -mt-1 h-9 w-9' source={require('@/assets/icons/cancel.png') as ImageSourcePropType} />
          </Link>
          <CustomProgressBar progress={(1 / (exerciseSet && exerciseSet?.exercises!.length || 1)) * (exerciseIndex! + 1)} />
        </View>
        {exerciseSet && <ExerciseScreen exerciseIndex={exerciseIndex!} exerciseSet={exerciseSet} type={exerciseSet?.exercises![exerciseIndex!].type!} />}
      </KeyboardAvoidingView>
      </ScrollView>
    </ThemedContainer>
    
    </>
  )
}

export default ExerciseSet