import { View, ActivityIndicator } from 'react-native'

const ThemedActivityIndicator = () => {
  return (
    <View className='flex items-center bg-primary mt-[95%]'>
        <ActivityIndicator className='my-auto' size="large" />
      </View>
  )
}

export default ThemedActivityIndicator