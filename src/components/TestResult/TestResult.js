import "./TestResult.css"
import { PrimaryButton } from ".."
import { useHistory } from "react-router"

const TestResult = ({ result }) => {
    const history = useHistory()
    const [rightAnswer, totalQuestion] = result
    const feedback = () => {
        const percentage = rightAnswer / totalQuestion
        if (percentage === 1) {
            return <h2 className="tr-h2">
                Perfect Score!<br />
                You beat the challange
            </h2>
        } else if (percentage >= 0.75) {
            return <h2 className="tr-h2">
                A little bit more!<br />
                You almost beat the challange
            </h2>
        } else {
            return <h2 className="tr-h2">
                Better luck next time!<br />
                You can do better than this
            </h2>
        }
    }

    return (
        <div className="tr-container">
            <h1 className="tr-h0">{rightAnswer}/{totalQuestion}</h1>
            {feedback()}
            <PrimaryButton
                label="Home Page"
                handleClick={() => history.push("/")}
                disabled={false}
            />
        </div>
    )
}

export default TestResult
