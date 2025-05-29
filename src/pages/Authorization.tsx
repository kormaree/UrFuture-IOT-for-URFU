import React, { useState, useContext } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import '../styles/style.css';

export default function Authorization() {
    const auth = useContext(AuthContext)!;
    const navigate = useNavigate();
    const [form, setForm] = useState({ email: '', password: '' });
    const [error, setError] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    if (!auth.loading && auth.user) {
        return <Navigate to="/home" replace />;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await auth.login(form.email, form.password);
            navigate('/home');
        } catch {
            setError('Неверный email или пароль');
        } finally {
            setIsSubmitting(false);
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

            <form className="authorization-container" onSubmit={handleSubmit}>
                <h2>Авторизация</h2>

                <div className="authorization-container_email">
                    <h3>Email</h3>
                    <div className="authorization-container_email_input">
                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
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
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="authorization-container_password_input_field"
                            placeholder="Введите пароль"
                        />
                        <img
                            className="authorization-container_email_input_faceicon"
                            src="/images/faceicon.svg"
                            alt="Иконка пользователя"
                        />
                    </div>
                </div>

                {error && (
                    <span className="authorization-container_password_error-message">
                        {error}
                    </span>
                )}

                <button
                  type="submit"
                  className="authorization-container_enter"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Загрузка...' : 'Войти'}
                </button>

                <div className="authorization-container_no-registration">
                    <div className="authorization-container_no-registration_question">
                        У вас нет учетной записи?
                    </div>
                    <Link to="/register" className="authorization-container_no-registration_registracion">
                        Зарегистрироваться
                    </Link>
                </div>
            </form>
        </div>
    );
}