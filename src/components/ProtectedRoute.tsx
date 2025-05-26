import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute({ children }: { children }) {
    const auth = useContext(AuthContext)!;
    if (auth.loading) return <div>Загрузка...</div>;
    return auth.user ? children : <Navigate to="/login" replace />;
}