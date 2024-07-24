import { View, Text, TextInput, Image, ImageSourcePropType } from 'react-native'
import {useContext} from 'react'
import AnswerButton from '../AnswerButton';
import VoiceOver from '@/components/common/VoiceOver';
import {ExerciseContext} from '@/app/exercise-sets/context'
import {IListenExercise} from '@/interfaces/listenExercise.interface';
import SilentModeWarning from '@/components/common/SilentModeWarning';

const ListenExercise = ({exercise}: {exercise: IListenExercise}) => {
    const {isUserAnswerChecked, isUserAnswerCorrect, userAnswer,  setUserAnswer, onAnswer} = useContext(ExerciseContext);
    const {phraseParts, correctAnswer} = exercise;

  return (
    <View>
      <Text className='self-start text-2xl font-semibold text-white'>
        Listen and complete the phrase
      </Text>
      <SilentModeWarning />
      <Image className='w-[200px] h-[200px] self-center mb-10' source={require('@/assets/images/duck-with-headphones.gif') as ImageSourcePropType} />
      <View className='mb-2 overflow-hidden border-4 rounded-xl border-secondary'>
        <Text className='py-3 text-2xl font-semibold text-center bg-white'>
          {phraseParts?.part1}
           {isUserAnswerChecked ? <Text className={isUserAnswerChecked && (isUserAnswerCorrect ? 'text-green-400' : 'text-red-400')}> {correctAnswer} </Text> : ' _____ '}
          {phraseParts?.part2}.
        </Text>
      </View>
      <View className='flex flex-row items-center mb-5 space-x-3'>
        <View className='w-12 h-12 mt-5'>
          <VoiceOver thingToSay={phraseParts?.part1 + ' ' + correctAnswer + ' ' + phraseParts?.part2} />
        </View>
        <TextInput editable={isUserAnswerChecked ? false : true} className={`px-2 py-3 text-xl text-white border-2 rounded-lg border-white w-[82%] font-semibold bg-[#202b53] mt-5 ${isUserAnswerChecked && (isUserAnswerCorrect ? 'border-green-400' : 'border-red-400')}`} onChangeText={(value: string) => setUserAnswer!(value)} value={userAnswer} />
      </View>
      <AnswerButton isUserAnswerCorrect={isUserAnswerCorrect} isUserInputChecked={isUserAnswerChecked!} onPress={() => onAnswer!(userAnswer!, correctAnswer!)} />
    </View>
  )
}

export default ListenExercise