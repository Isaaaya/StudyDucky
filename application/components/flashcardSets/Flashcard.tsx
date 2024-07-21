import { IFavoriteCard } from '@/interfaces/favoriteCard.interface';
import { View, Text, Dimensions } from 'react-native'
import FlipCard from 'react-native-flip-card'
import VoiceOver from '@/components/common/VoiceOver'
import HandleFavoritesButton from './HandleFavoritesButton'
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
const { width } = Dimensions.get('screen');
const CARD_WIDTH = width * 0.8;
const CARD_HEIGHT = CARD_WIDTH * 1.45;

const Flashcard = ({flashcard}: {flashcard: IFavoriteCard}) => {

  return (
    <View style={{width: CARD_WIDTH, height: CARD_HEIGHT }}>
      <FlipCard flipHorizontal={true} flipVertical={false}>
        {[flashcard.english, flashcard.ukrainian].map((word, index) => {
          const isEnglishWord = index === 0;
          return (
          <View key={index} className='relative w-full h-full bg-white shadow-xl px-9 rounded-xl'>
            {isEnglishWord && <View className='absolute w-11 h-11 top-5 left-5'>
                <VoiceOver thingToSay={word} />
              </View>}
              <HandleFavoritesButton flashcard={flashcard} />
              <Text className='my-auto ml-2 text-2xl font-semibold text-center'>    
                {capitalizeFirstLetter(word)}
              </Text>
          </View>)
        })}
      </FlipCard>
    </View>
  )
}

export default Flashcard