import { createContext, useState, useCallback } from "react";
import { foods } from "./Data";

const FoodContext = createContext();

export function FoodProvider({ children }) {
  // const [state, updateState] = useState();
  // const forceUpdate = useCallback(() => updateState({}), []);

  const [cart, setCart] = useState([]);

  function handleAddCartClick(event, foodId) {
    event.preventDefault();
    console.log(foodId);

    // debugger;

    const isInCart = cart.find((_cart) => _cart.id === foodId);

    console.log(foods);

    if (isInCart) {
      setCart(
        cart.filter((_cart) => {
          if (_cart.id === foodId) {
            _cart.quantity += 1;
            return _cart;
          }
          return _cart;
        })
      );
    } else {
      // const food = foods.find((food) => food.id == foodId);
      setCart([
        ...cart,
        foods.find((_food) => {
          if (_food.id === foodId) {
            _food.quantity = 1;
            return _food;
          }
        }),
      ]);
    }
  }

  function handleEmptyCartClick(event) {
    console.log("!!");
    if (window.confirm("Are you sure?")) {
      setCart([]);
    } else {
      console.log("cancelled");
      return;
    }
  }

  function handleDeleteItemClick(event, foodId) {
    event.preventDefault();
    // debugger;
    console.log(event);
    console.log({ event, foodId });
    setCart(cart.filter((cartItem) => cartItem.id !== foodId));
  }

  function handleContinue(event) {
    event.preventDefault();
    setCart([]);
    alert("Thanks for the order. Your order will be delievered shortly :)");
  }

  return (
    <FoodContext.Provider
      value={{
        cart,
        setCart,
        handleAddCartClick,
        handleEmptyCartClick,
        handleDeleteItemClick,
        handleContinue,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export default FoodContext;
