import { Link } from "react-router-dom";

const VendorSidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-100 shadow-md p-4">
      <ul className="space-y-4">
        <li><Link to="/vendor/profile" className="hover:text-blue-600">Profile</Link></li>
        <li><Link to="/vendor/dashboard" className="hover:text-blue-600">Dashboard</Link></li>
        <li><Link to="/vendor/products" className="hover:text-blue-600">My Products</Link></li>
        <li><Link to="/vendor/sold-items" className="hover:text-blue-600">Sold Items</Link></li>
        <li><Link to="/vendor/orders" className="hover:text-blue-600">Customer Orders</Link></li>
        <li><Link to="/vendor/add-product" className="hover:text-blue-600">Add Product</Link></li>
      </ul>
    </div>
  );
};

export default VendorSidebar;
