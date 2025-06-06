import Panel from "../components/Panel";
import DropdownComponent from "../components/DropdownToggle";
import { useNavigate } from "react-router-dom";
import '../styles/style.css';
import { useState, useEffect } from 'react';
import { fetchCourses, type Course } from '../api/courses';
import CourseCard from '../components/CourseCard';
import Pagination from '../components/Pagination';

const semesters = [
    '1 семестр',
    '2 семестр',
    '3 семестр',
    '4 семестр',
    '5 семестр',
    '6 семестр',
    '7 семестр',
    '8 семестр'
];

export default function CompletedCourses() {
    const [semester, setSemester] = useState<number | null>(null);
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [pageSize] = useState<number>(9);

    useEffect(() => {
      setCurrentPage(1);
    }, [semester]);

    useEffect(() => {
        setLoading(true);
        fetchCourses(currentPage, pageSize, semester || undefined)
            .then(data => {
                setCourses(data.results);
                setTotalPages(Math.ceil(data.count / pageSize));
            })
            .finally(() => setLoading(false));
    }, [semester, currentPage, pageSize]);
    const navigate = useNavigate();

  return (
    <>
      <Panel />
      <div className="completed-courses">
        <h1>Пройденные курсы и дисциплины</h1>
        <div>
          <DropdownComponent toggleId="dropdown-toggle-1" menuId="dropdown-menu-1" />
          <button 
            id="dropdown-toggle-1"
            className="dropdown-toggle"
          >
            <h2>Выбор семестра</h2>
            <img className="img_dropdown-active" src="../images/dropdown-off.svg" alt="Закрыто" />
            <img className="img_dropdown-not-active hidden" src="../images/dropdown-on.svg" alt="Открыто" />
          </button>
          <ul 
            id="dropdown-menu-1"
            className="dropdown-menu-semesters"
          >
            <li className="dropdown-item" onClick={() => setSemester(null)}>Все курсы</li>
                    {semesters.map(cat => (
                        <li className="dropdown-item" key={cat} onClick={() => { 
                          const semesterNumber = Number(cat.substring(0, 1));
                          setSemester(semesterNumber);}}>
                            {cat}
                        </li>
                    ))}
          </ul>
        </div>
        <ul className="completed-courses_container">
          {loading
            ? <p>Загрузка…</p>
            : courses.length === 0
                ? <p>Курсы не найдены</p>
                : courses.map(cour => (
                    <CourseCard
                        name={cour.name}
                        semester={cour.semester}
                        discipline={cour.discipline}
                        onClick={() => navigate(`/definite-course`)}
                    />
                ))
            }
        </ul>

        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
}