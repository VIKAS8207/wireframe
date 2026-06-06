import React, { useState } from 'react';

export default function HonorariumPayment() {
  // Standard fixed pay for all Sevadars
  const STANDARD_PAY = 5000;

  const [sevadars, setSevadars] = useState([
    { id: 'SEV-001', name: 'Ramesh Patel', area: 'Annadanam', status: 'Ready' },
    { id: 'SEV-002', name: 'Suresh Kumar', area: 'Crowd Control', status: 'Ready' },
    { id: 'SEV-003', name: 'Anita Desai', area: 'Temple Cleaning', status: 'Ready' },
    { id: 'SEV-004', name: 'Vikram Singh', area: 'Shoe Stand', status: 'Ready' },
  ]);

  const toggleHold = (id) => {
    setSevadars(sevadars.map(sev => 
      sev.id === id 
        ? { ...sev, status: sev.status === 'Hold' ? 'Ready' : 'Hold' } 
        : sev
    ));
  };

  const removeSevadar = (id) => {
    setSevadars(sevadars.filter(sev => sev.id !== id));
  };

  // Calculate total only for active (not on hold)
  const activeCount = sevadars.filter(sev => sev.status !== 'Hold').length;
  const totalPayout = activeCount * STANDARD_PAY;

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm relative">
      
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-lg">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Sevadar Honorarium</h2>
          <p className="text-sm text-gray-500 mt-1">Standard monthly allowance processing (₹{STANDARD_PAY.toLocaleString()} per person).</p>
        </div>
      </div>

      {/* Table Data */}
      <div className="flex-1 overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sevadar Details</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seva Area</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Basic Allowance</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sevadars.map((sev) => (
              <tr key={sev.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{sev.name}</div>
                  <div className="text-xs text-gray-500">{sev.id}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{sev.area}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{STANDARD_PAY.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    sev.status === 'Hold' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {sev.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button onClick={() => toggleHold(sev.id)} className="text-amber-600 hover:text-amber-900">
                    {sev.status === 'Hold' ? 'Unhold' : 'Hold'}
                  </button>
                  <button onClick={() => removeSevadar(sev.id)} className="text-red-600 hover:text-red-900">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {sevadars.length === 0 && (
              <tr>
                <td colSpan="5" className="px-6 py-10 text-center text-sm text-gray-500">No records found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Summary Action Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-lg flex justify-between items-center sticky bottom-0">
        <div>
          <span className="text-sm text-gray-500">Total Allowance ({activeCount} persons):</span>
          <span className="ml-2 text-xl font-bold text-gray-900">₹{totalPayout.toLocaleString()}</span>
        </div>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded shadow-sm transition-colors disabled:opacity-50"
          disabled={totalPayout === 0}
        >
          Disburse Honorariums
        </button>
      </div>
      
    </div>
  );
}