import "./Products.css";
import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";

function Products() {
  return (
    <section className="products">

      <h2>Featured Products</h2>

      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            
            
          />
        ))}
      </div>

    </section>
  );
}

export default Products;