

import { createContext, useContext, useState } from "react";
import { authAPI } from "../../../api/services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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

    const register = async (userData) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authAPI.register(userData);
            setUser(response.user);
            return response;
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    const login = async (credentials) => {
        setLoading(true);
        setError(null);
        try {
            const response = await authAPI.login(credentials);
            setUser(response.user);
            return response;
        } catch (err) {
            setError(err.response?.data?.message || 'Login failed');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    const logout = async () => {
        setLoading(true);
        setError(null);
        try {
            await authAPI.logout();
            setUser(null);
        } catch (err) {
            setError(err.response?.data?.message || 'Logout failed');
            throw err;
        } finally {
            setLoading(false);
        }
    }

    const value = {
        user,
        loading,
        error,
        register,
        login,
        logout
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>    

    
}

export const useAuth = () => {
    return useContext(AuthContext);
}