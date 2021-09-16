import "./MediumCard.css"
import { restyleLabel } from "../../../utils"

const MediumCard = ({label, src, handleClick}) => {
    return (
        <div
            className="mc-container"
            onClick={handleClick}
        >
            <img
                className="mc-img"
                src={src}
                alt={src}
            />
            <h3 className="mc-h3">{restyleLabel(label)}</h3>
        </div>
    )
}

export default MediumCard
