import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { useEffect } from 'react'
import {Link} from 'expo-router';
import {useDeleteCustomFlashcardSet} from '@/hooks/index'
import {IFlashcardSet} from '@/interfaces/flashcardSet.interface'
import { Toast } from 'toastify-react-native';

const CustomFlashcardSetLink = ({customFlashcardSet, filterCustomFlashcardSets}: {
   customFlashcardSet: IFlashcardSet, 
   filterCustomFlashcardSets: (id: string) => void
  }) => {
   const {deleteCustomFlashcardSet, errorMessage} = useDeleteCustomFlashcardSet(customFlashcardSet._id!);

   useEffect(() => {
      if (errorMessage) Toast.error(errorMessage, 'top');
   }, [errorMessage])

  return (
    <View className='h-[180px] mt-5 rounded-2xl px-10 py-7 w-full bg-[#00468b]'>
      <TouchableOpacity disabled={false} className='absolute right-5 top-5' onPress={() => {
        filterCustomFlashcardSets(customFlashcardSet._id!);
        deleteCustomFlashcardSet();
        }}>
        <Image className='w-7 h-7' source={require('@/assets/icons/cancel.png') as ImageSourcePropType} />
      </TouchableOpacity>
      <Text className='text-2xl font-bold text-white'>
       {customFlashcardSet.title}
      </Text>
      <Text className='text-lg font-semibold text-white capitalize'>
       {customFlashcardSet.words[0].english}, etc.
      </Text>
      <View className='flex flex-row items-center justify-between'>
        <View  className='w-20 px-3 py-1 mt-2 bg-white rounded-full'>
          <Link className='text-xl font-bold text-center' href={`/custom-flashcard-sets/${customFlashcardSet._id}`}>
            Open
          </Link>
        </View>
        <Text className='-mb-2 text-[15px] font-semibold text-white'>
         {customFlashcardSet.words.length} {customFlashcardSet.words.length > 1 ? 'cards' : 'card'}
        </Text>
      </View>
    </View>
  )
}

export default CustomFlashcardSetLink