import ElasticSearch from '../components/ElasticItems';

export default function ChoosingDirection() {
    
    return (
        <>
            <div className="wrapper">
                <div className="left-part">
                    <img src="../images/polygon2.png" className="polygon2" alt="Polygon" />
                    <img src="../images/rectangle2.png" className="rectangle2" alt="Rectangle" />
                    <img src="../images/ellipse22.png" className="ellipse22" alt="Ellipse" />
                    <div className="container-title_website">
                        <img src="../images/whitelogo.png" alt="Логотип UrFuture" />
                        <h1>UrFuture</h1>
                    </div>
                    <div className="title-description_website">
                        ИНДИВИДУАЛЬНЫЕ ОБРАЗОВАТЕЛЬНЫЕ ТРАЕКТОРИИ ИРИТ-РТФ
                    </div>
                </div>
                <div className="choosing-direction_container">
                    <h2>Выберите ваше направление</h2>
                    <div className="directions-container">
                        <div className="search-container">
                            <img className="search-container_img" src="../images/search-icon.svg" alt="Лупа" />
                            <ElasticSearch />
                        </div>
                        <ul className="elastic-directions">
                            <li><button>09.03.01 Информатика и вычислительная техника</button></li>
                            <li><button>09.03.03 Прикладная информатика</button></li>
                            <li><button>09.03.04 Программная инженерия</button></li>
                            <li><button>11.03.01 Радиотехника</button></li>
                            <li><button>27.03.04 Управление в технических системах</button></li>
                            <li><button>29.03.03 Технология полиграфического и упаковочного производства</button></li>
                            <li><button>11.03.03 Конструирование и технология электронных средств</button></li>
                            <li><button>11.03.02 Инфокоммуникационные технологии и системы связи</button></li>
                            <li><button>11.05.01 Радиоэлектронные системы и комплексы</button></li>
                            <li><button>10.05.04 Информационно-аналитические системы безопасности</button></li>
                            <li><button>oyy</button></li> 
                            <li><button>cool</button></li>
                            <li><button>hi</button></li>
                            <li><button>oyy</button></li>
                            <li><button>cool</button></li>
                            <li><button>oyy</button></li>
                            <li><button>cool</button></li>
                        </ul>
                    </div>
                    <a href="#">
                        <button className="choosing-direction_container_continue">
                            Продолжить
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}