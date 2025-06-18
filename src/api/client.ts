import axios from 'axios';
import { authService } from '../utils/authService';

const api = axios.create({
    baseURL: 'https://urfuture.tech/api/',
    headers: {
        'Content-Type': 'application/json'
     },
});

api.interceptors.request.use(config => {
    const token = authService?.getAccessToken();
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    res => res,
    async err => {
        if (err.response?.status === 401) {
        try {
            await authService?.refreshTokens();
            return api(err.config);
        } catch {
            authService?.logout();
            window.location.href = '/login';
        }
        }
        return Promise.reject(err);
    }
);

export default api;