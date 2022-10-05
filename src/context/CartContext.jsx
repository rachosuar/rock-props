import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  let [cart, setCart] = useState([]);
  let [notificacion, setNotificacion] = useState([]);
  let [showCart, setShowCart] = useState(false);

  let clearNotifications = () => {
    setNotificacion([]);
  };
  let addPorducts = (newProduct) => {
    let repeatedItem = cart.filter((item) => item.id === newProduct.id)[0];
    let sizeRepeted;
    if (repeatedItem) {
      sizeRepeted = newProduct.size === repeatedItem.size;
    }
    if (repeatedItem && sizeRepeted) {
      let index = cart.findIndex((item) => item.id === repeatedItem.id);
      let updatedProduct = { ...cart[index] };
      updatedProduct = {
        ...updatedProduct,
        counter: repeatedItem.counter + newProduct.counter,
      };
      let newArr = [];
      let concatenador = (ind) => {
        // eslint-disable-next-line
        cart.map((item, i) => {
          if (i !== ind) {
            newArr.push(item);
          }
        });
        newArr.push(updatedProduct);
      };
      concatenador(index);
      setCart(newArr);
      setNotificacion(updatedProduct);
      setTimeout(clearNotifications, 3000);
    } else {
      let newArr = [...cart, newProduct];
      setCart(newArr);
      setNotificacion(newProduct);
      setTimeout(clearNotifications, 3000);
    }
  };
  let deleteProduct = (id, size) => {
    let newArr = cart.filter((item) => item.id !== id || item.size !== size);
    setCart(newArr);
  };
  let clearProducts = () => {
    window.confirm(`Wish to remove ${cart.length} items??`) && setCart([]);
  };
  let clearProductsAfter = () => {
    setCart([]);
  };

  let mostrarCart = () => {
    setShowCart(true);
  };
  let ocultarCart = () => {
    setShowCart(false);
  };
  let showTotal = () => {
    if (cart.length > 0) {
      return cart
        .map((item) => item.price * item.counter)
        .reduce((a, b) => a + b);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addPorducts,
        deleteProduct,
        clearProducts,
        notificacion,
        mostrarCart,
        showCart,
        ocultarCart,
        clearProductsAfter,
        showTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
