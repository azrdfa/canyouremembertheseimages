import { useRef } from "react"
import "./ImageSlide.css"
import { ImageCard } from "../../"

const ImageSlide = ({ categoryFilename }) => {
    const counter = useRef(0)
    const increaseCounter = () => {
        const result = <ImageCard
            label={`Image #${counter.current + 1}`}
            src={categoryFilename[counter.current * 2]}
            handleClick={() => { }}
        />
        counter.current += 1
        return result
    }
    return (
        <div className="is-container">
            {increaseCounter()}
        </div>
    )
}

export default ImageSlide