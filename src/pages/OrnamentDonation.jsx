import React, { useState } from 'react';

export default function OrnamentDonation() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Ornament / Metal Donation</h2>
          <p className="text-sm text-gray-500 mt-1">Record precious metals, jewelry, and biscuits.</p>
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
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">Item Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Date Received *</label>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Material Type *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2">
                <option value="">Select Material...</option>
                <option value="gold">Gold</option>
                <option value="silver">Silver</option>
                <option value="copper">Copper</option>
                <option value="bronze">Bronze</option>
                <option value="brass">Brass</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Item Category *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2">
                <option value="">Select Type...</option>
                <option value="necklace">Necklace / Chain</option>
                <option value="wearable">Other Wearable (Ring, Bangle)</option>
                <option value="biscuit">Biscuit / Brick</option>
                <option value="coin">Coin</option>
                <option value="raw">Raw / Melted</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Gross Weight (Grams) *</label>
              <input type="number" step="0.01" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" placeholder="e.g. 15.5" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Description / Appraiser Note</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" placeholder="e.g. 22K Gold chain with locket" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}