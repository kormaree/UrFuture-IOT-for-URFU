import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/style.css';
import RegistrationLeftPart from '../components/RegistrationLeftPart';

export default function Register(){
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
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (form.password.length < 8) {
            setError('Пароль должен содержать минимум 8 символов');
            return;
        }
        if (form.password !== form.passwordConfirm) {
            setError('Пароли не совпадают');
            return;
        }
        navigate('/choosing-direction', { state: form });
    };

    return (
        <div className="wrapper">
            <RegistrationLeftPart />

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
                            required
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
                            required
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
                        required
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
                        required
                    />
                </div>

                <div className="registration-container_password">
                    <h3>Пароль*</h3>
                    <div className="registration-container_password_input">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="registration-container_password_input_field"
                            placeholder="Введите пароль"
                            required
                        />
                        <img
                            className="registration-container_password_input_not-view"
                            src={showPassword ? "/images/show-password.png" : "/images/hide-password.png"}
                            alt="Спрятать пароль"
                            onClick={() => setShowPassword(!showPassword)}
                        />
                    </div>
                </div>

                <div className="registration-container_repeat-password">
                    <h3>Повторите пароль*</h3>
                    <div className="registration-container_repeat-password_input">
                        <input
                            type={showPasswordConfirm ? "text" : "password"}
                            name="passwordConfirm"
                            value={form.passwordConfirm}
                            onChange={handleChange}
                            className="registration-container_repeat-password_input_field"
                            placeholder="Введите пароль"
                            required
                        />
                        <img
                            className="registration-container_password_input_not-view"
                            src={showPasswordConfirm ? "/images/show-password.png" : "/images/hide-password.png"}
                            alt="Спрятать пароль"
                            onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}
                        />
                    </div>
                </div>

                {error && <div className="registration-error-message">{error}</div>}

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