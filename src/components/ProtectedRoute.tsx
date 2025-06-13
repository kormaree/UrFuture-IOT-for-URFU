import { useContext, type ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';

interface ProtectedRouteProps {
    children: ReactNode;
    loadingFallback?: ReactNode;
}

export default function ProtectedRoute({
    children,
    loadingFallback,
}: ProtectedRouteProps) {
    const auth = useContext(AuthContext)!;
    if (auth.loading) {
        return <>{loadingFallback ?? <Loading />}</>;
    }
    return auth.user ? <>{children}</> : <Navigate to="/login" replace />;
}