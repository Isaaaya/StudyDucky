import { View, Text } from 'react-native'
import {Link} from 'expo-router';
import { IPost } from '@/interfaces/post.interface';

const PostLink = ({post}: {post: IPost}) => {
  return (
    <Link className='w-full pb-4' href={`/posts/${post._id}`}>   
        <View style={{backgroundColor: post.linkBgColor}} className='flex justify-center w-[90vw] h-24 px-5 rounded-xl shadow-xl'>
            <Text className='w-full text-2xl font-bold text-white'>
              {post.title}
            </Text>
        </View>
    </Link>
  )
}

export default PostLink