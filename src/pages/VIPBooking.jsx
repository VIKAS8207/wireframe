import React from 'react';

export default function VIPBooking() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New VIP Protocol Booking</h2>
          <p className="text-sm text-gray-500 mt-1">Special arrangements, security, and vehicle clearance.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Submit Protocol Request
        </button>
      </div>

      <form className="space-y-8">
        
        {/* Section 1: Dignitary Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Dignitary / VIP Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="e.g. Hon. Member of Parliament" />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Designation / Organization *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="Official Title" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Point of Contact (PA/Secretary) *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="Name of POC" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">POC Mobile Number *</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="+91" />
            </div>
          </div>
        </div>

        {/* Section 2: Arrival & Logistics */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Arrival & Security Logistics
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Expected Date</label>
              <input type="date" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Expected Time</label>
              <input type="time" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Total Entourage Size</label>
              <input type="number" min="1" defaultValue="1" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Primary Vehicle Details (For VIP Gate Access)</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="Make, Model, Color, and License Plate (e.g. White Innova CG-04-XX-0000)" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Security Category</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option>None (Private VIP)</option>
                <option>Y Category</option>
                <option>Y+ Category</option>
                <option>Z / Z+ Category</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 3: Protocol Services */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Protocol Services Required
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Official Temple Guide / Priest</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Special Prasad Arrangement</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Battery Operated Caddy Required</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Guest House Accommodation</span>
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}