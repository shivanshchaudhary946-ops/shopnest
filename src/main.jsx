import {CartProvider} from "./context/CartContext";
import { SearchProvider } from "./context/SearchContext";
import { CategoryProvider } from "./context/CategoryContext";

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CategoryProvider>
      <SearchProvider>
        <CartProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartProvider>
      </SearchProvider>
    </CategoryProvider>
  </StrictMode>,
)
