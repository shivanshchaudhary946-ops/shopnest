import "./Products.css";
import { useContext } from "react";
import SearchContext from "../../context/SearchContext";
import CategoryContext from "../../context/CategoryContext";

import products from "../../data/products";

import ProductCard from "../ProductCard/ProductCard";
import CategoryFilter from "../CategoryFilter/CategoryFilter";

function Products() {

  const { search } = useContext(SearchContext);
  const { category } = useContext(CategoryContext);

  const filteredProducts = products.filter((product) => {

    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" ||
      product.category === category;

    return matchSearch && matchCategory;

  });

  return (
    <section className="products">

      <h2>Featured Products</h2>

      <CategoryFilter />

      <div className="products-container">

        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}

      </div>

    </section>
  );
}

export default Products;