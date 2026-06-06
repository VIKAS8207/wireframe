import React from 'react';

export default function AddEmployee() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Employee Profile</h2>
          <p className="text-sm text-gray-500 mt-1">Enter official employment, payroll, and personal details.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Save Employee
        </button>
      </div>

      <form className="space-y-8">
        
        {/* Section 1: Basic Information */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Basic Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">First Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Date of Birth</label>
              <input type="date" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Gender</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Blood Group</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select...</option>
                <option value="A+">A+</option>
                <option value="O+">O+</option>
                <option value="B+">B+</option>
                <option value="AB+">AB+</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2: Contact Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Contact Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Official Email Address *</label>
              <input type="email" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="name@organization.com" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number *</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="+91" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Current Address</label>
              <textarea rows="2" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="e.g., Civil Lines, Raipur, Chhattisgarh"></textarea>
            </div>
          </div>
        </div>

        {/* Section 3: Employment & Payroll */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Employment & Payroll Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Department *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select...</option>
                <option value="admin">Administration</option>
                <option value="accounts">Accounts & Finance</option>
                <option value="maintenance">Maintenance</option>
                <option value="security">Security</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Designation *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="e.g., Accountant" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Date of Joining *</label>
              <input type="date" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Bank Account Number</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Bank IFSC Code</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">PAN Number</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}