import { Link } from 'react-router-dom'
import './menu.css'
const MainMenu = () => {
  return (
    <>
      <nav className="navigation">
        <ul className='first'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
        <div className="logo-container">
          <span className='logo'>QUENTDEV.</span>
        </div>
        <ul className='second'>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/featured">Featured</Link></li>
        </ul>
      </nav>
    </>
  )
}

export default MainMenu
