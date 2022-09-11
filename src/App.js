import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemlistContainer/ItemsListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tablatalles from "./components/Tablatalles/Tablatalles";
import { CartProvider } from "./context/CartContext";

import React from "react";
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer className="itemlist" />}
            />
            <Route
              path="/categoria/:id"
              element={<ItemListContainer className="itemlist" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/tablatalles" element={<Tablatalles />} />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={<ItemListContainer className="itemlist" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
