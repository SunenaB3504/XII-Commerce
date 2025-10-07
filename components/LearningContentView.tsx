import React, { useState, useEffect, useCallback } from 'react';
import type { LearningModule, Concept } from '../types';

// Utility to extract plain text from React nodes for speech synthesis
const extractTextFromReactNode = (node: React.ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') {
    return node.toString();
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromReactNode).join(' ');
  }
  if (React.isValidElement(node)) {
    // FIX: Explicitly cast props to safely access the children property, resolving TypeScript errors.
    const props = node.props as { children?: React.ReactNode };
    if (props.children) {
      return extractTextFromReactNode(props.children);
    }
  }
  return '';
};


const SpeechButton: React.FC<{ isSpeaking: boolean; onClick: () => void; }> = ({ isSpeaking, onClick }) => (
  <button
    onClick={onClick}
    className="p-1.5 rounded-full hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
    aria-label={isSpeaking ? 'Stop reading' : 'Read aloud'}
  >
    {isSpeaking ? (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm4 0a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-500" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 3.75a.75.75 0 01.75.75v10.5a.75.75 0 01-1.5 0V4.5A.75.75 0 0110 3.75z" />
        <path d="M4.5 8.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H5.25a.75.75 0 01-.75-.75zM15.5 8.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75zM8 5.25a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H8.75A.75.75 0 018 5.25zM12 14.25a.75.75 0 00-.75.75v1.5a.75.75 0 001.5 0v-1.5a.75.75 0 00-.75-.75z" />
      </svg>
    )}
  </button>
);


interface LearningContentViewProps {
  module: LearningModule;
}

