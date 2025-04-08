import { X } from "lucide-react";

const Sidebar = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 p-4 animate-slideInLeft">
      <button className="mb-4" onClick={onClose}>
        <X className="w-6 h-6" />
      </button>
      <div>
        <h2 className="text-lg font-bold">Menu</h2>
        {/* Add nav links here */}
      </div>
    </div>
  );
};

export default Sidebar;
