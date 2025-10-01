import React, { useState } from 'react';
import type { Question } from '../types';

interface QuestionViewProps {
  question: Question;
}

const QuestionView: React.FC<QuestionViewProps> = ({ question }) => {
  const [showSolution, setShowSolution] = useState(false);

  // For better aesthetics, we inject the keyframes for animations.
  const style = `
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
    @keyframes fadeInSlow {
        0% { opacity: 0; }
        100% { opacity: 1; }
    }
    .animate-fade-in-slow {
        animation: fadeInSlow 0.6s ease-in forwards;
    }
    ul.list-roman {
        list-style-type: upper-roman;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md animate-fade-in">
      <div className="flex justify-between items-start">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">Question {question.id}</h3>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
          {question.marks} {question.marks > 1 ? 'Marks' : 'Mark'}
        </span>
      </div>
      <div className="prose max-w-none text-slate-700">
        {question.question}
      </div>

      <div className="mt-8 border-t pt-6 text-center">
        {!showSolution && (
           <button
            onClick={() => setShowSolution(true)}
            className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Show Solution & Explanation
          </button>
        )}
       
        {showSolution && (
          <div className="text-left animate-fade-in-slow">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="text-lg font-semibold text-green-800">Solution</h4>
                <div className="mt-2 text-green-900">{question.solution}</div>
            </div>

            <div className="mt-6">
                <div className="prose max-w-none text-slate-700">
                    {question.explanation}
                </div>
            </div>
            
             <button
                onClick={() => setShowSolution(false)}
                className="mt-8 bg-slate-200 text-slate-700 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
              >
                Hide Solution
              </button>
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default QuestionView;
