import Panel from "./Panel"

export default function Loading() {
    return (
        <>
            <Panel />
            <div className="loading-wrapper">
                <div className="loading">
                    <p className="loading-text">Загрузка</p>
                    <span className="dot"/>
                    <span className="dot"/>
                    <span className="dot"/>
                </div>
            </div>
        </>
    )
}