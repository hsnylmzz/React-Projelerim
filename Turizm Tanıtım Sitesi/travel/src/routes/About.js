import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutImg from "../assets/cappadocia.jpg";
import Footer from"../components/Footer";
import AboutUs from "../components/AboutUs";
function About(){
    return(
     <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        HeroImg={AboutImg}
        title="Hakkımızda"
        btnClass="hide"
        />
        <AboutUs/>
        <Footer/>
     </>
    )
 }
 
 export default About;