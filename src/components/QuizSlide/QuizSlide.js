import { useState, useRef } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { pickSolution, countRightAnswer } from "../../utils"
import "./QuizSlide.css"

const imagesPath = process.env.PUBLIC_URL + "/assets/images/"
const QuizSlide = ({ quizCount, category, difficulty }) => {
    const [currQuiz, setCurrQuiz] = useState(0)
    const [radioVal, setRadioVal] = useState(null)
    const [isFinish, setIsFinish] = useState(false)
    const [resultUrl, setResultUrl] = useState("")
    const savedRadioVal = useRef([])
    const currAnswer = useRef(pickSolution(category, difficulty))

    const handleSubmit = () => {
        if (radioVal === currAnswer.current[currQuiz]) {
            savedRadioVal.current.push(true)
        } else {
            savedRadioVal.current.push(false)
        }
        if (currQuiz < quizCount - 1) {
            setCurrQuiz(currQuiz + 1)
            setRadioVal(null)
        } else if (currQuiz >= quizCount - 1) {
            const currUrl = countRightAnswer(savedRadioVal.current)
            setResultUrl(currUrl)
            setIsFinish(true)
        }
    }

    const quizContent = <div>
        <h2>radioVal: {radioVal}</h2>
        <input
            type="radio"
            name="quiz"
            id="qs-radio-0"
            checked={radioVal === 0}
            value={0}
            onChange={(e) => {
                setRadioVal(parseInt(e.target.value))
            }}
        />
        <label htmlFor="qs-radio-0">{`default-${currQuiz}`}</label><br />
        <input
            type="radio"
            name="quiz"
            id="qs-radio-1"
            checked={radioVal === 1}
            value={1}
            onChange={(e) => {
                setRadioVal(parseInt(e.target.value))
            }}
        />
        <label htmlFor="qs-radio-1">{`default-non-${currQuiz}`}</label><br />
        <button
            disabled={radioVal === null}
            onClick={handleSubmit}
        >Submit</button>
    </div>

    const finishContent = <div>
        <LinkContainer to={`/result${resultUrl}`}>
            <button>to ResultPage</button>
        </LinkContainer>
    </div>

    return (
        <div>
            <h1 className="qs-h1">QuizSlide (component)</h1>
            {!isFinish && quizContent}
            {isFinish && finishContent}
        </div>
    )
}

export default QuizSlide