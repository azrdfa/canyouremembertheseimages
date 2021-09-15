import { LinkContainer } from "react-router-bootstrap"
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="n-container">
            <h3 className="n-h3">CYRTI?</h3>
            <LinkContainer to="/">
                <h3 className="n-h3 n-item">Home</h3>
            </LinkContainer>
            <LinkContainer to="/leaderboard">
                <h3 className="n-h3 n-item">Leaderboard</h3>
            </LinkContainer>
        </div>
    )
}

export default Navbar
