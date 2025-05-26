import Panel from "../components/Panel";

export default function ChosenProfession() {

    return (
    <>
        <Panel />
        <div className="profession-container-2">
            <h1 className="page-title">Ваша выбранная профессия :</h1>
            
            <div className="profession-cart-2">
                <img src="../images/Block_prof_2.png" alt="Карточка профессии" />
                <div className="profession-names-2">Специалист по виртуальному прототипированию</div>
            </div>
            
            <ul className="info-points">
                <li className="info-point">Рекомендации курсов в рамках ИОТ будут формироваться на основе выбранной вами профессии</li>
                <li className="info-point">При составлении расписания рекомендации курсов будут учитывать ваш выбор профессии в этом разделе</li>
                <li className="info-point">В разделе ИОТ вы можете ознакомиться с рекомендацией курсов каждой дисциплины под выбранную профессию</li>
            </ul>
            
            <h2 className="courses-title-2">Лучшие курсы для вашей профессии за все семестры:</h2>
            
            <div className="courses-container">
                <div className="course-card">
                    <p className="course-name">Программирование на TypeScript (смешанный курс, SkillBox)</p>
                    <p className="course-description">Современные языки программирования, 2 семестр</p>
                </div>
                <div className="course-card large">
                    <p className="course-name">Введение в Data Science и машинное обучение (Смешанное; StepHe; Без НТК)</p>
                    <p className="course-description">Анализ данных и искусственный интеллект, 2 семестр</p>
                </div>
                <div className="course-card">
                    <p className="course-name">JavaScript. Разработка пользовательских веб-интерфейсов (HTML-академия)</p>
                    <p className="course-description">Современные языки программирования, 2 семестр</p>
                </div>
                <div className="course-card">
                    <p className="course-name">Основы архитектуры ЭВМ для инженеров и разработчиков ПО</p>
                    <p className="course-description">Архитектура ЭВМ, 2 семестр</p>
                </div>
            </div>
        </div>        
    </>
    );
};
