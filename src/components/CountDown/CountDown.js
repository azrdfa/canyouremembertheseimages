import { useRef } from "react"
import "./CountDown.css"

const CountDown = () => {
    const counter = useRef(3)

    const increaseCounter = () => {
        const result = <h1 className="cd-h0">{counter.current}</h1>
        counter.current -= 1
        return result
    }

    return (
        <div className="cd-container">
            {increaseCounter()}
        </div>
    )
}

export default CountDown