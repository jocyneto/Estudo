import "./App.css";
import Barcos from "./assets/barcos.jpg";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

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

      <ManageData />
      <ListRender />
    </>
  );
}

export default App;
