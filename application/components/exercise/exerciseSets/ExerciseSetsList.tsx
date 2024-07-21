import { View } from 'react-native';
import {useExerciseSets, useGetUser} from '@/hooks/index';
import ThemedActivityIndicator from '@/components/common/ThemedActivityIndicator';
import ExerciseSetLink from './ExerciseSetLink';
import ArrowPointer from './ArrowPointer';

const ExerciseSetsList = () => {
  const {user, userIsLoading} = useGetUser();
  const {exerciseSets} = useExerciseSets();

  return (
    <View className='flex h-full w-[80%] mx-auto justify-between pt-12 pb-56 space-y-10'>
        {userIsLoading ? 
        <ThemedActivityIndicator /> : 
        <>
          {exerciseSets.map((exerciseSet, index) => <View key={index}>
            <ExerciseSetLink isAvailable={user.completedExerciseSets?.length! > index - 1} isCompleted={user.completedExerciseSets?.length! >= index + 1} exerciseSet={exerciseSet} index={index} />
            {user.completedExerciseSets?.length === index + 1 && <ArrowPointer index={index} />}
          </View>)}
        </>}
    </View>
  )
}

export default ExerciseSetsList