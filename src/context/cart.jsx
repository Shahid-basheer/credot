import { createContext, useState } from "react";

const initialCart = [];
export const CartContext = createContext(initialCart);

export function Cart({ children }) {
  const [cart, setCart] = useState(initialCart);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
