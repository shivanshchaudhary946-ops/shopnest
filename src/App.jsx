import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  
  return(
    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/products/" element={<ProductPage/>}/>
      <Route path="/products/:id" element={<ProductDetails/>}/>
      <Route path="/cart" element={<Cart/>}/>
    
    </Routes>
  );
}

export default App;