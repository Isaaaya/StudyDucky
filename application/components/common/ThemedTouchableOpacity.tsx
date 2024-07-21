import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'

const ThemedTouchableOpacity = ({caption, onPress, isLoading, isError, customStyles, textStyles}: {caption: string, onPress: () => void, isLoading?: boolean, isError?: boolean | null, customStyles?: string, textStyles?: string}) => {
  return (
    <TouchableOpacity onPress={onPress} style={isError && { backgroundColor: '#C41E3A' }} className={'flex items-center justify-center py-3 rounded-lg ' + customStyles} disabled={isLoading}>
    {isLoading ? 
        <ActivityIndicator size='small' /> : 
        <Text className={textStyles}>
            {caption}
        </Text>}
    </TouchableOpacity>
  )
}

export default ThemedTouchableOpacity