import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import {useFavoriteFlashcard} from '@/hooks/index'
import { Toast } from 'toastify-react-native';
import { useEffect } from 'react';

const HandleFavoritesButton = ({flashcard}: {flashcard: {_id?: string, english: string, ukrainian: string}}) => {
  const {handleFavorites, isFavorite, errorMessage} = useFavoriteFlashcard(flashcard);

  useEffect(() => {
    if (errorMessage) Toast.error(errorMessage, 'top');
  }, [errorMessage])

  return (
    <TouchableOpacity className='absolute w-12 h-12 top-4 right-4' onPress={handleFavorites}>
        <Image className='w-full h-full' source={isFavorite ? require('@/assets/icons/star.png') as ImageSourcePropType : require('@/assets/icons/outline-star.png') as ImageSourcePropType}  />
    </TouchableOpacity>
  )
}

export default HandleFavoritesButton