import { useRef } from "react"
import { cardinalToOrdinal } from "../../utils"
import { imagesFilename } from "../../constants"
import "./ImageSlide.css"

const ImageSlide = ({ category }) => {
    const counter = useRef(0)
    const imagesFilenameArr = imagesFilename[category]
    const increaseCounter = () => {
        const result = <img
            className="is-img"
            src={imagesFilenameArr["right"][counter.current]["default"]}
            alt={imagesFilenameArr["right"][counter.current]["default"]}
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