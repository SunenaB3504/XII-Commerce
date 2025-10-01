import React from 'react';
import type { Question, LearningModule } from '../types';

interface SidebarProps {
  mode: 'papers' | 'learn';
  questions: Pick<Question, 'id' | 'marks'>[];
  currentQuestionId: string | null;
  onSelectQuestion: (id: string) => void;
  chapters: Pick<LearningModule, 'chapter' | 'title'>[];
  currentChapter: string | null;
  onSelectChapter: (chapter: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  mode, 
  questions, 
  currentQuestionId, 
  onSelectQuestion,
  chapters,
  currentChapter,
  onSelectChapter
}) => {
  const completedCount = mode === 'papers' ? Math.floor(questions.length * 0.6) : Math.floor(chapters.length * 0.4);
  const totalCount = mode === 'papers' ? questions.length : chapters.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 border-4 border-purple-200 rounded-3xl shadow-2xl lg:sticky lg:top-24 p-6">
      <div className="mb-6 pb-4 border-b-4 border-purple-200">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6">
              <span className="text-2xl transform -rotate-6">{mode === 'papers' ? '🎯' : '📚'}</span>
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-800">
                {mode === 'papers' ? 'Challenges' : 'Chapters'}
              </h2>
              <p className="text-sm font-bold text-purple-600">
                {mode === 'papers' ? 'Pick your battle!' : 'Select & study!'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="bg-white/80 rounded-full p-2 border-2 border-purple-200">
          <div className="flex items-center justify-between mb-1 px-2">
            <span className="text-xs font-bold text-slate-700">Your Progress</span>
            <span className="text-xs font-black text-purple-600">{progress}% 🎉</span>
          </div>
          <div className="bg-slate-200 rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
      
      <nav>
        {mode === 'papers' && (
          <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {questions.map((q, index) => {
              const isSelected = q.id === currentQuestionId;
              const isCompleted = index < completedCount;
              return (
                <li key={q.id}>
                  <button
                    onClick={() => onSelectQuestion(q.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:scale-105 ${
                      isSelected
                        ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl scale-105 border-4 border-white'
                        : 'bg-white/80 hover:bg-white text-slate-700 border-2 border-purple-200 hover:border-pink-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shadow-md ${
                          isSelected ? 'bg-white/30 text-white' : 'bg-gradient-to-br from-purple-400 to-pink-400 text-white'
                        }`}>
                          {q.id}
                        </div>
                        <div>
                          <div className={`font-bold ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                            Question {q.id}
                          </div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-pink-100' : 'text-purple-600'}`}>
                            {q.marks} {q.marks > 1 ? 'marks' : 'mark'} {isCompleted && '✓'}
                          </div>
                        </div>
                      </div>
                      {isSelected && <span className="text-2xl animate-bounce">⚡</span>}
                      {!isSelected && isCompleted && <span className="text-xl">✨</span>}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {mode === 'learn' && (
          <ul className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {chapters.map((chap, index) => {
              const isSelected = chap.chapter === currentChapter;
              const isCompleted = index < completedCount;
              return (
                <li key={chap.chapter}>
                  <button
                    onClick={() => onSelectChapter(chap.chapter)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 hover:scale-105 ${
                      isSelected
                        ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-2xl scale-105 border-4 border-white'
                        : 'bg-white/80 hover:bg-white text-slate-700 border-2 border-purple-200 hover:border-teal-300 hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black shadow-md flex-shrink-0 ${
                          isSelected ? 'bg-white/30 text-white' : 'bg-gradient-to-br from-teal-400 to-cyan-400 text-white'
                        }`}>
                          {chap.chapter}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className={`font-bold truncate ${isSelected ? 'text-white' : 'text-slate-800'}`}>
                            {chap.title}
                          </div>
                          <div className={`text-sm font-semibold ${isSelected ? 'text-teal-100' : 'text-teal-600'}`}>
                            Chapter {chap.chapter} {isCompleted && '✓'}
                          </div>
                        </div>
                      </div>
                      {isSelected && <span className="text-2xl animate-bounce flex-shrink-0">💡</span>}
                      {!isSelected && isCompleted && <span className="text-xl flex-shrink-0">🌟</span>}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;