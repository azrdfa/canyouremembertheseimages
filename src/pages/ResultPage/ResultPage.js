import { LinkContainer } from "react-router-bootstrap"
import "./ResultPage.css"

const ResultPage = ({ match }) => {
    const params = { ...match.params }
    return (
        <div>
            <h1 className="rp-title">ResultPage</h1>
            <h2>Score: {params.rightAnswer}/{params.totalQuestion}</h2>
            <LinkContainer to="/">
                <button>to HomePage</button>
            </LinkContainer>
        </div>
    )
}

export default ResultPage
