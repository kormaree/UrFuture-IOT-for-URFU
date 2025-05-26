import { useContext } from 'react';
import Panel from "../components/Panel";
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';


export default function Home() {
    const auth = useContext(AuthContext)!;
    const user = auth.user;
    return (
        <>
        <Panel />

        <div className="content">
            <div className="main-page_header">
            <h1>UrFuture</h1>
            <h2>Выбери профессию и построй свою индивидуальную образовательную траекторию</h2>
            </div>
            <div className="main-page_content_container">
            <div className="main-page_content_container_discription">
                <ul className="main-page_content_container_discription_text">
                <li>Перейдите в раздел профессий и выберите понравившуюся профессию</li>
                <li>Изучите список лучших курсов для вашей профессии</li>
                <li>В разделе “ИОТ” ознакомьтесь с рекомендованными курсами каждой дисциплины под вашу профессию</li>
                <li>В разделе “Расписание” вы можете построить расписание на следующий семестр с учетом ваших пожеланий по времени пар, по преподавателям, а также с учетом рекомендованных курсов под вашу профессию</li>
                </ul>
                <div className="main-page_content_container_discription_buttons">
                <Link to="/professions" className="main-page_content_container_discription_buttons_item">
                    <button className="main-page_content_container_discription_buttons_item_container">
                        <h2>Профессии</h2>
                        <img src="/images/chevron-right.png" alt="Далее" />
                    </button>
                </Link>
                <Link to="/coursetoprofession" className="main-page_content_container_discription_buttons_item">
                    <button className="main-page_content_container_discription_buttons_item_container">
                        <h2>Рекомендация курсов под профессию (ИОТ)</h2>
                        <img src="/images/chevron-right.png" alt="Далее" />
                    </button>
                </Link>
                <a href="#" className="main-page_content_container_discription_buttons_item">
                    <button className="main-page_content_container_discription_buttons_item_container">
                        <h2>Построение расписания</h2>
                        <img src="/images/chevron-right.png" alt="Далее" />
                    </button>
                </a>
                <Link to="/completeddisciplines" className="main-page_content_container_discription_buttons_item">
                    <button className="main-page_content_container_discription_buttons_item_container">
                        <h2>Пройденные курсы</h2>
                        <img src="/images/chevron-right.png" alt="Далее" />
                    </button>
                </Link>
                <a href="#" className="main-page_content_container_discription_buttons_item">
                    <button className="main-page_content_container_discription_buttons_item_container">
                        <h2>Отзывы на курсы</h2>
                        <img src="/images/chevron-right.png" alt="Далее" />
                    </button>
                </a>
                </div>
            </div>
            <div className="main-page_content_container_info">
                <div className="main-page_content_container_info_student">
                    <div className="main-page_content_container_info_student_container">
                        <h2>
                            {user?.last_name} {user?.first_name} {user?.patronymic}
                        </h2>
                        <img src="/images/black-icon.svg" alt="Иконка" />
                    </div>
                    <h3>Группа:</h3>
                    <h4>{user?.group || '—'}</h4>
                    <h3>Направление:</h3>
                    <h4>{user?.direction || '—'}</h4>
                </div>
                <div className="main-page_content_container_info_profession">
                    <h2>{user?.profession?.name || 'Не выбрана'}</h2>
                    <img className="polygon_main-page" src="/images/polygon_main-page.png" alt="" />
                    <img className="rectangle_main-page" src="/images/rectangle_main-page.png" alt="" />
                    <img className="ellipse_main-page" src="/images/ellipse_main-page.png" alt="" />
                </div>
            </div>
            </div>
        </div>
        </>
    );
}