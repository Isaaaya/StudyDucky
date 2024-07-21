import { Text, ScrollView } from 'react-native'
import { AddCustomFlashcardSetLink, ThemedActivityIndicator, CustomFlashcardSetLink, ThemedContainer } from '@/components/index'
import {useGetCustomFlashcardSets} from '@/hooks/index'

const CustomFlashcardSets = () => {
const {customFlashcardSets, setCustomFlashcardSets, customFlashcardSetsAreLoading} = useGetCustomFlashcardSets();

const filterCustomFlashcardSets = (id: string) => {
  setCustomFlashcardSets(customFlashcardSets.filter((customFlashcardSet) => customFlashcardSet._id?.toString() !== id));
}

  return (
    <ThemedContainer customStyles='h-full'>
      {customFlashcardSetsAreLoading ? 
      <ThemedActivityIndicator /> : 
      <ScrollView className='w-[90%] mx-auto mb-10'>
        <AddCustomFlashcardSetLink />
        {customFlashcardSets.map((customFlashcardSet) => <CustomFlashcardSetLink 
        key={customFlashcardSet._id} 
        customFlashcardSet={customFlashcardSet} 
        filterCustomFlashcardSets={filterCustomFlashcardSets} />)}
        {customFlashcardSets.length < 1 && 
        <Text className='mx-auto mt-10 text-xl font-semibold text-white'>
          No custom flashcard sets found.
        </Text>}
      </ScrollView>}
    </ThemedContainer>
  )
}

export default CustomFlashcardSets