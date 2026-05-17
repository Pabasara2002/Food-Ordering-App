import "./Footer.css";
import { assets } from "../../assets/frontend_assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="Tomato" />
          <p>
            Fresh meals, simple ordering, and fast delivery from kitchens you can count on.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h3>Company</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>About us</li>
            <li>Delivery</li>
            <li><Link to="/contact">Contact us</Link></li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h3>Get in touch</h3>
          <ul>
            <li>+94 77 123 4567</li>
            <li>hello@tomato.lk</li>
            <li>Colombo, Sri Lanka</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2026 Tomato. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
