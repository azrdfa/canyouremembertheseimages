import { useRef } from "react"
import "./ImageSlide.css"

const imagesPath = process.env.PUBLIC_URL + "/assets/images/"
const ImageSlide = () => {
    const counter = useRef(0)

    const increaseCounter = () => {
        const result = <div>
            <h2>ImageSlide {counter.current}</h2>
            {/* <img
                className="is-img"
                src={`${imagesPath}default-${counter.current}.jpeg`}
                alt={`default-${counter.current}`}
            /> */}
        </div>
        counter.current += 1
        return result
    }

    return (
        <div>
            <h1 className="is-h1">ImageSlide (component)</h1>
            {increaseCounter()}
        </div>
    )
}

export default ImageSlide