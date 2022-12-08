import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
   return(
    <>
      <Navbar/>
      <Hero
      cName="hero"
      HeroImg="https://images.unsplash.com/photo-1605213605677-861baf60c228?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
      title="Senin Yolculuğun Senin Hikayen"
      text="Gitmek İstediğin Yeri Seç"
      buttonText="Seyahat Planı"
      url="/"
      btnClass="show"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
   )
}

export default Home;