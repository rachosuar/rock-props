import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemlistContainer/ItemsListContainer";

import React, { useState } from "react";
function App() {
  let [carrito, setCarrito] = useState(0);

  return (
    <div className="App">
      <Navbar carrito={carrito} />
      <ItemListContainer className="itemlist" />
    </div>
  );
}

export default App;
