import { useNavigate } from 'react-router-dom';
import Panel from "../components/Panel";

export default function ChosenProfession() {
    const navigate = useNavigate();

    return (
    <>
        <Panel />
        <div className="courses-recommendation">
        <h1 className="courses-title">Рекомендация курсов под выбранную профессию</h1>
        <p className="courses-description">
                В данном разделе вы можете ознакомиться с рекомендованными курсами каждой дисциплины под выбранную вами профессию
        </p>
    </div>

    <div className="main-content-container">
        <div className="semesters-container">
            <div className="semester-block">
                <h3 className="semester-title">Семестр 1</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                                        <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                                        <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                                        <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                </div>
            </div>    

            <div className="semester-block">
                <h3 className="semester-title">Семестр 2</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>

            <div className="semester-block">
                <h3 className="semester-title">Семестр 3</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>

            <div className="semester-block">
                <h3 className="semester-title">Семестр 4</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>

            <div className="semester-block">
                <h3 className="semester-title">Семестр 5</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>

            <div className="semester-block">
                <h3 className="semester-title">Семестр 6</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>

            <div className="semester-block">
                <h3 className="semester-title">Семестр 7</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>

            <div className="semester-block">
                <h3 className="semester-title">Семестр 8</h3>
                <div className="semester-divider"></div>
                <div className="subjects-container">
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Философия</p>
                    </div>
                    <div className="subject-item" data-category="mathematics">
                        <p className="subject-name">Векторный анализ</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Основы C++</p>
                    </div>
                    <div className="subject-item" data-category="humanities">
                        <p className="subject-name">Цифровая медицина</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name">Бизнес-анализ</p>
                    </div>
                    <div className="subject-item" data-category="natural-science">
                        <p className="subject-name">Физика</p>
                    </div>
                    <div className="subject-item" data-category="programming">
                        <p className="subject-name">Микроконтроллеры AVR</p>
                    </div>
                    <div className="subject-item" data-category="analytical">
                        <p className="subject-name multiline">Интеллектуальный анализ данных</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="info-type-container">
            <div className="specialist-block">
                <div className="specialist-content">
                    <img src="../images/Bloсk_prof.png" alt="Блок профессии" className="specialist-image"/>
                    <h3 className="specialist-title">Специалист по виртуальному прототипированию</h3>
                </div>
            </div>

            <div className="category-legend">
                <div className="legend-item">
                    <div className="color-box" style={{backgroundColor: '#DBBDFF'}}></div>
                    <span className="legend-text">Гуманитарные предметы</span>
                </div>
                <div className="legend-item">
                    <div className="color-box" style={{backgroundColor: '#B2DFFF'}}></div>
                    <span className="legend-text">Инженерные предметы</span>
                </div>
                <div className="legend-item">
                    <div className="color-box" style={{backgroundColor: '#FFCEC5'}}></div>
                    <span className="legend-text">Естественно-научные предметы</span>
                </div>
                <div className="legend-item">
                    <div className="color-box" style={{backgroundColor: '#ACFFC7'}}></div>
                    <span className="legend-text">Программирование</span>
                </div>
                <div className="legend-item">
                    <div className="color-box" style={{backgroundColor: '#FFEDB1'}}></div>
                    <span className="legend-text">Математика</span>
                </div>
            </div>
        </div>
    </div>     
    </>
    );
};
