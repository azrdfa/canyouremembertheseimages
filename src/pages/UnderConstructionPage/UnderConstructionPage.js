import "./UnderConstructionPage.css"
import { PrimaryButton } from "../../components"
import { useHistory } from "react-router"

const UnderConstructionPage = () => {
    const history = useHistory()
    return (
        <div className="ucp-container">
            <h1 className="ucp-h0">COMING SOON</h1>
            <h1 className="ucp-h1">This page is under construction</h1>
            <PrimaryButton
                label="Home Page"
                handleClick={() => history.push("/")}
                disabled={false}
            />
        </div>
    )
}

export default UnderConstructionPage
