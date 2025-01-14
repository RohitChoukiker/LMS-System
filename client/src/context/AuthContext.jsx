import { createContext, useContext, useState, useEffect } from 'react';
import { loginService, logoutService } from './../../api/services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          // You should add a verifyToken service to validate token with backend
          setIsAuthenticated(true);
          // Set user data if available
        }
      } catch (error) {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    verifyToken();
  }, []);

  const login = async (credentials) => {
    try {
      const data = await loginService(credentials);
      
      if (!data || !data.token) {
        throw new Error('Token not received from server');
      }

      localStorage.setItem('token', data.token);
      setUser(data.user || data); // Store user data depending on your API response structure
      setIsAuthenticated(true);
      console.log('Stored token:', data.token);
    } catch (error) {
      console.error('Login error:', error);
      setIsAuthenticated(false);
      throw error;
    }
  };

  const logout = () => {
    logoutService();
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
