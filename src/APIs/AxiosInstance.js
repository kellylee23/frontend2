import axios from 'axios';
console.log('Server URL:', process.env.REACT_APP_SERVER);

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 500000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosInstance.interceptors.request.use(
    config => {
        const accessToken = sessionStorage.getItem('accessToken');
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            sessionStorage.removeItem('accessToken');
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;