import { useRef } from "react"
import "./CountDown.css"

const CountDown = () => {
    const counter = useRef(0)

    const increaseCounter = () => {
        const result = <h2>CountDown {counter.current}</h2>
        counter.current += 1
        return result
    }

    return (
        <div>
            <h1 className="cd-h1">CountDown (component)</h1>
            {increaseCounter()}
        </div>
    )
}

export default CountDown