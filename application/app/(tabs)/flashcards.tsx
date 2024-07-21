import { ScrollView, View, Text, Image, ImageSourcePropType } from 'react-native'
import {Link} from 'expo-router';
import {CommonFlashcardSetLink, ThemedActivityIndicator} from '@/components/index'
import {flashcardLinks} from '@/constants/flashcards';
import {useGetCommonFlashcardSets} from '@/hooks/index';
import ThemedContainer from '@/components/common/ThemedContainer';

const FlashcardSets = () => {
  const {commonFlashcardSets, commonFlashcardsAreLoading} = useGetCommonFlashcardSets();

  return (
    <ThemedContainer customStyles='h-full'>
      <ScrollView className='w-[90%] mx-auto'>
          <Text className='my-5 text-4xl font-bold text-white'>
            Flashcard Sets
          </Text>
          <View className='flex flex-row gap-4'>
            {flashcardLinks.map((element) => <Link key={element.href} href={element.href}>
              <View className='w-[43vw] rounded-xl bg-white p-3 py-5'>
                <Image className='self-start w-9 h-9' source={element.icon as ImageSourcePropType} />
                <Text className='mt-2 text-xl font-semibold text-gray-700'>{element.text}</Text>
              </View>
            </Link>)}
          </View>
          {commonFlashcardsAreLoading ? 
          <ThemedActivityIndicator /> :  
          <View>
            {commonFlashcardSets.map((flashcardSet) => <CommonFlashcardSetLink flashcardSet={flashcardSet} key={flashcardSet._id} />)}
          </View>}
      </ScrollView>
    </ThemedContainer>
  )
}

export default FlashcardSets