import { useRef } from "react"
import { cardinalToOrdinal } from "../../utils"
import "./ImageSlide.css"

const ImageSlide = ({ category, difficulty }) => {
    const imagesPath = process.env.PUBLIC_URL + `/assets/images/${category}/right`
    const counter = useRef(0)
    const increaseCounter = () => {
        const result = <div>
            <img
                className="is-img"
                src={`${imagesPath}/right-${counter.current}.jpeg`}
                alt={`${imagesPath}/right-${counter.current}.jpeg`}
            />
        </div>
        counter.current += 1
        return result
    }
    return (
        <div>
            {increaseCounter()}
            <h2 className="is-text-center">{cardinalToOrdinal(counter.current)} Image</h2>
        </div>
    )
}

export default ImageSlide