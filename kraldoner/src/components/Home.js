import React from 'react'
import { Link } from 'react-router-dom';
import KralDonerImage from "../assets/kraldoner.jpg";
import "../styles/Home.css";
const Home = () => {
  return (
    <div className='homePage' style={{backgroundImage : `url(${KralDonerImage})`}}>
      <div className='order'>
        <Link to="/menu">
          <button>SİPARİŞ VER</button>
        </Link>
      </div>
    </div>
  )
}

export default Home