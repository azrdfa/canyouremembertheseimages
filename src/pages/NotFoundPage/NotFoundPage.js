import "./NotFoundPage.css"
import { PrimaryButton } from "../../components"
import { useHistory } from "react-router"

const NotFoundPage = () => {
    const history = useHistory()
    return (
        <div className="nfp-container">
            <h1 className="nfp-h0">404</h1>
            <h1 className="nfp-h1">Page not found</h1>
            <PrimaryButton
                label="Home Page"
                handleClick={() => history.push("/")}
                disabled={false}
            />
        </div>
    )
}

export default NotFoundPage
