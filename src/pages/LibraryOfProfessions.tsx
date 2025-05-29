import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchProfessions, type Profession } from '../api/professions';
import ProfessionCard from '../components/ProfessionCard';
import Panel from '../components/Panel';
import DropdownComponent from '../components/DropdownToggle';
import '../styles/style.css';

const categories = [
    'Разработчик',
    'Инженер',
    'Специалист по работе с Data Science',
    'Менеджер и руководитель',
    'Администратор',
    'Информационная безопасность',
    'Gamedev',
    'Аналитик',
    'Тестировщик',
    'Дизайнер',
    'Другое',
];

export default function LibraryOfProfessions() {
    const [category, setCategory] = useState<string>('');
    const [professions, setProfessions] = useState<Profession[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        setLoading(true);
        fetchProfessions(category || undefined)
            .then(setProfessions)
            .finally(() => setLoading(false));
    }, [category]);
    const navigate = useNavigate();

    return (
        <div className="library-page">
        
        <Panel />

        <div className="profession-library">
            <h1>Библиотека профессий</h1>

            <div className="dropdown-container">
                <button
                    id="prof-toggle"
                    type="button"
                    className="dropdown-toggle-2"
                    data-path={category || 'all'}
                >
                    <h2>{category || 'Все категории'}</h2>
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

                <ul id="prof-menu" className="dropdown-menu">
                    <li onClick={() => setCategory('')}>Все категории</li>
                    {categories.map(cat => (
                        <li key={cat} onClick={() => setCategory(cat)}>
                            {cat}
                        </li>
                    ))}
                </ul>

                <DropdownComponent toggleId="prof-toggle" menuId="prof-menu" />
            </div>

            <div className="profession-cards-container">
                {loading
                    ? <p>Загрузка…</p>
                    : professions.length === 0
                        ? <p>Профессии не найдены</p>
                        : professions.map(prof => (
                            <ProfessionCard
                                key={prof.id}
                                name={prof.name}
                                onClick={() => navigate(`/professions/${prof.id}`)}
                            />
                        ))
                }
            </div>
        </div>
        </div>
    );
}