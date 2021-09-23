import "./QuestionCard.css"
import { useState, useEffect, useRef } from "react"

const QuestionCard = ({ frontSrc, rearSrc, submitAnswer, questionAnswered }) => {
    const [toggle, setToggle] = useState(false)
    const initPassed = useRef(false)

    useEffect(() => {
        if (questionAnswered === false) {
            if (!initPassed.current) {
                initPassed.current = true
            } else {
                setToggle(!toggle)
            }
        }
    }, [questionAnswered])

    const handleClick = () => {
        if (!questionAnswered) {
            setToggle(!toggle)
            submitAnswer()
        }
    }

    return (
        <div
            className={`qc-card ${toggle ? "qc-flip" : "null"} ${questionAnswered ? "qc-disabled" : "null"}`}
            onClick={handleClick}
        >
            <img
                className="qc-rearside"
                src={rearSrc}
                alt={rearSrc}
            />
            <img
                className="qc-frontside"
                src={frontSrc}
                alt={frontSrc}
            />
        </div>
    )
}

export default QuestionCard
