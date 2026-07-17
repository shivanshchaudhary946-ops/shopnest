import iphone from "../assets/images/iphone.png";
import laptop from "../assets/images/laptop.png";
import watch from "../assets/images/smartwatch.png";
import headphones from "../assets/images/headphones.png";

const products = [
  {
  id: 1,
  name: "iPhone 16",
  price: 79999,
  category: "Mobiles",
  image: iphone,
  rating: 4.8,
  description:
    "The latest iPhone with powerful performance, advanced camera system, and long-lasting battery."
},
{
  id: 2,
  name: "Gaming Laptop",
  price: 54999,
  category: "Laptops",
  image: laptop,
  rating: 4.6,
  description:
    "High-performance gaming laptop with dedicated graphics and fast processor."
},
{
  id: 3,
  name: "Smart Watch",
  price: 4999,
  category: "Wearables",
  image: watch,
  rating: 4.4,
  description:
    "Track your fitness, monitor your heart rate, and stay connected all day."
},
{
  id: 4,
  name: "Headphones",
  price: 2499,
  category: "Accessories",
  image: headphones,
  rating: 4.5,
  description:
    "Premium sound quality with deep bass and comfortable design."
},
]

export default products;