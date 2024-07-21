import { View, Text, ScrollView } from 'react-native'
import {useGetPosts} from '@/hooks/index'
import {PostLink, ThemedActivityIndicator} from '@/components/index';
import ThemedContainer from '@/components/common/ThemedContainer';

const Grammar = () => {
  const {posts, postsAreLoading} = useGetPosts();

  return (
    <ThemedContainer customStyles='h-full'>
      <ScrollView className='w-[90%] mx-auto py-10'>
      <Text className='text-4xl font-semibold text-white'>
        Grammar Topics
      </Text>
      {postsAreLoading ? 
      <ThemedActivityIndicator /> : 
      <>
        <View className='pt-5'>
          {posts.map((post) => <PostLink key={post._id} post={post} />)}
        </View>
        <Text className='text-xl font-semibold text-center text-white'>
          More yet to come...
        </Text>
      </>} 
      </ScrollView>
    </ThemedContainer>
  )
}

export default Grammar