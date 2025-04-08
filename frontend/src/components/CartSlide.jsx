import { X } from "lucide-react";

const CartSlide = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-72 h-full bg-white shadow-lg z-50 p-4 animate-slideInRight">
      <button className="mb-4" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      <h2 className="text-lg font-bold">Your Cart</h2>
      {/* Add cart items here */}
    </div>
  );
};

export default CartSlide;
