import axios from 'axios';
console.log('Server URL:', process.env.REACT_APP_SERVER);

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 500000,
    headers: {
        'Content-Type': 'application/json'
    }
});

// 토큰이 필요없는 API 경로들
const publicPaths = [
    '/api/user/signup',  // 회원가입
    '/api/user/login'    // 로그인
];

axiosInstance.interceptors.request.use(
    config => {
        // 회원가입, 로그인이 아닌 경우에만 토큰 추가
        if (!publicPaths.includes(config.url)) {
            const accessToken = sessionStorage.getItem('accessToken');
            if (accessToken) {
                config.headers['Authorization'] = `bearer ${accessToken}`;
            }
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