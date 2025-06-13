import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

export default function ProtectedRoute({ children }: { children: any }) {
    const auth = useContext(AuthContext)!;
    if (auth.loading) return <Loading />;
    return auth.user ? children : <Navigate to="/login" replace />;
}