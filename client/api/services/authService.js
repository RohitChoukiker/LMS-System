import axiosInstance from "../axiosIntance";


export const registerService = async (formdata) => {
    const response = await axiosInstance.post('/auth/register', {
        ...formdata,
        role: 'user'
    }

    );
    return response.data;
}

export const login = async (credentials) => {
    const response = await axiosInstance.post('/auth/login', credentials);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
    }
    return response.data;
}

export const logout = () => {
    localStorage.removeItem('token');
}

