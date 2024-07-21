import { Image, ImageSourcePropType } from 'react-native'

const ArrowPointer = ({index}: {index: number}) => {
  return (
    <Image className={`absolute -bottom-14 w-20 h-32 right-[125px] ${index % 2 === 0 ? 'rotate-140' : '-rotate-140'}`} source={require('@/assets/images/arrow.gif') as ImageSourcePropType} />
  )
}

export default ArrowPointer