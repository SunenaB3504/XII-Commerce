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
  // Professional styling without playful animations
  const style = `
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-5px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.3s ease-out forwards;
    }
    ul.list-roman {
        list-style-type: upper-roman;
    }
  `;

  return (
    <>
      <style>{style}</style>
      <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-8 animate-fade-in min-h-[60vh] flex flex-col">
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-slate-500">Q{question.id.replace(/\D/g, '')}</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 leading-tight">Question {question.id}</h3>
              <p className="text-sm text-slate-500 font-medium">Review the question carefully</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-slate-50 text-slate-700 text-sm font-semibold px-4 py-2 rounded-lg border border-slate-200">
              <span className="text-slate-400 mr-2">Marks:</span>
              {question.marks}
            </div>
          </div>
        </div>

        <div className="prose prose-slate max-w-none text-slate-800 text-lg leading-relaxed flex-grow">
          {question.question}
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100">
          {!showSolution && (
            <div className="flex justify-start">
              <button
                onClick={() => setShowSolution(true)}
                className="inline-flex items-center gap-3 bg-blue-600 text-white font-semibold text-base py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm min-w-[160px] justify-center"
              >
                <span className="text-xl">💡</span>
                <span>View Solution</span>
              </button>
            </div>
          )}

          {showSolution && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">✓</span>
                    </div>
                    <h4 className="text-lg font-bold text-green-800">Correct Answer</h4>
                  </div>
                  <button
                    onClick={handleSpeakSolution}
                    className={`text-green-700 hover:bg-green-100 p-2 rounded-lg transition-colors ${isSpeakingSolution ? 'bg-green-100 ring-1 ring-green-300' : ''}`}
                    title={isSpeakingSolution ? "Stop Reading" : "Read Aloud"}
                  >
                    <span className="text-xl">{isSpeakingSolution ? '⏹️' : '🔊'}</span>
                  </button>
                </div>
                <div ref={solutionRef} className="text-base text-green-900 font-medium leading-relaxed">
                  {question.solution}
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-sm">ℹ️</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">Explanation</h4>
                  </div>
                  <button
                    onClick={handleSpeak}
                    className={`text-slate-600 hover:bg-slate-200 p-2 rounded-lg transition-colors ${isSpeaking ? 'bg-slate-200 ring-1 ring-slate-300' : ''}`}
                    title={isSpeaking ? "Stop Reading" : "Read Aloud"}
                  >
                    <span className="text-xl">{isSpeaking ? '⏹️' : '🔊'}</span>
                  </button>
                </div>
                <div ref={explanationRef} className="prose prose-slate max-w-none text-slate-700 text-base leading-relaxed">
                  {question.explanation}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setShowSolution(false)}
                  className="text-slate-500 hover:text-slate-700 text-sm font-medium px-4 py-2 hover:bg-slate-50 rounded-lg transition-colors"
                >
                  Hide Solution
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
