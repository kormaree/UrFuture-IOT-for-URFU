import Panel from "../components/Panel";
import { Link } from 'react-router-dom'

export default function Home() {
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
                <button className="main-page_content_container_discription_buttons_item">
                    <Link to="/professions" className="main-page_content_container_discription_buttons_item_container">
                    <h2>Профессии</h2>
                    <img src="/images/chevron-right.png" alt="Далее" />
                    </Link>
                </button>
                <button className="main-page_content_container_discription_buttons_item">
                    <a href="#" className="main-page_content_container_discription_buttons_item_container">
                    <h2>Рекомендация курсов под профессию (ИОТ)</h2>
                    <img src="/images/chevron-right.png" alt="Далее" />
                    </a>
                </button>
                <button className="main-page_content_container_discription_buttons_item">
                    <a href="#" className="main-page_content_container_discription_buttons_item_container">
                    <h2>Построение расписания</h2>
                    <img src="/images/chevron-right.png" alt="Далее" />
                    </a>
                </button>
                <button className="main-page_content_container_discription_buttons_item">
                    <a href="#" className="main-page_content_container_discription_buttons_item_container">
                    <h2>Пройденные курсы</h2>
                    <img src="/images/chevron-right.png" alt="Далее" />
                    </a>
                </button>
                <button className="main-page_content_container_discription_buttons_item">
                    <a href="#" className="main-page_content_container_discription_buttons_item_container">
                    <h2>Отзывы на курсы</h2>
                    <img src="/images/chevron-right.png" alt="Далее" />
                    </a>
                </button>
                </div>
            </div>
            <div className="main-page_content_container_info">
                <div className="main-page_content_container_info_student">
                <div className="main-page_content_container_info_student_container">
                    <h2>Иванов Иван Иванович</h2>
                    <img src="/images/black-icon.svg" alt="Иконка" />
                </div>
                <h3>Группа:</h3>
                <h4>РИ-222222</h4>
                <h3>Направление:</h3>
                <h4>Прикладная информатика</h4>
                </div>
                <div className="main-page_content_container_info_profession">
                <h2>Специалист по виртуальному прототипированию</h2>
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