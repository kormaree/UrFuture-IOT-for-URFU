import { useState, useEffect } from 'react';
import { fetchUserProfessionDetail } from '../api/users';
import { type ProfessionDetail } from '../api/professions';
import Panel from "../components/Panel";
import ProfessionInfoPoints from '../components/ProfessionInfoPoints';
import { fetchRecommendations, type Recommendation } from '../api/recommendations';

export default function ChosenProfession() {
    const [profession, setProfession] = useState<ProfessionDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const [recs, setRecs] = useState<Recommendation[]>([]);
    const [recsLoading, setRecsLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchUserProfessionDetail()
            .then(data => setProfession(data))
            .finally(() => setLoading(false));
    }, []);

    useEffect(() => {
        setRecsLoading(true);
        fetchRecommendations()
          .then(data => setRecs(data))
          .finally(() => setRecsLoading(false));
    }, []);

    if (loading) {
        return <div>Загрузка выбранной профессии...</div>;
    }
    if (!profession) {
        return <div>Профессия не выбрана</div>;
    }

    return (
        <>
            <Panel />
            <div className="profession-container-2">
                <h1 className="page-title">Ваша выбранная профессия:</h1>
                <div className="profession-cart-2">
                    <img src='/images/Block_prof_2.png' alt={profession.name} />
                    <div className="profession-names-2">{profession.name}</div>
                </div>

                <ProfessionInfoPoints />

                <div className="courses-section">
                    <h2 className="courses-title-2">Лучшие курсы для вашей профессии за все семестры:</h2>
                    {recsLoading ? (
                        <p>Загрузка курсов...</p>
                    ) : recs.length === 0 ? (
                        <p>Курсы не найдены</p>
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
