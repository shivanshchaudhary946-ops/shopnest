import { useContext } from "react";
import CartContext from "../../context/CartContext";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard(props) {
  const { setCart } = useContext(CartContext);

  function handleAddToCart(e) {
    e.preventDefault();

    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === props.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === props.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...props,
          quantity: 1,
        },
      ];
    });
  }

  return (
    <div className="product-card">
      <Link
        to={`/products/${props.id}`}
        className="product-link"
      >
        <img
          src={props.image}
          alt={props.name}
          className="product-image"
        />

        <h3>{props.name}</h3>

        <p className="category">{props.category}</p>

        <p className="price">
          ₹{props.price.toLocaleString("en-IN")}
        </p>
      </Link>

      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;