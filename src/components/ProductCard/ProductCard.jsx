import "./ProductCard.css";

function ProductCard(props) {
  return (
    <div className="product-card">

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

      <button>Add to Cart</button>

    </div>
  );
}

export default ProductCard;