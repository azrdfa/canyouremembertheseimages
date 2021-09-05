import { LinkContainer } from "react-router-bootstrap"
import "./ResultPage.css"

const ResultPage = ({ match }) => {
    const params = { ...match.params }
    const feedback = () => {
        const percentage = params.rightAnswer / params.totalQuestion
        if (percentage === 1) {
            return <h2 className="rp-h2">
                Perfect Score!<br />
                You beat the challange
            </h2>
        } else if (percentage >= 0.75) {
            return <h2 className="rp-h2">
                A little bit more!<br />
                You almost beat the challange
            </h2>
        } else {
            return <h2 className="rp-h2">
                Better luck next time!<br />
                You can do better than this
            </h2>
        }
    }

    return (
        <div className="rp-vp">
            <div className="rp-flex-container">
                <h2 className="rp-h0">{params.rightAnswer}/{params.totalQuestion}</h2>
                {feedback()}
                <LinkContainer to="/">
                    <button className="rp-btn">Go to Home Page</button>
                </LinkContainer>
            </div>
        </div>
    )
}

export default ResultPage
