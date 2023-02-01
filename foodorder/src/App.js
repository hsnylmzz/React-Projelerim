import "bulma/css/bulma.css";
import './App.css';
import FoodOrder from "./FoodOrder";
import Doner from "./images/durum.jpg"
import Combo from "./images/menu1.jpg"
import Avantaj from "./images/menu2.jpg"
import İkiliMenu from "./images/ikilimenu.jpg"
import Cola from "./images/cola.jpg"
import Ayran from "./images/ayran.jpg"
import Patates from "./images/patates.jpg"
function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Gıt Gıt Food
          </p>
        </div>
      </section>
      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column">
              <FoodOrder
              image={Doner}
              title="Zurna Dürüm"
              desc="50 TL"
              />
            </div>
            <div className="column">
              <FoodOrder
              image={Doner}
              title="Tavuk Döner Dürüm"
              desc="40 TL"
              />
            </div>
            <div className="column">
              <FoodOrder
              image={Combo}
              title="Tavuk Combo Menü"
              desc="75 TL"
              />
            </div>
            <div className="column">
              <FoodOrder
              image={Avantaj}
              title="Avantaj Menü"
              desc="65 TL"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <FoodOrder
              image={İkiliMenu}
              title="Kazandıran Menü"
              desc="130 TL"
              />
            </div>
            <div className="column">
              <FoodOrder
              image={Cola}
              title="Kola"
              desc="20 TL"
              />
            </div>
            <div className="column">
              <FoodOrder
              image={Ayran}
              title="Ayran"
              desc="10 TL"
              />
            </div>
            <div className="column">
              <FoodOrder
              image={Patates}
              title="Patates Cipsi"
              desc="20 TL"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
