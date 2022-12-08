import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/africa.jpg";
import Footer from"../components/Footer";
import Trip from"../components/Trip";
function Service(){
    return(
      <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Hizmetlerimiz"
        btnClass="hide"
        />
        <Trip/>
        <Footer/>
      </>
    )
 }
 
 export default Service;