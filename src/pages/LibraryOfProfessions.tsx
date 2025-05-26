import { useNavigate } from 'react-router-dom';
import '../styles/style.css';
import ProfessionCard from '../components/ProfessionCard';
import Panel from '../components/Panel';

export default function LibraryOfProfessions() {
    const navigate = useNavigate();

    return (
        <div className="library-page">
        
        <Panel />

        <div className="profession-library">
            <h1>Библиотека профессий</h1>

            <div className="dropdown-container">
            <button data-path="one" className="dropdown-toggle-2">
                <h2>Дизайнер</h2>
                <img
                id="img_dropdown-off"
                className="img_dropdown-active"
                src="/images/dropdown-off.svg"
                alt="Показать"
                />
                <img
                id="img_dropdown-on"
                className="img_dropdown-not-active"
                src="/images/dropdown-on.svg"
                alt="Скрыть"
                />
            </button>
            </div>

            <div className="profession-cards-container">
            {[
                { name: 'Графический дизайнер', path: '/professions/1' },
                { name: 'UI/UX специалист', path: '/professions/2' },
                { name: 'Специалист по Deep Learning', path: '/professions/3' },
            ].map((prof, idx) => (
                <ProfessionCard
                    key={idx}
                    name={prof.name}
                    path={prof.path}
                    onClick={() => navigate(prof.path)}
                />
            ))}
            </div>
        </div>
        </div>
    );
}