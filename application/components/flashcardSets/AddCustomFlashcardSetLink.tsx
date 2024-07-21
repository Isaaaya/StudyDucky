import { View, Text, Image, ImageSourcePropType } from 'react-native'
import { Link } from 'expo-router';

const AddCustomFlashcardSetLink = () => {
  return (
    <View className='bg-white rounded-xl w-full h-[150px] mt-12 flex items-center justify-center border-2 border-secondary'>
      <Link replace href='/custom-flashcard-sets/create'>
          <Image className='w-12 h-12' source={require('@/assets/icons/add.png') as ImageSourcePropType} />
      </Link>
      <Text className='mt-1 text-2xl font-bold text-gray-700'>
        New set
      </Text>
    </View>
  )
}

export default AddCustomFlashcardSetLink