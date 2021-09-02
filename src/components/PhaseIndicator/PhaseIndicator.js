import "./PhaseIndicator.css"

const PhaseIndicator = ({ phase }) => {
    return (
        <div className="pi-vp">
            <div className="pi-flex-container">
                <h1>{phase}</h1>
            </div>
        </div>
    )
}

export default PhaseIndicator
