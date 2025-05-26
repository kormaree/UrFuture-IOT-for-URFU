import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';

export default function Panel() {
    const navigate = useNavigate();
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = (dropdownKey: string) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setActiveDropdown(dropdownKey);
    };

    const handleMouseLeave = (dropdownKey: string) => {
        timeoutRef.current = setTimeout(() => {
            setActiveDropdown(prev => prev === dropdownKey ? null : prev);
        }, 200);
    };

    const dropdowns = {
        'personalaccount': {
            title: 'Личный кабинет',
            items: [
                { text: 'Мое направление', path: '/direction', className: 'panel_ul_sections-item' },
                { text: 'Пройденные курсы', path: '/completeddisciplines', className: 'panel_ul_sections-item' }
            ],
            position: { top: '150px', left: '120px' }
        },
        'IOT': {
            title: 'ИОТ',
            items: [
                { text: 'Рекомендация курсов под вашу профессию', path: '/coursetoprofession', className: 'panel_ul_sections-item' },
                { text: 'Рекомендация курсов под все профессии', path: '/iot/all', className: 'panel_ul_sections-item' }
            ],
            position: { top: '150px', left: '300px' }
        },
        'profession': {
            title: 'Профессии',
            items: [
                { text: 'Библиотека профессий', path: '/professions', className: 'panel_ul_sections-item' },
                { text: 'Выбранная профессия', path: '/chosenprofession', className: 'panel_ul_sections-item' }
            ],
            position: { top: '150px', left: '400px' }
        },
        'komments': {
            title: 'Отзывы на курсы',
            items: [
                { text: 'Отзывы и рейтинг курсов', path: '/reviews/library', className: 'panel_ul_sections-item' },
                { text: 'Оценка пройденных курсов', path: '/reviews/submitted', className: 'panel_ul_sections-item' }
            ],
            position: { top: '150px', left: '550px' }
        },
        'schedule': {
            title: 'Расписание',
            items: [],
            position: { top: '150px', left: '700px' }
        }
    };

    return (
        <div className="panel">
            <ul className="panel_logo">
                <img src="/images/logo-panel.svg" alt="Лого" />
            </ul>
            <ul className="panel_ul_sections">
                {Object.entries(dropdowns).map(([key, { title, items, position }]) => {
                    if (key === 'schedule') {
                        return (
                            <li key={key} className="panel_ul_sections_line">
                                <div style={{cursor:'pointer'}}>
                                    <h2>{title}</h2>
                                </div>
                            </li>
                        );
                    }
                    return (
                        <li 
                            key={key} 
                            className="panel_ul_sections_line"
                            onMouseEnter={() => handleMouseEnter(key)}
                            onMouseLeave={() => handleMouseLeave(key)}
                        >
                            <div className={`panel_div-${key}`}>
                                <h2>{title}</h2>
                            </div>
                            {items.length > 0 && (
                                <ul 
                                    className={`panel_ul-${key} ${activeDropdown === key ? 'dropdown-visible' : ''}`}
                                    style={{ top: position.top, left: position.left }}
                                    onMouseEnter={() => handleMouseEnter(key)}
                                    onMouseLeave={() => handleMouseLeave(key)}
                                >
                                    {items.map((item, index) => (
                                        <li 
                                            key={index} 
                                            className={item.className}
                                            onClick={() => navigate(item.path)}
                                        >
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    );
                })}
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
    );
}