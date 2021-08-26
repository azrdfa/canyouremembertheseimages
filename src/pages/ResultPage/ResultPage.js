import { LinkContainer } from "react-router-bootstrap"
import "./ResultPage.css"

const ResultPage = () => {
    return (
        <div>
            <h1 className="rp-title">ResultPage</h1>
            <LinkContainer to="/">
                <button>to HomePage</button>
            </LinkContainer>
        </div>
    )
}

export default ResultPage
