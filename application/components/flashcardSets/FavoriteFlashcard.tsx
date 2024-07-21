import { View, Text } from 'react-native'
import VoiceOver from '@/components/common/VoiceOver'
import HandleFavoritesButton from './HandleFavoritesButton'
import { IFavoriteCard } from '@/interfaces/favoriteCard.interface'

const FavoriteFlashcard = ({favoriteFlashcard}: {favoriteFlashcard: IFavoriteCard}) => {
  return (
    <View className='w-full p-6 mt-5 bg-white rounded-lg'>
      <View className='flex flex-row items-center gap-2'>
        <View className='self-end w-10 h-10'>
          <VoiceOver thingToSay={favoriteFlashcard.english} />
        </View>
        <Text className='self-start my-auto mb-1 text-2xl font-bold'>
          {favoriteFlashcard.english}
        </Text>    
      </View>
      <Text className='ml-12 text-xl font-semibold text-primary'>
        {favoriteFlashcard.ukrainian}
      </Text>  
      <HandleFavoritesButton flashcard={favoriteFlashcard} />
    </View>
  )
}

export default FavoriteFlashcard