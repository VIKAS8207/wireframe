import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ModuleLayout({ title, links, children }) {
  const location = useLocation();
  // State to track which dropdown menus are open
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (label) => {
    setOpenDropdowns((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Sidebar Navigation */}
      <div className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10">
        <div className="p-4 border-b border-gray-200">
          <Link to="/" className="flex items-center text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Desk
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {links.map((link, index) => {
            // IF THIS LINK HAS A DROPDOWN (subLinks)
            if (link.subLinks) {
              const isOpen = openDropdowns[link.label];
              return (
                <div key={index} className="space-y-1">
                  <button
                    onClick={() => toggleDropdown(link.label)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <span>{link.label}</span>
                    <svg className={`w-4 h-4 transform transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Dropdown Items (Indented) */}
                  {isOpen && (
                    <div className="pl-6 space-y-1 mt-1">
                      {link.subLinks.map((subLink, subIndex) => {
                        const isSubActive = location.pathname === subLink.path;
                        return (
                          <Link
                            key={subIndex}
                            to={subLink.path}
                            className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                              isSubActive 
                                ? 'bg-blue-50 text-blue-700' 
                                : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                            }`}
                          >
                            {subLink.label}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            // STANDARD SINGLE LINK
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={index}
                to={link.path}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="px-8 py-6">
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        </header>
        <main className="flex-1 overflow-y-auto px-8 pb-8">
          <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm min-h-full">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}