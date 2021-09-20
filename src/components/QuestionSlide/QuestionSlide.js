import { useState, useRef } from "react"
import { calculateResult } from "../../utils"
import { shuffleArray } from "../../utils"
import "./QuestionSlide.css"
import { MediumCard, PrimaryButton } from "../../components"

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

    const askingQuestion = <div className="qs-flex-container">
        <MediumCard
            label="This one?"
            src={`${categoryFilename[leftIdx]["default"]}`}
            handleClick={() => handleChooseImage(leftIdx)}
        />
        <MediumCard
            label="Or this one?"
            src={`${categoryFilename[rightIdx]["default"]}`}
            handleClick={() => handleChooseImage(rightIdx)}
        />
    </div>

    const questionFinish = <>
        <h1 className="qs-h0">Finish</h1>
        <PrimaryButton 
            label="See Results"
            handleClick={sendPayload}
        />
    </>

    return (
        <div className="qs-container">
            {!isFinish &&
                <>
                    <h2 className="qs-h2">Wich image you have seen?</h2>
                    <h2 className="qs-h2">Question #{questionIdx + 1}</h2>
                    {askingQuestion}
                </>
            }
            {isFinish && questionFinish}
        </div>
    )
}

export default QuestionSlide