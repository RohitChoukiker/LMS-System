import axiosInstance from "../axiosIntance";




export const authAPI = {
    signup: async (userData) => {
        const response = await axiosInstance.post('/auth/register', userData);
        return response.data;
    },
    signin: async (credentials) => {
        const response = await axiosInstance.post('/auth/login', credentials);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return response.data;
    },
   
    logout: async () => {
        localStorage.removeItem('token');
    }
}