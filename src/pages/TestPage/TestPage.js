import { useState, useRef } from "react"
import { useInterval, useConstructor } from "../../custom_hooks"
import {
    IddleContent,
    PhaseIndicator,
    CountDown,
    ImageSlide,
    QuestionSlide,
    TestResult
} from "../../components"
import "./TestPage.css"

const TestPage = ({ match }) => {
    const category = match.params.category
    const difficulty = match.params.difficulty
    const lastCounter = useRef(0)
    const slideCount = useRef(0)
    useConstructor(() => {
        if (difficulty === "easy") {
            lastCounter.current = 33
            slideCount.current = 25
        } else if (difficulty === "medium") {
            lastCounter.current = 58
            slideCount.current = 50
        } else {
            lastCounter.current = 108
            slideCount.current = 100
        }
    })
    const [isTestStart, setTestStart] = useState(false)
    const [intervalBatch, setIntervalBatch] = useState({
        counter: 0,
        delay: 3000
    })
    const [questionSlidePayload, setQuestionSlidePayload] = useState({
        result: 0,
        showResult: false
    })

    useInterval(() => {
        switch (intervalBatch.counter) {
            case 0:
                setIntervalBatch({
                    counter: intervalBatch.counter + 1,
                    delay: 1000
                })
                break
            case 3:
                setIntervalBatch({
                    counter: intervalBatch.counter + 1,
                    delay: 2000
                })
                break
            case (3 + slideCount.current):
                setIntervalBatch({
                    counter: intervalBatch.counter + 1,
                    delay: 3000
                })
                break
            case (4 + slideCount.current):
                setIntervalBatch({
                    counter: intervalBatch.counter + 1,
                    delay: 1000
                })
                break
            default:
                setIntervalBatch({
                    ...intervalBatch,
                    counter: intervalBatch.counter + 1
                })
                break
        }
    }, isTestStart && intervalBatch.counter < lastCounter.current ? intervalBatch.delay : null)

    const startTest = () => {
        setTestStart(true)
    }

    return (
        <div>
            {!isTestStart && intervalBatch.counter < 1 &&
                <IddleContent
                    category={category}
                    difficulty={difficulty}
                    slideCount={slideCount.current}
                    startTest={startTest}
                    isTestStart={isTestStart}
                />
            }
            {isTestStart && intervalBatch.counter < 1 && <PhaseIndicator phase={"Remembering Phase"} />}
            {intervalBatch.counter >= 1 && intervalBatch.counter < 4 && <CountDown />}
            {intervalBatch.counter >= 4 && intervalBatch.counter < (4 + slideCount.current) &&
                <ImageSlide category={category} />
            }
            {intervalBatch.counter >= (4 + slideCount.current) && intervalBatch.counter < (5 + slideCount.current) && <PhaseIndicator phase={"Question Phase"} />}
            {intervalBatch.counter >= (5 + slideCount.current) && intervalBatch.counter < lastCounter.current && <CountDown />}
            {intervalBatch.counter >= lastCounter.current && !questionSlidePayload.showResult &&
                <QuestionSlide
                    questionCount={slideCount.current}
                    category={category}
                    difficulty={difficulty}
                    setQuestionSlidePayload={setQuestionSlidePayload}
                />
            }
            {questionSlidePayload.showResult && <TestResult result={questionSlidePayload.result} />}
        </div>
    )
}

export default TestPage
