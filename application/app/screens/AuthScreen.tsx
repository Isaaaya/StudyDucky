import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Link, router } from 'expo-router';
import {FormField, ThemedTouchableOpacity} from '@/components/index';
import { IAuthScreen } from '@/interfaces/authScreen.interface';
import ThemedContainer from '@/components/common/ThemedContainer';

const AuthScreen = ({user, setUser, authType, handleAuth, isAuthLoading, errorMessage, mainText}: IAuthScreen) => {
  
  return (
    <ThemedContainer customStyles='relative h-full'>
      <ScrollView className='mx-auto w-[95%]'>
        <KeyboardAvoidingView className='space-y-8' behavior='position' keyboardVerticalOffset={50}>
            <Text className='mt-20 text-5xl font-black text-center text-white'>
              Welcome!
            </Text>
            <Text className={`text-xl font-semibold text-center ${errorMessage ? 'text-red-400' : 'text-white'} `}>
              {errorMessage ? errorMessage : mainText}
            </Text>
          <View className='w-[95%] mx-auto space-y-2'>
            <View className='mb-2'>
              {Object.getOwnPropertyNames(user).map((entry) => <FormField isError={!!errorMessage} key={entry} type={entry} handleChangeText={(value: string) => {setUser({...user, [entry]: value})}} />)}
            </View>
            <ThemedTouchableOpacity onPress={handleAuth} isLoading={isAuthLoading} isError={!!errorMessage} caption={authType.split('-').join(' ')} customStyles='bg-secondary h-14' textStyles='font-semibold text-[22px] capitalize text-white'  />
            <Text className='text-lg font-semibold text-white'>
              {authType === 'sign-in' ? 'Don`t have an account yet?' : 'Already have an account?'}
              {' '}
              <Link replace className='text-[#7c85d8] font-semibold' href={`/auth/${authType === 'sign-in' ? 'sign-up' : 'sign-in'}`}>
                {authType === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
            </Text> 
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </ThemedContainer>  
  )
}

export default AuthScreen