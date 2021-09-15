import "./NotFoundPage.css"
import { HomePageButton } from "../../components"

const NotFoundPage = () => {
    return (
        <div className="nfp-container">
            <h1 className="nfp-h0">404</h1>
            <h1 className="nfp-h1">Page not found</h1>
            <HomePageButton />
        </div>
    )
}

export default NotFoundPage
