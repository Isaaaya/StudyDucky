import {  Text, View, Image, ImageSourcePropType } from 'react-native';
import { router, Redirect } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import ThemedContainer from '@/components/common/ThemedContainer';
import { ThemedTouchableOpacity } from '@/components';

export default function HomeScreen() {
  const {authState} = useContext(AuthContext);
  
  if (authState?.authenticated) return <Redirect href='/home' />

  const onPress = () => {
    router.replace('/auth/sign-in')
  };

  return (
    <ThemedContainer customStyles='flex items-center justify-center space-y-2 h-full'>
      <Image className='w-40 h-44' source={require('../assets/images/homescreen-logo-duck.gif') as ImageSourcePropType} />
      <View className='flex items-center gap-3'>
        <Text className='text-3xl font-black text-white'>
          StudyDucky
        </Text>
        <ThemedTouchableOpacity caption='Continue with Email' onPress={onPress} customStyles='px-6 py-2 rounded-lg bg-secondary mt-2' textStyles='text-2xl font-semibold' />
      </View>
    </ThemedContainer>
  );
};
