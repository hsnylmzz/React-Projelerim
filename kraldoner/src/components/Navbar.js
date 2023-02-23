import React from 'react'
import "../styles/Navbar.css";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <span className="logo">KRAL DÖNER</span>
            <div className='mainLink'>
                <Link to="/">Ana Sayfa</Link>
                <Link to="/about">Hakkımızda</Link>
                <Link to="/menu">Menülerimiz</Link>
                <Link to="/contact">İletişim</Link>
            </div>
        </div>
    </div>
  )
}
export default Navbar;