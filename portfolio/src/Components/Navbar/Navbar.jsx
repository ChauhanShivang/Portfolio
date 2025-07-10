import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo-2.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {

  const menuRef = useRef()
  const openMenu = () => {
    menuRef.current.style.right = "0"
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>

      <img src={logo} className='nav-logo' alt="" />

      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />

      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt="" />
        <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#home'>Home</AnchorLink></li>
        <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#about'>About Me</AnchorLink></li>
        <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#mywork'>Portfolio</AnchorLink></li>
        <li onClick={closeMenu}><AnchorLink className='anchor-link' offset={50} href='#contact'>Contact</AnchorLink></li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Contact Me</AnchorLink>
      </div>

    </div>
  )
}

export default Navbar
