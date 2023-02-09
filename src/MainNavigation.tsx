import { Link } from 'react-router-dom'
import { MdClose } from 'react-icons/md'
import { useState } from 'react'
import './menu.css'

const MenuLink = ({ to, children, mouseListener, clickListener }: any) => {
  return (
    <Link onMouseEnter={(e) => {
      e.currentTarget.style.color = '#ffffff'
      mouseListener(e.currentTarget.innerHTML)
    }} onMouseLeave={(e) => e.currentTarget.style.color = '#577DE0'}
      onClick={clickListener}
      to={to}>
      {children}
    </Link>
  )
}
const MainNavigation = () => {
  const [isOpen, setOpen] = useState(false);
  const [word, setWord] = useState('Menu' as string);
  const mouseEnter = (word: string) => {
    setWord(word)
  }
  const clickHandler = () => {
    setOpen(false)
  }
  return (
    <>
      <div className="normal-navigation">
        <div className='first'>
          <Link to="/" className='logo'>QUENTDEV.</Link>
        </div>
        <div className='second'>
          <button onClick={() => setOpen(true)} className="menu-button">Menu</button>
        </div>
      </div>
      {isOpen && <div className="menu-page">
        <div className="menu-container">
          <div className="menu-page-nav">
            <Link to="/" className="logo">QUENTDEV.</Link>
            <MdClose style={{ fontSize: 30, cursor: 'pointer' }} onClick={clickHandler} />
          </div>
          <nav>
            <MenuLink clickListener={clickHandler} mouseListener={mouseEnter} to="/blog">Blog</MenuLink>
            <MenuLink clickListener={clickHandler} mouseListener={mouseEnter} to="/featured">Featured</MenuLink>
            <MenuLink clickListener={clickHandler} mouseListener={mouseEnter} to="/contact">Contact</MenuLink>
          </nav>
          <span>HI, I AM QUENTIN GIBSON A FRONTEND DEVELOPER, WELCOME TO MY PERSONAL SITE.</span>
          <span className="active-word">{word}</span>
        </div>
      </div>}
    </>
  )
}

export default MainNavigation
