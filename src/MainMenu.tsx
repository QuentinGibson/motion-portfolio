import {Link} from 'react-router-dom'
import './menu.css'
const MainMenu = () => {
  return (
    <>
      <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      </nav>
      </>
  )
}

export default MainMenu
