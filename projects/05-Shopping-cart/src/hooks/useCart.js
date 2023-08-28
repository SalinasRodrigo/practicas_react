import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart () {
  const contex = useContext(CartContext)
  
  if (contex === undefined){
    throw new Error('useCart must be use within a CartProvider')
  }

  return contex
}
