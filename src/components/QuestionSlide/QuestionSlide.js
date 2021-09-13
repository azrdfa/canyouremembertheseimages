import { useState, useRef } from "react"
import { calculateResult } from "../../utils"
import { shuffleArray } from "../../utils"
import "./QuestionSlide.css"

const QuestionSlide = ({ questionCount, categoryFilename, setQuestionSlidePayload }) => {
    const [questionIdx, setQuestionIdx] = useState(0)
    const [isFinish, setIsFinish] = useState(false)
    const answers = useRef([])
    const [leftIdx, rightIdx] = shuffleArray([questionIdx * 2, questionIdx * 2 + 1])

    const handleChooseImage = (value) => {
        if (value % 2 === 0) {
            answers.current.push(true)
        } else {
            answers.current.push(false)
        }
        if (questionIdx >= questionCount - 1) {
            setIsFinish(true)
        } else {
            setQuestionIdx(questionIdx + 1)
        }
    }

    const sendPayload = () => {
        setQuestionSlidePayload({
            result: calculateResult(answers.current),
            showResult: true
        })
    }

    const askingQuestion = <div>
        <div className="qs-img-container">
            <img
                className="qs-img"
                src={`${categoryFilename[leftIdx]["default"]}`}
                alt={`${categoryFilename[leftIdx]["default"]}`}
                onClick={() => handleChooseImage(leftIdx)}
            />
            <h2 className="qs-img-label">This one?</h2>
        </div>
        <div className="qs-img-container">
            <img
                className="qs-img"
                src={`${categoryFilename[rightIdx]["default"]}`}
                alt={`${categoryFilename[rightIdx]["default"]}`}
                onClick={() => handleChooseImage(rightIdx)}
            />
            <h2 className="qs-img-label">Or this one?</h2>
        </div>
    </div>

    const questionFinish = <>
        <h1>Finish</h1>
        <button
            className="qs-btn"
            onClick={sendPayload}
        >See The Result</button>
    </>

    return (
        <div className="qs-vp">
            <div className="qs-flex-container">
                {!isFinish &&
                    <>
                        <h2 className="qs-h2">Wich image you have seen?</h2>
                        <h2 className="qs-h2">Question #{questionIdx + 1}</h2>
                        {askingQuestion}
                    </>
                }
                {isFinish && questionFinish}
            </div>
        </div>
    )
}

export default QuestionSlide