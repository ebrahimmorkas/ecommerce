import { useState } from "react";
import { Menu, ShoppingCart, X } from "lucide-react"; // You can use any icon library
import Sidebar from "./Sidebar";
import CartSlide from "./CartSlide";
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-4 py-3 bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      {/* Left: Hamburger */}
      <button onClick={() => setSidebarOpen(true)}>
        <Menu className="w-6 h-6" />
      </button>

      {/* Center: Website Name */}
      <h1 className="text-xl font-bold">ShopVerse</h1>

      {/* Right: Cart + Auth */}
      <div className="flex items-center gap-4">
        {/* <button className="text-sm font-medium">Login</button>
        <button className="text-sm font-medium">Sign Up</button> */}
        <Link 
          to="/login" 
          className="text-sm font-medium text-gray-700 no-underline bg-gray-50 px-4 py-2 rounded hover:border-blue-500 border border-transparent"
        >
          Login
        </Link>
        <Link 
          to="/signup" 
          className="text-sm font-medium text-gray-700 no-underline bg-gray-50 px-4 py-2 rounded hover:border-blue-500 border border-transparent"
        >
          Sign Up
        </Link>
        <button onClick={() => setCartOpen(true)}>
          <ShoppingCart className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
      {isCartOpen && <CartSlide onClose={() => setCartOpen(false)} />}
    </nav>
  );
};

export default Navbar;
