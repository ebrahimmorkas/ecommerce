// pages/VendorProfile.jsx
import { useState, useEffect } from "react";
import VendorSidebar from "../../components/vendor-components/VendorSidebar";

const VendorProfile = () => {
  const [vendorInfo, setVendorInfo] = useState({
    username: "vendor123",
    vendorName: "ABC Traders",
    mobile: "9876543210",
    email: "vendor@example.com",
    password: "******",
  });

  const handleChange = (e) => {
    setVendorInfo({ ...vendorInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call API to update vendor info
    console.log("Updated Info: ", vendorInfo);
  };

  return (
    <div className="flex">
      <VendorSidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Vendor Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          {Object.entries(vendorInfo).map(([key, value]) => (
            <div key={key}>
              <label className="block font-semibold capitalize">{key}</label>
              <input
                type={key === "password" ? "password" : "text"}
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-blue-900 px-4 py-2 rounded w-full"
          >
            Update Info
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorProfile;
