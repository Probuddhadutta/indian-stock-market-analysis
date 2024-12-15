import React from 'react';
import { LineChart, Bell, Users } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <LineChart className="w-8 h-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold">Indian Markets</span>
          </div>
          <div className="flex items-center space-x-4">
            <Bell className="w-6 h-6 text-gray-600" />
            <Users className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </nav>
  );
}
