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
        <nav>
          <Link to='/'>Home</Link> |
          <Link to='/store'>Store</Link> | 
          <Link to='/cart'>Cart</Link> | 
          <Link to='/contact-us'>contact us</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/store" element={<Store />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/contact-us" element={<ContactUs />}/>
        </Routes>
    </BrowserRouter>
    </CartCtxt.Provider>
  );
}

export default App;
