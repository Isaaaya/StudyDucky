import { Text, Modal, ScrollView } from 'react-native'
import {useState} from 'react'
import Markdown from 'react-native-markdown-display';
import {markdownStyles} from '@/constants/markdownStyles'
import ThemedActivityIndicator from '@/components/common/ThemedActivityIndicator';
import ThemedContainer from '@/components/common/ThemedContainer';
import ThemedTouchableOpacity from '../common/ThemedTouchableOpacity';

const ExerciseTipModal = ({ tip, exerciseSetIsLoading}: {tip?: string, exerciseSetIsLoading: boolean}) => {
  const [modalVisible, setModalVisible] = useState(true);
  
  return (
    <Modal visible={modalVisible}>
      <ThemedContainer customStyles='h-full'>
        <ScrollView className='w-[92%] py-5 mx-auto'>
            {exerciseSetIsLoading ? 
            <ThemedActivityIndicator /> :
             <>
              <Text className='text-3xl font-semibold text-blue-300'>
                Some tips
              </Text>
              <Markdown style={markdownStyles}>
                {tip ? tip : ''}
              </Markdown>
              <ThemedTouchableOpacity caption='Understood' onPress={() => setModalVisible(false)} customStyles='border-2 border-white bg-blue-400 w-[180px] py-2 rounded-lg mx-auto my-5 mb-14' textStyles='text-2xl font-semibold text-white' />
            </>}
        </ScrollView>
      </ThemedContainer>
    </Modal>
  )
}

export default ExerciseTipModal

