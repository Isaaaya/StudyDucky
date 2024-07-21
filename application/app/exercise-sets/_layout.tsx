import { Stack } from 'expo-router'
import ExerciseContextProvider from './context';

const ExercisesLayout = () => {
  return (
    <ExerciseContextProvider>
      <Stack>
        <Stack.Screen name='[id]' options={{headerShown: false}} />
        <Stack.Screen name='[id]/stats' options={{headerShown: false}} />
      </Stack>
    </ExerciseContextProvider>
  )
}

export default ExercisesLayout