import React from 'react';

export default function EventBooking() {
  return (
    <div className="max-w-4xl mx-auto pb-10">
      
      {/* Page Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">New Mass/Event Booking</h2>
          <p className="text-sm text-gray-500 mt-1">Book venues, specialized poojas, and group catering.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded shadow-sm transition-colors">
          Check Availability & Save
        </button>
      </div>

      <form className="space-y-8">
        
        {/* Section 1: Organizer Details */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Organizer Information
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Organization / Family Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="e.g. Sharma Family / Rotary Club" />
            </div>
            
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Lead Organizer Name *</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="Contact Person" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Contact Number *</label>
              <input type="tel" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="+91" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Billing Address</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" placeholder="City, State" />
            </div>
          </div>
        </div>

        {/* Section 2: Event Specifications */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Event Specifications
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Event Type *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select Event Type...</option>
                <option value="kalyanam">Special Kalyanam / Marriage</option>
                <option value="katha">Private Katha / Satsang</option>
                <option value="annadanam">Annadanam (Mass Feeding)</option>
                <option value="other">Other Group Event</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Preferred Venue/Hall *</label>
              <select className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2">
                <option value="">Select Venue...</option>
                <option value="main_hall">Main Function Hall (Capacity 500)</option>
                <option value="mini_hall">Mini Hall (Capacity 100)</option>
                <option value="open_ground">Open Ground</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Start Date & Time</label>
              <input type="datetime-local" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Expected Crowd / Headcount</label>
              <input type="number" min="10" defaultValue="50" className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block p-2" />
            </div>
          </div>
        </div>

        {/* Section 3: Add-On Logistics */}
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-gray-800 border-b border-gray-100 pb-3 mb-5 uppercase tracking-wide">
            Logistics & Add-ons
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Temple Catering Required (Bhojanalay)</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Audio/PA System Setup</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Stage Decoration / Flowers</span>
            </label>
            <label className="flex items-center space-x-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
              <span>Photography/Videography Clearance</span>
            </label>
          </div>
        </div>

      </form>
    </div>
  );
}