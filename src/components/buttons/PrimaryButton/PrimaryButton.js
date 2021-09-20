import "./PrimaryButton.css"

const PrimaryButton = ({ label, handleClick }) => {
    return (
        <button
            className="p-btn"
            onClick={handleClick}
        >{label}</button>
    )
}

export default PrimaryButton
