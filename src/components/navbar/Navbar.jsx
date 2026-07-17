import"./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import SearchContext from "../../context/SearchContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { search, setSearch } = useContext(SearchContext);
  const menuItems = [
    { name: "Home",path: "/" },
    { name: "Products", path: "/products" },
    { name: "Categories", path: "/categories" },
    { name: "Cart", path: "/cart" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Lala Ji OnlineStore</h1>
      </div>

      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item.name}>
            <NavLink to={item.path}
              className={({ isActive }) => (isActive ? "active-link" : "")}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="icons">
        <div className="icon">
          <div className="search-box">
            <input type="text" 
            placeholder="Search products..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <FaSearch className="icon" />
        </div>
        <FaRegHeart className="icon" />
        <div className="cart-icon">
          <FaShoppingCart className="icon" />
          <span className="cart-count">
            {cart.length}
          </span>
        </div>
        <FaRegUser className="icon" />
      </div>
    </nav>
  );
}
export default Navbar;