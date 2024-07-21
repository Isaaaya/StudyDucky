import { View, Text, TextInput, Image, ImageSourcePropType } from 'react-native'
import { useContext } from 'react'
import AnswerButton from '../AnswerButton';
import {ExerciseContext} from '@/app/exercise-sets/context'
import { ITranslateExercise } from '@/interfaces/translateExercise.interface'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';

const TranslateExercise = ({exercise}: {exercise: ITranslateExercise}) => {
    const {isUserAnswerChecked, isUserAnswerCorrect, userAnswer,  setUserAnswer, onAnswer} = useContext(ExerciseContext);
    const {wordForTranslation, correctAnswer} = exercise;
    
  return (
    <View>
        <Text className='text-2xl font-semibold text-white'>
          Translate the phrase or word
        </Text>
        <Image className='w-[250px] h-[250px] self-center mb-5' source={require('@/assets/images/translate-duck.gif') as ImageSourcePropType} />
        <View className='overflow-hidden border-4 rounded-xl border-secondary'>
          <Text className='py-2 text-2xl font-bold text-center capitalize bg-white'>
            {capitalizeFirstLetter(isUserAnswerChecked ? correctAnswer! : wordForTranslation!)}
          </Text>
        </View>
        <TextInput editable={isUserAnswerChecked ? false : true} className={`px-2 py-3 mt-4 mb-3 text-xl text-white font-semibold border-2 rounded-lg border-white bg-[#202b53] ${isUserAnswerChecked && (isUserAnswerCorrect ? 'border-green-400' : 'border-red-400')}`} onChangeText={(value: string) => setUserAnswer!(value)} value={userAnswer} />
        <AnswerButton isUserAnswerCorrect={isUserAnswerCorrect} isUserInputChecked={isUserAnswerChecked!} onPress={() => onAnswer!(userAnswer!, correctAnswer!)} />
    </View>
  )
}

export default TranslateExercise