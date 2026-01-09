import React, { useState, useRef, useEffect } from 'react';
import type { Question } from '../types';

interface QuestionViewProps {
  question: Question;
}

const QuestionView: React.FC<QuestionViewProps> = ({ question }) => {
  const [showSolution, setShowSolution] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSpeakingSolution, setIsSpeakingSolution] = useState(false);
  const explanationRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cleanup speech on unmount
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  const handleSpeak = () => {
    if (isSpeakingSolution) {
      setIsSpeakingSolution(false);
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      if (explanationRef.current) {
        // Cancel any existing speech first
        window.speechSynthesis.cancel();

        const text = explanationRef.current.innerText;
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);

        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    }
  };

  const handleSpeakSolution = () => {
    if (isSpeaking) {
      setIsSpeaking(false);
    }

    if (isSpeakingSolution) {
      window.speechSynthesis.cancel();
      setIsSpeakingSolution(false);
    } else {
      if (solutionRef.current) {
        // Cancel any existing speech first
        window.speechSynthesis.cancel();

        const text = solutionRef.current.innerText;
        const utterance = new SpeechSynthesisUtterance(text);

        utterance.onend = () => setIsSpeakingSolution(false);
        utterance.onerror = () => setIsSpeakingSolution(false);

        window.speechSynthesis.speak(utterance);
        setIsSpeakingSolution(true);
      }
    }
  };

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
    @keyframes bounceIn {
        0% { opacity: 0; transform: scale(0.3); }
        50% { transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { opacity: 1; transform: scale(1); }
    }
    .animate-bounce-in {
        animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    }
    ul.list-roman {
        list-style-type: upper-roman;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-3xl shadow-2xl p-8 animate-fade-in">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
              <span className="text-3xl transform -rotate-6">❓</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-1">Question {question.id}</h3>
              <p className="text-purple-600 font-bold">Let's ace this! 💪</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-base font-black px-5 py-3 rounded-2xl shadow-2xl border-2 border-yellow-300 transform hover:scale-110 transition-transform">
              <span className="text-xl">⭐</span> {question.marks} {question.marks > 1 ? 'Points' : 'Point'}
            </div>
          </div>
        </div>

        <div className="bg-white border-4 border-purple-200 rounded-2xl p-6 mb-8 shadow-lg">
          <div className="prose prose-slate max-w-none text-slate-800 text-lg leading-relaxed font-medium">
            {question.question}
          </div>
        </div>

        <div className="border-t-4 border-purple-200 pt-8">
          {!showSolution && (
            <div className="text-center">
              <button
                onClick={() => setShowSolution(true)}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-black text-lg py-5 px-10 rounded-2xl hover:from-purple-600 hover:via-pink-600 hover:to-rose-600 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-yellow-400 shadow-2xl hover:shadow-3xl border-4 border-white"
              >
                <span className="text-2xl animate-bounce">💡</span>
                <span>Reveal Answer!</span>
                <span className="text-2xl">✨</span>
              </button>
              <p className="text-purple-600 font-bold text-sm mt-4">Click to see the solution and learn! 🚀</p>
            </div>
          )}

          {showSolution && (
            <div className="space-y-6 animate-bounce-in">
              <div className="bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-green-300 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">✅</span>
                    </div>
                    <h4 className="text-2xl font-black text-white drop-shadow-lg">Correct Answer!</h4>
                  </div>
                  <button
                    onClick={handleSpeakSolution}
                    className={`bg-white/20 hover:bg-white/30 text-white p-2 rounded-xl transition-all border-2 border-white/40 shadow-lg active:scale-95 ${isSpeakingSolution ? 'animate-pulse ring-2 ring-white' : ''}`}
                    title={isSpeakingSolution ? "Stop Reading" : "Read Aloud"}
                  >
                    <span className="text-2xl">{isSpeakingSolution ? '⏹️' : '🔊'}</span>
                  </button>
                </div>
                <div ref={solutionRef} className="text-xl font-bold bg-white/20 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/40">
                  {question.solution}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-400 to-indigo-500 border-4 border-blue-300 rounded-3xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <span className="text-3xl">🧠</span>
                    </div>
                    <h4 className="text-2xl font-black text-white drop-shadow-lg">How It Works</h4>
                  </div>
                  <button
                    onClick={handleSpeak}
                    className={`bg-white/20 hover:bg-white/30 text-white p-2 rounded-xl transition-all border-2 border-white/40 shadow-lg active:scale-95 ${isSpeaking ? 'animate-pulse ring-2 ring-white' : ''}`}
                    title={isSpeaking ? "Stop Reading" : "Read Aloud"}
                  >
                    <span className="text-2xl">{isSpeaking ? '⏹️' : '🔊'}</span>
                  </button>
                </div>
                <div ref={explanationRef} className="prose prose-slate max-w-none text-white text-base leading-relaxed font-medium bg-white/20 backdrop-blur-sm rounded-2xl p-5 border-2 border-white/40">
                  {question.explanation}
                </div>
              </div>

              <div className="text-center pt-4 flex flex-col items-center gap-3">
                <div className="text-5xl animate-bounce">🎉</div>
                <p className="text-purple-700 font-black text-xl">Awesome work! 🌟</p>
                <button
                  onClick={() => setShowSolution(false)}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white font-bold text-base py-3 px-6 rounded-2xl hover:from-slate-700 hover:to-slate-800 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-400 shadow-lg"
                >
                  <span>Hide Solution</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestionView;
