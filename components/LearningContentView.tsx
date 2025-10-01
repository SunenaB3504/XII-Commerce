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
        <header className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">{module.title}</h2>
              <p className="text-slate-600 mt-2 text-lg">Chapter {module.chapter}</p>
            </div>
          </div>
        </header>

        {/* Overview Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-3">
             <h3 className="text-xl font-bold text-slate-800 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Chapter Overview
              </h3>
              <SpeechButton isSpeaking={speakingId === 'overview'} onClick={() => handleSpeak('overview', module.overview)} />
          </div>
          <p className="text-slate-700 prose max-w-none">{module.overview}</p>
        </div>

        {/* Key Concepts Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4 ml-2">Key Concepts</h3>
          <div className="space-y-4">
            {module.keyConcepts.map((concept, index) => {
              const conceptId = `concept-${index}`;
              const contentToRead = `${concept.title}. ${extractTextFromReactNode(concept.content)}. ${concept.example ? `Example: ${extractTextFromReactNode(concept.example)}` : ''} ${concept.mnemonic ? `Mnemonic: ${concept.mnemonic}` : ''}`;
              
              return (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md border-t-4 border-blue-200">
                <div className="flex justify-between items-start">
                  <h4 className="text-lg font-semibold text-blue-800 flex-1">
                    {concept.title}
                    {concept.examFocus && <span className="text-xs bg-yellow-200 text-yellow-800 font-bold px-2 py-1 rounded-full ml-2 align-middle">EXAM FOCUS</span>}
                  </h4>
                  <SpeechButton isSpeaking={speakingId === conceptId} onClick={() => handleSpeak(conceptId, contentToRead)} />
                </div>
                <div className="text-slate-700 mt-2 prose max-w-none">{concept.content}</div>
                {concept.example && <div className="mt-3 p-3 bg-slate-50 border-l-4 border-slate-300 rounded-r-lg text-sm italic"><span className="font-semibold text-slate-600">Example: </span>{concept.example}</div>}
                {concept.mnemonic && <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-300 rounded-r-lg text-sm"><span className="font-semibold text-blue-700">Mnemonic: </span>{concept.mnemonic}</div>}
              </div>
            )})}
          </div>
        </div>
        
        {/* Keywords Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
           <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-800 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7h2a2 2 0 012 2v2a2 2 0 01-2 2h-2m-6 0H7a2 2 0 01-2-2V9a2 2 0 012-2h2m-2 4h6" /></svg>
                Keywords & Definitions
              </h3>
               <SpeechButton isSpeaking={speakingId === 'keywords'} onClick={() => handleSpeak('keywords', module.keywords.map(k => `${k.term}. ${k.definition}.`).join(' '))} />
           </div>
          <dl className="space-y-3">
            {module.keywords.map((keyword, index) => (
              <div key={index}>
                <dt className="font-semibold text-slate-800">{keyword.term}</dt>
                <dd className="text-slate-600 pl-4 border-l-2 border-slate-200 ml-2">{keyword.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
        
        {/* Case Studies Section */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4 ml-2">Case Studies in Action</h3>
          <div className="space-y-4">
            {module.caseStudies.map((cs, index) => {
               const caseStudyId = `cs-${index}`;
               const contentToRead = `${cs.title}. Scenario: ${cs.scenario}. Analysis and Takeaways: ${extractTextFromReactNode(cs.analysis)}`;
              return (
              <div key={index} className="bg-white p-5 rounded-lg shadow-md">
                 <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold text-slate-800">{cs.title}</h4>
                    <SpeechButton isSpeaking={speakingId === caseStudyId} onClick={() => handleSpeak(caseStudyId, contentToRead)} />
                 </div>
                <p className="mt-2 p-3 bg-gray-50 rounded-md text-slate-700">{cs.scenario}</p>
                 <div className="mt-4">
                    <h5 className="font-semibold text-slate-700">Analysis & Takeaways</h5>
                    <div className="prose max-w-none text-slate-600 text-sm mt-1">{cs.analysis}</div>
                </div>
              </div>
            )})}
          </div>
        </div>

        {/* Quick Revision Card */}
        <div className="bg-blue-50 border-2 border-dashed border-blue-300 p-6 rounded-lg shadow-md">
           <div className="flex justify-between items-center mb-3">
              <h3 className="text-xl font-bold text-blue-800 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                Quick Revision
              </h3>
               <SpeechButton isSpeaking={speakingId === 'revision'} onClick={() => handleSpeak('revision', module.quickRevision)} />
           </div>
          <div className="text-blue-900 prose max-w-none">{module.quickRevision}</div>
        </div>
      </div>
    </>
  );
};

export default LearningContentView;