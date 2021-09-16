import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {
    HomePage,
    TestPage,
    UnderConstructionPage,
    NotFoundPage,
    CobaPage
} from "./pages"
import { Navbar, Footer } from "./components"
import "./App.css"

const App = () => {
    return (
        <Router>
            <div className="a-container">
                <Navbar />
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/test/:category/:difficulty" exact component={TestPage} />
                    <Route path="/leaderboard" exact component={UnderConstructionPage} />
                    <Route path="/coba" exact component={CobaPage}/>
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
