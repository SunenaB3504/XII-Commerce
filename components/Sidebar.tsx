import React from 'react';
import type { Question, LearningModule } from '../types';

interface SidebarProps {
  mode: 'papers' | 'learn' | 'test' | 'challenge' | 'knowledge';
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
  const completedCount = mode === 'papers' ? Math.floor(questions.length * 0.6) : mode === 'learn' ? Math.floor(chapters.length * 0.4) : mode === 'challenge' ? Math.floor(questions.length * 0.3) : mode === 'knowledge' ? Math.floor(questions.length * 0.2) : 0;
  const totalCount = mode === 'papers' ? questions.length : mode === 'learn' ? chapters.length : mode === 'challenge' ? questions.length : 1;
  const progress = Math.round((completedCount / totalCount) * 100);

  // Generate unique ID for this component instance to avoid CSS conflicts
  const progressBarId = `progress-bar-${mode}`;

  return (
    <>
      <style>
        {`#${progressBarId} { width: ${progress}%; }`}
      </style>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm lg:sticky lg:top-24 p-5">
        <div className="mb-6 pb-4 border-b border-slate-100">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-sm ${mode === 'papers' ? 'bg-blue-100 text-blue-600' :
                  mode === 'learn' ? 'bg-teal-100 text-teal-600' :
                    mode === 'challenge' ? 'bg-orange-100 text-orange-600' :
                      mode === 'knowledge' ? 'bg-indigo-100 text-indigo-600' : 'bg-slate-100 text-slate-600'
                }`}>
                <span className="text-xl">{mode === 'papers' ? '📝' : mode === 'learn' ? '📖' : mode === 'challenge' ? '⚡' : mode === 'knowledge' ? '🧠' : '📋'}</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-slate-800">
                  {mode === 'papers' ? 'Question Navigator' : mode === 'learn' ? 'Chapter List' : mode === 'challenge' ? 'Timed Challenge' : mode === 'knowledge' ? 'Knowledge Check' : 'Assessment'}
                </h2>
                <p className="text-xs font-medium text-slate-500">
                  {mode === 'papers' ? 'Select a question to view' : mode === 'learn' ? 'Select a chapter to study' : mode === 'challenge' ? 'Beat the clock' : mode === 'knowledge' ? 'Evaluate understanding' : 'Test knowledge'}
                </p>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-semibold text-slate-500">Completion Status</span>
              <span className="text-xs font-bold text-slate-700">{progress}%</span>
            </div>
            <div className="bg-slate-100 rounded-full h-2 overflow-hidden">
              <div
                id={progressBarId}
                className={`h-full rounded-full transition-all duration-500 ${progress === 100 ? 'bg-green-500' : 'bg-blue-600'
                  }`}
              />
            </div>
          </div>
        </div>

        <nav>
          {mode === 'papers' && (
            <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {questions.map((q, index) => {
                const isSelected = q.id === currentQuestionId;
                const isCompleted = index < completedCount;
                return (
                  <li key={q.id}>
                    <button
                      onClick={() => onSelectQuestion(q.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 border ${isSelected
                          ? 'bg-blue-50 border-blue-200 text-blue-900 shadow-sm'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-transparent hover:border-slate-200'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold ${isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-500'
                            }`}>
                            {q.id}
                          </div>
                          <div>
                            <div className={`font-semibold text-sm ${isSelected ? 'text-blue-900' : 'text-slate-700'}`}>
                              Question {q.id}
                            </div>
                            <div className="text-xs text-slate-500">
                              {q.marks} {q.marks > 1 ? 'marks' : 'mark'}
                            </div>
                          </div>
                        </div>
                        {isCompleted && <span className="text-green-500 text-lg">✓</span>}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {mode === 'learn' && (
            <ul className="space-y-2 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
              {chapters.map((chap, index) => {
                const isSelected = chap.chapter === currentChapter;
                const isCompleted = index < completedCount;
                return (
                  <li key={chap.chapter}>
                    <button
                      onClick={() => onSelectChapter(chap.chapter)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 border ${isSelected
                          ? 'bg-teal-50 border-teal-200 text-teal-900 shadow-sm'
                          : 'bg-white hover:bg-slate-50 text-slate-700 border-transparent hover:border-slate-200'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                          <div className={`w-8 h-8 rounded-md flex items-center justify-center text-xs font-bold flex-shrink-0 ${isSelected ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'
                            }`}>
                            {chap.chapter}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className={`font-semibold text-sm truncate ${isSelected ? 'text-teal-900' : 'text-slate-700'}`}>
                              {chap.title}
                            </div>
                            <div className="text-xs text-slate-500">
                              Chapter {chap.chapter}
                            </div>
                          </div>
                        </div>
                        {isCompleted && <span className="text-green-500 text-lg">✓</span>}
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {mode === 'challenge' && (
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                <h3 className="font-bold text-orange-900 mb-2 text-sm">⚡ Challenge Specs</h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between border-b border-orange-100 pb-1">
                    <span>Questions</span>
                    <span className="font-semibold">{questions.length}</span>
                  </div>
                  <div className="flex justify-between border-b border-orange-100 pb-1">
                    <span>Duration</span>
                    <span className="font-semibold">30 mins</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Type</span>
                    <span className="font-semibold">Adaptive</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {mode === 'knowledge' && (
            <div className="space-y-4">
              <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                <h3 className="font-bold text-indigo-900 mb-2 text-sm">🧠 Assessment Details</h3>
                <div className="space-y-2 text-xs text-slate-600">
                  <div className="flex justify-between border-b border-indigo-100 pb-1">
                    <span>Format</span>
                    <span className="font-semibold">MCQ Pool</span>
                  </div>
                  <div className="flex justify-between border-b border-indigo-100 pb-1">
                    <span>Scope</span>
                    <span className="font-semibold">Comprehensive</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;