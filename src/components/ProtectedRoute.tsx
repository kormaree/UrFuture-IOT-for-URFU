import { useContext, type ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

interface Props {
  children: ReactNode
}

export default function ProtectedRoute({ children }: Props) {
  const { loading, user } = useContext(AuthContext)!

  if (loading) {
    return <>{children}</>
  }

  if (!loading && !user) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}