import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Accueil from "./components/Accueil/Accueil";

 
function App() {
  return (
    <div className="app">
      <section className="conteneur-accueil">
        <div className="accueil">
          <Navbar/>
          <Accueil/>
        </div>
      </section>
    </div>
  )
}
export default App