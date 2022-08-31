import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemlistContainer/ItemsListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import React, { useState } from "react";
function App() {
  let [carrito, setCarrito] = useState(0);

  return (
    <div className="App">
      <Navbar carrito={carrito} />
      <ItemListContainer className="itemlist" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
