import "./Footer.css"
import { longText } from "../../constants"

const Footer = () => {
    return (
        <div className="f-container">
            <div className="f-flex-container">
                <div className="f-item1">
                    <h3 className="f-h3">ABOUT</h3>
                    <p className="f-p">
                        {longText.about_description}
                    </p>
                </div>
                <div className="f-item2">
                    <h3 className="f-h3">TECH STACK</h3>
                    <ul className="f-ul">
                        <li>React JS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="f-item3">
                    <h3 className="f-h3">SESAME STREET UNIVERSITY</h3>
                    <ul className="f-ul">
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Our Member</li>
                    </ul>
                </div>
            </div>
            <hr className="f-hr"/>
            <p className="f-p">
                {longText.project_owner}
            </p>
        </div>
    )
}

export default Footer
