import { LinkContainer } from "react-router-bootstrap"
import "./TestPage.css"

const TestPage = ({ match }) => {
    const params = {...match.params}
    return (
        <div>
            <h1 className="tp-title">TestPage</h1>
            <p>
                category: {params.category}<br/>
                difficulty: {params.difficulty}
            </p>
            <LinkContainer to="/result">
                <button>to ResultPage</button>
            </LinkContainer>
        </div>
    )
}

export default TestPage
