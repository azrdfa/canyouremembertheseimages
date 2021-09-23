import "./PrimaryButton.css"

const PrimaryButton = ({ label, handleClick, disabled }) => {
    return (
        <button
            className={`pb-btn ${disabled ? "pb-disabled" : null}`}
            onClick={handleClick}
            disabled={disabled}
        >{label}</button>
    )
}

export default PrimaryButton
