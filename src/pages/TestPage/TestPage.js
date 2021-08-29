import { useState } from "react"
import { useInterval } from "../../custom-hooks"
import {
    CountDown,
    ImageSlide,
    QuestionSlide
} from "../../components"
import "./TestPage.css"

const TestPage = ({ match }) => {
    const params = { ...match.params }
    const lastCounter = 9
    const [counter, setCounter] = useState(0)
    const [isTestStart, setTestStart] = useState(false)

    useInterval(() => {
        setCounter(counter + 1)
    }, isTestStart && counter < lastCounter ? 1000 : null)

    const startTest = () => {
        setTestStart(true)
    }

    return (
        <div>
            <h1 className="tp-title">TestPage</h1>
            <p>
                category: {params.category}<br />
                difficulty: {params.difficulty}
            </p>
            {counter < 1 && <h2>iddle</h2>}
            {counter >= 1 && counter < 4 && <CountDown />}
            {counter >= 4 && counter < 6 && <ImageSlide />}
            {counter >= 6 && counter < lastCounter && <CountDown />}
            {counter >= lastCounter && <QuestionSlide
                questionCount={2}
                category={params.category}
                difficulty={params.difficulty}
            />}
            {!isTestStart && <button onClick={startTest}>Start Test</button>}
            <QuestionSlide
                questionCount={2}
                category={params.category}
                difficulty={params.difficulty}
            />
        </div>
    )
}

export default TestPage
