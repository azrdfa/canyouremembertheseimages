import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {
    HomePage,
    TestPage,
    CobaPage,
    UnderConstructionPage,
    NotFoundPage
} from "./pages"
import { Navbar, Footer } from "./components"
import "./App.css"

const App = () => {
    return (
        <Router>
            <div className="a-container">
                <Navbar />
                <Switch>
                    <Route path="/canyouremembertheseimages" exact component={HomePage} />
                    <Route path="/test/:category/:difficulty" exact component={TestPage} />
                    <Route path="/coba" exact component={CobaPage} />
                    <Route path="/leaderboard" exact component={UnderConstructionPage} />
                    <Route component={NotFoundPage} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
