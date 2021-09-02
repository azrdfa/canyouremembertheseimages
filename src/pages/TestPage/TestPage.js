import { useState, useEffect } from "react"
import { useInterval } from "../../custom-hooks"
import {
    IddleContent,
    PhaseIndicator,
    CountDown,
    ImageSlide,
    QuestionSlide
} from "../../components"
import "./TestPage.css"

const TestPage = ({ match }) => {
    const [isTestStart, setTestStart] = useState(false)
    const [initBatch, setInitBatch] = useState({
        loading: true,
        lastCounter: 0,
        slideCount: 0
    })
    const [intervalBatch, setIntervalBatch] = useState({
        counter: 0,
        delay: 3000
    })
    const category = match.params.category
    const difficulty = match.params.difficulty

    useEffect(() => {
        let lastCounter = 0
        let slideCount = 0
        switch (difficulty) {
            case "easy":
                lastCounter = 10
                slideCount = 2
                break
            case "medium":
                lastCounter = 11
                slideCount = 3
                break
            case "hard":
                lastCounter = 12
                slideCount = 4
                break
            default:
                break
        }
        setInitBatch({
            loading: false,
            lastCounter: lastCounter,
            slideCount: slideCount
        })
    }, [difficulty])

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
            case (3 + initBatch.slideCount):
                setIntervalBatch({
                    counter: intervalBatch.counter + 1,
                    delay: 3000
                })
                break
            case (4 + initBatch.slideCount):
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
    }, isTestStart && intervalBatch.counter < initBatch.lastCounter ? intervalBatch.delay : null)

    const startTest = () => {
        setTestStart(true)
    }

    if (initBatch.loading) return <h1>Loading ...</h1>

    return (
        <div>
            {/* <p>
                counter: {intervalBatch.counter}<br />
                delay: {intervalBatch.delay}
            </p> */}
            {!isTestStart && intervalBatch.counter < 1 &&
                <IddleContent
                    category={category}
                    difficulty={difficulty}
                    slideCount={initBatch.slideCount}
                    startTest={startTest}
                    isTestStart={isTestStart}
                />
            }
            {isTestStart && intervalBatch.counter < 1 && <PhaseIndicator phase={"Remembering Phase"}/>}
            {intervalBatch.counter >= 1 && intervalBatch.counter < 4 && <CountDown />}
            {intervalBatch.counter >= 4 && intervalBatch.counter < (4 + initBatch.slideCount) &&
                <ImageSlide
                    category={category}
                    difficulty={difficulty}
                />
            }
            {intervalBatch.counter >= (4 + initBatch.slideCount) && intervalBatch.counter < (5 + initBatch.slideCount) && <PhaseIndicator phase={"Question Phase"}/>}
            {intervalBatch.counter >= (5 + initBatch.slideCount) && intervalBatch.counter < initBatch.lastCounter && <CountDown />}
            {intervalBatch.counter >= initBatch.lastCounter &&
                <QuestionSlide
                    questionCount={initBatch.slideCount}
                    category={category}
                    difficulty={difficulty}
                />
            }
        </div>
    )
}

export default TestPage
