import { restyleLabel } from "../../utils"
import "./IddleContent.css"
import { PrimaryButton } from ".."

const IddleContent = ({ category, difficulty, slideCount, startTest }) => {
    return (
        <div className="ic-container">
            <h2 className="ic-h2">Category: {restyleLabel(category)}</h2>
            <h2 className="ic-h2">Difficulty: {restyleLabel(difficulty)} ({slideCount} Images)</h2>
            <PrimaryButton 
                label="Start Challange"
                handleClick={startTest}
                disabled={false}
            />
        </div>
    )
}

export default IddleContent
