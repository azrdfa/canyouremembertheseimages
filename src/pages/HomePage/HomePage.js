import { LinkContainer } from "react-router-bootstrap"
import "./HomePage.css"

const HomePage = () => {
    return (
        <div>
            <h1 className="hp-title">HomePage</h1>
            <LinkContainer to="/test">
                <button>to TestPage</button>
            </LinkContainer>
        </div>
    )
}

export default HomePage
