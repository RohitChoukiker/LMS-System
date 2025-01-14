import axiosInstance from "../axiosIntance";

export const register = async (user) => {
    const response = await axiosInstance.post('/auth/register', user);
    return response.data;
}

export const login = async (loginData) => {
    try{
        const response = await axiosInstance.post('/auth/login', loginData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const logout = async () => {
    localStorage.removeItem('token');
}