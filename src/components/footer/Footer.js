import { Link } from "react-router-dom";
import "./footer.css";

export function Footer() {
  return (
    <div id="footer" className="container">
      <div className="col coincap">
        <h4>COINCAP.IO</h4>
        <ul>
          <li>
            Methodology
          </li>
          <li>
            Support
          </li>
          <li>
            Our API
          </li>
          <li>
            Rate Comparision
          </li>
          <li>
           Careers
          </li>
        </ul>
      </div>
      <div className="col legals-disclaimer">
        <h4>LEGALS</h4>
        <ul>
          <li>
            Terms of Service
          </li>
          <li>
            Privacy Policy
          </li>
        </ul>
        <h4>DISCLAIMER</h4>
        <span className="disclaimer-details">
          Neither ShapeShift AG nor CoinCap are in any way associated with
          CoinMarketCap, LLC or any of its goods and services.
        </span>
      </div>
      <div className="col follow-us">
        <h4>FOLLOW US</h4>
        <i class="fa-brands fa-twitter fa-2xl"></i>
        <i class="fa-brands fa-facebook fa-2xl"></i>
      </div>
      <div className="col coincap-app">
        <h4>COINCAP APP AVAILABLE ON</h4>

        <img
          src="https://iconfactory.com/stickers/images/AppStore.png"
          alt="appstore sticker"
        /><br/>

        <img
          src="https://coincap.io/static/images/stores/google_play.svg"
          alt="playstore sticker"
        />
      </div>
    </div>
  );
}
