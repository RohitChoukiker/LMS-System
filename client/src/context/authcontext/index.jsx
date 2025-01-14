

import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    const checkUser = async () => {
        try {
            const token = localStorage.getItem('token');

            if (token) {
                const userData = await authAPI.getCurrentUser();
                setUser(userData);
            }
        } catch (err) {
            console.error('Auth check failed:', err);
        } finally {
            setLoading(false);
        }

    


    }



    const value = {
        user
        
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>    

    
}

export const useAuth = () => {
    return useContext(AuthContext);
}