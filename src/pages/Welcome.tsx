import { Link } from 'react-router-dom'

export default function Welcome() {
    return (
        <>
            <div className="scroll-welcome">
                <div style={{
                    backgroundColor: '#EFEFEF',
                    width: '100%',
                    height: '678px',
                    position: 'absolute'
                }}>
                    <header className="menu">
                        <Link to="/login">
                            <button className="menu_entry">Вход</button>
                        </Link>
                        <Link to="/register">
                            <button className="menu_registration">Регистрация</button>
                        </Link>
                    </header>
                    <div className="container-title">
                        <img src="/images/logo.svg" alt="Логотип UrFuture" />
                        <h1>UrFuture</h1>
                    </div>
                    <div className="title-description">
                        Сервис, который поможет Вам в выборе будущей професии и подборе оптимальной образовательной траектории
                    </div>
                    <div>
                        <Link to="/register">
                            <button className="container-continue">
                                <h2>Определить профессию будущего</h2>
                                <img className="arrow" src="/images/arrow.png" alt="Стрелочка" />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="road-map"></div>
                <ul className="steps">
                    <li className="steps_1">1</li>
                    <li className="steps_2">2</li>
                    <li className="steps_3">3</li>
                    <li className="steps_4">4</li>
                </ul>
                <div className="road-map-info">
                    <h2 className="road-map_title1">Подбор курсов на основе профессии</h2>
                    <p className="road-map_discription">Ознакомьтесь с существующими профессиями и выберите понравившуюся для формирования индивидуальной образовательной траектории</p>
                    <img src="/images/pict1step.jpg" alt="Снимок экрана раздела профессий" />
                    <h2 className="road-map_title2">Персонализация учебного пути</h2>
                    <p className="road-map_discription">Изучайте рекомендации курсов для каждой дисциплины на основе выбранной вами профессии</p>
                    <img src="/images/pict2step.jpg" alt="Снимок экрана раздела рекомендованных курсов" />
                    <h2 className="road-map_title2">Планирование расписания</h2>
                    <p className="road-map_discription">Упрощенный процесс планирования расписания, с учетом ваших предпочтений и рекомендуемых курсов в рамках ИОТ</p>
                    <img src="/images/pict3step1.jpg" alt="Снимок экрана выбора курсов" />
                    <img src="/images/pict3step2.jpg" alt="Снимок экрана с расписанием" />
                    <div className="road-map_conteiner4step">
                        <Link to="/home">
                            <button className="road-map_conteiner4step_startIOT">
                                <h2>Начать планирование учебного пути</h2>
                                <img className="arrow-black" src="/images/arrow-black.png" alt="Стрелочка" />
                            </button>
                        </Link>
                        <Link to="/professions">
                            <button className="road-map_conteiner4step_check-jobs">
                                <h2>Посмотреть каталог профессий</h2>
                                <img className="arrow-black" src="/images/arrow-black.png" alt="Стрелочка" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            <img src="/images/ellipse1.png" className="ellipse1" />
            <img src="/images/rectangle.png" className="rectangle" />
            <img src="/images/ellipse2.png" className="ellipse2" />
            <img src="/images/ellipse3.png" className="ellipse3" />
        </>
    )
}