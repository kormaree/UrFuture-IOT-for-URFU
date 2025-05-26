import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Authorization from './pages/Authorization'
import Register from './pages/Register'
import Home from './pages/Home'
import LibraryOfProfessions from './pages/LibraryOfProfessions'
import ProfessionPage from './pages/ProfessionPage'
import Direction from './pages/Direction'
import Discipline from './pages/Discipline'
import CourseToProfession from './pages/CourseToProfession'
import CompletedDisciplines from './pages/CompletedDisciplines'
import ChosenProfession from './pages/ChosenProfession'
import ChoosingDirection from './pages/ChoosingDirection'

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="home/" element={<Home />} />
            <Route path="/login" element={<Authorization />} />
            <Route path="/register" element={<Register />} />
            <Route path="/professions" element={<LibraryOfProfessions />} />
            <Route path="/professionpage" element={<ProfessionPage />} />
            <Route path="/direction" element={<Direction />} />
            <Route path="/discipline" element={<Discipline />} />
            <Route path="/coursetoprofession" element={<CourseToProfession />} />
            <Route path="/completeddisciplines" element={<CompletedDisciplines />} />
            <Route path="/chosenprofession" element={<ChosenProfession />} />
            <Route path="/choosingdirection" element={<ChoosingDirection />} />
            <Route path="*" element={<h2>Не найдено</h2>} />
        </Routes>
    )
}
