import { View, ScrollView, Text } from 'react-native'
import {FavoriteFlashcard, ThemedActivityIndicator, SilentModeWarning} from '@/components/index'
import {useFavoriteFlashcards} from '@/hooks/index';
import { Toast } from 'toastify-react-native';
import { useEffect } from 'react';

const FavoriteFlashcards = () => {
    const {favoriteFlashcards, favoriteFlashcardsAreLoading, errorMessage} = useFavoriteFlashcards();

    useEffect(() => {
      if (errorMessage) Toast.error(errorMessage, 'top');
    }, [errorMessage])

  return (
    <ScrollView className='w-full h-full bg-primary'>
      {favoriteFlashcardsAreLoading ? 
      <ThemedActivityIndicator /> : 
      <>
        <SilentModeWarning />
        <View className='w-[85%] mx-auto pb-10'>
          {favoriteFlashcards.length > 0 ? 
          favoriteFlashcards.map((favoriteFlashcard) => <FavoriteFlashcard key={favoriteFlashcard._id} favoriteFlashcard={favoriteFlashcard} />) : 
          <Text className='mt-10 text-2xl font-semibold text-center text-white'>
            No favorite flashcards yet.
          </Text>}   
        </View>
      </>}
    </ScrollView>
  )
}

export default FavoriteFlashcards