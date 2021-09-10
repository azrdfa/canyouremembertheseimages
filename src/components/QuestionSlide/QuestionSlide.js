import { useState, useRef } from "react"
import { useConstructor } from "../../custom_hooks"
import { calculateResult, cardinalToOrdinal } from "../../utils"
import { categoriesSolution, imagesFilename } from "../../constants"
import "./QuestionSlide.css"

const QuestionSlide = ({ questionCount, category, difficulty, setQuestionSlidePayload }) => {
    const [questionIdx, setQuestionIdx] = useState(0)
    const [isFinish, setIsFinish] = useState(false)
    const answers = useRef([])
    const solutions = useRef([])
    const imagesFilenameArr = imagesFilename[category]

    useConstructor(() => {
        solutions.current = categoriesSolution[category][difficulty]
    })

    const handleChooseImage = (value) => {
        if (value === solutions.current[questionIdx]) {
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
                src={`${imagesFilenameArr["right"][questionIdx]["default"]}`}
                alt={`${imagesFilenameArr["right"][questionIdx]["default"]}`}
                onClick={() => handleChooseImage(0)}
            />
            <h2 className="qs-img-label">This one?</h2>
        </div>
        <div className="qs-img-container">
            <img
                className="qs-img"
                src={`${imagesFilenameArr["wrong"][questionIdx]["default"]}`}
                alt={`${imagesFilenameArr["wrong"][questionIdx]["default"]}`}
                onClick={() => handleChooseImage(1)}
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
                        <h2 className="qs-h2">{cardinalToOrdinal(questionIdx + 1)} Question</h2>
                        {askingQuestion}
                    </>
                }
                {isFinish && questionFinish}
            </div>
        </div>
    )
}

export default QuestionSlide