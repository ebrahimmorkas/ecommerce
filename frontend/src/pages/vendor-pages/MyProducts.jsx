// pages/MyProducts.jsx
import VendorSidebar from "../../components/vendor-components/VendorSidebar";

// Dummy product data
const dummyProducts = [
  {
    id: 1,
    name: "Wireless Mouse",
    image: "/mouse.jpg",
    price: "₹699",
    warranty: "6 months",
    returnPolicy: "Yes",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    image: "/keyboard.jpg",
    price: "₹1299",
    warranty: "1 year",
    returnPolicy: "No",
  },
];

const MyProducts = () => {
  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">My Products</h1>
        <div className="space-y-6">
          {dummyProducts.map((product) => (
            <div key={product.id} className="flex items-center border p-4 rounded shadow">
              <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded mr-6" />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <div className="text-gray-600 mt-2">
                  <p>Price: {product.price}</p>
                  <p>Warranty: {product.warranty}</p>
                  <p>Return Policy: {product.returnPolicy}</p>
                </div>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-green-900 px-4 py-2 rounded">
                Update
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProducts;
