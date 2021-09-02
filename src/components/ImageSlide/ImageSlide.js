import { useRef } from "react"
import { cardinalToOrdinal } from "../../utils"
import "./ImageSlide.css"

const ImageSlide = ({ category, difficulty }) => {
    const imagesPath = process.env.PUBLIC_URL + `/assets/images/${category}/right`
    const counter = useRef(0)
    const increaseCounter = () => {
        const result = <img
            className="is-img"
            src={`${imagesPath}/right-${counter.current}.jpeg`}
            alt={`${imagesPath}/right-${counter.current}.jpeg`}
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