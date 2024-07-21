import { FlatList, View, Dimensions } from 'react-native';
import Flashcard from '@/components/flashcardSets/Flashcard';
import ThemedActivityIndicator from '@/components/common/ThemedActivityIndicator'
import ThemedContainer from '@/components/common/ThemedContainer';
import SilentModeWarning from '@/components/common/SilentModeWarning'
import { useState } from 'react';
import { IFlashcardSet } from '@/interfaces/flashcardSet.interface';
import CustomProgressBar from '@/components/common/CustomProgressBar';
const { width } = Dimensions.get('screen');

const FlashcardScreen = ({flashcardSet, flashcardSetIsLoading}: {flashcardSet: IFlashcardSet | null, flashcardSetIsLoading: boolean}) => {
    const [viewableItemIndex, setViewableItemIndex] = useState(0);

    const onViewableItemsChanged = ({ viewableItems }: any) => {
        setViewableItemIndex(viewableItems[0].index);
    }

  return (
    <ThemedContainer customStyles='h-full'>
        {flashcardSetIsLoading ? 
        <ThemedActivityIndicator /> : 
        <>
          <View className='w-[90%] mx-auto'>
            <SilentModeWarning />
          </View>
          <View className='mt-5'>
            <CustomProgressBar progress={(1 / (flashcardSet!.words.length || 1)) * (viewableItemIndex + 1)} />
          </View>
          <FlatList
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
            data={flashcardSet?.words}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            keyExtractor={(item) => item._id || ''}
            renderItem={({item}) => {
            return (
              <View className='flex items-center justify-center mt-10 mb-[60px]' style={{width}}> 
                <Flashcard flashcard={item} />
              </View>
            )
          }} />
        </>} 
      </ThemedContainer>
  )
}

export default FlashcardScreen