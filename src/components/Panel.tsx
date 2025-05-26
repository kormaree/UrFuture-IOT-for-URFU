import { useNavigate } from 'react-router-dom';

export default function Panel() {
    const navigate = useNavigate();

    return (
        <>
            <div className="panel">
            <ul>
                <img src="/images/logo-panel.svg" alt="Лого" />
            </ul>
            <ul className="panel_ul_sections">
                <li className="panel_ul_sections_line">
                <div className="panel_div-personalaccount">
                    <h2>Личный кабинет</h2>
                </div>
                <ul className="panel_ul-personalaccount">
                    <li onClick={() => navigate('/profile/direction')}>Мое направление</li>
                    <li onClick={() => navigate('/profile/courses')}>Пройденные курсы</li>
                </ul>
                </li>
                <li className="panel_ul_sections_line">
                <div className="panel_div-IOT">
                    <h2>ИОТ</h2>
                </div>
                <ul className="panel_ul-IOT">
                    <li onClick={() => navigate('/iot/recommendations')}>
                    Рекомендация курсов под вашу профессию
                    </li>
                    <li onClick={() => navigate('/iot/all')}>
                    Рекомендация курсов под все профессии
                    </li>
                </ul>
                </li>
                <li className="panel_ul_sections_line">
                <div className="panel_div-profession">
                    <h2>Профессии</h2>
                </div>
                <ul className="panel_ul-profession">
                    <li onClick={() => navigate('/professions')}>Библиотека профессий</li>
                    <li onClick={() => navigate('/professions/selected')}>Выбранная профессия</li>
                </ul>
                </li>
                <li className="panel_ul_sections_line">
                <div>
                    <h2>Расписание</h2>
                </div>
                </li>
                <li className="panel_ul_sections_line">
                <div className="panel_div-komments">
                    <h2>Отзывы на курсы</h2>
                </div>
                <ul className="panel_ul-komments">
                    <li onClick={() => navigate('/reviews/library')}>
                    Отзывы и рейтинг курсов
                    </li>
                    <li onClick={() => navigate('/reviews/submitted')}>
                    Оценка пройденных курсов
                    </li>
                </ul>
                </li>
            </ul>
            <ul className="panel_ul_icon">
                <li className="profile-button" onClick={() => navigate('/profile')}>
                <span className="button-text">Профиль</span>
                <img
                    src="/images/icon-panel.svg"
                    alt="Иконка профиля"
                    className="button-icon"
                />
                </li>
            </ul>
            </div>
        </>
    )
}