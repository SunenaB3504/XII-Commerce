import React from 'react';

type ViewMode = 'papers' | 'learn';

interface ModeSelectorProps {
  currentMode: ViewMode;
  onSetMode: (mode: ViewMode) => void;
  showLearnTab: boolean;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onSetMode, showLearnTab }) => {
  const baseClasses = "px-4 py-2 rounded-md font-medium text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200";
  const selectedClasses = "bg-blue-600 text-white shadow";
  const unselectedClasses = "bg-white text-slate-700 hover:bg-slate-200";

  return (
    <div className="mt-6 flex space-x-4 p-1 bg-slate-200 rounded-lg">
      <button 
        onClick={() => onSetMode('papers')}
        className={`${baseClasses} ${currentMode === 'papers' ? selectedClasses : unselectedClasses}`}
      >
        Practice Papers
      </button>
      {showLearnTab && (
        <button 
          onClick={() => onSetMode('learn')}
          className={`${baseClasses} ${currentMode === 'learn' ? selectedClasses : unselectedClasses}`}
        >
          Study Content
        </button>
      )}
    </div>
  );
};

export default ModeSelector;
