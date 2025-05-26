import Panel from "../components/Panel";

export default function Direction() {
  return (
    <>
      <Panel />
      <div className="completed-courses">
        <h1>Пройденные курсы и дисциплины</h1>
        <div>
          <button data-path="one" className="dropdown-toggle">
            <h2>Выбор семестра</h2>
            <img id="img_dropdown-off" className="img_dropdown-active" src="../images/dropdown-off.svg" />
            <img id="img_dropdown-on" className="img_dropdown-not-active" src="../images/dropdown-on.svg" />
          </button>
          <ul data-target="one" className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><button className="dropdown-item">1 семестр</button></li>
            <li><button className="dropdown-item">2 семестр</button></li>
            <li><button className="dropdown-item">3 семестр</button></li>
            <li><button className="dropdown-item">4 семестр</button></li>
            <li><button className="dropdown-item">5 семестр</button></li>
            <li><button className="dropdown-item">6 семестр</button></li>
            <li><button className="dropdown-item">7 семестр</button></li>
            <li><button className="dropdown-item">8 семестр</button></li>
          </ul>
        </div>
        <ul className="completed-courses_container">
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index}>Ляляля</li>
          ))}
        </ul>
      </div>
    </>
  );
}