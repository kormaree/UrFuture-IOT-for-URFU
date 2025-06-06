interface CourseCardProps {
    name: string;
    discipline: string;
    semester: string;
    onClick: () => void;
}

export default function CourseCard({
    name,
    discipline,
    semester,
    onClick
}: CourseCardProps) {
    return (
        <div className="completed-courses_container-item" onClick={onClick}>
            <h2>{name}</h2>
            <div>{discipline}{" , "}{semester}</div>
        </div>
    );
}