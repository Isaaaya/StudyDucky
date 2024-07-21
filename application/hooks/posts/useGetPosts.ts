import { useState, useEffect } from "react";
import axios from 'axios';
import { BASE_URL } from "@/constants/base_url";
import { IPost } from '@/interfaces/post.interface';

const useGetPosts = () => {
  const [posts, setPosts] = useState<IPost[]>([{_id: '', title: '', contentEnglish: '', contentUkrainian: '', linkBgColor: ''}]);
  const [postsAreLoading, setPostsAreLoading] = useState(false);

  useEffect(() => {
    const getPosts = async() => {
      setPostsAreLoading(true);
      const res = await axios(`${BASE_URL}/posts`);
      setPosts(res.data);
      setPostsAreLoading(false);
    };
    getPosts();
  }, []);

  return {posts, postsAreLoading};
}

export default useGetPosts