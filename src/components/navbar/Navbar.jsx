import"./Navbar.css";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const menuItems = [
    "Home", 
    "Products", 
    "Categories", 
    "Cart", 
    "Login"
  ];

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>ShopNest</h2>
        </div>

      <ul className="nav-links">
        {menuItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="icons">
        <div className="icon">
          <div className="search-box">
            <input type="text" 
            placeholder="Search products..." 
            />
          </div>
          <FaSearch className="icon" />
        </div>
        <FaRegHeart className="icon" />
        <FaShoppingCart className="icon" />
        <FaRegUser className="icon" />
      </div>
    </nav>
  );
}
export default Navbar;