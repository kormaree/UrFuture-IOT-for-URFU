import React, { useState, useContext } from 'react';
import Panel from "../components/Panel";
import '../styles/style.css'
import { AuthContext } from '../context/AuthContext';
import { updateUserProfile } from '../api/users';

export default function EditProfile() {
    const auth = useContext(AuthContext)!;
    const user = auth.user;
    const [firstName, setFirstName] = useState<string>(user.first_name);
    const [lastName, setLastName] = useState<string>(user.last_name);
    const [patronymic, setPatronymic] = useState<string>(user.patronymic);
    const [academicGroup, setAcademicGroup] = useState<string>(user.academic_group || '');
    const [email, setEmail] = useState<string>(user.email);

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [newPasswordConfirm, setNewPasswordConfirm] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSavingProfile, setIsSavingProfile] = useState(false);
    const [isChangingPassword, setIsChangingPassword] = useState(false);
    const [error, setError] = useState<string>('');

    const handleSaveProfile = () => {
      setError('');
      setIsSavingProfile(true);
      updateUserProfile({
        first_name: firstName,
        last_name: lastName,
        patronymic: patronymic,
        academic_group: academicGroup || '',
        email: email,
      })
        .catch(err => {
          console.error(err);
          const data = err.response?.data;
          if (data) {
            const messages = Object.values(data).flat().join(' ');
            setError(messages);
          } else {
            setError('Не удалось обновить профиль');
          }
        })
        .finally(() => {
          setIsSavingProfile(false);
        });
    };

    const handleChangePassword = () => {
      setError('');
      if (newPassword !== newPasswordConfirm) {
        setError('Новый пароль и подтверждение пароля не совпадают');
        return;
      }
      setIsChangingPassword(true);
      updateUserProfile({
        current_password: currentPassword,
        new_password: newPassword,
        new_password_confirm: newPasswordConfirm,
      })
        .catch(err => {
          console.error(err);
          const data = err.response?.data;
          if (data) {
            const messages = Object.values(data).flat().join(' ');
            setError(messages);
          } else {
            setError('Не удалось сменить пароль');
          }
        })
        .finally(() => {
          setIsChangingPassword(false);
          setCurrentPassword('');
          setNewPassword('');
          setNewPasswordConfirm('');
        });
    };

    const handleLogoutClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const confirmLogout = () => {
        auth.logout();
        setIsModalOpen(false);
    };

    return (
        <>
        <Panel />
        <div className="profile-page">
            <h1 className="page-title-2">Редактирование профиля</h1>
            <p className="page-description">
                Проверьте корректность данных. Если обнаружили ошибку, сообщите в техническую поддержку.
            </p>

        <div className="input-block">
            <label>Фамилия</label>
            <input
                className="input-field"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </div>

        <div className="input-block">
            <label>Имя</label>
            <input
                className="input-field"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </div>

        <div className="input-block">
            <label>Отчество</label>
            <input
                className="input-field"
                type="text"
                value={patronymic}
                onChange={(e) => setPatronymic(e.target.value)}
            />
        </div>

        <div className="input-block">
            <label>Академическая группа</label>
            <input
                className="input-field"
                type="text"
                value={academicGroup}
                onChange={(e) => setAcademicGroup(e.target.value)}
            />
        </div>

        <div className="input-block">
            <label>Email</label>
            <input
                className="input-field"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <button
          className="save-button"
          onClick={handleSaveProfile}
          disabled={isSavingProfile}
        >
          {isSavingProfile ? 'Сохранение...' : 'Сохранить'}
        </button>

        <div className="password-section">
            <div className="password-block">
            <label>Текущий пароль</label>
            <input
                className="password-field"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Введите текущий пароль"
            />
            </div>

            <div className="password-block">
            <label>Новый пароль</label>
            <input
                className="password-field"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Введите новый пароль"
            />
            </div>

            <div className="password-block">
            <label>Повторите новый пароль</label>
            <input
                className="password-field"
                type="password"
                value={newPasswordConfirm}
                onChange={(e) => setNewPasswordConfirm(e.target.value)}
                placeholder="Повторите новый пароль"
            />
            </div>

            <button
              className="save-button"
              onClick={handleChangePassword}
              disabled={isChangingPassword}
            >
              {isChangingPassword ? 'Сохранение...' : 'Сохранить пароль'}
            </button>
        </div>

        {error && (
          <div className="error-block" style={{ color: 'red', marginTop: '16px' }}>
            {error}
          </div>
        )}

        <div className="logout" onClick={handleLogoutClick}>
            <img src="/images/Arrow_Left_SM.svg" alt="Назад" />
            <span>Выход из сервиса</span>
        </div>
        </div>

        {isModalOpen && (
        <div className="modal-overlay">
            <div className="modal">
            <img
                src="/images/Close_MD.svg"
                className="modal-close"
                alt="Закрыть"
                onClick={closeModal}
            />
            <p className="modal-text">Вы уверены, что хотите выйти?</p>
            <div className="modal-buttons">
                <button className="modal-ok" onClick={confirmLogout}>
                ОК
                </button>
                <button className="modal-cancel" onClick={closeModal}>
                Отмена
                </button>
            </div>
            </div>
        </div>
        )}
        </>
    );
}