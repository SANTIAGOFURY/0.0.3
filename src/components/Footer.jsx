import { FaDiscord, FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-background-shape" />

      <div className="footer-content">
        <div className="footer-section">
          <h3>Zonoj Store</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Store</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://discord.gg/Aw5fhqGM"
              target="_blank"
              rel="noreferrer"
            >
              <FaDiscord />
            </a>
            <a
              href="https://web.facebook.com/profile.php?id=61577150624166"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/zonoj_store/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://t.me/zonojGamesStore1"
              target="_blank"
              rel="noreferrer"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Zonoj Store. All rights reserved.</p>
        <p>
          Made with ❤️ by{" "}
          <a
            href="https://github.com/TheOneEyeCoder"
            target="_blank"
            rel="noreferrer"
          >
            The One Eye Coder
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
