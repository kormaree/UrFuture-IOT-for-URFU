export default function MainInfoSkeleton() {
    return (
        <div className="info-skeleton">
        <div className="skeleton-header">
            <div className="skeleton-line header-line short" />
            <div className="skeleton-line header-line long" />
        </div>
        <div className="skeleton-user">
            <div className="skeleton-line user-name" />
            <div className="skeleton-avatar" />
        </div>
        <div className="skeleton-details">
            <div className="detail">
            <div className="skeleton-line label" />
            <div className="skeleton-line value short" />
            </div>
            <div className="detail">
            <div className="skeleton-line label" />
            <div className="skeleton-line value long" />
            </div>
        </div>
        <div className="skeleton-profession">
            <div className="skeleton-line profession-title short" />
            <div className="skeleton-shape" />
        </div>
        </div>
    );
}