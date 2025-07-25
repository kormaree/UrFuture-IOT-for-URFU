import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import Panel from "../components/Panel";
import { fetchDirectionDetail, type Direction } from '../api/directions';
import Loading from '../components/Loading';

export default function Direction() {
    const auth = useContext(AuthContext)!;
    const user = auth.user;
    
    const [loading, setLoading] = useState(false);
    const [directionDetail, setDirectionDetail] = useState<Direction>();

    useEffect(() => {
        if (auth.loading || !user?.direction_id) return;
        setLoading(true);
        fetchDirectionDetail(user.direction_id)
            .then(data => setDirectionDetail(data))
            .finally(() => setLoading(false));
    }, [auth.loading, user?.direction_id]);

    if (auth.loading || !user || loading) {
        return <Loading />;
    }

    return (
        <>
            <Panel />
            
            <div className="my-direction">
                <h1>Мое направление</h1>
                <div className="my-direction_student">
                    <img 
                        style={{ width: '170px', height: '170px' }} 
                        src="/images/icon-gray.png" 
                        alt="Иконка" 
                    />
                    <div className="my-direction_student_info">
                        <h2>{user?.last_name} {user?.first_name} {user?.patronymic}</h2>
                        <div className="my-direction_student_info_container">
                            <div className="my-direction_student_info_container_group">
                                <h3>Группа:</h3>
                                <h4>{user?.academic_group || '—'}</h4>
                            </div>
                            <div className="my-direction_student_info_container_email">
                                <h3>Электронная почта:</h3>
                                <h4>{user.email}</h4>
                            </div>
                            <div className="my-direction_student_info_container_direction">
                                <h3>Мое направление:</h3>
                                <h4>
                                  {user.direction}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
                <span className="my-direction_info-of-direction">
                    {directionDetail?.description}
                </span>
                <div className="my-direction_info-main-persons">
                    <div className="my-direction_info-main-persons_container">
                        <img src="/images/Obabkov.png" alt="Фото Ильи Николаевича" />
                        <div className="my-direction_info-main-persons_container_rop">
                            <h2>Обабков Илья Николаевич</h2>
                            <h3>Ректор</h3>
                            <div className="my-direction_info-main-persons_container_rop_info">
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Адрес:</h4>
                                    <p>ул., Мира, 32</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Аудитория:</h4>
                                    <p>Р-332</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Телефон:</h4>
                                    <p>(343) 375-97-00</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Email:</h4>
                                    <p>i.n.obabkov@urfu.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-direction_info-main-persons_container">
                        <img src="/images/Obabkov.png" alt="Фото Ильи Николаевича" />
                        <div className="my-direction_info-main-persons_container_rop">
                            <h2>Обабков Илья Николаевич</h2>
                            <h3>Директор</h3>
                            <div className="my-direction_info-main-persons_container_rop_info">
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Адрес:</h4>
                                    <p>ул., Мира, 32</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Аудитория:</h4>
                                    <p>Р-332</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Телефон:</h4>
                                    <p>(343) 375-97-00</p>
                                </div>
                                <div className="my-direction_info-main-persons_container_rop_info_item">
                                    <h4>Email:</h4>
                                    <p>i.n.obabkov@urfu.ru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}