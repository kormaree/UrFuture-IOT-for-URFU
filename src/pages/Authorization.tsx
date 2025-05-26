import { Link } from 'react-router-dom'
import '../styles/style.css'

export default function Authorization() {
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

        <div className="authorization-container">
            <h2>Авторизация</h2>

            <div className="authorization-container_email">
            <h3>Email</h3>
            <div className="authorization-container_email_input">
                <input
                type="text"
                className="authorization-container_email_input_field"
                placeholder="Введите email или номер телефона"
                />
                <img
                className="authorization-container_email_input_faceicon"
                src="/images/faceicon.svg"
                alt="Иконка пользователя"
                />
            </div>
            </div>

            <div className="authorization-container_password">
            <h3>Пароль</h3>
            <div className="authorization-container_password_input">
                <input
                type="password"
                className="authorization-container_password_input_field"
                placeholder="Введите пароль"
                />
                <img
                className="authorization-container_email_input_faceicon"
                src="/images/faceicon.svg"
                alt="Иконка пользователя"
                />
            </div>
            <span
                className="authorization-container_password_error-message"
                style={{
                color: '#C05640',
                fontWeight: 500,
                display: 'none',
                }}
            >
                Неверно введен логин или пароль
            </span>
            </div>

            <Link to="/login">
            <button className="authorization-container_enter">
                Войти
            </button>
            </Link>

            <div className="authorization-container_no-registration">
            <div className="authorization-container_no-registration_question">
                У вас нет учетной записи?
            </div>
            <Link
                to="/register"
                className="authorization-container_no-registration_registracion"
            >
                Зарегистрироваться
            </Link>
            </div>
        </div>
        </div>
    )
}