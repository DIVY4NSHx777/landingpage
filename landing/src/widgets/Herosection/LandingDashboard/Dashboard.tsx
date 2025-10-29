// src/widgets/Herosection/LandingDashboard/Dashboard.tsx
import { useState } from 'react';

const Dashboard = () => {
 

  return (
    <div className="flex flex-col h-screen w-screen max-w-6xl bg-backdrop border border-gray-700 rounded-2xl bg-background/20 backdrop-blur-lg ">
      <div className="h-16 border-b border-gray-700 flex items-center px-4">
        
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div 
          className={`w-64 border-r border-gray-700 bg-backdrop/50 backdrop-blur-sm `}
        >
          <div className="space-y-2 p-4">
            
          </div>
        </div>

        <div className="flex-1 overflow-auto p-6">
          <div className="flex justify-between items-center mb-6">
            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;