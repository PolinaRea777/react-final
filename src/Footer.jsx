
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>Veridian Arts</h2>
          <p>Curating the digital future.</p>
        </div>
        
        <div className="footer-links">
          <h4>Navigation</h4>
          <Link to="/Gallery">Gallery</Link>
          <Link to="/Premium">Premium</Link>
          <Link to="/About">About</Link>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://instagram.com" target="_blank">Instagram</a>
          <a href="https://twitter.com" target="_blank">Twitter</a>
        </div>
      </div>

        <div className="submit-form">
            <form>
                <p>Subscribe To Our Newsletters</p>
                <input type= "text" placeholder="Your name" />
                <input type="email"placeholder = "Your email" />
                <button type="submit">Submit</button>
            </form>
        </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Polina Rea. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;