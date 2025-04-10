const DashboardStats = ({ stats }) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Products Uploaded</h3>
          <p className="text-2xl text-blue-600">{stats.uploaded}</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Items Sold</h3>
          <p className="text-2xl text-green-600">{stats.sold}</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-lg text-center">
          <h3 className="text-lg font-semibold">Customer Orders</h3>
          <p className="text-2xl text-yellow-600">{stats.ordered}</p>
        </div>
      </div>
    );
  };
  
  export default DashboardStats;
  