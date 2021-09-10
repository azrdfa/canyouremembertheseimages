import { useRef } from "react"
import { cardinalToOrdinal } from "../../utils"
import "./ImageSlide.css"

const ImageSlide = ({ categoryFilename }) => {
    const counter = useRef(0)
    const increaseCounter = () => {
        const result = <img
            className="is-img"
            src={categoryFilename[counter.current*2]["default"]}
            alt={categoryFilename[counter.current*2]["default"]}
        />
        counter.current += 1
        return result
    }
    return (
        <div className="is-vp">
            <div className="is-flex-container">
                {increaseCounter()}
                <h2 className="is-text-center">{cardinalToOrdinal(counter.current)} Image</h2>
            </div>
        </div>
    )
}

export default ImageSlide