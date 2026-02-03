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
    <div className="mt-6 mb-8">
      <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
        <span className="text-xl">📄</span>
        Select Question Paper
      </h2>
      <div className="flex flex-wrap gap-3">
        {papers.map((paper) => {
          const isSelected = paper.name === selectedPaper;
          return (
            <button
              key={paper.name}
              onClick={() => onSelectPaper(paper.name)}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 border ${isSelected
                  ? 'bg-slate-800 text-white border-slate-800 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
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
