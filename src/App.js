import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemlistContainer/ItemsListContainer";

import React, { useState } from "react";
function App() {
  let [carrito, setCarrito] = useState(0);
  let updateCart = (num) => {
    setCarrito(carrito + num);
  };
  return (
    <div className="App">
      <Navbar carrito={carrito} />
      <ItemListContainer
        className="itemlist"
        greeting="BIENVENIDO"
        texto="COMING SOON..."
        addToCart={(counter) => {
          updateCart(counter);
        }}
      />
    </div>
  );
}

export default App;
