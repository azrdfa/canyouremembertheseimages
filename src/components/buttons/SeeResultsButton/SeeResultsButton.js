import "./SeeResultsButton.css"

const SeeResultsButton = ({ sendPayload }) => {
    return (
        <button
            className="srb-btn"
            onClick={sendPayload}
        >See Results</button>
    )
}

export default SeeResultsButton
