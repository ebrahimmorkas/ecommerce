// import VendorSidebar from "../components/vendor/VendorSidebar";
// import DashboardStats from "../components/vendor/DashboardStats";
import VendorSidebar from "../../components/vendor-components/VendorSidebar";
import DashboardStats from "../../components/vendor-components/DashboardStats";
import { useNavigate } from "react-router-dom";

const VendorDashboard = () => {
  const navigate = useNavigate();

  // Dummy stats - fetch from backend later
  const stats = {
    uploaded: 12,
    sold: 7,
    ordered: 4,
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <VendorSidebar />

      {/* Main content */}
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold mb-4">Vendor Dashboard</h1>

        <DashboardStats stats={stats} />

        <button
          onClick={() => navigate("/vendor/add-product")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Add New Product
        </button>
      </main>
    </div>

  );
};

export default VendorDashboard;
