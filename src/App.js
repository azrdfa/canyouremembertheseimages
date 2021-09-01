import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import {
    HomePage,
    TestPage,
    ResultPage
} from "./pages"
import "./App.css"

const App = () => {
    return (
        <Router>
            <h1 className="app-text-center">Can You Remember These Images?</h1>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/test/:category/:difficulty" component={TestPage} />
                <Route path="/result/:rightAnswer/:totalQuestion" component={ResultPage} />
            </Switch>
        </Router>
    )
}

export default App
