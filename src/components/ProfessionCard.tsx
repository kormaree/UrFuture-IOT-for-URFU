interface ProfessionCardProps {
    name: string;
    onClick: () => void;
}

export default function ProfessionCard({
    name,
    onClick
}: ProfessionCardProps) {
    return (
        <div className="profession-card">
            <img src="/images/Card_prof.png" alt={name} />
            <div className="profession-info">
                <h3 className="profession-name">{name}</h3>
            </div>
            <button className="view-button" onClick={onClick}>
                Посмотреть
            </button>
        </div>
    );
}