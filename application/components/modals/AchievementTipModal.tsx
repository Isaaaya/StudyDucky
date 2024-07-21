import { View, Text, Modal } from 'react-native'
import ThemedTouchableOpacity from '../common/ThemedTouchableOpacity'

const AchievementTipModal = ({visible, tooltip, setTooltipVisible}: {visible: boolean, tooltip: string, setTooltipVisible: (value: boolean) => void}) => {
    
  return (
    <Modal visible={visible} transparent>
        <View className='w-full h-full bg-black/30'>
            <View className='flex items-center w-[80%] m-auto bg-white p-5 rounded-xl border-4 border-blue-400 space-y-4'>
                <Text className='text-xl font-semibold text-blue-500'>
                    {tooltip}
                </Text>
                <ThemedTouchableOpacity caption='Got it' onPress={() => setTooltipVisible(false)} customStyles='py-2 rounded-lg bg-sky-600 px-7' textStyles='text-2xl font-semibold text-white' />
            </View>
        </View>
    </Modal>
  )
}

export default AchievementTipModal