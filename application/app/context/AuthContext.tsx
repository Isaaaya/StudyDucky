import { useState, createContext, useEffect } from "react";
import axios, {AxiosError} from "axios";
import * as SecureStore from 'expo-secure-store'; 
import {IUser} from '@/interfaces/user.interface'
import {BASE_URL} from '../../constants/base_url';

interface IAuthContext {
    authState? : {token: string | null, authenticated: boolean | null},
    signIn?: (user: IUser) => Promise<any>,
    signUp?: (user: IUser) => Promise<any>,
    signOut?: () => Promise<any>,
    errorMessage?: string,
    isLoading?: boolean,
}

export const AuthContext = createContext<IAuthContext>({});

export const AuthProvider = ({children}: any) => {
    const [authState, setAuthState] = useState<{token: string | null, authenticated: boolean | null}>({token: null, authenticated: null});
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const loadToken = async () => {
            const token = await SecureStore.getItemAsync('TOKEN_KEY');
            if (token) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                setAuthState({token: token, authenticated: true})
            }
        };
        loadToken();
    }, []);


    const handleAuth = async(type: 'sign-in' | 'sign-up', user: IUser) => {
        setIsLoading(true);
        try {
           const res = await axios.post(`${BASE_URL}/auth/${type}`, user); 
           await SecureStore.setItemAsync('TOKEN_KEY', res.data.token);
           axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.token}`;

           setAuthState({token: res.data.token, authenticated: true});     
           setErrorMessage('');
         return res.data.token;
        } catch (error: unknown) {
           if (error instanceof AxiosError) {
            setErrorMessage(error.response?.data.msg);
        }
     }
        setIsLoading(false);
    };

    const signOut = async() => {
        setIsLoading(true);
            try {
                setAuthState({token: null, authenticated: false});
                await axios.post(`${BASE_URL}/auth/sign-out`);
                await SecureStore.deleteItemAsync('TOKEN_KEY');
                axios.defaults.headers.common['Authorization'] = '';
            } catch (error: unknown) {
               if (error instanceof AxiosError) {
                setErrorMessage(error.response?.data.msg);
            }
         }
        setIsLoading(false);
    };

    const value = {
        authState,
        signIn: handleAuth.bind(null, 'sign-in'),
        signUp: handleAuth.bind(null, 'sign-up'),
        signOut,
        errorMessage,
        isLoading
    };

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}