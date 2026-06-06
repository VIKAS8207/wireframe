import React from 'react';

export default function StandardBooking() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* Page Header (Frappe Style) */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Standard Booking</h2>
          <p className="text-sm text-gray-500 mt-1">Enter details for Darshan and ticket reservation.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Save & Proceed to Pay
        </button>
      </div>

      <form className="space-y-8">
        
        {/* Section 1: Devotee Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Primary Devotee Details
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" placeholder="e.g. Rahul Sharma" />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number *</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" placeholder="+91" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" placeholder="rahul@example.com" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Identity Proof Type *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors">
                <option>Aadhar Card</option>
                <option>PAN Card</option>
                <option>Passport</option>
                <option>Voter ID</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Identity Proof Number *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" placeholder="Enter ID number" />
            </div>
          </div>
        </div>

        {/* Section 2: Booking Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Darshan Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Date *</label>
              <input type="date" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Available Time Slot *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors">
                <option value="">Select a time slot...</option>
                <option value="morning_1">Morning: 06:00 AM - 08:00 AM (Open)</option>
                <option value="morning_2">Morning: 08:00 AM - 10:00 AM (Fast Filling)</option>
                <option value="afternoon_1">Afternoon: 12:00 PM - 02:00 PM (Open)</option>
                <option value="evening_1">Evening: 04:00 PM - 06:00 PM (Full)</option>
                <option value="evening_2">Evening: 06:00 PM - 08:00 PM (Open)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Number of Adults</label>
              <input type="number" min="1" defaultValue="1" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Number of Children (Below 12)</label>
              <input type="number" min="0" defaultValue="0" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" />
            </div>
            
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Special Requirements / Prasad Selection</label>
              <textarea rows="3" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2 transition-colors" placeholder="E.g., Wheelchair required, specific prasad boxes..."></textarea>
            </div>
          </div>
        </div>

        {/* Section 3: Payment Summary Stub */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm flex flex-col items-end">
          <div className="w-full md:w-1/3 space-y-2 text-sm text-gray-700">
            <div className="flex justify-between">
              <span>Ticket Base Fare:</span>
              <span className="font-medium">₹500.00</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes & Fees:</span>
              <span className="font-medium">₹25.00</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-2 text-base font-semibold text-gray-900">
              <span>Total Amount:</span>
              <span>₹525.00</span>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}