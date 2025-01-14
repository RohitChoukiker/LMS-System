
import axiosInstance from "../axiosIntance";

// User registration service
export const registerService = async (formdata) => {
    const response = await axiosInstance.post('/auth/register', {
        ...formdata,
        role: 'user', // Default role is user
    });
    return response.data;
};

// User login service
export const loginService = async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Store token in localStorage
    }
    return response.data;
};

// User logout service
export const logoutService = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
};

// Token validation service
