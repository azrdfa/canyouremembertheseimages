import { useRef } from "react"
import "./CountDown.css"

const CountDown = () => {
    const counter = useRef(3)

    const increaseCounter = () => {
        const result =
            <div className="cd-vp">
                <div className="cd-flex-container">
                    <h2 className="cd-h2">{counter.current}</h2>
                </div>
            </div>
        counter.current -= 1
        return result
    }

    return (
        <div>
            {increaseCounter()}
        </div>
    )
}

export default CountDown