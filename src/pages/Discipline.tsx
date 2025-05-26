import { useNavigate } from 'react-router-dom';
import Panel from "../components/Panel";

export default function Discipline() {
    const navigate = useNavigate();

    return (
        <>
            <Panel />
            
            <div className="definite-course">
                <img 
                    src="/images/Arrow-Left.png" 
                    alt="Стрелка назад" 
                    className="course-arrow"
                    onClick={() => navigate(-1)}
                />
                <div className="course-header">
                    <div className="course-title-wrapper">
                        <h1>Дискретная математика и математическая логика</h1>
                        <span className="course-code">МУП ДМиМЛ_09</span>
                    </div>
                    <div className="course-score">
                        <h2>Ваш итоговый балл: <span className="score-value">93</span></h2>
                    </div>
                    <div className="folders-container">
                        <div className="folder folder--yellow">
                            <div className="folder-wrapper">
                                <img src="/images/yellow-folder.png" alt="Желтая папка" className="folder__icon" />
                                <div className="folder__content">       
                                    <h3 className="folder__title"><b className="folder__text">Бальная</b> шкала оценивания</h3>
                                </div>
                            </div>
                        </div>
                        <div className="folder folder--orange">
                            <div className="folder-wrapper">
                                <img src="/images/orange-folder.png" alt="Оранжевая папка" className="folder__icon" />
                                <div className="folder__content">
                                    <h3 className="folder__title">Максимальное количество баллов - <b className="folder__text">100</b></h3>
                                </div>
                            </div>
                        </div>
                        <div className="folder folder--yellow">
                            <div className="folder-wrapper">
                                <img src="/images/yellow-folder.png" alt="Желтая папка" className="folder__icon" />
                                <div className="folder__content">
                                    <h3 className="folder__title">Количество предметов контроля - <b className="folder__text">35</b> </h3>
                                </div>
                            </div>
                        </div>
                        <div className="folder folder--orange">
                            <div className="folder-wrapper">
                                <img src="/images/orange-folder.png" alt="Оранжевая папка" className="folder__icon" />
                                <div className="folder__content">
                                    <h3 className="folder__title">Итоговый проект - <b className="folder__text">эссе</b> </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="course-content">
                        <section className="annotation-section">
                            <h2 className="section-title">Аннотация</h2>
                            <p className="annotation-text">
                                Дискретная математика - одна из важнейших составляющих современной математики. С одной стороны, она включает фундаментальные основы математики - теорию множеств, математическую логику, теорию алгоритмов; с другой стороны, является основным математическим аппаратом информатики и вычислительной техники и потому служит базой для многочисленных приложений в экономике, технике, социальной сфере.
                            </p>
                        </section>
                        <section className="outcomes-section">
                            <h2 className="section-title">Образовательный результат</h2>
                            <ul className="outcomes-list">
                                <li>ОПК-2 - Способен формализовывать и решать задачи, относящиеся к профессиональной деятельности, используя методы моделирования и математического анализа</li>
                                <li>З-1 - Привести примеры использования методов моделирования и математического анализа в решении задач, относящихся к профессиональной деятельности</li>
                                <li>У-1 - Обоснованно выбрать возможные методы моделирования и математического анализа для предложенных задач профессиональной деятельности</li>
                                <li>П-1 - Решать поставленные задачи, относящиеся к области профессиональной деятельности, используя освоенные за время обучения пакеты прикладных программ для моделирования и математического анализа</li>
                                <li>Д-1 - Способность к самообразованию, к самостоятельному освоению новых методов математического анализа и моделирования</li>
                            </ul>
                        </section>
                    </div>
                    <div className="meta-block">
                        <div className="meta-section">
                            <h3 className="meta-title">Направление:</h3>
                            <p className="meta-info">09.03.03 Прикладная информатика</p>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">Дисциплина:</h3>
                            <p className="meta-info">Дискретная математика и математическая логика</p>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">Семестр:</h3>
                            <p className="meta-info">3</p>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">Код:</h3>
                            <p className="meta-info">ДМиМЛ_09</p>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">Ак. часы:</h3>
                            <p className="meta-info">66</p>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">Авторы:</h3>
                            <div className="meta-info">
                                <p className="meta-line">Расин Олег Вениаминович</p>
                                <p className="meta-line">Ермакова Галина Михайловна</p>
                                <p className="meta-line">Белоусова Вероника Игоревна</p>
                                <p className="meta-line">Белоусов Иван Николаевич</p>
                            </div>
                        </div>
                        <div className="meta-section">
                            <h3 className="meta-title">Макс. кол-во обучающихся:</h3>
                            <p className="meta-info">200</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}