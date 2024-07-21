import * as Speech from 'expo-speech';

const useSpeech = (thingToSay: string) => {
 const speak = () => Speech.speak(thingToSay);

 return speak;
}

export default useSpeech