import {  View, Text, TextInput } from 'react-native'

const FormField = ({type, handleChangeText, additionalStyles, value, isError }: {type: string, handleChangeText: (value: string) => void, additionalStyles?: string, value?: string, isError?: boolean}) => {

    return (
        <View className={'mb-3 space-y-1 ' + additionalStyles}>
            <Text className='text-xl font-semibold text-white capitalize'>
                {type}
            </Text>
            <TextInput value={value && value} className={`h-16 px-4 py-auto text-xl font-semibold text-white bg-[#202b53] rounded-xl ${isError && 'border-red-500 border'}`} onChangeText={handleChangeText}  />
        </View>
  )
}

export default FormField