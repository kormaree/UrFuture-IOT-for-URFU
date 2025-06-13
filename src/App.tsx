import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Welcome from './pages/Welcome'
import Authorization from './pages/Authorization'
import Register from './pages/Register'
import Home from './pages/Home'
import LibraryOfProfessions from './pages/LibraryOfProfessions'
import ProfessionPage from './pages/ProfessionPage'
import Direction from './pages/Direction'
import DefiniteCourse from './pages/DefiniteCourse';
import CourseToProfession from './pages/CourseToProfession'
import ChosenProfession from './pages/ChosenProfession'
import ChoosingDirection from './pages/ChoosingDirection'
import ProtectedRoute from './components/ProtectedRoute';
import CompletedCourses from './pages/CompletedCourses';
import EditProfile from './pages/EditProfile';
import NotFoundPage from './pages/NotFoundPage';
import Loading from './components/Loading';

function RootRedirect() {
    const auth = useContext(AuthContext)!;
    if (auth.loading) {
        return <Loading />;
    }
    return auth.user
        ? <Navigate to="/home" replace />
        : <Navigate to="/welcome" replace />;
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<RootRedirect />} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Register />} />
            <Route path="welcome/" element={<Welcome />} />
            <Route path="/professions" element={<LibraryOfProfessions />} />
            <Route path="/professions/:id" element={<ProfessionPage />} />
            <Route path="/definite-course" element={<DefiniteCourse />} />
            <Route path="/choosing-direction" element={<ChoosingDirection />} />

            <Route element={<ProtectedRoute> <Outlet/> </ProtectedRoute>}>
                <Route path="home/" element={<Home />} />
                <Route path="/direction" element={<Direction />} />
                <Route path="/course-to-profession" element={<CourseToProfession />} />
                <Route path="/completed-courses" element={<CompletedCourses />} />
                <Route path="/chosen-profession" element={<ChosenProfession />} />
                <Route path="/edit-profile" element={<EditProfile />} />
            </Route>
            
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
