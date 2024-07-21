import { ScrollView, Text, TouchableOpacity, Image,  ImageSourcePropType} from 'react-native'

const CustomFlashcardPreviewCard = ({wordsSet, remove}: {wordsSet: { english: string, ukrainian: string  }, remove: (english: string, ukrainian: string) => void}) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }} horizontal className='pb-2 mt-5 border-b-2 border-blue-900/50'>
        <Text className='mr-5 text-lg font-semibold text-white'>
            {wordsSet.english}
        </Text>
        <Text className='text-lg font-semibold text-white'>
            {wordsSet.ukrainian}
        </Text>
        <TouchableOpacity className='self-center' onPress={() => remove(wordsSet.english, wordsSet.ukrainian)}>
            <Image className='w-6 h-6 mx-2' source={require('@/assets/icons/cancel.png') as ImageSourcePropType} />
        </TouchableOpacity>
    </ScrollView>
  )
}

export default CustomFlashcardPreviewCard