import { useNavigate } from 'react-router-dom';
import Panel from "../components/Panel";

export default function ProfessionPage() {
    const navigate = useNavigate();

    return (
        <>
            <Panel />
            
            <div className="profession-container">
                <div className="profession-header">
                    <img 
                        src="/images/Arrow-Left.png" 
                        alt="Назад" 
                        className="back-arrow" 
                        onClick={() => navigate(-1)}
                    />
                    <h1 className="profession-title">Специалист по виртуальному прототипированию</h1>
                    <button 
                        className="choose-profession-btn"
                        onClick={() => navigate('/chosen-profession')}
                    >
                        выбрать профессию
                    </button>
                </div>
                
                <div className="profession-description">
                    <p>Специалист по виртуальному прототипированию - это специалист, который использует компьютерные технологии для создания трехмерных моделей продуктов или систем. Эти виртуальные прототипы позволяют командам дизайнеров и инженеров тестировать функциональность, производительность и надежность продукта до его физического производства.</p>
                    
                    <p>Профессия требует знания в области компьютерного моделирования, инженерии и дизайна.</p>
                    
                    <p>Специалисты по виртуальному прототипированию могут работать в различных отраслях, включая автомобильную промышленность, аэрокосмическую промышленность и производство потребительских товаров.</p>
                </div>
                
                <div className="requirements-section">
                    <h2 className="section-title">Требующиеся знания:</h2>
                    <ul className="requirements-list">
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Компьютерное моделирование: создание виртуального образа изделия
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Моделирование технологических процессов: использование средств высокопроизводительных вычислительных систем
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Анализ результатов моделирования: работа в виртуальных средах
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Технологии виртуальной и дополненной реальности: создание виртуального прототипа изделия
                        </li>
                    </ul>
                </div>
                
                <div className="requirements-section">
                    <h2 className="section-title">Требующиеся навыки:</h2>
                    <ul className="requirements-list">
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Ответственность и исполнительность
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Креативность и работоспособность
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Оперативность и целеустремленность
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Умение грамотно излагать мысли устно и письменно
                        </li>
                        <li className="requirement-item">
                            <img src="/images/clip.svg" alt="" className="requirement-icon" />
                            Проактивность и готовность брать ответственность
                        </li>
                    </ul>
                </div>
                
                <div className="tools-section">
                    <h2 className="tools-title">Инструменты:</h2>
                    <p className="tools-list">
                        Balsamia, Axure RP, InVision, Figma, Adobe XD, Sketch, Adobe After Effects, Optimal Workshop, Hotjar, Crazy Egg, UsabilityHub, Zeplin
                    </p>
                </div>
            </div>
        </>
    );
}