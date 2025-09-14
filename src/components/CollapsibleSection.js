import React, { useState } from 'react';

const CollapsibleSection = ({ 
  id, 
  title, 
  icon, 
  children, 
  isOpenByDefault = false,
  gradient = "from-slate-700 to-slate-800",
  bgColor = "bg-white"
}) => {
  const [isOpen, setIsOpen] = useState(isOpenByDefault);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-3">
      <div className={`${bgColor} rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden`}>
        {/* Header */}
        <button
          onClick={toggleSection}
          className={`w-full bg-gradient-to-r ${gradient} p-6 text-white hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                {icon}
              </div>
              <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium opacity-90 hidden sm:block">
                {isOpen ? 'Collapse' : 'Expand'}
              </span>
              <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Content */}
        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[5000px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="p-0">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
