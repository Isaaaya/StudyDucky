import { View } from 'react-native'
import {ChooseExercise, ListenExercise, TranslateExercise} from '@/components/index';
import { IExerciseSet } from '@/interfaces/exerciseSet.interface';

const ExerciseScreen = ({type, exerciseSet, exerciseIndex}: {type: string, exerciseSet: IExerciseSet, exerciseIndex: number}) => {
  return (
    <View>
        {type === 'translate' && <TranslateExercise exercise={exerciseSet?.exercises![exerciseIndex!]} />}
        
        {type === 'listen' && <ListenExercise exercise={exerciseSet?.exercises![exerciseIndex!]} />}

        {type === 'choose' && <ChooseExercise exercise={exerciseSet?.exercises![exerciseIndex!]}  />}
  </View>
  )
}

export default ExerciseScreen