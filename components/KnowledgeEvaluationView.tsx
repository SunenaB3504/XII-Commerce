/* eslint-disable react/style-prop-object */
import React, { useState, useEffect } from 'react';
import type {
  KnowledgeQuestion,
  KnowledgeEvaluationFilters,
  KnowledgeSession,
  KnowledgeResult,
  ChapterPerformance
} from '../types';
import { subjects } from '../data';
import KnowledgeQuestionComponent from './KnowledgeQuestion.tsx';
import { 
  getMCQsBySubject, 
  getMCQsByChapters, 
  getWeightedMCQs, 
  getRandomMCQs,
  getMCQStats,
  type MCQPoolQuestion
} from '../data/mcq-pool';

interface KnowledgeEvaluationViewProps {
  onEvaluationComplete: (result: KnowledgeResult) => void;
}

// Chapter weightage configuration for each subject (based on CBSE exam patterns)
const CHAPTER_WEIGHTAGE: { [subject: string]: { [chapter: string]: number } } = {
  'Business Studies': {
    '1': 10, '2': 20, '3': 14, '4': 10, '5': 10, 
    '6': 10, '7': 10, '8': 8, '9': 4, '10': 2, '11': 2
  },
  'Accountancy': {
    '1': 15, '2': 12, '3': 10, '4': 10, '5': 10,
    '6': 10, '7': 8, '8': 8, '9': 8, '10': 9
  },
  'Economics': {
    '1': 10, '2': 10, '3': 10, '4': 10, '5': 10,
    '6': 10, '7': 10, '8': 10, '9': 10, '10': 10
  }
};

