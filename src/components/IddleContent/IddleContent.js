import { restyleCategory, restyleDifficulty } from "../../utils"
import "./IddleContent.css"

const IddleContent = ({ category, difficulty, slideCount, startTest, isTestStart }) => {
    return (
        <div className="ic-vp">
            <div className="ic-flex-container">
                <h2>Category: {restyleCategory(category)}</h2>
                <h2>Difficulty: {restyleDifficulty(difficulty)} ({slideCount} Images)</h2>
                <button
                    className="ic-btn"
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
