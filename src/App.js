import Header from "./Layout/Header";
import AvailablePcs from "./Components/AvailablePcs/AvailablePcs";
import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  };

  const hideCartHandler = () => {
    setCartShown(false);
  };

  return (
    <CartProvider>
      {cartShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <AvailablePcs />
      </main>
    </CartProvider>
  );
}

export default App;
