import ThemedTouchableOpacity from '../common/ThemedTouchableOpacity'

const InterestItem = ({interest, isSelected, handleInterest}: {interest: string, isSelected: boolean, handleInterest: (interest: string) => void}) => {
  
  return (
    <ThemedTouchableOpacity caption={interest} onPress={() => handleInterest(interest)} customStyles={`m-2 rounded-lg ${isSelected ? 'bg-blue-300' : 'bg-secondary'}`} textStyles='px-3 text-2xl text-[#663917] font-semibold'  />
  )
}

export default InterestItem