/* eslint-disable react/prop-types */
import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";

export function Products({ products }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  return (
    <main className="products">
      <ul>
        {products.map((product) => {
          const isProductinCart = checkProductInCart(product);
          return (
            <li key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div>
                <strong>{product.title}</strong> -${product.price}
              </div>
              <div>
                <button
                  style={{
                    backgroundColor: isProductinCart ? "#d11a2a" : "#0275d8",
                  }}
                  onClick={() => {
                    isProductinCart
                      ? removeFromCart(product)
                      : addToCart(product);
                  }}
                >
                  {isProductinCart ? <RemoveFromCartIcon /> : <AddToCartIcon />}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