const KnowledgeEvaluationView: React.FC<KnowledgeEvaluationViewProps> = ({
  onEvaluationComplete
}) => {
  const [currentStep, setCurrentStep] = useState<'setup' | 'evaluation' | 'review' | 'results'>('setup');
  const [filters, setFilters] = useState<KnowledgeEvaluationFilters>({
    subject: '',
    chapters: [],
    questionCount: 20
  });
  const [questions, setQuestions] = useState<KnowledgeQuestion[]>([]);
  const [session, setSession] = useState<KnowledgeSession | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [results, setResults] = useState<KnowledgeResult | null>(null);
  const [showReview, setShowReview] = useState(false);

  // Get available chapters for selected subject
  const getAvailableChapters = (subjectName: string) => {
    const subject = subjects.find(s => s.name === subjectName);
    if (!subject?.learningModules) return [];
    return subject.learningModules.map(module => ({
      id: module.chapter,
      title: `${module.chapter}. ${module.title}`
    }));
  };

  // Pool questions using centralized MCQ pool (guaranteed no duplicates)
  const poolQuestions = (subjectName: string, selectedChapters: string[], count: number): KnowledgeQuestion[] => {
    console.log('📊 Fetching from Centralized MCQ Pool');
    console.log(`   Subject: ${subjectName}`);
    console.log(`   Chapters: ${selectedChapters.length === 0 ? 'All' : selectedChapters.join(', ')}`);
    console.log(`   Requested: ${count} questions`);

    // Get MCQs from centralized pool
    let poolQuestions: MCQPoolQuestion[];
    
    if (selectedChapters.length === 0) {
      // All chapters - use weighted selection
      poolQuestions = getWeightedMCQs(subjectName, count);
      console.log(`   ✅ Weighted selection from all chapters`);
    } else {
      // Specific chapters - balanced selection
      const chapterMCQs = getMCQsByChapters(subjectName, selectedChapters);
      poolQuestions = getRandomMCQs(chapterMCQs, count);
      console.log(`   ✅ Random selection from ${selectedChapters.length} chapter(s)`);
    }

    // Convert to KnowledgeQuestion format
    const questions: KnowledgeQuestion[] = poolQuestions.map(mcq => ({
      ...mcq,
      difficulty: mcq.difficulty || 'medium',
      bloomLevel: 'remembering' as const
    }));

    // Display statistics
    const stats = getMCQStats(subjectName);
    console.log(`   Pool size: ${stats.total} unique MCQs`);
    console.log(`   Selected: ${questions.length} questions`);
    console.log(`   ✅ NO DUPLICATES (Centralized Pool)`);

    return questions;
  };

  // Helper function to extract text from React elements (for solutions)
  const extractText = (element: any): string => {
    if (typeof element === 'string') return element;
    if (typeof element === 'number') return element.toString();
    if (!element) return '';
    if (element.props && element.props.children) {
      if (Array.isArray(element.props.children)) {
        return element.props.children.map(extractText).join(' ');
      }
      return extractText(element.props.children);
    }
    return '';
  };

  // Helper function to extract correct answer from solution
  const extractCorrectAnswer = (solution: any): string => {
    const solutionText = extractText(solution);
    const match = solutionText.match(/correct answer:\s*([a-d])\)/i) || solutionText.match(/^([a-d])\)/i);
    return match ? match[1].toLowerCase() : '';
  };

  const startEvaluation = () => {
    if (!filters.subject) return;

    const evaluationQuestions = poolQuestions(filters.subject, filters.chapters, filters.questionCount);

    if (evaluationQuestions.length === 0) {
      alert('No questions found for the selected criteria. Please adjust your filters.');
      return;
    }

    const newSession: KnowledgeSession = {
      id: `knowledge-${Date.now()}`,
      filters: { ...filters },
      startTime: new Date(),
      answers: {},
      completed: false
    };

    setSession(newSession);
    setQuestions(evaluationQuestions);
    setCurrentStep('evaluation');
  };

  const handleAnswerSubmit = (index: number, answer: string) => {
    if (!session) return;

    setSession(prev => prev ? {
      ...prev,
      answers: { ...prev.answers, [index]: answer }
    } : null);
  };

  const calculateResults = (): KnowledgeResult => {
    if (!session || !questions.length) {
      throw new Error('Invalid session or questions');
    }

    const timeSpent = Math.floor((Date.now() - session.startTime.getTime()) / 1000);
    let correctAnswers = 0;

    // Helper function to extract correct answer from solution
    const extractCorrectAnswer = (solution: any): string => {
      const solutionText = extractText(solution);
      const match = solutionText.match(/correct answer:\s*([a-d])\)/i) || solutionText.match(/^([a-d])\)/i);
      return match ? match[1].toLowerCase() : '';
    };

    // Calculate chapter-wise and topic-wise performance
    const chapterStats: { 
      [key: string]: { 
        correct: number; 
        total: number; 
        topics: { [key: string]: { correct: number; total: number } };
        weightage: number;
      } 
    } = {};

    questions.forEach((question, index) => {
      const userAnswer = session.answers[index];
      const correctAnswer = extractCorrectAnswer(question.solution);
      const isCorrect = userAnswer === correctAnswer;
      
      if (isCorrect) correctAnswers++;

      const chapter = question.chapter || 'Unknown';
      const topic = question.topic || 'General Concepts';
      const weightage = CHAPTER_WEIGHTAGE[filters.subject]?.[chapter] || 5;

      if (!chapterStats[chapter]) {
        chapterStats[chapter] = { correct: 0, total: 0, topics: {}, weightage };
      }

      chapterStats[chapter].total++;
      if (isCorrect) chapterStats[chapter].correct++;

      if (!chapterStats[chapter].topics[topic]) {
        chapterStats[chapter].topics[topic] = { correct: 0, total: 0 };
      }

      chapterStats[chapter].topics[topic].total++;
      if (isCorrect) chapterStats[chapter].topics[topic].correct++;
    });

    const chapterPerformance: ChapterPerformance[] = Object.entries(chapterStats)
      .map(([chapter, stats]) => {
        const percentage = (stats.correct / stats.total) * 100;
        let studyRecommendation: 'excellent' | 'good' | 'needs-improvement' | 'requires-focus';

        // Weighted scoring: High-weightage chapters need higher threshold
        const threshold = stats.weightage > 15 ? 75 : 70;
        
        if (percentage >= 80) studyRecommendation = 'excellent';
        else if (percentage >= threshold) studyRecommendation = 'good';
        else if (percentage >= 50) studyRecommendation = 'needs-improvement';
        else studyRecommendation = 'requires-focus';

        return {
          chapter,
          totalQuestions: stats.total,
          correctAnswers: stats.correct,
          percentage,
          topics: Object.entries(stats.topics).map(([topic, topicStats]) => ({
            topic,
            correct: topicStats.correct,
            total: topicStats.total,
            percentage: (topicStats.correct / topicStats.total) * 100
          })),
          studyRecommendation,
          weightage: stats.weightage
        };
      })
      .sort((a, b) => (b.weightage || 0) - (a.weightage || 0)); // Sort by weightage

    const overallRecommendation = generateOverallRecommendation(chapterPerformance);

    return {
      sessionId: session.id,
      totalQuestions: questions.length,
      correctAnswers,
      score: correctAnswers,
      percentage: (correctAnswers / questions.length) * 100,
      timeSpent,
      subject: filters.subject,
      chapterPerformance,
      overallRecommendation,
      questionBreakdown: questions.map((q, index) => {
        const userAnswer = session.answers[index];
        const correctAnswer = extractCorrectAnswer(q.solution);
        const isCorrect = userAnswer === correctAnswer;
        
        return {
          questionId: q.id,
          correct: isCorrect,
          timeSpent: Math.floor(timeSpent / questions.length),
          marks: 1,
          chapter: q.chapter || 'Unknown',
          topic: q.topic
        };
      })
    };
  };

  const generateOverallRecommendation = (chapterPerformance: ChapterPerformance[]): string => {
    const avgPercentage = chapterPerformance.reduce((sum, ch) => sum + ch.percentage, 0) / chapterPerformance.length;
    const weakChapters = chapterPerformance.filter(ch => ch.percentage < 60);
    const highWeightageWeak = weakChapters.filter(ch => (ch.weightage || 0) > 12);

    if (avgPercentage >= 80) {
      return "🎉 Excellent performance! You have a strong grasp of the concepts. Continue with regular revision and practice solving advanced problems to maintain this level.";
    } else if (avgPercentage >= 65) {
      if (highWeightageWeak.length > 0) {
        return `✅ Good performance overall, but focus on high-weightage chapters: ${highWeightageWeak.map(ch => `Chapter ${ch.chapter}`).join(', ')}. These chapters are crucial for exam success.`;
      }
      return "✅ Good performance! You understand most concepts well. Focus on the weaker areas identified below to improve your score.";
    } else if (avgPercentage >= 50) {
      return "⚠️ Moderate performance. You need to strengthen fundamental concepts. Review the learning modules for weak chapters and practice more MCQs from previous papers.";
    } else {
      return "🚨 Requires immediate attention! Your understanding of basic concepts needs significant improvement. Start with the learning modules, make notes, and practice regularly.";
    }
  };

  const submitEvaluation = () => {
    if (!session) return;

    const evaluationResults = calculateResults();
    setResults(evaluationResults);
    setCurrentStep('review');
    onEvaluationComplete(evaluationResults);
  };

  const proceedToResults = () => {
    setCurrentStep('results');
  };

  const resetEvaluation = () => {
    setCurrentStep('setup');
    setFilters({ subject: '', chapters: [], questionCount: 20 });
    setQuestions([]);
    setSession(null);
    setCurrentQuestionIndex(0);
    setResults(null);
    setShowReview(false);
  };

  if (currentStep === 'setup') {
    const availableChapters = getAvailableChapters(filters.subject);

    return (
      <div className="bg-gradient-to-br from-white via-blue-50 to-indigo-50 border-4 border-blue-300 rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-slate-800 mb-4">🧠 Knowledge Evaluation</h2>
          <p className="text-lg text-slate-600">Assess your understanding across chapters and get personalized study recommendations</p>
        </div>

        <div className="space-y-6">
          {/* Subject Selection */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Select Subject</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {subjects.map(subject => (
                <button
                  key={subject.name}
                  onClick={() => setFilters(prev => ({ ...prev, subject: subject.name, chapters: [] }))}
                  className={`p-4 rounded-xl font-bold text-lg transition-all ${
                    filters.subject === subject.name
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          </div>

          {/* Chapter Selection */}
          {filters.subject && (
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Select Chapters</h3>
              <p className="text-sm text-slate-600 mb-4">Leave empty to include all chapters</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {availableChapters.map(chapter => (
                  <label key={chapter.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={filters.chapters.includes(chapter.id)}
                      onChange={(e) => {
                        const newChapters = e.target.checked
                          ? [...filters.chapters, chapter.id]
                          : filters.chapters.filter(c => c !== chapter.id);
                        setFilters(prev => ({ ...prev, chapters: newChapters }));
                      }}
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                    <span className="text-sm font-medium">{chapter.title}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Question Count Selection */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Number of Questions</h3>
            <div className="flex gap-4">
              {[10, 20, 50].map(count => (
                <button
                  key={count}
                  onClick={() => setFilters(prev => ({ ...prev, questionCount: count as 10 | 20 | 50 }))}
                  className={`px-6 py-3 rounded-xl font-bold transition-all ${
                    filters.questionCount === count
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                      : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                  }`}
                >
                  {count} Questions
                </button>
              ))}
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <button
              onClick={startEvaluation}
              disabled={!filters.subject}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              🚀 Start Knowledge Evaluation
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentStep === 'evaluation' && questions.length > 0) {
    const currentQuestion = questions[currentQuestionIndex];
    const answeredQuestions = Object.keys(session?.answers || {}).length;

    return (
      <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 border-4 border-green-300 rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start justify-between mb-6 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-2xl">
              <span className="text-3xl">🧠</span>
            </div>
            <div>
              <h3 className="text-3xl font-black text-slate-800 mb-1">Knowledge Evaluation</h3>
              <p className="text-green-600 font-bold">{filters.subject} - {filters.questionCount} Questions</p>
              <p className="text-xs text-slate-500 mt-1">✅ From Centralized MCQ Pool (No Duplicates)</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white text-lg font-black px-6 py-3 rounded-2xl shadow-2xl">
            📊 {answeredQuestions}/{questions.length}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="bg-slate-200 rounded-full h-4 overflow-hidden relative">
            <div
              className={`bg-gradient-to-r from-green-500 to-emerald-500 h-full transition-all duration-300 ${
                answeredQuestions === questions.length ? 'w-full' :
                answeredQuestions >= questions.length * 0.9 ? 'w-11/12' :
                answeredQuestions >= questions.length * 0.8 ? 'w-4/5' :
                answeredQuestions >= questions.length * 0.7 ? 'w-3/4' :
                answeredQuestions >= questions.length * 0.6 ? 'w-3/5' :
                answeredQuestions >= questions.length * 0.5 ? 'w-1/2' :
                answeredQuestions >= questions.length * 0.4 ? 'w-2/5' :
                answeredQuestions >= questions.length * 0.3 ? 'w-1/3' :
                answeredQuestions >= questions.length * 0.2 ? 'w-1/4' :
                answeredQuestions >= questions.length * 0.1 ? 'w-1/12' :
                answeredQuestions > 0 ? 'w-1/12' : 'w-0'
              }`}
            ></div>
          </div>
          <p className="text-sm text-slate-600 mt-2 text-center">
            Progress: {answeredQuestions} of {questions.length} questions answered ({Math.round((answeredQuestions / questions.length) * 100)}%)
          </p>
        </div>

        {/* Question */}
        <KnowledgeQuestionComponent
          index={currentQuestionIndex}
          question={currentQuestion}
          answer={session?.answers[currentQuestionIndex]}
          onAnswerSubmit={handleAnswerSubmit}
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
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestionIndex(index)}
                className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white scale-110'
                    : session?.answers[index]
                    ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                    : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {currentQuestionIndex === questions.length - 1 ? (
            <button
              onClick={submitEvaluation}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
            >
              📊 Submit & Review Answers
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestionIndex(Math.min(questions.length - 1, currentQuestionIndex + 1))}
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl hover:scale-105 transition-transform"
            >
              Next →
            </button>
          )}
        </div>
      </div>
    );
  }

  if (currentStep === 'review' && results && questions.length > 0) {
    return (
      <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 border-4 border-blue-300 rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-slate-800 mb-4">📝 Answer Review</h2>
          <p className="text-lg text-slate-600">Review your answers with correct solutions and explanations</p>
          <div className="mt-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white inline-block px-8 py-4 rounded-2xl shadow-lg">
            <span className="text-3xl font-black">{results.percentage.toFixed(1)}%</span>
            <span className="text-lg ml-3">({results.correctAnswers}/{results.totalQuestions} correct)</span>
          </div>
        </div>

        {/* Question-by-Question Review */}
        <div className="space-y-6 mb-8">
          {questions.map((question, index) => {
            const userAnswer = session?.answers[index];
            const correctAnswer = extractCorrectAnswer(question.solution);
            const isCorrect = userAnswer === correctAnswer;

            return (
              <div
                key={index}
                className={`border-4 rounded-2xl p-6 ${
                  isCorrect
                    ? 'border-green-300 bg-gradient-to-br from-green-50 to-emerald-50'
                    : 'border-red-300 bg-gradient-to-br from-red-50 to-pink-50'
                }`}
              >
                {/* Question Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-slate-800 text-white font-bold px-4 py-2 rounded-full text-lg">
                      Q{index + 1}
                    </span>
                    {question.chapter && (
                      <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                        Chapter {question.chapter}
                      </span>
                    )}
                    {question.topic && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {question.topic}
                      </span>
                    )}
                  </div>
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-lg ${
                      isCorrect
                        ? 'bg-green-500 text-white'
                        : 'bg-red-500 text-white'
                    }`}
                  >
                    <span className="text-2xl">{isCorrect ? '✅' : '❌'}</span>
                    <span>{isCorrect ? 'Correct' : 'Incorrect'}</span>
                  </div>
                </div>

                {/* Question Content */}
                <div className="bg-white rounded-xl p-5 mb-4 shadow-sm">
                  <div className="prose max-w-none text-slate-800">
                    {question.question}
                  </div>
                </div>

                {/* Answer Comparison */}
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  {/* Your Answer */}
                  <div
                    className={`p-4 rounded-xl border-2 ${
                      isCorrect
                        ? 'bg-green-100 border-green-300'
                        : 'bg-red-100 border-red-300'
                    }`}
                  >
                    <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                      <span>{isCorrect ? '✅' : '❌'}</span>
                      <span>Your Answer:</span>
                    </h4>
                    <p className={`font-bold text-lg ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                      {userAnswer ? userAnswer.toUpperCase() : 'Not Answered'}
                    </p>
                  </div>

                  {/* Correct Answer */}
                  <div className="p-4 rounded-xl border-2 bg-green-100 border-green-300">
                    <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                      <span>✅</span>
                      <span>Correct Answer:</span>
                    </h4>
                    <p className="font-bold text-lg text-green-800">
                      {correctAnswer.toUpperCase()}
                    </p>
                  </div>
                </div>

                {/* Solution and Explanation */}
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-5 rounded-xl shadow-lg">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">💡</span>
                      <span>Solution:</span>
                    </h4>
                    <div className="text-white bg-white/20 p-3 rounded-lg">
                      {question.solution}
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white p-5 rounded-xl shadow-lg">
                    <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <span className="text-2xl">🧠</span>
                      <span>Detailed Explanation:</span>
                    </h4>
                    <div className="text-white bg-white/20 p-3 rounded-lg prose prose-invert max-w-none">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 border-t-4 border-purple-300 pt-8">
          <button
            onClick={proceedToResults}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            📊 View Performance Analysis
          </button>
          <button
            onClick={resetEvaluation}
            className="px-8 py-4 bg-gradient-to-r from-slate-500 to-slate-600 text-white font-bold text-lg rounded-2xl hover:scale-105 transition-transform shadow-lg"
          >
            🔄 Take Another Evaluation
          </button>
          <button
            onClick={() => window.print()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-2xl hover:scale-105 transition-transform shadow-lg"
          >
            🖨️ Print Review
          </button>
        </div>
      </div>
    );
  }

  if (currentStep === 'results' && results) {
    const weakChapters = results.chapterPerformance.filter(ch => ch.percentage < 60);
    const strongChapters = results.chapterPerformance.filter(ch => ch.percentage >= 80);
    const needsImprovementChapters = results.chapterPerformance.filter(ch => ch.percentage >= 50 && ch.percentage < 60);

    return (
      <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 border-4 border-purple-300 rounded-3xl shadow-2xl p-8 max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-slate-800 mb-4">📊 Knowledge Evaluation Results</h2>
          <p className="text-lg text-slate-600">{results.subject} - Detailed Performance Analysis</p>
        </div>

        {/* Overall Score Card */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-8 rounded-2xl shadow-2xl mb-6">
          <div className="text-center">
            <div className="text-7xl font-black mb-2">{results.percentage.toFixed(1)}%</div>
            <p className="text-2xl mb-1">Score: {results.correctAnswers}/{results.totalQuestions}</p>
            <p className="text-lg opacity-90">Time: {Math.floor(results.timeSpent / 60)}:{(results.timeSpent % 60).toString().padStart(2, '0')} minutes</p>
            <div className="mt-4 inline-block px-6 py-2 bg-white bg-opacity-25 rounded-full text-lg font-bold">
              {results.percentage >= 80 ? '🌟 Excellent' : results.percentage >= 65 ? '✅ Good' : results.percentage >= 50 ? '⚠️ Fair' : '🚨 Needs Focus'}
            </div>
          </div>
        </div>

        {/* Overall Recommendation */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border-l-8 border-purple-500">
          <h3 className="text-xl font-bold text-slate-800 mb-3">� Personalized Recommendation</h3>
          <p className="text-slate-700 text-lg leading-relaxed">{results.overallRecommendation}</p>
        </div>

        {/* Performance Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-green-400 to-emerald-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-2">🌟</div>
            <div className="text-3xl font-black">{strongChapters.length}</div>
            <p className="text-sm opacity-90">Strong Chapters (≥80%)</p>
          </div>
          <div className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-black">{needsImprovementChapters.length}</div>
            <p className="text-sm opacity-90">Need Practice (50-60%)</p>
          </div>
          <div className="bg-gradient-to-br from-red-400 to-pink-500 text-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-3xl font-black">{weakChapters.filter(ch => ch.percentage < 50).length}</div>
            <p className="text-sm opacity-90">Requires Focus (&lt;50%)</p>
          </div>
        </div>

        {/* Chapter-wise Performance */}
        <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
          <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            📚 Chapter-wise Performance Analysis
            <span className="text-sm font-normal text-slate-500">(Sorted by exam weightage)</span>
          </h3>
          <div className="space-y-4">
            {results.chapterPerformance.map((chapter, idx) => {
              const performanceColor = 
                chapter.percentage >= 80 ? 'from-green-500 to-emerald-500' :
                chapter.percentage >= 65 ? 'from-blue-500 to-indigo-500' :
                chapter.percentage >= 50 ? 'from-yellow-500 to-orange-500' :
                'from-red-500 to-pink-500';

              const weakTopics = chapter.topics.filter(t => t.percentage < 60);

              return (
                <div key={idx} className={`bg-gradient-to-r ${performanceColor} bg-opacity-10 border-l-4 border-${performanceColor} rounded-lg p-5`}>
                  <div className="flex flex-wrap justify-between items-start mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-800 mb-1">
                        Chapter {chapter.chapter}
                        {chapter.weightage && (
                          <span className="ml-2 text-sm font-normal bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                            Exam Weightage: {chapter.weightage}%
                          </span>
                        )}
                      </h4>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-slate-600">
                          {chapter.correctAnswers}/{chapter.totalQuestions} correct
                        </span>
                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                          chapter.studyRecommendation === 'excellent' ? 'bg-green-100 text-green-800' :
                          chapter.studyRecommendation === 'good' ? 'bg-blue-100 text-blue-800' :
                          chapter.studyRecommendation === 'needs-improvement' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {chapter.studyRecommendation === 'excellent' ? '🌟 Excellent' :
                           chapter.studyRecommendation === 'good' ? '✅ Good' :
                           chapter.studyRecommendation === 'needs-improvement' ? '⚠️ Needs Practice' :
                           '🚨 Requires Focus'}
                        </span>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-4xl font-black text-slate-800">{chapter.percentage.toFixed(1)}%</div>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="bg-slate-200 rounded-full h-3 overflow-hidden mb-3">
                    <div
                      className={`bg-gradient-to-r ${performanceColor} h-full transition-all duration-500 ${
                        chapter.percentage >= 95 ? 'w-full' :
                        chapter.percentage >= 90 ? 'w-11/12' :
                        chapter.percentage >= 80 ? 'w-4/5' :
                        chapter.percentage >= 70 ? 'w-3/4' :
                        chapter.percentage >= 60 ? 'w-3/5' :
                        chapter.percentage >= 50 ? 'w-1/2' :
                        chapter.percentage >= 40 ? 'w-2/5' :
                        chapter.percentage >= 30 ? 'w-1/3' :
                        chapter.percentage >= 20 ? 'w-1/4' :
                        chapter.percentage >= 10 ? 'w-1/12' :
                        'w-1/12'
                      }`}
                    ></div>
                  </div>

                  {/* Topic breakdown */}
                  {chapter.topics.length > 0 && (
                    <div className="mt-4 bg-white bg-opacity-60 rounded-lg p-4">
                      <p className="text-sm font-bold text-slate-700 mb-2">📖 Topic Performance:</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {chapter.topics.map((topic, topicIdx) => (
                          <div 
                            key={topicIdx} 
                            className={`text-sm p-3 rounded-lg ${
                              topic.percentage >= 70 ? 'bg-green-50 border border-green-200' :
                              topic.percentage >= 50 ? 'bg-yellow-50 border border-yellow-200' :
                              'bg-red-50 border border-red-200'
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span className="font-semibold text-slate-700">{topic.topic}</span>
                              <span className={`font-bold ${
                                topic.percentage >= 70 ? 'text-green-700' :
                                topic.percentage >= 50 ? 'text-yellow-700' :
                                'text-red-700'
                              }`}>
                                {topic.percentage.toFixed(0)}%
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1">{topic.correct}/{topic.total} correct</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Weak topics alert */}
                      {weakTopics.length > 0 && (
                        <div className="mt-3 p-3 bg-red-50 border-l-4 border-red-500 rounded">
                          <p className="text-sm font-bold text-red-800">⚠️ Focus Areas in this Chapter:</p>
                          <ul className="text-sm text-red-700 mt-1 list-disc list-inside">
                            {weakTopics.map((t, i) => (
                              <li key={i}>{t.topic} ({t.percentage.toFixed(0)}%)</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Study recommendation */}
                  {chapter.studyRecommendation !== 'excellent' && (
                    <div className="mt-3 p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
                      <p className="text-sm font-bold text-blue-800">📝 Study Tip:</p>
                      <p className="text-sm text-blue-700 mt-1">
                        {chapter.studyRecommendation === 'requires-focus' 
                          ? `This chapter needs immediate attention${chapter.weightage && chapter.weightage > 12 ? ' and carries significant exam weightage' : ''}. Review the learning module and practice basic MCQs.`
                          : chapter.studyRecommendation === 'needs-improvement'
                          ? `Practice more questions from this chapter. Focus on understanding concepts rather than memorization.`
                          : `Good understanding! Solve a few more complex questions to achieve mastery.`}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button
            onClick={() => setCurrentStep('review')}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            📝 Back to Answer Review
          </button>
          <button
            onClick={resetEvaluation}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            🔄 Take Another Evaluation
          </button>
          <button
            onClick={() => window.print()}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-black text-lg rounded-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            🖨️ Print Results
          </button>
        </div>
      </div>
    );
  }

  return null;
};

export default KnowledgeEvaluationView;