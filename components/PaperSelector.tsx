import React from 'react';
import type { QuestionPaper } from '../types';

interface PaperSelectorProps {
  papers: Pick<QuestionPaper, 'name'>[];
  selectedPaper: string | null;
  onSelectPaper: (name: string) => void;
}

const PaperSelector: React.FC<PaperSelectorProps> = ({ papers, selectedPaper, onSelectPaper }) => {
  if (papers.length === 0) {
    return null;
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-black text-slate-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">📝</span>
        Choose Your Challenge!
      </h2>
      <div className="flex flex-wrap gap-4">
        {papers.map((paper) => {
          const isSelected = paper.name === selectedPaper;
          return (
            <button
              key={paper.name}
              onClick={() => onSelectPaper(paper.name)}
              className={`px-6 py-3 rounded-2xl font-bold text-base transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 ${
                isSelected
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105 border-4 border-white hover:scale-110'
                  : 'bg-white text-slate-800 hover:bg-gradient-to-r hover:from-slate-100 hover:to-slate-200 shadow-lg border-2 border-purple-200 hover:border-pink-300 hover:scale-105'
              }`}
            >
              {paper.name} {isSelected && '🔥'}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaperSelector;