const LearningContentView: React.FC<LearningContentViewProps> = ({ module }) => {
    const [speakingId, setSpeakingId] = useState<string | null>(null);
    const synth = window.speechSynthesis;

    const handleSpeak = useCallback((id: string, content: React.ReactNode) => {
        if (!synth) {
            alert('Your browser does not support text-to-speech.');
            return;
        }

        // If the same button is clicked again, stop speaking.
        if (speakingId === id) {
            synth.cancel();
            setSpeakingId(null);
            return;
        }

        // Stop any current speech before starting a new one.
        if (synth.speaking) {
            synth.cancel();
        }

        const textToSpeak = extractTextFromReactNode(content);
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        utterance.onend = () => {
            setSpeakingId(null);
        };
        
        utterance.onerror = (event: SpeechSynthesisErrorEvent) => {
            // 'canceled' and 'interrupted' are not true errors in our case.
            // They happen when we stop speech intentionally by clicking another button or the same button again.
            if (event.error !== 'canceled' && event.error !== 'interrupted') {
              console.error("Speech synthesis error:", event);
            }
            setSpeakingId(null); // Always clear state on error
        };

        synth.speak(utterance);
        setSpeakingId(id);
    }, [synth, speakingId]);


    // Cleanup effect to stop speech when the component unmounts
    useEffect(() => {
        return () => {
            if (synth && synth.speaking) {
                synth.cancel();
            }
        };
    }, [synth]);

    const style = `
    @keyframes fadeIn {
        0% { opacity: 0; transform: translateY(-10px); }
        100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }
  `;

  return (
     <>
      <style>{style}</style>
      <div className="space-y-8 animate-fade-in">
        <header className="bg-gradient-to-br from-white via-teal-50 to-cyan-50 border-4 border-teal-300 rounded-3xl shadow-2xl p-8">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-6 hover:rotate-0 transition-transform">
                <span className="text-3xl transform -rotate-6">📚</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-slate-900">{module.title}</h2>
                <p className="text-teal-600 font-bold mt-2 text-base">Chapter {module.chapter} • {module.title} 🎯</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-sm font-black px-5 py-3 rounded-2xl shadow-2xl border-2 border-yellow-300">
              <span className="text-xl">💡</span> Study Mode
            </div>
          </div>
        </header>

        {/* Overview Card */}
        <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 border-4 border-purple-300 rounded-3xl shadow-2xl p-8">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-2xl font-black text-slate-800 flex items-center gap-2">
                <span className="text-2xl">ℹ️</span>
                Chapter Overview
              </h3>
              <SpeechButton isSpeaking={speakingId === 'overview'} onClick={() => handleSpeak('overview', module.overview)} />
          </div>
          <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 shadow-lg">
            <p className="text-slate-800 prose max-w-none text-lg leading-relaxed font-medium">{module.overview}</p>
          </div>
        </div>

        {/* Key Concepts Section */}
        <div>
          <h3 className="text-3xl font-black text-slate-800 mb-6 ml-2 flex items-center gap-3">
            <span className="text-3xl">💡</span>
            Key Concepts to Master!
          </h3>
          <div className="space-y-6">
            {module.keyConcepts.map((concept, index) => {
              const conceptId = `concept-${index}`;
              const contentToRead = `${concept.title}. ${extractTextFromReactNode(concept.content)}. ${concept.example ? `Example: ${extractTextFromReactNode(concept.example)}` : ''} ${concept.mnemonic ? `Mnemonic: ${concept.mnemonic}` : ''}`;

              return (
              <div key={index} className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 border-4 border-blue-300 rounded-3xl shadow-2xl p-6 hover:shadow-3xl transition-all duration-300 transform hover:scale-102">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-black text-blue-800 flex-1 flex items-center gap-3">
                    <span className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-black text-base shadow-lg">{index + 1}</span>
                    {concept.title}
                    {concept.examFocus && <span className="text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white font-black px-4 py-2 rounded-full shadow-lg border-2 border-white">⭐ EXAM FOCUS!</span>}
                  </h4>
                  <SpeechButton isSpeaking={speakingId === conceptId} onClick={() => handleSpeak(conceptId, contentToRead)} />
                </div>
                <div className="text-slate-800 mt-2 prose max-w-none text-base leading-relaxed font-medium">{concept.content}</div>
                {concept.example && <div className="mt-4 p-5 bg-gradient-to-r from-green-400 to-emerald-500 border-4 border-green-300 rounded-2xl text-sm font-bold shadow-lg"><span className="text-lg">💡</span> <span className="font-black text-white">Example: </span><div className="text-slate-900">{concept.example}</div></div>}
                {concept.mnemonic && <div className="mt-4 p-5 bg-gradient-to-r from-purple-400 to-pink-500 border-4 border-purple-300 rounded-2xl text-sm font-bold text-white shadow-lg"><span className="text-lg">🧠</span> <span className="font-black">Remember: </span>{concept.mnemonic}</div>}
              </div>
            )})}
          </div>
        </div>

        {/* Keywords Card */}
        <div className="bg-gradient-to-br from-white via-yellow-50 to-orange-50 border-4 border-yellow-300 rounded-3xl shadow-2xl p-8">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-800 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m-6 0H7a2 2 0 01-2-2V9a2 2 0 012-2h2m-2 4h6" /></svg>
                Keywords & Definitions
              </h3>
               <SpeechButton isSpeaking={speakingId === 'keywords'} onClick={() => handleSpeak('keywords', module.keywords.map(k => `${k.term}. ${k.definition}.`).join(' '))} />
           </div>
          <div className="bg-gradient-to-r from-slate-50 to-blue-50/30 border border-slate-200/50 rounded-xl p-6">
            <div className="space-y-4">
              {module.keywords.map((keyword, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-800 text-lg">{keyword.term}</div>
                    <div className="text-slate-600 pl-4 border-l-2 border-slate-200 ml-2 mt-1 leading-relaxed">{keyword.definition}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 ml-2 flex items-center">
            <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            Case Studies in Action
          </h3>
          <div className="space-y-6">
            {module.caseStudies.map((cs, index) => {
               const caseStudyId = `cs-${index}`;
               const contentToRead = `${cs.title}. Scenario: ${cs.scenario}. Analysis and Takeaways: ${extractTextFromReactNode(cs.analysis)}`;
              return (
              <div key={index} className="bg-white/95 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
                 <div className="flex justify-between items-start mb-4">
                    <h4 className="text-lg font-semibold text-slate-800 flex items-center">
                      <span className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3 shadow-md">{index + 1}</span>
                      {cs.title}
                    </h4>
                    <SpeechButton isSpeaking={speakingId === caseStudyId} onClick={() => handleSpeak(caseStudyId, contentToRead)} />
                 </div>
                <div className="bg-gradient-to-r from-gray-50 to-slate-100 border border-slate-200/50 rounded-xl p-4 mb-4 shadow-inner">
                  <p className="text-slate-700 font-medium">{cs.scenario}</p>
                </div>
                 <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/50 rounded-xl p-4 shadow-inner">
                    <h5 className="font-semibold text-emerald-800 mb-2 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Analysis & Takeaways
                    </h5>
                    <div className="prose max-w-none text-slate-600 text-sm leading-relaxed">{cs.analysis}</div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Quick Revision Card */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-blue-300/50 rounded-2xl shadow-xl p-8">
           <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-blue-800 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Quick Revision
              </h3>
               <SpeechButton isSpeaking={speakingId === 'revision'} onClick={() => handleSpeak('revision', module.quickRevision)} />
           </div>
          <div className="bg-white/50 border border-blue-200/50 rounded-xl p-6 shadow-inner">
            <div className="text-blue-900 prose max-w-none text-lg leading-relaxed">{module.quickRevision}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningContentView;