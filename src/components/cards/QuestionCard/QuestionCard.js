import "./QuestionCard.css"

const QuestionCard = ({ src, handleClick }) => {
    return (
        <div
            className="qc-container"
            onClick={handleClick}
        >
            <img
                className="qc-img"
                src={src}
                alt={src}
            />
        </div>
    )
}

export default QuestionCard
