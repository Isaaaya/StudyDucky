import { View, ActivityIndicator } from 'react-native'

const ThemedActivityIndicator = () => {
  return (
    <View className='flex items-center justify-center bg-primary mt-[55%]'>
        <ActivityIndicator className='my-auto' size="large" />
      </View>
  )
}

export default ThemedActivityIndicator