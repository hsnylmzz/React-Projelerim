import React from 'react'
import Adres from "../assets/adres.jpg";
import '../styles/Contact.css';
const Contact = () => {
  return (
    <div className="contact">
        <div className="leftSide" style={{ backgroundImage: `url(${Adres})` }}>
        </div>
        <div className="rightSide">
            <h1>Adres</h1>
            <p>Çarşı Mah.Gümrük Sk No : 11 28500 Tirebolu/Giresun</p>
            <h1>Telefon</h1>
            <p>(0454) 400 00 54</p>
        </div>
    </div>
  )
}

export default Contact