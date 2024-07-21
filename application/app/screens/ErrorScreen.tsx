import { Text, SafeAreaView } from 'react-native'

const ErrorScreen = ({errorMessage = 'An error occurred.'}: {errorMessage: string}) => {
  return (
    <SafeAreaView>
      <Text>{errorMessage}</Text>
    </SafeAreaView>
  )
}

export default ErrorScreen