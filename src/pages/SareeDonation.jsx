import React, { useState } from 'react';

export default function SareeDonation() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Saree / Vastra Donation</h2>
          <p className="text-sm text-gray-500 mt-1">Record clothing offerings made to the deity.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Save Record
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
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">Item Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Date Received *</label>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Quantity (Number of Sarees) *</label>
              <input type="number" min="1" defaultValue="1" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}