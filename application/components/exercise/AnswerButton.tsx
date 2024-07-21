import ThemedTouchableOpacity from '../common/ThemedTouchableOpacity'

const AnswerButton = ({onPress, isUserInputChecked, isUserAnswerCorrect}: {onPress: () => void, isUserInputChecked: boolean, isUserAnswerCorrect?: boolean}) => {
  const answerStatusStyles = `${isUserInputChecked && (isUserAnswerCorrect ? 'bg-green-400 border-green-500' : 'bg-red-400 border-red-500')}`
  return (
    <ThemedTouchableOpacity caption={isUserInputChecked ? 'Next' : 'Answer'} onPress={onPress} customStyles={`border-4 bg-sky-400 border-sky-500 w-full py-2 rounded-lg self-center ${answerStatusStyles}`} textStyles='text-2xl font-semibold text-center text-white' />
  )
}

export default AnswerButton