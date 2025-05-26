import { updateUserProfession } from '../api/users';
import { useNavigate, useParams } from 'react-router-dom';
import Panel from "../components/Panel";
import { fetchProfessionDetail, type ProfessionDetail } from '../api/professions';
import { useState, useEffect } from 'react';

export default function ProfessionPage() {
    const { id } = useParams<{ id: string }>();
    const [profession, setProfession] = useState<ProfessionDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const navigate = useNavigate();

    const handleChooseProfession = async () => {
        if (!profession) return;
        try {
            await updateUserProfession(profession.id);
            navigate(`/professions/${profession.id}`);
        } catch (err) {
            console.error('Ошибка выбора профессии', err);
        }
    };

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        fetchProfessionDetail(Number(id))
            .then(data => setProfession(data))
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <>
            <Panel />
            
            <div className="profession-container">
                <div className="profession-header">
                    <img 
                        src="/images/Arrow-Left.png" 
                        alt="Назад" 
                        className="back-arrow" 
                        onClick={() => navigate(-1)}
                    />
                    {loading || !profession ? (
                        <p>Загрузка...</p>
                    ) : (
                        <>
                            <h1 className="profession-title">{profession.name}</h1>
                        </>
                    )}
                    <button 
                        className="choose-profession-btn"
                        onClick={handleChooseProfession}
                    >
                        выбрать профессию
                    </button>
                </div>
                
                {loading || !profession ? (
                    <p>Загрузка...</p>
                ) : (
                    <>
                        <div className="profession-description">
                            <p>{profession.description}</p>
                        </div>

                        <div className="requirements-section">
                            <h2 className="section-title">Требующиеся знания:</h2>
                            <ul className="requirements-list">
                                {profession.knowledge.map((k, i) => (
                                    <li key={i} className="requirement-item">
                                        <img src="/images/clip.svg" alt="" className="requirement-icon" />
                                        {k}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="requirements-section">
                            <h2 className="section-title">Требующиеся навыки:</h2>
                            <ul className="requirements-list">
                                {profession.skills.map((s, i) => (
                                    <li key={i} className="requirement-item">
                                        <img src="/images/clip.svg" alt="" className="requirement-icon" />
                                        {s}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="tools-section">
                            <h2 className="tools-title">Инструменты:</h2>
                            <p className="tools-list">{profession.tags.join(', ')}</p>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}