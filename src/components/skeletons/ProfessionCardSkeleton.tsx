import '../../styles/style.css';

export default function ProfessionCardSkeleton() {
    return (
        <div className="professions-skeleton-cards-wrapper">
            <div className="profession-card-skeleton">
                <div className="skeleton-profession-wrapper">
                    <div className="skeleton-line text" />
                    <div className="skeleton-line text short" />
                </div>
                <div className="skeleton-view-wrapper">
                    <div className="skeleton-view-button"></div>
                </div>
            </div>
        </div>
    );
}