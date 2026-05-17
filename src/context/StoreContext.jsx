import { useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { StoreContext } from "./StoreContext";

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const quantity = prev[itemId] || 0;
      if (quantity <= 1) {
        const next = { ...prev };
        delete next[itemId];
        return next;
      }

      return {
        ...prev,
        [itemId]: quantity - 1,
      };
    });
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getTotalCartAmount = () => {
    return food_list.reduce((total, item) => {
      return total + item.price * (cartItems[item._id] || 0);
    }, 0);
  };

  const getCartCount = () => {
    return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalCartAmount,
    getCartCount,
  };

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;
};

export default StoreContextProvider;
