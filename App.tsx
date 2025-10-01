import React, { useState, useCallback, useEffect } from 'react';
import { subjects } from './data';
import Sidebar from './components/Sidebar';
import QuestionView from './components/QuestionView';
import SubjectTabs from './components/SubjectTabs';
import PaperSelector from './components/PaperSelector';
import ModeSelector from './components/ModeSelector';
import LearningContentView from './components/LearningContentView';

type ViewMode = 'papers' | 'learn';

const App: React.FC = () => {
  const [selectedSubjectName, setSelectedSubjectName] = useState<string>(subjects[0].name);
  const [viewMode, setViewMode] = useState<ViewMode>('papers');

  const currentSubject = subjects.find(s => s.name === selectedSubjectName) || subjects[0];
  const availablePapers = currentSubject.questionPapers;
  const learningModules = currentSubject.learningModules || [];

  const [selectedPaperName, setSelectedPaperName] = useState<string | null>(availablePapers[0]?.name || null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  const [selectedChapter, setSelectedChapter] = useState<string | null>(learningModules[0]?.chapter || null);

  useEffect(() => {
    const firstPaper = currentSubject.questionPapers[0];
    setSelectedPaperName(firstPaper?.name || null);
    setSelectedQuestionId(firstPaper?.questions[0]?.id || null);
    
    const firstModule = currentSubject.learningModules?.[0];
    setSelectedChapter(firstModule?.chapter || null);
  }, [selectedSubjectName, currentSubject]);

  useEffect(() => {
    if (viewMode === 'papers') {
      const currentPaper = availablePapers.find(p => p.name === selectedPaperName);
      const firstQuestionId = currentPaper?.questions[0]?.id;
      setSelectedQuestionId(firstQuestionId || null);
    }
  }, [selectedPaperName, viewMode, availablePapers]);

  const handleSelectQuestion = useCallback((id: string) => {
    setSelectedQuestionId(id);
  }, []);

  const handleSelectSubject = useCallback((name: string) => {
    setSelectedSubjectName(name);
  }, []);

  const handleSelectPaper = useCallback((name: string) => {
    setSelectedPaperName(name);
  }, []);
  
  const handleSelectChapter = useCallback((chapter: string) => {
    setSelectedChapter(chapter);
  }, []);

  const currentPaper = availablePapers.find(p => p.name === selectedPaperName);
  const currentQuestions = currentPaper?.questions || [];
  const selectedQuestion = currentQuestions.find(q => q.id === selectedQuestionId);
  const selectedModule = learningModules.find(m => m.chapter === selectedChapter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 font-sans text-slate-800">
      <header className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-2xl border-b-4 border-yellow-300 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <span className="text-3xl">🎯</span>
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white via-yellow-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  Commerce Champions! 🚀
                </h1>
                <p className="text-white font-bold mt-1 text-sm sm:text-base drop-shadow-md">Level Up Your XII Commerce Game! 💪</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 border-2 border-white/40 shadow-lg">
                <span className="text-white font-bold text-sm">🔥 Streak: 7 days!</span>
              </div>
              <div className="bg-yellow-400 rounded-full px-4 py-2 border-2 border-yellow-300 shadow-lg">
                <span className="font-black text-purple-900 text-sm">⭐ 2025-26</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <SubjectTabs 
          subjects={subjects.map(s => s.name)}
          selectedSubject={selectedSubjectName}
          onSelectSubject={handleSelectSubject}
        />
        
        <ModeSelector
          currentMode={viewMode}
          onSetMode={setViewMode}
          showLearnTab={!!(currentSubject.learningModules && currentSubject.learningModules.length > 0)}
        />

        {viewMode === 'papers' && availablePapers.length > 0 && (
          <PaperSelector
            papers={availablePapers}
            selectedPaper={selectedPaperName}
            onSelectPaper={handleSelectPaper}
          />
        )}

        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <aside className="lg:w-1/4 xl:w-1/5">
            <Sidebar 
              mode={viewMode}
              questions={currentQuestions}
              currentQuestionId={selectedQuestionId}
              onSelectQuestion={handleSelectQuestion}
              chapters={learningModules}
              currentChapter={selectedChapter}
              onSelectChapter={handleSelectChapter}
            />
          </aside>
          <section className="flex-1">
            {viewMode === 'papers' && selectedQuestion && (
              <QuestionView key={selectedQuestion.id} question={selectedQuestion} />
            )}
            {viewMode === 'learn' && selectedModule && (
              <LearningContentView key={selectedModule.chapter} module={selectedModule} />
            )}
            {!selectedQuestion && !selectedModule && (
               <div className="bg-white p-8 rounded-lg shadow-md flex items-center justify-center h-full">
                <p className="text-xl text-slate-500">Select an item from the list to get started!</p>
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

export default App;