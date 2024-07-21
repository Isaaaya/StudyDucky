import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import {useSpeech} from '@/hooks/index';

const VoiceOver = ({thingToSay}: {thingToSay: string}) => {
    const speak = useSpeech(thingToSay);

  return (
    <TouchableOpacity onPress={speak}>
      <Image className='w-full h-full' source={require('@/assets/icons/speaker.png') as ImageSourcePropType} />
    </TouchableOpacity>
  )
}

export default VoiceOver