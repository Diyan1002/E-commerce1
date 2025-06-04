import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import CartPage from "./Pages/CartPage"; // New Page
import { CartProvider } from "./contexts/CartContext";
import { LikeProvider } from "./contexts/LikeContext"; 
import CheckoutPage from "./Pages/CheckoutPage"; // <-- Import it
import About from './Pages/About';
import Contact from "./Pages/Contact"; 
const App = () => {
  return (
    <CartProvider>
     <LikeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> 
           <Route path="/about" element={<About />} />
           <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
     </LikeProvider>
    </CartProvider>
  );
};

export default App;
