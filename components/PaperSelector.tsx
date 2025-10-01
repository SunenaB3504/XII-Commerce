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
      <h2 className="text-lg font-semibold text-slate-600 mb-3">Select a Paper</h2>
      <div className="flex flex-wrap gap-3">
        {papers.map((paper) => {
          const isSelected = paper.name === selectedPaper;
          return (
            <button
              key={paper.name}
              onClick={() => onSelectPaper(paper.name)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-200 shadow'
              }`}
            >
              {paper.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaperSelector;
