import { IUser } from "./user.interface";

export interface IAuthScreen {
    user: IUser,
    setUser: (user: any) => void,
    authType: 'sign-in' | 'sign-up',
    handleAuth: () => Promise<any>,
    isAuthLoading: boolean,
    errorMessage: string, mainText: string,
}