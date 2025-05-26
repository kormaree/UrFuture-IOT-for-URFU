import Panel from "../components/Panel";

export default function Direction() {

    return (
        <>
            <Panel />
            
            <div className="my-direction">
                <h1>Мое направление</h1>
                <div className="my-direction_student">
                    <img 
                        style={{ width: '170px', height: '170px' }} 
                        src="/images/icon-gray.png" 
                        alt="Иконка" 
                    />
                    <div className="my-direction_student_info">
                        <h2>Иванов Иван Васильевич</h2>
                        <div className="my-direction_student_info_container">
                            <div className="my-direction_student_info_container_group">
                                <h3>Группа:</h3>
                                <h4>РИ-222222</h4>
                            </div>
                            <div className="my-direction_student_info_container_email">
                                <h3>Электронная почта:</h3>
                                <h4>Ivanov.Ivan@gmail.com</h4>
                            </div>
                            <div className="my-direction_student_info_container_direction">
                                <h3>Мое направление:</h3>
                                <h4>Программная инженерия</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="my-direction_info-of-direction">
                    Программная инженерия — это флагманская программа бакалавриата ИРИТ-РТФ, нацеленная на подготовку универсальных ИТ-специалистов. Программный инженер —  многофункциональный специалист, который решает задачи на всех стадиях разработки программного обеспечения. Образовательная программа охватывает базовые языки программирования (C#, Java, C++ и Python), а также предлагает уникальные индивидуальные образовательные траектории. Студенты могут ознакомиться с различными аспектами профессии и выбрать наиболее подходящий трек подготовки, что позволяет им получить глубокие знания и навыки в области программной инженерии.
                </span>
                <div className="my-direction_info-main-persons">
                    <div className="my-direction_info-main-persons_container">
                        <img src="/images/Obabkov.png" alt="Фото Ильи Николаевича" />
                        <div className="my-direction_info-main-persons_container_rop">
                            <h2>Обабков Илья Николаевич</h2>
                            <h3>Руководитель образовательной программы</h3>
                            <div className="my-direction_info-main-persons_container_rop_info">
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Адрес:</h4>
                                    <p>ул., Мира, 32</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Аудитория:</h4>
                                    <p>Р-332</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Телефон:</h4>
                                    <p>(343) 375-97-00</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Email:</h4>
                                    <p>i.n.obabkov@urfu.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-direction_info-main-persons_container">
                        <img src="/images/Kolmagorceva.png" alt="Фото Ирины Колмагорцевой" />
                        <div className="my-direction_info-main-persons_container_tutor">
                            <h2>Колмогорцева Ирина</h2>
                            <h3>Тьютор программной инженерии</h3>
                            <div className="my-direction_info-main-persons_container_tutor_info">
                                <div className="my-direction_info-main-persons_container_tutor_info_item">
                                    <h4>Адрес:</h4>
                                    <p>ул., Мира, 32</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_tutor_info_item">
                                    <h4>Аудитория:</h4>
                                    <p>Р-138а</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_tutor_info_item">
                                    <h4>Email:</h4>
                                    <p>i.s.kolmogortseva@urfu.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}