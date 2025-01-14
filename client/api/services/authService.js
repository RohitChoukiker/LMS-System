import axiosInstance from "../axiosIntance";


export const register = async (userData) => {
    const response = await axiosInstance.post('/auth/register', userData);
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

// export const authAPI = {
//     signup: async (userData) => {
//         const response = await axiosInstance.post('/auth/register', userData);
//         return response.data;
//     },
//     signin: async (credentials) => {
//         const response = await axiosInstance.post('/auth/login', credentials);
//         if (response.data.token) {
//             localStorage.setItem('token', response.data.token);
//         }
//         return response.data;
//     },
   
//     logout: async () => {
//         localStorage.removeItem('token');
//     }
// }