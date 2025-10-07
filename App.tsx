import React, { useState, useCallback, useEffect } from 'react';
import { subjects } from './data';
import Sidebar from './components/Sidebar';
import QuestionView from './components/QuestionView';
import SubjectTabs from './components/SubjectTabs';
import PaperSelector from './components/PaperSelector';
import ModeSelector from './components/ModeSelector';
import LearningContentView from './components/LearningContentView';
import { MCQTest, useTestHistory } from './MCQTest';
import ChallengeView from './components/ChallengeView';
import type { ChallengeResult } from './types';
import KnowledgeEvaluationView from './components/KnowledgeEvaluationView';

type ViewMode = 'papers' | 'learn' | 'test' | 'challenge' | 'knowledge';

const App: React.FC = () => {
  const [selectedSubjectName, setSelectedSubjectName] = useState<string>(subjects[0].name);
  const [viewMode, setViewMode] = useState<ViewMode>('papers');

  const currentSubject = subjects.find(s => s.name === selectedSubjectName) || subjects[0];
  const availablePapers = currentSubject.questionPapers;
  const learningModules = currentSubject.learningModules || [];

  const [selectedPaperName, setSelectedPaperName] = useState<string | null>(availablePapers[0]?.name || null);
  const [selectedQuestionId, setSelectedQuestionId] = useState<string | null>(null);

  const [selectedChapter, setSelectedChapter] = useState<string | null>(learningModules[0]?.chapter || null);

  // Test history for MCQ assessments
  const { testHistory, addTestResult } = useTestHistory();

  // Challenge results
  const [challengeResults, setChallengeResults] = useState<ChallengeResult[]>([]);

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

  const handleTestComplete = useCallback((result: any) => {
    addTestResult(result);
    console.log('Test completed:', result);
  }, [addTestResult]);

  const handleChallengeComplete = useCallback((result: ChallengeResult) => {
    setChallengeResults(prev => [result, ...prev]);
    console.log('Challenge completed:', result);
  }, []);

  const handleKnowledgeEvaluationComplete = useCallback((result: any) => {
    console.log('Knowledge evaluation completed:', result);
    // You can store the results or show them in a modal
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
            {viewMode === 'test' && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <MCQTest
                  questionCount={20}
                  studentName="Commerce Student"
                  onTestComplete={handleTestComplete}
                />
                
                {/* Test History */}
                {testHistory.length > 0 && (
                  <div className="mt-8 border-t pt-6">
                    <h3 className="text-xl font-bold mb-4 text-slate-800">Recent Test Results</h3>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      {testHistory.slice(-6).reverse().map((test, index) => (
                        <div key={index} className="bg-slate-50 p-4 rounded-lg border">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold">Test {testHistory.length - index}</span>
                            <span className={`px-2 py-1 rounded text-sm font-bold ${
                              test.performanceLevel === 'excellent' ? 'bg-green-100 text-green-800' :
                              test.performanceLevel === 'good' ? 'bg-blue-100 text-blue-800' :
                              test.performanceLevel === 'average' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {test.performanceLevel.charAt(0).toUpperCase() + test.performanceLevel.slice(1)}
                            </span>
                          </div>
                          <div className="text-sm text-slate-600">
                            Score: {test.score}/{test.totalQuestions} ({test.percentage}%)
                          </div>
                          <div className="text-xs text-slate-500 mt-1">
                            {new Date(test.testDate).toLocaleDateString()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            {viewMode === 'challenge' && currentPaper && (
              <ChallengeView
                paper={currentPaper as any} // Type assertion for now
                onChallengeComplete={handleChallengeComplete}
              />
            )}
            {viewMode === 'knowledge' && (
              <KnowledgeEvaluationView
                onEvaluationComplete={handleKnowledgeEvaluationComplete}
              />
            )}
            {!selectedQuestion && !selectedModule && viewMode !== 'test' && viewMode !== 'challenge' && viewMode !== 'knowledge' && (
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