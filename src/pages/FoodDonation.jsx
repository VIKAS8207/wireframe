import React, { useState } from 'react';

export default function FoodDonation() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Food / Grain Donation (Bhandara)</h2>
          <p className="text-sm text-gray-500 mt-1">Record raw materials donated for the temple kitchen.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Add to Inventory
        </button>
      </div>

      <form className="space-y-8">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <div className="flex justify-between items-center border-b border-gray-100 pb-3 mb-5">
            <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">Donor Information</h3>
            <label className="flex items-center space-x-2 text-sm text-gray-700 cursor-pointer">
              <input type="checkbox" checked={isAnonymous} onChange={() => setIsAnonymous(!isAnonymous)} className="w-4 h-4 text-blue-600 rounded" />
              <span className="font-medium text-amber-600">Anonymous Donation</span>
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Donor Name</label>
              <input type="text" disabled={isAnonymous} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2 disabled:opacity-50" placeholder={isAnonymous ? "Anonymous Gupt Daan" : "Full Name"} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
              <input type="tel" disabled={isAnonymous} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2 disabled:opacity-50" placeholder="+91" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">Commodity Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Date Received *</label>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Food Category *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2">
                <option value="">Select...</option>
                <option value="rice">Rice (Chawal)</option>
                <option value="paddy">Paddy (Dhaan)</option>
                <option value="pulse">Pulses / Lentils (Daal)</option>
                <option value="vegetable">Fresh Vegetables</option>
                <option value="oil">Cooking Oil / Ghee</option>
                <option value="sugar">Sugar / Jaggery</option>
              </select>
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Quantity *</label>
              <div className="flex">
                <input type="number" step="0.1" className="w-2/3 bg-gray-50 border border-gray-300 border-r-0 rounded-l-md text-gray-900 text-sm focus:ring-blue-500 p-2" placeholder="0" />
                <select className="w-1/3 bg-gray-100 border border-gray-300 rounded-r-md text-sm p-2 text-gray-700">
                  <option value="kg">Kg</option>
                  <option value="quintal">Quintal</option>
                  <option value="liter">Liter/Tin</option>
                  <option value="bags">Sacks/Bags</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}