import "./Footer.css";
import Logo from './Logo.png'

export default function Footer() {
    return (
        <div className="bottom">
            <div className="bottomLeft">
                <img className= "bottomImage" src={Logo} alt="Logo" />
                <ul className="bottomList">
                    <li className="bottomListHeader">Get Help</li>
                    <li className="bottomListItem">Help With FilmyFi</li>
                </ul>
                <ul className="bottomList">
                    <li className="bottomListHeader">About</li>
                    <li className="bottomListItem">About Us</li>
                    <li className="bottomListItem">Contact Us</li>
                </ul>
            </div>
            {/* <div className="bottomCenter">
                <ul className="bottomList">
                    <li className="bottomListHeader">About</li>
                    <li className="bottomListItem">About Us</li>
                    <li className="bottomListItem">Contact Us</li>
                </ul>
                <ul className="bottomList">
                    <li className="bottomListHeader">Our Apps</li>
                    <li className="bottomListItem">Fandor for iOS</li>
                    <li className="bottomListItem">Fandor for Android</li>
                    <li className="bottomListItem">Fandor for Roku</li>
                </ul>
            </div> */}
            <div className="bottomRight">
                <ul className="bottomList">
                    <li className="bottomListHeader">Social</li>
                    <li className="bottomListItem">Instagram</li>
                    <li className="bottomListItem">Facebook</li>
                    <li className="bottomListItem">Twitter</li>
                </ul>
                <ul className="bottomList">
                    <li className="bottomListHeader">Legal</li>
                    <li className="bottomListItem">Terms of Use</li>
                    <li className="bottomListItem">Privacy Policy</li>
                    <li className="bottomListItem">© 2022 FilmyFi</li>
                </ul>
            </div>

            {/* <p className="bottomSubscribe">
                Subscribe to the newsletter
                <input type='email' name="email" placeholder="email" />
                <button>Subscribe</button>
            </p> */}
        </div>

    )
}