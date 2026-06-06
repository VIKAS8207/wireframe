import React, { useState } from 'react';

export default function CashDonation() {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Cash / Monetary Donation</h2>
          <p className="text-sm text-gray-500 mt-1">Record financial contributions and issue receipts.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Save & Generate Receipt
        </button>
      </div>

      <form className="space-y-8">
        {/* Donor Details */}
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
              <label className="block text-xs font-medium text-gray-700 mb-1">Donor Name *</label>
              <input type="text" disabled={isAnonymous} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2 disabled:opacity-50 disabled:bg-gray-100" placeholder={isAnonymous ? "Anonymous Gupt Daan" : "Full Name"} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number</label>
              <input type="tel" disabled={isAnonymous} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2 disabled:opacity-50 disabled:bg-gray-100" placeholder="+91" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">PAN Number (For Tax Exemption 80G)</label>
              <input type="text" disabled={isAnonymous} className="w-full md:w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2 disabled:opacity-50 disabled:bg-gray-100" />
            </div>
          </div>
        </div>

        {/* Donation Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">Transaction Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Date Received *</label>
              <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Payment Mode *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 p-2">
                <option>Cash</option>
                <option>UPI / QR Code</option>
                <option>Bank Transfer (NEFT/RTGS)</option>
                <option>Cheque / DD</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Amount (₹) *</label>
              <input type="number" min="1" className="w-full bg-white border border-blue-300 text-gray-900 text-base font-bold rounded-md focus:ring-blue-500 p-2" placeholder="0.00" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}