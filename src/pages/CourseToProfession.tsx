import Panel from "../components/Panel";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ChosenProfessionRecommendationsSkeleton from "../components/skeletons/ChosenProfessionRecommendationsSkeleton";
import SemesterCoursesSkeleton from "../components/skeletons/SemesterCoursesSkeleton";
import SemesterCourses from "../components/SemesterCourses";
import { fetchRecommendations, type SemesterRecommendations } from "../api/recommendations";

export default function CourseToProfession() {
    const auth = useContext(AuthContext)!;
    const [loading, setLoading] = useState(true);
    const user = auth.user;
    const [semesters, setSemesters] = useState<SemesterRecommendations[]>([]);
    const coursesCount = 8;

    useEffect(() => {
    if (user) {
      setLoading(true);
      fetchRecommendations()
        .then(data => {
                setSemesters(data)
            })
        .finally(() => setLoading(false));
    }
  }, [user]);

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
            <div className="semesters-container">
                {loading ? (
                    Array(coursesCount).fill(0).map((_, i) => (
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
                    <div className="specialist-block">
                        <div className="specialist-content">
                            <img src="../images/Bloсk_prof.png" alt="Блок профессии" className="specialist-image"/>
                            <h3 className="specialist-title">{user.profession}</h3>
                        </div>
                    </div>
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
        </div>     
    </>
    );
};
