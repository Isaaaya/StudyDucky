import { ScrollView } from 'react-native'
import Markdown from 'react-native-markdown-display';
import { useLocalSearchParams } from 'expo-router';
import {useGetPost} from '@/hooks/index';
import {markdownStyles} from '@/constants/markdownStyles'
import {ThemedActivityIndicator, ThemedTouchableOpacity, ThemedContainer } from '@/components/index';
import ErrorScreen from '../screens/ErrorScreen';
import { useState } from 'react';

const Post = () => {
    const {id} = useLocalSearchParams();
    const {post, postIsLoading, errorMessage} = useGetPost(id as string);
    const [language, setLanguage] = useState<'english' | 'ukrainian'>('english');

    if (!post._id && !postIsLoading && errorMessage) return <ErrorScreen errorMessage={errorMessage} />
    
    else return (
    <ThemedContainer customStyles='pt-2 pb-5 h-full'>
         <ThemedTouchableOpacity onPress={() => setLanguage((prev) => prev === 'english' ? 'ukrainian' : 'english'  )} caption={language === 'english' ? 'UKR' : 'ENG'} customStyles='self-end px-5 py-1 bg-white border-4 border-blue-300 rounded-lg my-2 mr-3' textStyles='font-semibold text-lg'  />
        <ScrollView className='w-[92%] mx-auto'>
            {postIsLoading ? 
            <ThemedActivityIndicator /> :
            <Markdown style={markdownStyles}>
                {language === 'english' ? post.contentEnglish : post.contentUkrainian}
            </Markdown>}
        </ScrollView>
    </ThemedContainer>
  )
}

export default Post