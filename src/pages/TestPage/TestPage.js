import { useState, useEffect, useMemo } from "react"
import { useInterval } from "../../custom_hooks"
import { imagesFilename } from "../../constants"
import { shuffleArray, cacheImages } from "../../utils"
import {
    IddleContent,
    PhaseIndicator,
    CountDown,
    ImageSlide,
    QuestionSlide,
    TestResult,
    Loading
} from "../../components"
import "./TestPage.css"

const TestPage = ({ match }) => {
    const imagesPath = process.env.PUBLIC_URL + `/assets/images`
    const category = match.params.category
    const difficulty = match.params.difficulty
    const [loading, setLoading] = useState(true)
    const [isTestStart, setTestStart] = useState(false)
    const [intervalBatch, setIntervalBatch] = useState({
        counter: 0,
        delay: 3000
    })
    const [questionSlidePayload, setQuestionSlidePayload] = useState({
        result: 0,
        showResult: false
    })

    const [lastCounter, slideCount, categoryFilename] = useMemo(() => {
        const categoryFilenameTmp = shuffleArray([...imagesFilename[category]])
        if (difficulty === "easy") {
            return [18, 10, categoryFilenameTmp]
        } else if (difficulty === "medium") {
            return [28, 20, categoryFilenameTmp]
        } else {
            return [58, 50, categoryFilenameTmp]
        }
    }, [category, difficulty])

    useEffect(() => {
        cacheImages([
            ...categoryFilename,
            `${imagesPath}/etc/right.png`,
            `${imagesPath}/etc/wrong.png`
        ], setLoading)
    }, [categoryFilename, imagesPath])

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
            case (3 + slideCount):
                setIntervalBatch({
                    counter: intervalBatch.counter + 1,
                    delay: 3000
                })
                break
            case (4 + slideCount):
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
    }, isTestStart && intervalBatch.counter < lastCounter ? intervalBatch.delay : null)

    const startTest = () => {
        setTestStart(true)
    }

    if (loading) {
        return <Loading/>
    }

    return (
        <>
            {!isTestStart && intervalBatch.counter < 1 &&
                <IddleContent
                    category={category}
                    difficulty={difficulty}
                    slideCount={slideCount}
                    startTest={startTest}
                />
            }
            {isTestStart && intervalBatch.counter < 1 && <PhaseIndicator phase={"Remembering Phase"} />}
            {intervalBatch.counter >= 1 && intervalBatch.counter < 4 && <CountDown />}
            {intervalBatch.counter >= 4 && intervalBatch.counter < (4 + slideCount) &&
                <ImageSlide categoryFilename={categoryFilename} />
            }
            {intervalBatch.counter >= (4 + slideCount) && intervalBatch.counter < (5 + slideCount) && <PhaseIndicator phase={"Question Phase"} />}
            {intervalBatch.counter >= (5 + slideCount) && intervalBatch.counter < lastCounter && <CountDown />}
            {intervalBatch.counter >= lastCounter && !questionSlidePayload.showResult &&
                <QuestionSlide
                    questionCount={slideCount}
                    categoryFilename={categoryFilename}
                    setQuestionSlidePayload={setQuestionSlidePayload}
                />
            }
            {questionSlidePayload.showResult && <TestResult result={questionSlidePayload.result} />}
        </>
    )
}

export default TestPage
