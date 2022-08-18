import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Itemlist/ItemsListContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer
        className="itemlist"
        greeting="BIENVENIDO"
        texto="COMING SOON..."
      />
    </div>
  );
}

export default App;
