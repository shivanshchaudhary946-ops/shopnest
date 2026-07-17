import { useContext } from "react";
import Layout from "../components/Layout/Layout";
import CartContext from "../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  function handleRemove(id) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  function handleIncrease(id) {
    const updatedCart = cart.map((product) =>
      product.id === id
        ? { ...product, quantity: product.quantity + 1 }
        : product
    );

    setCart(updatedCart);
  }

  function handleDecrease(id) {
    const updatedCart = cart
      .map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
      .filter((product) => product.quantity > 0);

    setCart(updatedCart);
  }

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <Layout>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <div className="cart-container">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img
                src={product.image}
                alt={product.name}
                className="cart-image"
              />

              <div className="cart-details">
                <h3>{product.name}</h3>

                <p className="cart-price">
                  ₹ {product.price.toLocaleString("en-IN")}
                </p>

                <div className="quantity-box">
                  <button onClick={() => handleDecrease(product.id)}>
                    -
                  </button>

                  <span>{product.quantity}</span>

                  <button onClick={() => handleIncrease(product.id)}>
                    +
                  </button>
                </div>

                <button onClick={() => handleRemove(product.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="cart-total">
            <h2>Total: ₹ {totalPrice.toLocaleString("en-IN")}</h2>

            <button>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Cart;