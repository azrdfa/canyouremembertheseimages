import "./CatdifCard.css"
import { restyleLabel } from "../../../utils"

const CatdifCard = ({label, src, handleClick}) => {
    return (
        <div
            className="cc-container"
            onClick={handleClick}
        >
            <img
                className="cc-img"
                src={src}
                alt={src}
            />
            <h3 className="cc-h3">{restyleLabel(label)}</h3>
        </div>
    )
}

export default CatdifCard
