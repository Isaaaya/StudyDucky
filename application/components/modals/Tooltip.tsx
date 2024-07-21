import { View, Text } from 'react-native'

const Tooltip = ({text}: {text: string}) => {
  return (
    <View className='absolute z-30 self-center block p-3 bg-white border-4 border-blue-200 rounded-lg -bottom-14'>
        <View className='absolute self-center w-4 h-4 -mt-2 rotate-45 bg-white' />
        <Text className='text-[17px] font-bold text-blue-400'>
          {text}
        </Text>
    </View>
  )
}

export default Tooltip