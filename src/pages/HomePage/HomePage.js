import { useState } from "react"
import { LinkContainer } from "react-router-bootstrap"
import "./HomePage.css"

const HomePage = () => {
    console.log("render HomePage")
    const [state, setState] = useState({
        showCategory: true,
        category: null,
    })
    const setCategory = (value) => {
        setState({
            showCategory: false,
            category: value
        })
    }
    return (
        <div>
            <h1 className="hp-h1">HomePage</h1>
            {
                state.showCategory &&
                <ul>
                    <li className="hp-li" onClick={() => setCategory("default")}>Default</li>
                    <li className="hp-li" onClick={() => setCategory("anime")}>Anime</li>
                    <li className="hp-li" onClick={() => setCategory("kpop")}>Kpop</li>
                </ul>
            }
            {
                state.showCategory === false &&
                <ul>
                    <LinkContainer to={`test/${state.category}/easy`}>
                        <li className="hp-li">Easy</li>
                    </LinkContainer>
                    <LinkContainer to={`test/${state.category}/medium`}>
                        <li className="hp-li">Medium</li>
                    </LinkContainer>
                    <LinkContainer to={`test/${state.category}/hard`}>
                        <li className="hp-li">Hard</li>
                    </LinkContainer>
                </ul>
            }
        </div>
    )
}

export default HomePage
