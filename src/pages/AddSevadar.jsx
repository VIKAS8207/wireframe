import React from 'react';

export default function AddSevadar() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Sevadar Registration</h2>
          <p className="text-sm text-gray-500 mt-1">Register a volunteer, their availability, and area of service.</p>
        </div>
        <button className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Register Sevadar
        </button>
      </div>

      <form className="space-y-8">
        
        {/* Section 1: Personal Profile */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Volunteer Profile
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="e.g. Ramesh Patel" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Primary Occupation</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="e.g., Retired, Student, Business" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Mobile Number *</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="+91" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Government ID (Aadhar Number) *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="12-digit Aadhar" />
            </div>
          </div>
        </div>

        {/* Section 2: Seva Preferences & Availability */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Service Preferences
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Department / Seva Type *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select...</option>
                <option value="annadanam">Annadanam (Kitchen/Serving)</option>
                <option value="crowd_control">Crowd Management</option>
                <option value="cleaning">Temple Cleaning / Maintenance</option>
                <option value="it_support">Office / IT Support</option>
                <option value="shoes">Shoe Stand Management</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Availability *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select...</option>
                <option value="daily">Daily</option>
                <option value="weekends">Weekends Only</option>
                <option value="festivals">Festivals & Special Events Only</option>
                <option value="flexible">Flexible / On Call</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">Any specific medical conditions or limitations?</label>
              <textarea rows="2" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="E.g., Cannot stand for long hours, heavy lifting restricted..."></textarea>
            </div>
          </div>
        </div>

        {/* Section 3: Emergency Contact */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Emergency Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Contact Person Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Emergency Mobile Number *</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="+91" />
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}