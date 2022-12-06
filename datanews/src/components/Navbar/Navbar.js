import React from 'react'
import logo from '../../logo.svg';
import "./Navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="haberlerimiz"/>
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">Ana Sayfa</a>
        </li>
        <li>
          <a href="/" className="nav-link">Hakkımızda</a>
        </li>
        <li>
          <a href="/" className="nav-link active">Haberler</a>
        </li>
      </ul>
    </nav>
  )
}