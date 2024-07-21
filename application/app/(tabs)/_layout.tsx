import { View, Image, ImageSourcePropType } from 'react-native'
import {Tabs} from 'expo-router';
import { tabs } from '@/constants/tabs';

const TabsLayout = () => {
 const screenOptions = {
    tabBarStyle:{
      backgroundColor:'#011f4b',
      height: 95,
      borderTopWidth: -1,
    },
    tabBarShowLabel: false,
  };

  return (
    <View className='flex justify-start h-full'>
      <Tabs screenOptions={screenOptions}>
        {tabs.map((tab) => (
          <Tabs.Screen key={tab?.name} name={tab?.name} options={{
            tabBarIcon: () => <Image className='w-[72px] h-[72px]' source={tab.icon as ImageSourcePropType} />
        }} />
        ))}
      </Tabs>
    </View>
  )
}

export default TabsLayout