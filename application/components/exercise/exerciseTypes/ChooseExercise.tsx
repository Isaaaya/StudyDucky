import { View, Text } from 'react-native'
import { useContext} from 'react'
import AnswerButton from '../AnswerButton';
import {useSpeech} from '@/hooks/index';
import {ExerciseContext} from '@/app/exercise-sets/context'
import {IChooseExercise} from '@/interfaces/chooseExercise.interface';
import ThemedTouchableOpacity from '@/components/common/ThemedTouchableOpacity';
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';

  const ChooseExercise = ({exercise}: {exercise: IChooseExercise}) => {
  const {isUserAnswerChecked, isUserAnswerCorrect, userAnswer,  setUserAnswer, onAnswer} = useContext(ExerciseContext);
  const {wordForTranslation, correctAnswer, answerOptions} = exercise;

    const pick = (element: string) => {
      const speak = useSpeech(element);
      speak();
      if (!isUserAnswerChecked) {
          setUserAnswer!(element);
      } else return;  
    };

    const onPress = () => {
     if (onAnswer && userAnswer && correctAnswer) onAnswer(userAnswer, correctAnswer)
    }

  return (
    <View className='flex items-center'>
      <Text className='self-start text-2xl font-semibold text-white'>
        Choose correct answer
      </Text>
      <View className='border w-full h-[230px] rounded-xl bg-white flex items-center justify-center mt-2'>
        <Text className='text-2xl font-bold capitalize'>
          {capitalizeFirstLetter(wordForTranslation!)}
        </Text>
      </View>
      <View className='flex flex-row flex-wrap justify-center w-full gap-3 mx-auto my-3'>
        {answerOptions?.map((answerOption) => {
        const isAnswerChosen = userAnswer === answerOption;
        
        const answerStatusStyles = `${userAnswer === answerOption && 'bg-blue-300 border-blue-500 border-2'} ${isUserAnswerChecked && (isAnswerChosen && 'bg-green-400 border-green-600')}  ${isUserAnswerChecked && (isAnswerChosen && !isUserAnswerCorrect && 'bg-red-400 border-red-600')}`

        return <ThemedTouchableOpacity key={answerOption} caption={capitalizeFirstLetter(answerOption)} onPress={() => pick(answerOption)} customStyles={`w-[45%] bg-white rounded-xl m-1 border-b-4 border-blue-300 ${answerStatusStyles}`} textStyles='py-4 text-2xl font-bold text-center' />
      })}
      </View>
     <AnswerButton onPress={onPress} isUserAnswerCorrect={isUserAnswerCorrect} isUserInputChecked={isUserAnswerChecked!} />
    </View>
  )
}

export default ChooseExercise