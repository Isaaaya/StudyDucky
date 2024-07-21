import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import AuthScreen from '../screens/AuthScreen'
import { router } from 'expo-router';

const SignIn = () => {
  const [user, setUser] = useState({email: '', password: ''});
  const { signIn, isLoading, errorMessage} = useContext(AuthContext);

  const handleAuth =  async() => {
    if (signIn) {
     const token = await signIn(user);
      if (token) router.replace('/home')
}}

  return (
    <AuthScreen user={user} setUser={setUser} handleAuth={handleAuth} authType='sign-in' errorMessage={errorMessage || ''} isAuthLoading={isLoading || false} mainText='Get back to study and rejoin the community right now!' />
  )
}

export default SignIn