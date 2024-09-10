import "./App.css";
import Barcos from "./assets/barcos.jpg";

function App() {
  return (
    <>
      <h1>Avançando</h1>
      {/* imagem no public */}
      <div>
        <img className="foto1" src="./doca.jpg" alt="doca de um lago" />
      </div>
      {/* imagem no assets */}
      <img src={Barcos} alt="imagem de barcos" />
    </>
  );
}

export default App;
