import { createContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import './App.css';
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Store from "./components/Store";

export const CartCtxt = createContext([]);

function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartCtxt.Provider value={{cart, setCart}}>
    <BrowserRouter>
      <div className="container text-center">
        <nav className="nav justify-content-center sticky-top bg-light">
          <Link className="nav-link" to='/'>דף הבית</Link>
          <Link className="nav-link" to='/store'>חנות</Link> 
          <Link className="nav-link" to='/cart'>העגלה שלי</Link>
          <Link className="nav-link" to='/contact-us'>צור קשר</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
      </div>
    </BrowserRouter>
    </CartCtxt.Provider>
  );
}

export default App;
