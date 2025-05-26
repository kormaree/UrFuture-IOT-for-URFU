import { useState, useEffect } from 'react';
import { fetchUserProfessionDetail } from '../api/users';
import { type ProfessionDetail } from '../api/professions';
import Panel from "../components/Panel";
import ProfessionInfoPoints from '../components/ProfessionInfoPoints';

export default function ChosenProfession() {
    const [profession, setProfession] = useState<ProfessionDetail | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetchUserProfessionDetail()
            .then(data => setProfession(data))
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <div>Загрузка выбранной профессии...</div>;
    }
    if (!profession) {
        return <div>Профессия не выбрана</div>;
    }

    return (
        <>
            <Panel />
            <div className="profession-container-2">
                <h1 className="page-title">Ваша выбранная профессия:</h1>
                <div className="profession-cart-2">
                    <img src='/images/Block_prof_2.png' alt={profession.name} />
                    <div className="profession-names-2">{profession.name}</div>
                </div>

                <ProfessionInfoPoints />
            </div>
        </>
    );
}
