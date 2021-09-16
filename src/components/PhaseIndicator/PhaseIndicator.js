import "./PhaseIndicator.css"

const PhaseIndicator = ({ phase }) => {
    return (
        <div className="pi-container">
            <h1>{phase}</h1>
        </div>
    )
}

export default PhaseIndicator
