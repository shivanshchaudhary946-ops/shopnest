import "./CategoryFilter.css";
import { useContext } from "react";
import CategoryContext from "../../context/CategoryContext";

function CategoryFilter() {

  const { category, setCategory } = useContext(CategoryContext);

 const categories = [
  "All",
  "Mobiles",
  "Laptops",
  "Wearables",
  "Accessories"
 ];

  return (
    <div className="category-filter">

      {
        categories.map((item) => (
          <button
            key={item}
            className={category === item ? "active-category" : ""}
            onClick={() => setCategory(item)}
          >
            {item}
          </button>
        ))
      }

    </div>
  );
}

export default CategoryFilter;