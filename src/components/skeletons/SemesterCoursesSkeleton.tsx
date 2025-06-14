export default function SemesterCoursesSkeleton() {
    return (
    <div className="semester-block semester-block-skeleton">
        <div className="skeleton-line skeleton-semester-title" />
        <div className="skeleton-line skeleton-semester-divider" />
        <div className="subjects-container">
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="skeleton-line skeleton-subject-item" />
            ))}
        </div>
    </div>
  );
}