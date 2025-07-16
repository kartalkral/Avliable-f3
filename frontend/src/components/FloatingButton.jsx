import React from 'react';

const FloatingButton = ({ isDebugVisible, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300 z-40 ${
        isDebugVisible 
          ? 'bg-red-500 hover:bg-red-600' 
          : 'bg-blue-500 hover:bg-blue-600'
      }`}
    >
      <div className="text-white font-bold text-sm">
        {isDebugVisible ? 'F3' : 'F3'}
      </div>
      <div className="text-white text-xs">
        {isDebugVisible ? 'OFF' : 'ON'}
      </div>
    </button>
  );
};

export default FloatingButton;