import { useState } from 'react';
import { type CourseRecommendation } from '../api/recommendations';

interface SemesterCoursesProps {
    semester: number;
    courses: CourseRecommendation[];
}

export default function SemesterCourses({ semester, courses }: SemesterCoursesProps) {
    const [hovered, setHovered] = useState<number | null>(null);

    return (
        <div className="semester-block">
            <h3 className="semester-title">Семестр {semester}</h3>
            <div className="semester-divider" />

            <div className="subjects-container">
                {courses.map((rec, idx) => {
                return (
                    <div className="recommendation-wrapper" key={idx}>
                        <div
                            className="subject-item"
                            data-category={rec.discipline_category  }
                            style={{
                                opacity: !rec.course ? 0.4 : 1,
                                cursor: !rec.course ? 'auto' : 'pointer'
                             }}
                            onMouseEnter={() => setHovered(idx)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <p className="subject-name">
                                {rec.discipline}
                            </p>
                        </div>
                        <div 
                            className={
                                `recommendation-tooltip
                                ${hovered === idx && rec.course ? ' visible' : ''}`}
                        >
                            {rec.course}
                        </div>
                    </div>
                );
                })}
            </div>
        </div>
    );
}