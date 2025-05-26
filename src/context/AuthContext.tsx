import { createContext, useState, useEffect } from 'react';
import { authService } from '../utils/authService';
import api from '../api/client';

interface AuthContextValue {
    user: any;
    login: (e: string, p: string) => Promise<void>;
    register: (d: any) => Promise<void>;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
        try {
            const access = authService.getAccessToken();
            if (access) {
            const { data } = await api.get('/users/me/');
            setUser(data);
            }
        } catch {}
        setLoading(false);
        };
        init();
  }, []);

  const login = async (email: string, password: string) => {
        await authService.login(email, password);
        const { data } = await api.get('/users/me/');
        setUser(data);
  };

  const register = async (form: any) => {
        await authService.register(form);
        await login(form.email, form.password);
  };

  const logout = () => {
        authService.logout();
        setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
        {children}
    </AuthContext.Provider>
  );
};