import Panel from "../components/Panel";
import { useEffect, useState } from "react";
import SemesterCoursesSkeleton from "../components/skeletons/SemesterCoursesSkeleton";
import SemesterCourses from "../components/SemesterCourses";
import { fetchRecommendationsForAnotherProfession, type SemesterRecommendations } from "../api/recommendations";
import ElasticSearch from "../components/ElasticItems";
import { type Profession, fetchAllProfessions } from '../api/professions';
import DropdownComponent from "../components/DropdownToggle";
import { fetchSemesterDisciplines, type SemesterDisciplines } from "../api/disciplines";
import SemesterCoursesWithoutRecomendations from "../components/SemesterDisciplines";


export default function CoursesToProfessions() {
    const [loading, setLoading] = useState(true);

    const [semesters, setSemesters] = useState<SemesterRecommendations[]>([]);
    const semestersCount = 8;

    const [professions, setProfessions] = useState<Profession[]>([]);
    const [selectedProfession, setSelectedProfession] = useState<string | null>(null);
    const [allDisciplines, setAllDisciplines] = useState<SemesterDisciplines[]>([]);
    const [semestersLoading, setSemestersLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetchAllProfessions()
            .then(data => {
                setProfessions(data);
            })

        fetchSemesterDisciplines()
            .then(data => {
                setAllDisciplines(data);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleProfessionSelect = (professionId: string) => {
        setSelectedProfession(professionId);
        setSemestersLoading(true);
        
        fetchRecommendationsForAnotherProfession(Number(professionId))
            .then(data => {
                setSemesters(data);
            })
            .finally(() => {
                setSemestersLoading(false);
            });
    };

    return (
        <>
            <Panel />
            <div className="courses-recommendation">
                <h1 className="courses-title">Рекомендация курсов под профессии</h1>
                <p className="courses-description">
                    В данном разделе вы можете посмотреть рекомендованные курсы каждой дисциплины под разные профессии
                </p>
            </div>

            <div className="main-content-container">
                <div className="semesters-container">
                    {loading || semestersLoading ? (
                        Array(semestersCount).fill(0).map((_, i) => (
                            <SemesterCoursesSkeleton key={i} />
                        ))
                    ) : selectedProfession ? (

                        semesters.map((semesterData: SemesterRecommendations) => (
                            <SemesterCourses
                                key={semesterData.semester}
                                semester={semesterData.semester}
                                courses={semesterData.courses}
                            />
                        ))
                    ) : (

                        allDisciplines.map((semesterData: SemesterDisciplines) => (
                            <SemesterCoursesWithoutRecomendations
                                key={semesterData.semester}
                                semester={semesterData.semester}
                                courses={semesterData.courses}
                            />
                        ))
                    )}
                </div>

                <div className="info-type-container">
                    <div className="choosing-profession_container">
                        <div className="dropdown-container dropdown-container-professions">
                        <button
                            id="prof-toggle"
                            type="button"
                            className="dropdown-toggle-2 dropdown-toggle-3"
                        >
                            <ElasticSearch 
                                className="profession-search-input"
                                onSelect={(value) => {
                                    const profession = professions.find(p => 
                                        p.name.toLowerCase().includes(value.toLowerCase())
                                    );
                                    if (profession) {
                                        handleProfessionSelect(profession.id.toString());
                                    }
                                }} 
                            />
                            <img
                                className="img_dropdown-active"
                                src="/images/dropdown-off.svg"
                                alt="Открыть список"
                            />
                            <img
                                className="img_dropdown-not-active"
                                src="/images/dropdown-on.svg"
                                alt="Закрыть список"
                            />
                        </button>

                        <ul id="prof-menu" className="dropdown-menu elastic-directions dropdown-professions">
                            {professions.map(cat => (
                                <li key={cat.id}>
                                    <button
                                        data-id={cat.id.toString()}
                                        onClick={() => handleProfessionSelect(cat.id.toString())}
                                    >
                                        {cat.name}
                                    </button>
                                </li>
                            ))}
                        </ul>

                        <DropdownComponent toggleId="prof-toggle" menuId="prof-menu" />

                    </div>
                    </div>

                    <div className="category-legend">
                        <div className="legend-item">
                            <div className="color-box" style={{backgroundColor: '#DBBDFF'}}></div>
                            <span className="legend-text">Гуманитарные предметы</span>
                        </div>
                        <div className="legend-item">
                            <div className="color-box" style={{backgroundColor: '#B2DFFF'}}></div>
                            <span className="legend-text">Инженерные предметы</span>
                        </div>
                        <div className="legend-item">
                            <div className="color-box" style={{backgroundColor: '#FFCEC5'}}></div>
                            <span className="legend-text">Естественно-научные предметы</span>
                        </div>
                        <div className="legend-item">
                            <div className="color-box" style={{backgroundColor: '#ACFFC7'}}></div>
                            <span className="legend-text">Программирование</span>
                        </div>
                        <div className="legend-item">
                            <div className="color-box" style={{backgroundColor: '#FFEDB1'}}></div>
                            <span className="legend-text">Математика</span>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
};