import { View } from 'react-native'

const CustomProgressBar = ({progress}: {progress: number}) => {
  return (
    <View className='w-[80%] mx-auto p-[3px] h-[18px] bg-white rounded-2xl'>
     <View style={{width: `${progress * 100}%`}} className='h-full bg-secondary rounded-2xl' />
    </View>
  )
}

export default CustomProgressBar