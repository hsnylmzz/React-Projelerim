import React from 'react'
import Adres from "../assets/adres.jpg";
import "../styles/About.css";
const About = () => {
  return (
    <div className='about'>
      <div 
      className='aboutTop' 
      style={{backgroundImage : `url(${Adres})`}}>
      </div>
      <div className='aboutBottom'>
        <h1>Hakkımızda</h1>
        <p>2019 yılında kuruldu. Giresunun en güzel İskenderun soslu dürümü Kral Dönerde yapmaktadır.
        </p>
      </div>
    </div>
  )
}

export default About