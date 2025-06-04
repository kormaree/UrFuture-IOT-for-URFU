import { useNavigate } from 'react-router-dom';
import '../styles/style.css';

export default function NotFoundPage() {
    const navigate = useNavigate();
    return (
        <div className="error-404">
            <div className="error-container">
                <div className="oops">Oops!!</div>
                <img
                    src="/images/404.svg"
                    alt="404 Error"
                    className="error-image"
                />
                <div className="text-content">
                <div className="error-message-2">Что-то пошло не так...</div>
                <div className="sub-message">
                    Мы не смогли найти страницу, которую вы ищете
                </div>
                <button className="home-button" onClick={() => navigate('/')}>
                    Вернуться домой
                </button>
                </div>
            </div>
        </div>
    );
}