import Layout from "../components/Layout/Layout";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
    
  const product = products.find((item) => item.id === Number(id));

  

  return (
    <Layout>
  <div className="product-details">

    <img src={product.image} alt={product.name} />

    <div className="details">

      <h1>{product.name}</h1>

      <h2>₹ {product.price}</h2>
      
      <h3>⭐ {product.rating}</h3>
      
      <p>{product.description}</p>

      <button>Add to Cart</button>

    </div>

  </div>
</Layout>
  );
}

export default ProductDetails;