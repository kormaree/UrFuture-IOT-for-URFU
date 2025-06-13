import '../../styles/style.css';

export default function CourseCardSkeleton() {
    return (
        <div className="course-card-skeleton">
            <div className="skeleton-line title" />
            <div className="skeleton-line text short" />
            <div className="skeleton-line text" />
        </div>
    );
}