import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {
  return (
    <footer style={{ gridRowStart: 3 }}>
      <div className="footer-container">
        <div className="footer-top-row">
          <div className="footer-left">
            <p className="logo">QUENTDEV.</p>
            <span className="timestamp">2023</span>
          </div>
          <div className="footer-right">
            <div className="footer-section">
              <nav className="footer-navigation">
                <Link className="footer-link" to="/work">Work</Link>
                <Link className="footer-link" to="/services">Services</Link>
                <Link className="footer-link" to="/about">About</Link>
                <Link className="footer-link" to="/blog">Blog</Link>
              </nav>
              <span className="phone">+4048443543</span>
            </div>
            <div className="footer-section">
              <nav className="footer-navigation">
                <Link className="footer-link" to="">Instagram</Link>
                <Link className="footer-link" to="">Twitter</Link>
              </nav>
              <span className="email">quentingibson94@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
