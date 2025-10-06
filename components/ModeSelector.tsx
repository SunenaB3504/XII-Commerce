import React from 'react';

type ViewMode = 'papers' | 'learn' | 'test' | 'challenge';

interface ModeSelectorProps {
  currentMode: ViewMode;
  onSetMode: (mode: ViewMode) => void;
  showLearnTab: boolean;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onSetMode, showLearnTab }) => {
  return (
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-2 border-4 border-white/60 mb-6">
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={() => onSetMode('papers')}
          className={`flex-1 px-6 py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 ${
            currentMode === 'papers'
              ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl scale-105 border-4 border-white'
              : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:scale-105 hover:shadow-lg border-2 border-slate-300'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">🎮</span>
            <span>Challenge Mode</span>
            <span className="text-xs font-semibold opacity-90">Test Your Skills!</span>
            {currentMode === 'papers' && <span className="text-xl animate-bounce">⚡</span>}
          </div>
        </button>

        {showLearnTab && (
          <button
            onClick={() => onSetMode('learn')}
            className={`flex-1 px-6 py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 ${
              currentMode === 'learn'
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-2xl scale-105 border-4 border-white'
                : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:scale-105 hover:shadow-lg border-2 border-slate-300'
            }`}
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-3xl">📖</span>
              <span>Study Mode</span>
              <span className="text-xs font-semibold opacity-90">Learn Concepts!</span>
              {currentMode === 'learn' && <span className="text-xl animate-bounce">💡</span>}
            </div>
          </button>
        )}

        <button
          onClick={() => onSetMode('challenge')}
          className={`flex-1 px-6 py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 ${
            currentMode === 'challenge'
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-2xl scale-105 border-4 border-white'
              : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:scale-105 hover:shadow-lg border-2 border-slate-300'
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">⚡</span>
            <span>True Challenge</span>
            <span className="text-xs font-semibold opacity-90">Timed SQP Tests!</span>
            {currentMode === 'challenge' && <span className="text-xl animate-bounce">🔥</span>}
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModeSelector;
