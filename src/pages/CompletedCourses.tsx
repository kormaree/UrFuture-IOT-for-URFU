import Panel from "../components/Panel";
import DropdownComponent from "../components/DropdownToggle";

export default function CompletedCourses() {
  return (
    <>
      <Panel />
      <div className="completed-courses">
        <h1>Пройденные курсы и дисциплины</h1>
        <div>
          <DropdownComponent toggleId="dropdown-toggle-1" menuId="dropdown-menu-1" />
          <button 
            id="dropdown-toggle-1"
            className="dropdown-toggle"
          >
            <h2>Выбор семестра</h2>
            <img className="img_dropdown-active" src="../images/dropdown-off.svg" alt="Закрыто" />
            <img className="img_dropdown-not-active hidden" src="../images/dropdown-on.svg" alt="Открыто" />
          </button>
          <ul 
            id="dropdown-menu-1"
            className="dropdown-menu-semesters"
          >
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