import { useState } from "react"
import { useInterval } from "../../custom-hooks"
import {
    CountDown,
    ImageSlide,
    QuizSlide
} from "../../components"
import "./TestPage.css"

const TestPage = ({ match }) => {
    const params = { ...match.params }
    const lastCounter = 9
    const [counter, setCounter] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useInterval(() => {
        setCounter(counter + 1)
    }, isRunning && counter < lastCounter ? 1000 : null)

    const startQuiz = () => {
        setIsRunning(true)
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
            {counter >= lastCounter && <QuizSlide
                quizCount={2}
                category={params.category}
                difficulty={params.difficulty}
            />}
            {!isRunning && <button onClick={startQuiz}>Start Quiz</button>}
            <QuizSlide
                quizCount={2}
                category={params.category}
                difficulty={params.difficulty}
            />
        </div>
    )
}

export default TestPage
