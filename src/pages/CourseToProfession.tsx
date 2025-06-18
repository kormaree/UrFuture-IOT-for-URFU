import Panel from "../components/Panel";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ChosenProfessionRecommendationsSkeleton from "../components/skeletons/ChosenProfessionRecommendationsSkeleton";
import SemesterCoursesSkeleton from "../components/skeletons/SemesterCoursesSkeleton";
import SemesterCourses from "../components/SemesterCourses";
import { fetchRecommendations, type SemesterRecommendations } from "../api/recommendations";
import { Link } from "react-router-dom";
import SemesterCoursesWithoutRecomendations from "../components/SemesterDisciplines";
import { fetchSemesterDisciplines, type SemesterDisciplines } from "../api/disciplines";

export default function CourseToProfession() {
    const auth = useContext(AuthContext)!;
    const [loading, setLoading] = useState(true);
    const user = auth.user;
    const [semesters, setSemesters] = useState<SemesterRecommendations[]>([]);
    const [allDisciplines, setAllDisciplines] = useState<SemesterDisciplines[]>([]);
    const semestersCount = 8;

   useEffect(() => {
        if (user) {
            setLoading(true);
            
            if (user.profession_id && user.profession) {
                fetchRecommendations()
                    .then(data => {
                        setSemesters(data);
                        setLoading(false);
                    })
                    .catch(() => setLoading(false));
            } else {
                fetchSemesterDisciplines()
                    .then(data => {
                        setAllDisciplines(data);
                        setLoading(false);
                    })
                    .catch(() => setLoading(false));
            }
        }
    }, [user]);

    const hasProfession = user?.profession_id && user?.profession;

    return (
        <>
            <Panel />
            <div className="courses-recommendation">
                <h1 className="courses-title">Рекомендация курсов под выбранную профессию</h1>
                <p className="courses-description">
                    В данном разделе вы можете ознакомиться с рекомендованными курсами каждой дисциплины под выбранную вами профессию
                </p>
            </div>

            <div className="main-content-container">
                {hasProfession ? (
                    <>
                        <div className="semesters-container">
                            {loading ? (
                                Array(semestersCount).fill(0).map((_, i) => (
                                    <SemesterCoursesSkeleton key={i} />
                                ))
                            ) : (
                                semesters.map((semesterData: SemesterRecommendations) => (
                                    <SemesterCourses
                                        key={semesterData.semester}
                                        semester={semesterData.semester}
                                        courses={semesterData.courses}
                                    />
                                ))
                            )}
                        </div>

                        <div className="info-type-container">
                            {auth.loading
                                ? <ChosenProfessionRecommendationsSkeleton/> 
                                : (
                                    <Link to={`/professions/${user.profession_id}`} className="link-to-user-profession">
                                        <div className="specialist-block">
                                            <div className="specialist-content">
                                                <img src="../images/Bloсk_prof.png" alt="Блок профессии" className="specialist-image"/>
                                                <h3 className="specialist-title">{user.profession}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            }

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
                    </>
                ) : (
                    <>
                    <div className="semesters-container">
                            {loading ? (
                                Array(semestersCount).fill(0).map((_, i) => (
                                    <SemesterCoursesSkeleton key={i} />
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
                        <div className="no-profession-message">
                            <p>Рекомендация курсов недоступна, так как вы еще не выбрали свою профессию. Сделать это можно в разделе профессий</p>
                            <Link to="/professions" className="choose-profession-link">
                                выбрать профессию
                            </Link>
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
                    </>
                )}
            </div>     
        </>
    );
};