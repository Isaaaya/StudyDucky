import { View, Text } from 'react-native'
import {Link} from 'expo-router';
import { IFlashcardSet } from '@/interfaces/flashcardSet.interface';

const CommonFlashcardSetLink = ({flashcardSet}: {flashcardSet: IFlashcardSet}) => {
  return (
    <View style={{backgroundColor: flashcardSet.bgColor ? flashcardSet.bgColor : '#00468b'}} className='h-[180px] mt-5 rounded-2xl px-10 py-7 w-full'>
      <Text className='text-2xl font-bold text-white'>
        {flashcardSet.title}
      </Text>
      <Text className='text-lg font-semibold text-white capitalize'>
        {flashcardSet.words[0].english}, {flashcardSet.words[1].english && flashcardSet.words[1].english}, etc.
      </Text>
      <View className='flex flex-row items-center justify-between'>
        <View  className='w-20 px-3 py-1 mt-2 bg-white rounded-full'>
          <Link style={{color: flashcardSet.bgColor ? flashcardSet.bgColor : '#000000'}} className='text-xl font-bold text-center' href={`/common-flashcard-sets/${flashcardSet._id}`}>
            Open
          </Link>
        </View>
        <Text className='-mb-2 text-[15px] font-semibold text-white'>
          {flashcardSet.words.length} {flashcardSet.words.length > 1 ? 'cards' : 'card'}
        </Text>
      </View>
    </View>
  )
}

export default CommonFlashcardSetLink