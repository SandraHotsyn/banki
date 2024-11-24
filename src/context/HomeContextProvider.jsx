import { HomeContext } from "./HomeContext.jsx";
import all_products from "../components/assets/all_product.js";
import { useState } from "react";

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_products.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};
const HomeContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const contextValue = { all_products, cartItems, addToCart, removeFromCart };
  return (
    <HomeContext.Provider value={contextValue}>{children}</HomeContext.Provider>
  );
};

export default HomeContextProvider;
