import { useState, useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ElasticSearch from '../components/ElasticItems';
import { type Direction, fetchDirections } from '../api/directions';
import { AuthContext } from '../context/AuthContext';
import RegistrationLeftPart from '../components/RegistrationLeftPart';

export default function ChoosingDirection() {
    const [directions, setDirections] = useState<Direction[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedDirection, setSelectedDirection] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const location = useLocation();
    const navigate = useNavigate();
    const auth = useContext(AuthContext)!;
    const formData = location.state as {
        last_name: string;
        first_name: string;
        patronymic: string;
        email: string;
        password: string;
        passwordConfirm: string;
    };

    useEffect(() => {
        if (!location.state) {
            navigate('/register');
        }
    }, [location.state, navigate]);

    useEffect(() => {
        setLoading(true);
        fetchDirections()
            .then(setDirections)
            .finally(() => setLoading(false));
    }, []);

    const handleContinue = async () => {
        if (!selectedDirection) {
            setError('Выберите направление');
            return;
        }
        setIsSubmitting(true);
        try {
            await auth.register({ ...formData, direction: selectedDirection });
            navigate('/home');
        } catch (err: any) {
            if (err.response?.data?.email) {
                setError('Пользователь с таким email уже зарегистрирован');
            } 
            else if (err.response.status >= 500) {
                setError('Внутренняя ошибка сервера, повторите позже');
            }
            else {
                setError(err.message || 'Ошибка регистрации');
            }
        } finally {
            setIsSubmitting(false);
        }
    };
    
    return (
        <>
            <div className="wrapper">
                <RegistrationLeftPart />
                <div className="choosing-direction_container">
                    <h2>Выберите ваше направление</h2>
                    <div className="directions-container">
                        <div className="search-container">
                            <img className="search-container_img" src="../images/search-icon.svg" alt="Лупа" />
                            <ElasticSearch onSelect={setSelectedDirection} />
                        </div>
                        <ul className="elastic-directions">
                            {loading 
                                ? <p style={{paddingLeft: '30px'}}>Загрузка…</p>
                                : directions.map(dir => (
                                <li key={dir.id}>
                                    <button
                                      data-id={dir.id.toString()}
                                      onClick={() => setSelectedDirection(dir.id.toString())}
                                    >
                                      {dir.name} {dir.name_text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                        {error && <div className="choosing-direction-error-message">{error}</div>}

                        <button
                          type="button"
                          className="choosing-direction_container_continue"
                          onClick={handleContinue}
                        >
                          {isSubmitting ? 'Загрузка...' : 'Продолжить'}
                        </button>
                </div>
            </div>
        </>
    );
}