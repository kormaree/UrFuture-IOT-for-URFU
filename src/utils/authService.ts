let authInstance: ReturnType<typeof createAuthService> | null = null;
import api from "../api/client";

function createAuthService() {
    const getAccessToken = () => localStorage.getItem('access');
    const getRefreshToken = () => localStorage.getItem('refresh');
    const storeTokens = (t: { access: string; refresh: string }) => {
        localStorage.setItem('access',  t.access);
        localStorage.setItem('refresh', t.refresh);
    };
    const clearTokens = () => {
        localStorage.removeItem('access');
        localStorage.removeItem('refresh');
    };

    const login = async (email: string, password: string) => {
        const resp = await api.post('/login/', { email, password });
        const tokens = resp.data as { access: string; refresh: string };
        storeTokens(tokens);
        return tokens;
    };

    const register = async (data: any) => {
        const resp = await api.post('/register/', data);
        return resp.data;
    };

    const refreshTokens = async (): Promise<{ access: string; refresh: string }> => {
        const oldRefresh = getRefreshToken();
        const resp = await api.post('/token/refresh/', { refresh: oldRefresh });
        const { access, refresh } = resp.data as { access: string; refresh?: string };
        localStorage.setItem('access', access);
        if (refresh) {
            localStorage.setItem('refresh', refresh);
        }
        return { access: access, refresh: refresh || oldRefresh! };
    };

    const logout = () => { clearTokens(); return true; };

    return { login, register, refreshTokens, logout, getAccessToken, getRefreshToken };
}

export const authService = authInstance || (authInstance = createAuthService());