import "./StartChallangeButton.css"

const StartChallangeButton = ({ startTest }) => {
    return (
        <button
            className="scb-btn"
            onClick={startTest}
        >Start Challange</button>
    )
}

export default StartChallangeButton
