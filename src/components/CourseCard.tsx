interface CourseCardProps {
    name: string;
    onClick: () => void;
}

export default function CourseCard({
    name,
    onClick
}: CourseCardProps) {
    return (
        <div className="completed-courses_container-item" onClick={onClick}>
            {name}
        </div>
    );
}