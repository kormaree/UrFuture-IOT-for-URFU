import { Link } from 'react-router-dom'
import '../styles/style.css'

export default function Register() {
    return (
        <div className="wrapper">
        <div className="left-part">
            <img src="/images/polygon2.png" className="polygon2" alt="" />
            <img src="/images/rectangle2.png" className="rectangle2" alt="" />
            <img src="/images/ellipse22.png" className="ellipse22" alt="" />
            <div className="container-title_website">
            <img src="/images/whitelogo.png" alt="Логотип UrFuture" />
            <h1>UrFuture</h1>
            </div>
            <div className="title-description_website">
            ИНДИВИДУАЛЬНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ТРАЕКТОРИИ ИРИТ-РТФ
            </div>
        </div>

        <div className="registration-container">
            <h2>Регистрация</h2>

            <div className="registration-container_name-and-lastname">
            <div className="registration-container_name-and-lastname_lastname">
                <h3>Фамилия*</h3>
                <input
                type="text"
                className="registration-container_name-and-lastname_lastname_input"
                placeholder="Введите фамилию"
                />
                <span
                className="registration-container_password_error-message"
                style={{ color: '#C05640', fontSize: '14px', fontWeight: 500, display: 'none' }}
                >
                Введите данные
                </span>
            </div>
            <div className="registration-container_name-and-lastname_name">
                <h3>Имя*</h3>
                <input
                type="text"
                className="registration-container_name-and-lastname_name_input"
                placeholder="Введите имя"
                />
            </div>
            </div>

            <div className="registration-container_patronymic">
            <h3>Отчество*</h3>
            <input
                type="text"
                className="registration-container_patronymic_input"
                placeholder="Введите отчество"
            />
            </div>

            <div className="registration-container_email">
            <h3>Email*</h3>
            <input
                type="email"
                className="registration-container_email_input"
                placeholder="Введите email"
            />
            <span
                className="registration-container_password_error-message"
                style={{ color: '#C05640', fontSize: '14px', fontWeight: 500, display: 'none' }}
            >
                Неверно введен email
            </span>
            </div>

            <div className="registration-container_password">
            <h3>Пароль*</h3>
            <div className="registration-container_password_input">
                <input
                type="password"
                className="registration-container_password_input_field"
                placeholder="Введите пароль"
                />
                <img
                className="registration-container_password_input_view"
                style={{ display: 'none' }}
                src="/images/show-password.png"
                alt="Показать пароль"
                />
                <img
                className="registration-container_password_input_not-view"
                src="/images/hide-password.png"
                alt="Спрятать пароль"
                />
            </div>
            <span
                className="registration-container_password_error-message"
                style={{ color: '#C05640', fontSize: '14px', fontWeight: 500, display: 'none' }}
            >
                Пароли не совпадают
            </span>
            </div>

            <div className="registration-container_repeat-password">
            <h3>Повторите пароль*</h3>
            <div className="registration-container_repeat-password_input">
                <input
                type="password"
                className="registration-container_repeat-password_input_field"
                placeholder="Введите пароль"
                />
                <img
                className="registration-container_repeat-password_input_view"
                src="/images/show-password.png"
                alt="Показать пароль"
                />
                <img
                className="registration-container_repeat-password_input_not-view"
                style={{ display: 'none' }}
                src="/images/hide-password.png"
                alt="Спрятать пароль"
                />
            </div>
            <span
                className="registration-container_password_error-message"
                style={{ color: '#C05640', fontSize: '14px', fontWeight: 500, display: 'none' }}
            >
                Пароли не совпадают
            </span>
            </div>

            <Link to="/register">
            <button className="registration-container_enter">
                Регистрация
            </button>
            </Link>

            <div className="registration-container_have-autorisation">
            <div className="registration-container_have-autorisation_question">
                У вас есть учетная запись?
            </div>
            <Link to="/login" className="registration-container_have-autorisation_enter">
                Войти
            </Link>
            </div>
        </div>
        </div>
    )
}