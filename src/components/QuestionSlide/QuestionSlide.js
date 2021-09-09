import { useState, useRef, useEffect } from "react"
import { LinkContainer } from "react-router-bootstrap"
import { determineResultURL, cardinalToOrdinal } from "../../utils"
import { categoriesSolution, imagesFilename } from "../../constants"
import "./QuestionSlide.css"

const QuestionSlide = ({ questionCount, category, difficulty }) => {
    const [questionIdx, setQuestionIdx] = useState(0)
    const [resultBatch, setResultBatch] = useState({
        resultURL: "",
        isFinish: false
    })
    const answers = useRef([])
    const solutions = useRef()
    const imagesFilenameArr = imagesFilename[category]

    useEffect(() => {
        solutions.current = categoriesSolution[category][difficulty]
    }, [category, difficulty])

    const handleChooseImage = (value) => {
        switch (value) {
            case 1:
                answers.current.push(false)
                break
            default:
                answers.current.push(true)
                break
        }
        if (questionIdx < questionCount - 1) {
            setQuestionIdx(questionIdx + 1)
        } else if (questionIdx >= questionCount - 1) {
            setResultBatch({
                resultURL: determineResultURL(answers.current),
                isFinish: true
            })
        }
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
        <LinkContainer to={resultBatch.resultURL}>
            <button className="qs-btn">See The Result</button>
        </LinkContainer>
    </>

    return (
        <div className="qs-vp">
            <div className="qs-flex-container">
                {!resultBatch.isFinish &&
                    <>
                        <h2 className="qs-h2">Wich image you have seen?</h2>
                        <h2 className="qs-h2">{cardinalToOrdinal(questionIdx + 1)} Question</h2>
                        {askingQuestion}
                    </>
                }
                {resultBatch.isFinish && questionFinish}
            </div>
        </div>
    )
}

export default QuestionSlide