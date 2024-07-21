import { SafeAreaView } from 'react-native'

const ThemedContainer = ({children, customStyles}: {children: any, customStyles?: string}) => {
  return (
    <SafeAreaView className={`bg-primary w-full ${customStyles}`}>
      {children}
    </SafeAreaView>
  )
}

export default ThemedContainer