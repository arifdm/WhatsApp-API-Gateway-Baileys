import React from "react";

const Dashboard = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Total Users</h2>
          <p className="text-gray-600 text-4xl font-bold">1,234</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Messages Sent</h2>
          <p className="text-gray-600 text-4xl font-bold">12,345</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Active Sessions</h2>
          <p className="text-gray-600 text-4xl font-bold">56</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Activity Overview</h2>
        <div className="h-64 bg-gray-200 flex items-center justify-center">
          <p className="text-gray-500">[Chart Placeholder]</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
