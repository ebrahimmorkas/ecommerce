// pages/SoldItems.jsx
import VendorSidebar from "../../components/vendor-components/VendorSidebar";

// Dummy sold items data
const soldItems = [
  {
    id: 1,
    name: "Bluetooth Speaker",
    image: "/speaker.jpg",
    price: "₹1,299",
    warranty: "1 year",
    returnPolicy: "Yes",
  },
  {
    id: 2,
    name: "Smart Watch",
    image: "/watch.jpg",
    price: "₹2,999",
    warranty: "1 year",
    returnPolicy: "No",
  },
];

const VendorSoldItems = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Sold Items</h1>
        <div className="space-y-6">
          {soldItems.map((item) => (
            <div key={item.id} className="flex items-center border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-6" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <div className="text-gray-600 mt-2">
                  <p>Price: {item.price}</p>
                  <p>Warranty: {item.warranty}</p>
                  <p>Return Policy: {item.returnPolicy}</p>
                </div>
              </div>
              <div className="text-green-600 font-semibold">Sold</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorSoldItems;
