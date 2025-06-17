import { useState, useEffect, useContext } from 'react';
import Panel from "../components/Panel";
import ProfessionInfoPoints from '../components/ProfessionInfoPoints';
import { fetchTopCourses, type TopCourseRecommendation } from '../api/recommendations';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import ChosenProfessionSkeleton from '../components/skeletons/ChosenProfessionSkeleton';
import RecommendedCourseSkeleton from '../components/skeletons/RecommendedCourseSkeleton';
import { Link } from 'react-router-dom';

export default function ChosenProfession() {
    const auth = useContext(AuthContext)!;
    const user = auth.user;

    const [recs, setRecs] = useState<TopCourseRecommendation[]>([]);
    const [recsLoading, setRecsLoading] = useState<boolean>(true);

    useEffect(() => {
        setRecsLoading(true);
        fetchTopCourses()
          .then(data => setRecs(data))
          .finally(() => setRecsLoading(false));
    }, []);

    if (!user.profession) {
        return <Navigate to="/professions" replace/>
    }

    return (
        <>
            <Panel />
            <div className="profession-container-2">
                <h1 className="page-title">Ваша выбранная профессия:</h1>
                { auth.loading
                ? <ChosenProfessionSkeleton />
                :
                    <div className="profession-cart-2">
                        <Link to={`/professions/${user.profession_id}`} className="link-to-user-profession">
                            <img src='/images/Block_prof_2.png' alt={user.profession} />
                        <div className="profession-names-2">{user.profession}</div>
                        </Link>
                    </div>
                }
            
                <ProfessionInfoPoints />

                <div className="courses-section">
                    <h2 className="courses-title-2">Лучшие курсы для вашей профессии за все семестры:</h2>
                    {recsLoading ? (
                        Array(5).fill(0).map((_, i) => (
                            <RecommendedCourseSkeleton key={i} />
                        ))
                    ) : recs.length === 0 ? (
                        <p>Рекомендованных курсов не найдено</p>
                    ) : (
                        <div className="courses-container">
                            {recs.map((r) => (
                                <div
                                    key={r.course_id}
                                    className="course-card"
                                >
                                    <p className="course-name">{r.course}</p>
                                    <p className="course-description">{r.discipline}, {r.semester} семестр</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
