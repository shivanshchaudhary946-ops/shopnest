import { createContext, useState } from "react";

const CategoryContext = createContext();

function CategoryProvider({ children }) {

  const [category, setCategory] = useState("All");

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
}

export { CategoryProvider };
export default CategoryContext;