import { useRef } from "react"
import "./ImageSlide.css"
import { MediumCard } from ".."

const ImageSlide = ({ categoryFilename }) => {
    const counter = useRef(0)
    const increaseCounter = () => {
        const result = <MediumCard
            label={`Image #${counter.current + 1}`}
            src={categoryFilename[counter.current * 2]["default"]}
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