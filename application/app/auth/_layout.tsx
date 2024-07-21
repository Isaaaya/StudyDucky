import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='sign-in' options={{headerShown: false}} />
      <Stack.Screen name='sign-up' options={{headerShown: false}} />
      <Stack.Screen name='interests' options={{headerShown: false}} />
    </Stack>
  )
}

export default AuthLayout