import "./ImageCard.css"
import { restyleLabel } from "../../../utils"

const ImageCard = ({label, src, handleClick}) => {
    return (
        <div
            className="imc-container"
            onClick={handleClick}
        >
            <img
                className="imc-img"
                src={src}
                alt={src}
            />
            <h3 className="imc-h3">{restyleLabel(label)}</h3>
        </div>
    )
}

export default ImageCard
