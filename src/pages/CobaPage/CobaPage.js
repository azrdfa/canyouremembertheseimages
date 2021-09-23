import "./CobaPage.css"
import { useState, useEffect, useRef } from "react"

const imagesPath = process.env.PUBLIC_URL + `/assets/images`
const CobaPage = () => {
    const [initBatch, setInitBatch] = useState({
        showAnswer: false,
        counter: 0
    })
    const timer = useRef()
    useEffect(() => {
        if (initBatch.showAnswer) {
            timer.current = setTimeout(() => {
                setInitBatch({
                    showAnswer: false,
                    counter: initBatch.counter + 1
                })
            }, 1000)
        }
        return () => {
            clearTimeout(timer.current)
        }
    }, [initBatch])

    const handleClick = () => {
        if (!initBatch.showAnswer) {
            setInitBatch({
                ...initBatch,
                showAnswer: true
            })
        }
    }

    return (
        <div>
            <div
                className={`card ${initBatch.showAnswer ? "show-answer" : "clickable"}`}
                onClick={handleClick}
            >
                <img
                    className="rearside"
                    src={`${imagesPath}/etc/right.png`}
                    alt={`${imagesPath}/etc/right.png`}
                />
                <img
                    className="frontside"
                    src={`${imagesPath}/anime/sw-anime-${initBatch.counter*2}.webp`}
                    alt={`${imagesPath}/anime/sw-anime-${initBatch.counter*2}.webp`}
                />
            </div>
            <div
                className={`card ${initBatch.showAnswer ? "show-answer" : "clickable"}`}
                onClick={handleClick}
            >
                <img
                    className="rearside"
                    src={`${imagesPath}/etc/wrong.png`}
                    alt={`${imagesPath}/etc/wrong.png`}
                />
                <img
                    className="frontside"
                    src={`${imagesPath}/anime/sw-anime-${initBatch.counter*2+1}.webp`}
                    alt={`${imagesPath}/anime/sw-anime-${initBatch.counter*2+1}.webp`}
                />
            </div>
        </div>
    )
}

export default CobaPage
