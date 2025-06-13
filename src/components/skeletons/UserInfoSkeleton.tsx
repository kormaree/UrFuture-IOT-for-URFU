export default function UserInfoSkeleton() {
    return (
        <>
        <div className="user-info-skeleton">
            <div className="skeleton-user">
                <div className="skeleton-line user-name" />
                <div className="skeleton-avatar" />
            </div>
            <div className="skeleton-details">
                <div className="detail">
                    <div className="skeleton-line label" />
                    <div className="skeleton-line value" />
                </div>
                <div className="detail">
                    <div className="skeleton-line label" />
                    <div className="skeleton-line value" />
                </div>
            </div>
        </div>
        <div className="skeleton-profession">
            <div className="skeleton-line profession-title long" />
            <div className="skeleton-line profession-title" />
        </div>
        </>
    );
}