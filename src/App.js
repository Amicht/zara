import { createContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import CartLogoCount from "./components/CartLogoCount";
import ContactUs from "./components/ContactUs";
import Store from "./components/Store";

export const CartCtxt = createContext([]);

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartCtxt.Provider value={{cart, setCart}}>
    <BrowserRouter>
      <div className="container-sm text-center">
        <nav className="nav justify-content-center sticky-top bg-light">
          <Link className="nav-link" to='/'>חנות</Link> 
          <Link className="nav-link" to='/cart'>העגלה שלי <CartLogoCount /></Link>
          <Link className="nav-link" to='/contact-us'>צור קשר</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Store />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartCtxt.Provider>
  );
}

export default App;
