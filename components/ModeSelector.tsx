import React from 'react';

type ViewMode = 'papers' | 'learn' | 'test' | 'challenge' | 'knowledge';

interface ModeSelectorProps {
  currentMode: ViewMode;
  onSetMode: (mode: ViewMode) => void;
  showLearnTab: boolean;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ currentMode, onSetMode, showLearnTab }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onSetMode('papers')}
          className={`flex-1 p-5 rounded-xl text-left transition-all duration-200 border ${currentMode === 'papers'
              ? 'bg-blue-50 border-blue-200 shadow-sm'
              : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
            }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${currentMode === 'papers' ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'
              }`}>
              📝
            </div>
            <div>
              <h3 className={`font-bold text-lg ${currentMode === 'papers' ? 'text-blue-900' : 'text-slate-700'}`}>
                Question Papers
              </h3>
              <p className="text-sm text-slate-500 font-medium">Browse & Practice</p>
            </div>
          </div>
        </button>

        {showLearnTab && (
          <button
            onClick={() => onSetMode('learn')}
            className={`flex-1 p-5 rounded-xl text-left transition-all duration-200 border ${currentMode === 'learn'
                ? 'bg-teal-50 border-teal-200 shadow-sm'
                : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
              }`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${currentMode === 'learn' ? 'bg-teal-100 text-teal-600' : 'bg-slate-100 text-slate-500'
                }`}>
                📖
              </div>
              <div>
                <h3 className={`font-bold text-lg ${currentMode === 'learn' ? 'text-teal-900' : 'text-slate-700'}`}>
                  Study Mode
                </h3>
                <p className="text-sm text-slate-500 font-medium">Learn Concepts</p>
              </div>
            </div>
          </button>
        )}

        <button
          onClick={() => onSetMode('challenge')}
          className={`flex-1 p-5 rounded-xl text-left transition-all duration-200 border ${currentMode === 'challenge'
              ? 'bg-orange-50 border-orange-200 shadow-sm'
              : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
            }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${currentMode === 'challenge' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'
              }`}>
              ⚡
            </div>
            <div>
              <h3 className={`font-bold text-lg ${currentMode === 'challenge' ? 'text-orange-900' : 'text-slate-700'}`}>
                Challenge
              </h3>
              <p className="text-sm text-slate-500 font-medium">Timed Tests</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => onSetMode('knowledge')}
          className={`flex-1 p-5 rounded-xl text-left transition-all duration-200 border ${currentMode === 'knowledge'
              ? 'bg-indigo-50 border-indigo-200 shadow-sm'
              : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
            }`}
        >
          <div className="flex items-center gap-4">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${currentMode === 'knowledge' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-500'
              }`}>
              🧠
            </div>
            <div>
              <h3 className={`font-bold text-lg ${currentMode === 'knowledge' ? 'text-indigo-900' : 'text-slate-700'}`}>
                Knowledge
              </h3>
              <p className="text-sm text-slate-500 font-medium">Assessment</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ModeSelector;
