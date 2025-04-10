// pages/CustomerOrders.jsx
import VendorSidebar from "../../components/vendor-components/VendorSidebar";

// Dummy customer orders data
const customerOrders = [
  {
    id: 1,
    name: "Wireless Earbuds",
    image: "/earbuds.jpg",
    price: "₹1,599",
    warranty: "6 months",
    returnPolicy: "Yes",
    customerName: "John Doe",
    address: "New Delhi, India",
  },
  {
    id: 2,
    name: "Laptop Stand",
    image: "/laptop-stand.jpg",
    price: "₹799",
    warranty: "1 year",
    returnPolicy: "No",
    customerName: "Priya Sharma",
    address: "Mumbai, India",
  },
];

const CustomerOrders = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Customer Orders</h1>
        <div className="space-y-6">
          {customerOrders.map((order) => (
            <div key={order.id} className="flex items-center border p-4 rounded shadow">
              <img src={order.image} alt={order.name} className="w-24 h-24 object-cover rounded mr-6" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{order.name}</h2>
                <div className="text-gray-600 mt-2">
                  <p>Price: {order.price}</p>
                  <p>Warranty: {order.warranty}</p>
                  <p>Return Policy: {order.returnPolicy}</p>
                  <p>Ordered by: {order.customerName}</p>
                  <p>Shipping to: {order.address}</p>
                </div>
              </div>
              <div className="text-blue-600 font-semibold">Ordered</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerOrders;
