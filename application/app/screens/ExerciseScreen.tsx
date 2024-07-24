import {ChooseExercise, ListenExercise, TranslateExercise} from '@/components/index';
import { IExerciseSet } from '@/interfaces/exerciseSet.interface';

const ExerciseScreen = ({type, exerciseSet, exerciseIndex}: {type: string, exerciseSet: IExerciseSet, exerciseIndex: number}) => {
  return (
    <>
      {type === 'translate' && <TranslateExercise exercise={exerciseSet?.exercises![exerciseIndex!]} />}
      
      {type === 'listen' && <ListenExercise exercise={exerciseSet?.exercises![exerciseIndex!]} />}

      {type === 'choose' && <ChooseExercise exercise={exerciseSet?.exercises![exerciseIndex!]}  />}
    </>
  )
}

export default ExerciseScreen