import { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import AuthScreen from '../screens/AuthScreen'
import { router } from 'expo-router';

const SignUp = () => {
  const [user, setUser] = useState({name: '', email: '', city: '', password: ''});
  const { signUp, isLoading, errorMessage} = useContext(AuthContext);

  const handleAuth =  async() => {
    if (signUp) {
     const token = await signUp(user);
      if (token) router.replace('/auth/interests')
}}

  return (
    <AuthScreen user={user} setUser={setUser} handleAuth={handleAuth} isAuthLoading={isLoading || false} authType='sign-up' errorMessage={errorMessage || ''} mainText='Get to study and join the community right now!' />
  )
}

export default SignUp