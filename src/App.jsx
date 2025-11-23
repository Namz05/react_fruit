import "./App.scss";
import Accueil from "./components/Accueil/Accueil";
import Navbar from "./components/Navbar/Navbar";
 
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
  );
}
export default App;