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
  return (
    <div className="bg-white p-4 rounded-lg shadow-md lg:sticky lg:top-24">
      <h2 className="text-xl font-semibold mb-4 border-b pb-2 text-slate-700">
        {mode === 'papers' ? 'Questions' : 'Chapters'}
      </h2>
      <nav>
        {mode === 'papers' && (
          <ul className="space-y-2 max-h-[70vh] overflow-y-auto">
            {questions.map((q) => {
              const isSelected = q.id === currentQuestionId;
              return (
                <li key={q.id}>
                  <button
                    onClick={() => onSelectQuestion(q.id)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow'
                        : 'bg-slate-50 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="font-medium">Question {q.id}</span>
                    <span className={`text-xs ml-2 px-2 py-0.5 rounded-full ${isSelected ? 'bg-blue-500' : 'bg-slate-200'}`}>
                      {q.marks} {q.marks > 1 ? 'marks' : 'mark'}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
        {mode === 'learn' && (
          <ul className="space-y-2 max-h-[70vh] overflow-y-auto">
            {chapters.map((chap) => {
              const isSelected = chap.chapter === currentChapter;
              return (
                <li key={chap.chapter}>
                  <button
                    onClick={() => onSelectChapter(chap.chapter)}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow'
                        : 'bg-slate-50 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="font-semibold block">Chapter {chap.chapter}</span>
                    <span className="text-sm">{chap.title}</span>
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