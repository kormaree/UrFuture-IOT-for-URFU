import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Authorization from './pages/Authorization'
import Register from './pages/Register'
import Home from './pages/Home'
import LibraryOfProfessions from './pages/LibraryOfProfessions'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="home/" element={<Home />} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Register />} />
            <Route path="/professions" element={<LibraryOfProfessions />} />
            <Route path="*" element={<h2>Не найдено</h2>} />
        </Routes>
    )
}
