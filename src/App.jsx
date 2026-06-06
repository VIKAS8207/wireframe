import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import ModuleLayout from './components/ModuleLayout'; // Import your new layout
import StandardBooking from './pages/StandardBooking';
import VIPBooking from './pages/VIPBooking';     // NEW
import EventBooking from './pages/EventBooking'; // NEW
import AddEmployee from './pages/AddEmployee'; // NEW
import AddSevadar from './pages/AddSevadar';   // NEW
import EmployeePayment from './pages/EmployeePayment';   // NEW
import HonorariumPayment from './pages/HonorariumPayment'; // NEW
import CashDonation from './pages/CashDonation';
import OrnamentDonation from './pages/OrnamentDonation';
import FoodDonation from './pages/FoodDonation';
import SareeDonation from './pages/SareeDonation';

// ==========================================
// INDIVIDUAL MODULE WRAPPERS
// (Later, you can move these into a 'pages' folder)
// ==========================================

function TicketManagementModule() {
  const links = [
    { label: 'Booking Option', path: '/tickets' },
    { label: 'VIP Booking', path: '/tickets/vip' },
    { label: 'Event Booking', path: '/tickets/event' },
  ];

  return (
    <ModuleLayout title="Ticket Management" links={links}>
      {/* 2. Updated the routes to match the new links */}
      
        <Routes>
        {/* CHANGED: This route now loads your new form! */}
        <Route path="/" element={<StandardBooking />} /> 
        
        <Route path="/vip" element={<VIPBooking />} />     {/* CHANGED */}
        <Route path="/event" element={<EventBooking />} /> {/* CHANGED */}
      </Routes>
    </ModuleLayout>
  );
}

function HRMSModule() {
  const links = [
    { label: 'Add Emp', path: '/hrms' },
    { label: 'Add Sevadar', path: '/hrms/sevadar' },
    { 
      label: 'Payment', 
      subLinks: [
        { label: 'Emp Payment', path: '/hrms/payment/emp' },
        { label: 'Honorarium', path: '/hrms/payment/honorarium' },
      ]
    },
    { label: 'Report', path: '/hrms/report' },
  ];

  return (
    <ModuleLayout title="HRMS" links={links}>
      <Routes>
        {/* CHANGED: Route to the new Add Employee form */}
        <Route path="/" element={<AddEmployee />} /> 
        
        {/* CHANGED: Route to the new Add Sevadar form */}
        <Route path="/sevadar" element={<AddSevadar />} /> 
        
        {/* CHANGED: Route to the new Employee Payment list */}
        <Route path="/payment/emp" element={<EmployeePayment />} /> 
        
        {/* CHANGED: Route to the new Honorarium list */}
        <Route path="/payment/honorarium" element={<HonorariumPayment />} />
        <Route path="/report" element={<div><h2 className="text-lg font-medium mb-4">HR Reports & Analytics</h2></div>} />
      </Routes>
    </ModuleLayout>
  );
}

function DonationModule() {
  const links = [
    { 
      label: 'Donation', 
      subLinks: [
        { label: 'Cash', path: '/donation/cash' },
        { label: 'Ornament', path: '/donation/ornament' },
        { label: 'Food', path: '/donation/food' },
        { label: 'Saree', path: '/donation/saree' },
      ]
    },
    { label: 'Kiask', path: '/donation/kiask' },
    { label: 'Reports', path: '/donation/reports' },
  ];

  return (
    <ModuleLayout title="Donation" links={links}>
      <Routes>
        {/* Default route redirects/falls back to Cash donation */}
        <Route path="/" element={<CashDonation />} />
        
        {/* The new active routes */}
        <Route path="/cash" element={<CashDonation />} />
        <Route path="/ornament" element={<OrnamentDonation />} />
        <Route path="/food" element={<FoodDonation />} />
        <Route path="/saree" element={<SareeDonation />} />
        
        {/* Placeholders for future modules */}
        <Route path="/kiask" element={<div><h2 className="text-lg font-medium mb-4">Kiask Management</h2></div>} />
        <Route path="/reports" element={<div><h2 className="text-lg font-medium mb-4">Donation Reports</h2></div>} />
      </Routes>
    </ModuleLayout>
  );
}

// ==========================================
// MAIN DESK / DASHBOARD
// ==========================================

function MainDashboard() {
  const navigate = useNavigate();

  const modules = [
    {
      title: 'Ticket Management',
      bgColor: 'bg-blue-100',
      path: '/tickets',
      icon: (
        <svg className="w-9 h-9 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
        </svg>
      ),
    },
    {
      title: 'HRMS',
      bgColor: 'bg-emerald-100',
      path: '/hrms',
      icon: (
        <svg className="w-9 h-9 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Donation',
      bgColor: 'bg-purple-100',
      path: '/donation',
      icon: (
        <svg className="w-9 h-9 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-4xl p-10 justify-center">
        {modules.map((module, index) => (
          <button
            key={index}
            onClick={() => navigate(module.path)}
            className="group flex flex-col items-center justify-center gap-4 transition-all duration-200 ease-in-out hover:-translate-y-1 focus:outline-none"
          >
            <div className={`w-24 h-24 rounded-3xl flex items-center justify-center ${module.bgColor} shadow-sm group-hover:shadow-lg transition-all duration-300`}>
              {module.icon}
            </div>
            <span className="text-xs font-medium text-gray-700 group-hover:text-gray-900 tracking-wide text-center">
              {module.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// APP ROOT ROUTER
// ==========================================

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/tickets/*" element={<TicketManagementModule />} />
        <Route path="/hrms/*" element={<HRMSModule />} />
        <Route path="/donation/*" element={<DonationModule />} />
      </Routes>
    </BrowserRouter>
  );
}