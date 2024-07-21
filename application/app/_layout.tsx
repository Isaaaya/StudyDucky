import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import ToastManager from 'toastify-react-native'
import {AuthProvider,} from './context/AuthContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Rubik: require('../assets/fonts/Rubik.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  };

  const screens = ["index", "auth", "(tabs)", "exercise-sets"];

  return (
    <AuthProvider>
     <ToastManager />
     <Stack>  
        {screens.map((screen) => <Stack.Screen key={screen} name={screen} options={{ headerShown: false }} />)}
      </Stack>
    </AuthProvider>  
  );
}
