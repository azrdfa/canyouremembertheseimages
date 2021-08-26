import { LinkContainer } from "react-router-bootstrap"
import "./TestPage.css"

const TestPage = () => {
    return (
        <div>
            <h1 className="tp-title">TestPage</h1>
            <LinkContainer to="/result">
                <button>to ResultPage</button>
            </LinkContainer>
        </div>
    )
}

export default TestPage
