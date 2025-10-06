import React, { useState } from 'react';
import type { ChallengeQuestion } from '../types';

interface ChallengeQuestionProps {
  question: ChallengeQuestion;
  answer?: any;
  onAnswerSubmit: (answer: any) => void;
  showSolution: boolean;
}

const ChallengeQuestion: React.FC<ChallengeQuestionProps> = ({
  question,
  answer,
  onAnswerSubmit,
  showSolution
}) => {
  const [userAnswer, setUserAnswer] = useState(answer || '');

  const handleSubmit = () => {
    onAnswerSubmit(userAnswer);
  };

  return (
    <div className="bg-white border-4 border-purple-200 rounded-2xl p-6 mb-6 shadow-lg">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
          Question {question.id} • {question.marks} marks
        </span>
        {question.challengeData && (
          <>
            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
              question.challengeData.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
              question.challengeData.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {question.challengeData.difficulty.toUpperCase()}
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {question.challengeData.topic}
            </span>
            {question.challengeData.estimatedTime && (
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
                ⏱️ {Math.ceil(question.challengeData.estimatedTime / 60)} min
              </span>
            )}
          </>
        )}
      </div>

      <div className="prose prose-slate max-w-none text-slate-800 text-lg mb-6">
        {question.question}
      </div>

      {/* Answer Input Area */}
      <div className="bg-slate-50 p-4 rounded-lg border-2 border-slate-200">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Your Answer:
        </label>
        <textarea
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Type your answer here..."
          className="w-full p-3 border border-slate-300 rounded-lg resize-vertical min-h-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          disabled={showSolution}
        />
        {!showSolution && (
          <div className="mt-3 flex justify-end">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:scale-105 transition-transform"
            >
              Save Answer
            </button>
          </div>
        )}
      </div>

      {/* Show solution only after challenge completion */}
      {showSolution && (
        <div className="mt-6 border-t-2 border-slate-200 pt-6 space-y-4">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <span className="text-xl">✅</span> Correct Answer:
            </h4>
            <div className="text-green-900">
              {question.solution}
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
              <span className="text-xl">🧠</span> Explanation:
            </h4>
            <div className="text-blue-900">
              {question.explanation}
            </div>
          </div>

          {question.challengeData?.markingTips && (
            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2">
                <span className="text-xl">💡</span> Marking Tips:
              </h4>
              <ul className="text-yellow-900 list-disc pl-5 space-y-1">
                {question.challengeData.markingTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          )}

          {question.challengeData?.commonMistakes && (
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
                <span className="text-xl">⚠️</span> Common Mistakes to Avoid:
              </h4>
              <ul className="text-red-900 list-disc pl-5 space-y-1">
                {question.challengeData.commonMistakes.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChallengeQuestion;