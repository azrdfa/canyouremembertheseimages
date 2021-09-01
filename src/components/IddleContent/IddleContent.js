import { upperCaseFirstLetter } from "../../utils"
import { FiPlay } from "react-icons/fi"
import "./IddleContent.css"

const IddleContent = ({ category, difficulty, slideCount, startTest, isTestStart }) => {
    return (
        <div className="tp-vp">
            <div className="tp-flex-container">
                <h2>Category: {upperCaseFirstLetter(category)}</h2>
                <h2>Difficulty: {upperCaseFirstLetter(difficulty)} ({slideCount} Images)</h2>
                <button
                    className="tp-btn"
                    onClick={startTest}
                    disabled={isTestStart}
                >
                    Start Challange
                </button>
            </div>
        </div>
    )
}

export default IddleContent
