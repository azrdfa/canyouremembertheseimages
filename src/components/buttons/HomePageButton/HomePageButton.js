import "./HomePageButton.css"
import { LinkContainer } from "react-router-bootstrap"

const HomePageButton = () => {
    return (
        <LinkContainer to="/">
            <button className="hpb-btn">Home Page</button>
        </LinkContainer>
    )
}

export default HomePageButton
