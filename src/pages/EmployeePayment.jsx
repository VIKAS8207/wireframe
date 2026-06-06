import React, { useState } from 'react';

export default function EmployeePayment() {
  // Mock data for the table
  const [employees, setEmployees] = useState([
    { id: 'EMP-001', name: 'Rahul Sharma', department: 'Accounts', gross: 45000, pf: 1800, net: 43200, status: 'Ready' },
    { id: 'EMP-002', name: 'Priya Verma', department: 'Admin', gross: 38000, pf: 1800, net: 36200, status: 'Ready' },
    { id: 'EMP-003', name: 'Amit Singh', department: 'Security', gross: 25000, pf: 1200, net: 23800, status: 'Ready' },
    { id: 'EMP-004', name: 'Neha Gupta', department: 'IT Support', gross: 55000, pf: 1800, net: 53200, status: 'Ready' },
  ]);

  // Actions
  const toggleHold = (id) => {
    setEmployees(employees.map(emp => 
      emp.id === id 
        ? { ...emp, status: emp.status === 'Hold' ? 'Ready' : 'Hold' } 
        : emp
    ));
  };

  const removeEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  // Calculate total only for employees who are NOT on hold
  const totalPayout = employees
    .filter(emp => emp.status !== 'Hold')
    .reduce((sum, emp) => sum + emp.net, 0);

  return (
    <div className="flex flex-col h-full bg-white rounded-lg border border-gray-200 shadow-sm relative">
      
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center bg-white rounded-t-lg">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Payroll Processing</h2>
          <p className="text-sm text-gray-500 mt-1">Review and process monthly salaries.</p>
        </div>
      </div>

      {/* Table Data */}
      <div className="flex-1 overflow-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gross Pay</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deductions (PF)</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net Pay</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((emp) => (
              <tr key={emp.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{emp.name}</div>
                  <div className="text-xs text-gray-500">{emp.id} • {emp.department}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">₹{emp.gross.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600">-₹{emp.pf.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">₹{emp.net.toLocaleString()}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    emp.status === 'Hold' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    {emp.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-3">
                  <button onClick={() => toggleHold(emp.id)} className="text-amber-600 hover:text-amber-900">
                    {emp.status === 'Hold' ? 'Unhold' : 'Hold'}
                  </button>
                  <button onClick={() => removeEmployee(emp.id)} className="text-red-600 hover:text-red-900">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
            {employees.length === 0 && (
              <tr>
                <td colSpan="6" className="px-6 py-10 text-center text-sm text-gray-500">No employees in list.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer / Summary Action Bar */}
      <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 rounded-b-lg flex justify-between items-center sticky bottom-0">
        <div>
          <span className="text-sm text-gray-500">Total Net Payout:</span>
          <span className="ml-2 text-xl font-bold text-gray-900">₹{totalPayout.toLocaleString()}</span>
        </div>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-6 rounded shadow-sm transition-colors disabled:opacity-50"
          disabled={totalPayout === 0}
        >
          Make Payment for All
        </button>
      </div>
      
    </div>
  );
}