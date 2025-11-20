import {createContext, type PropsWithChildren, useContext, useEffect, useState} from "react";


type AuthStatus = 'checking' | 'authenticated' | 'unauthenticated';

interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;
    isChecking: boolean;
    isAuthenticated?: boolean;
    login: (email:string, password:string) => void;
    logout: () => void;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({children}:PropsWithChildren) => {
    const [status, setStatus] = useState<AuthStatus>('checking');
    const [user, setUser] = useState<User>()

    useEffect(() => {
        setTimeout(() => {
            setStatus('unauthenticated');
        }, 1500);
    }, []);

    const login = (email:string, password:string) => {
        console.log({email, password});
        setUser({
                name: 'Jorge Alvarez',
                email: email,
            });
        setStatus('authenticated');
    }

    const logout = () => {
        setUser(undefined);
        setStatus('unauthenticated');
    }

    return (
        <AuthContext.Provider value={{
            status: status,
            user: user,

            //Getters
            isChecking: status === 'checking',
            isAuthenticated: status === 'authenticated',

            //Methods
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
}