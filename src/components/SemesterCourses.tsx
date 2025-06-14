export default function SemesterCourses() {
    return (
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
            </div>
        </div>
    )
}