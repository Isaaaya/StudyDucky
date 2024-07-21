import { View, Text, TouchableOpacity, Image, ImageSourcePropType, ScrollView } from 'react-native'
import {FormField, CustomFlashcardPreviewCard, ThemedTouchableOpacity, ThemedContainer} from '@/components/index';
import {useCreateCustomFlashcardSet} from '@/hooks/index'
import {router} from 'expo-router';

const CreateCustomFlashcardSet = () => {
  const {add, remove, create, flashcardsSet, setFlashcardsSet, wordsSet, setWordsSet, isLoading, errorMessage} = useCreateCustomFlashcardSet();

  const handleCreate = async () => {
    const isCreated = await create();
    if (isCreated) router.replace('/custom-flashcard-sets');
  }
  
  return (
    <ThemedContainer customStyles='h-full'>
      <ScrollView>
        <View className='w-[90%] mx-auto py-10'>
          <Text className='mb-1 text-2xl font-semibold text-white'>
            Add new set
          </Text>
          <Text className='h-10 mb-3 text-xl font-semibold text-red-400'>{errorMessage ? errorMessage : ''}</Text>
          <FormField type='title' handleChangeText={(value: string) => setFlashcardsSet({...flashcardsSet, title: value})} />
          <View className='flex flex-row items-center justify-between w-full'>
            {[{language: 'english', word: wordsSet.english}, {language: 'ukrainian', word:wordsSet.ukrainian}].map((element) => 
              <FormField 
                key={element.language} 
                type={element.language} 
                handleChangeText={(value: string) => setWordsSet({...wordsSet, [element.language]: value.trim()})}
                value={element.word} 
                additionalStyles='w-[40vw] mr-3' />
              )}
              <TouchableOpacity onPress={add}>
                <Image className='w-6 h-6 mt-5' source={require('@/assets/icons/add.png') as ImageSourcePropType} />
              </TouchableOpacity>
          </View>
          {flashcardsSet?.words?.map((wordsSet, index) => <CustomFlashcardPreviewCard key={wordsSet.english + index} wordsSet={wordsSet} remove={remove} />)}
        </View>
        <ThemedTouchableOpacity caption='Create' onPress={handleCreate} isLoading={isLoading} isError={!!errorMessage} customStyles='bg-secondary w-[90%] mx-auto h-14' textStyles='font-semibold text-2xl text-primary' />
      </ScrollView>
    </ThemedContainer>
  )
}

export default CreateCustomFlashcardSet