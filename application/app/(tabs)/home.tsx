import { ScrollView } from 'react-native'
import {ExerciseSetsList, Header, ThemedContainer } from '@/components/index'

const Home = () => {
  return (
    <ThemedContainer customStyles='h-screen'>
        <Header /> 
        <ScrollView className='z-0'>
            <ExerciseSetsList />
        </ScrollView> 
    </ThemedContainer>
  )
}

export default Home