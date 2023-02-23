import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import '../styles/Footer.css';
const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FacebookIcon />
        <InstagramIcon />
        <YouTubeIcon />
      </div>
      <p>Tüm hakları saklıdır | Kral Döner </p>
    </div>
  )
}

export default Footer