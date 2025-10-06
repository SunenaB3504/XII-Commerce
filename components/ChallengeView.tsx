import React, { useState, useEffect } from 'react';
import type { ChallengePaper, ChallengeSession, ChallengeResult } from '../types';
import type { ChallengeQuestion as ChallengeQuestionType } from '../types';
import ChallengeQuestion from './ChallengeQuestion';

interface ChallengeViewProps {
  paper: ChallengePaper;
  onChallengeComplete: (result: ChallengeResult) => void;
}

const ChallengeView: React.FC<ChallengeViewProps> = ({
  paper,
  onChallengeComplete
}) => {
  const [session, setSession] = useState<ChallengeSession>({
    id: `challenge-${Date.now()}`,
    paperId: paper.name,
    subject: 'Business Studies',
    startTime: new Date(),
    timeLimit: paper.timeLimit,
    answers: {},
    completed: false
  });

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(paper.timeLimit * 60);
  const [showResults, setShowResults] = useState(false);

  // Timer logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmitChallenge();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSubmit = (questionId: string, answer: any) => {
    setSession(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const handleSubmitChallenge = () => {
    const timeSpent = Math.floor((Date.now() - session.startTime.getTime()) / 1000);
    const result: ChallengeResult = {
      sessionId: session.id,
      totalQuestions: paper.questions.length,
      correctAnswers: 0, // Will be calculated properly in scoring utility
      score: 0,
      percentage: 0,
      timeSpent,
      questionBreakdown: paper.questions.map(q => ({
        questionId: q.id,
        correct: false, // Will be evaluated
        timeSpent: 0,
        marks: q.marks
      }))
    };

    setSession(prev => ({ ...prev, completed: true, timeSpent }));
    setShowResults(true);
    onChallengeComplete(result);
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResults) {
    return (
      <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-3xl shadow-2xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-4">Challenge Complete! 🎉</h2>
          <p className="text-lg text-slate-600">Your results will be calculated and displayed here.</p>
        </div>
      </div>
    );
  }

  const currentQuestion = paper.questions[currentQuestionIndex];
  const answeredQuestions = Object.keys(session.answers).length;

  return (
    <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-3xl shadow-2xl p-8">
      {/* Challenge Header */}
      <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform">
            <span className="text-3xl transform -rotate-12">⚡</span>
          </div>
          <div>
            <h3 className="text-3xl font-black text-slate-800 mb-1">{paper.name}</h3>
            <p className="text-red-600 font-bold">Challenge Mode - {paper.year} {paper.paperType.toUpperCase()}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white text-lg font-black px-6 py-3 rounded-2xl shadow-2xl border-2 border-red-300">
            <span className="text-2xl">⏱️</span> {formatTime(timeRemaining)}
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-lg font-black px-6 py-3 rounded-2xl shadow-2xl border-2 border-blue-300">
            <span className="text-2xl">📊</span> {answeredQuestions}/{paper.questions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="bg-slate-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-gradient-to-r from-red-500 to-pink-500 h-full transition-all duration-300"
            style={{ width: `${(answeredQuestions / paper.questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-sm text-slate-600 mt-2 text-center">
          Progress: {answeredQuestions} of {paper.questions.length} questions answered
        </p>
      </div>

      {/* Question Display */}
      <ChallengeQuestion
        question={currentQuestion}
        answer={session.answers[currentQuestion.id]}
        onAnswerSubmit={(answer) => handleAnswerSubmit(currentQuestion.id, answer)}
        showSolution={false}
      />

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
        <button
          onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
          disabled={currentQuestionIndex === 0}
          className="px-6 py-3 bg-gradient-to-r from-slate-400 to-slate-500 text-white font-bold rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform"
        >
          ← Previous
        </button>

        <div className="flex gap-2 flex-wrap justify-center">
          {paper.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestionIndex(index)}
              className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                index === currentQuestionIndex
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white scale-110'
                  : session.answers[paper.questions[index].id]
                  ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                  : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestionIndex === paper.questions.length - 1 ? (
          <button
            onClick={handleSubmitChallenge}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            🚀 Submit Challenge
          </button>
        ) : (
          <button
            onClick={() => setCurrentQuestionIndex(Math.min(paper.questions.length - 1, currentQuestionIndex + 1))}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
};

export default ChallengeView;