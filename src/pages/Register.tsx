import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/style.css';

export default function Register(){
    const auth = useContext(AuthContext)!;
    const navigate = useNavigate();
    const [form, setForm] = useState({
        last_name: '',
        first_name: '',
        patronymic: '',
        email: '',
        password: '',
        passwordConfirm: '',
    });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (form.password !== form.passwordConfirm) {
            setError('Пароли не совпадают');
            return;
        }
        try {
            await auth.register(form);
            navigate('/login');
        } catch (err: any) {
            setError(err.message || 'Ошибка регистрации');
        }
    };

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

            <form className="registration-container" onSubmit={handleSubmit}>
                <h2>Регистрация</h2>
                <div className="registration-container_name-and-lastname">
                    <div className="registration-container_name-and-lastname_lastname">
                        <h3>Фамилия*</h3>
                        <input
                            type="text"
                            name="last_name"
                            value={form.last_name}
                            onChange={handleChange}
                            className="registration-container_name-and-lastname_lastname_input"
                            placeholder="Введите фамилию"
                        />
                    </div>
                    <div className="registration-container_name-and-lastname_name">
                        <h3>Имя*</h3>
                        <input
                            type="text"
                            name="first_name"
                            value={form.first_name}
                            onChange={handleChange}
                            className="registration-container_name-and-lastname_name_input"
                            placeholder="Введите имя"
                        />
                    </div>
                </div>

                <div className="registration-container_patronymic">
                    <h3>Отчество*</h3>
                    <input
                        type="text"
                        name="patronymic"
                        value={form.patronymic}
                        onChange={handleChange}
                        className="registration-container_patronymic_input"
                        placeholder="Введите отчество"
                    />
                </div>

                <div className="registration-container_email">
                    <h3>Email*</h3>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="registration-container_email_input"
                        placeholder="Введите email"
                    />
                </div>

                <div className="registration-container_password">
                    <h3>Пароль*</h3>
                    <div className="registration-container_password_input">
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="registration-container_password_input_field"
                            placeholder="Введите пароль"
                        />
                        <img
                            className="registration-container_password_input_not-view"
                            src="/images/hide-password.png"
                            alt="Спрятать пароль"
                        />
                    </div>
                </div>

                <div className="registration-container_repeat-password">
                    <h3>Повторите пароль*</h3>
                    <div className="registration-container_repeat-password_input">
                        <input
                            type="password"
                            name="passwordConfirm"
                            value={form.passwordConfirm}
                            onChange={handleChange}
                            className="registration-container_repeat-password_input_field"
                            placeholder="Введите пароль"
                        />
                        <img
                            className="registration-container_password_input_not-view"
                            src="/images/show-password.png"
                            alt="Спрятать пароль"
                        />
                    </div>
                </div>

                {error && <div className="error-message">{error}</div>}

                <button type="submit" className="registration-container_enter">
                    Регистрация
                </button>

                <div className="registration-container_have-autorisation">
                    <div className="registration-container_have-autorisation_question">
                        У вас есть учетная запись?
                    </div>
                    <Link to="/login" className="registration-container_have-autorisation_enter">
                        Войти
                    </Link>
                </div>
            </form>
        </div>
    );
}