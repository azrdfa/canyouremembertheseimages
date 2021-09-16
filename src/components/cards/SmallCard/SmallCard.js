import "./SmallCard.css"
import { restyleLabel } from "../../../utils"

const SmallCard = ({label, src, handleClick}) => {
    return (
        <div
            className="sc-container"
            onClick={handleClick}
        >
            <img
                className="sc-img"
                src={src}
                alt={src}
            />
            <h3 className="sc-h3">{restyleLabel(label)}</h3>
        </div>
    )
}

export default SmallCard
