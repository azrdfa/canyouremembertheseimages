import { useState, useRef, useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { pickSolution, determineResultURL } from "../../utils"
import "./QuestionSlide.css"

const QuestionSlide = ({ questionCount, category, difficulty }) => {
    const [currQuestion, setCurrQuestion] = useState(0)
    const [radioVal, setRadioVal] = useState(null)
    const [resultURL, setResultURL] = useState("")
    const [isFinish, setIsFinish] = useState(false)
    const savedRadioVal = useRef([])
    const currAnswer = useRef()
    const imagesPath = process.env.PUBLIC_URL + `/assets/images/${category}`

    useEffect(() => {
        currAnswer.current = pickSolution(category, difficulty)
    }, [category, difficulty])

    const handleSubmit = () => {
        if (radioVal === currAnswer.current[currQuestion]) {
            savedRadioVal.current.push(true)
        } else {
            savedRadioVal.current.push(false)
        }
        if (currQuestion < questionCount - 1) {
            setCurrQuestion(currQuestion + 1)
            setRadioVal(null)
        } else if (currQuestion >= questionCount - 1) {
            setResultURL(determineResultURL(savedRadioVal.current))
            setIsFinish(true)
        }
    }

    const askingQuestion = <div>
        <div className="qs-flex-container">
            <div className="qs-flex-item">
                <img
                    id="qs-img-0"
                    className="qs-img"
                    src={`${imagesPath}/right/right-${currQuestion}.jpeg`}
                    alt={`${imagesPath}/right/right-${currQuestion}.jpeg`}
                /><br/>
                <label htmlFor="qs-img-0">image 0</label>
            </div>
            <div className="qs-flex-item">
                <img
                    id="qs-img-1"
                    className="qs-img"
                    src={`${imagesPath}/wrong/wrong-${currQuestion}.jpeg`}
                    alt={`${imagesPath}/wrong/wrong-${currQuestion}.jpeg`}
                /><br/>
                <label htmlFor="qs-img-1">image 1</label>
            </div>
        </div>
        <input
            type="radio"
            name="question"
            id="qs-radio-0"
            checked={radioVal === 0}
            value={0}
            onChange={(e) => {
                setRadioVal(parseInt(e.target.value))
            }}
        />
        <label htmlFor="qs-radio-0">image 0</label><br />
        <input
            type="radio"
            name="question"
            id="qs-radio-1"
            checked={radioVal === 1}
            value={1}
            onChange={(e) => {
                setRadioVal(parseInt(e.target.value))
            }}
        />
        <label htmlFor="qs-radio-1">image 1</label><br />
        <button
            disabled={radioVal === null}
            onClick={handleSubmit}
        >Submit</button>
    </div>

    const questionFinish = <div>
        <h2>Test Finish!</h2>
        <LinkContainer to={resultURL}>
            <button>to ResultPage</button>
        </LinkContainer>
    </div>

    return (
        <div>
            <h1 className="qs-h1">QuestionSlide (component)</h1>
            {!isFinish && askingQuestion}
            {isFinish && questionFinish}
        </div>
    )
}

export default QuestionSlide