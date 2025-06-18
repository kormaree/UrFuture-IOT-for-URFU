import { type Discipline } from '../api/disciplines';

interface SemesterDisciplinesProps {
    semester: number;
    courses: Discipline[];
}

export default function SemesterCoursesWithoutRecomendations({ semester, courses }: SemesterDisciplinesProps) {
    return (
        <div className="semester-block simple-view">
            <h3 className="semester-title">Семестр {semester}</h3>
            <div className="semester-divider" />

            <div className="subjects-container simple-view">
                {courses.map((rec, idx) => (
                    <div className="subject-item simple-view" key={idx} data-category={rec.category}>
                        <p className="subject-name">
                            {rec.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}