import { useState, useEffect } from "react";
import axios, {AxiosError} from 'axios';
import { BASE_URL } from "@/constants/base_url";
import { IPost } from '@/interfaces/post.interface';

const useGetPost = (id: string) => {
  const [post, setPost] = useState<IPost>({_id: '', title: '', contentEnglish: '', contentUkrainian: '', linkBgColor: ''});
  const [postIsLoading, setPostIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const getPosts = async() => {
      setPostIsLoading(true);
        try {
            const res = await axios(`${BASE_URL}/posts/${id}`);
            setPost(res.data);
        } catch (error: unknown) {
          if (error instanceof AxiosError) {
            setErrorMessage(error.response?.data.msg);
          }
        }
        setPostIsLoading(false);
    };
    getPosts();
  }, []);

  return {post, postIsLoading, errorMessage};
}

export default useGetPost