import React, { useState, useEffect } from 'react';
import { MCQ, mcqPool, getWeightedRandomMCQs, getCustomChapterMCQs, getChapterInfo } from './mcq-pool';
import { MCQAnalyzer, TestResult } from './mcq-analyzer';

interface MCQTestProps {
  questionCount?: number;
  studentName?: string;
  onTestComplete?: (result: TestResult) => void;
}

export const MCQTest: React.FC<MCQTestProps> = ({
  questionCount = 20,
  studentName = 'Student',
  onTestComplete
}) => {
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: string]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [testResult, setTestResult] = useState<TestResult | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(30 * 60); // 30 minutes in seconds
  const [testStarted, setTestStarted] = useState(false);

  // Customization states
  const [selectedQuestionCount, setSelectedQuestionCount] = useState<number>(20);
  const [selectedChapters, setSelectedChapters] = useState<number[]>([]);
  const [showCustomization, setShowCustomization] = useState(true);

  const chapterInfo = getChapterInfo();

  useEffect(() => {
    // Generate weighted test questions
    const testQuestions = getWeightedRandomMCQs(questionCount);
    setQuestions(testQuestions);
  }, [questionCount]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (testStarted && timeRemaining > 0 && !showResults) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timeRemaining === 0 && !showResults) {
      handleSubmitTest();
    }
    return () => clearTimeout(timer);
  }, [timeRemaining, testStarted, showResults]);

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId: string, answerIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmitTest = () => {
    const analyzer = new MCQAnalyzer(mcqPool);
    const result = analyzer.analyzeTest(answers, studentName);
    setTestResult(result);
    setShowResults(true);

    if (onTestComplete) {
      onTestComplete(result);
    }
  };

  const handleChapterToggle = (chapter: number) => {
    setSelectedChapters(prev =>
      prev.includes(chapter)
        ? prev.filter(c => c !== chapter)
        : [...prev, chapter]
    );
  };

  const startTest = () => {
    // Generate questions based on customization
    const testQuestions = selectedChapters.length > 0
      ? getCustomChapterMCQs(selectedChapters, selectedQuestionCount)
      : getWeightedRandomMCQs(selectedQuestionCount);

    setQuestions(testQuestions);
    setTestStarted(true);
    setShowCustomization(false);
  };

  const resetCustomization = () => {
    setSelectedQuestionCount(20);
    setSelectedChapters([]);
    setShowCustomization(true);
    setTestStarted(false);
    setShowResults(false);
    setCurrentQuestion(0);
    setAnswers({});
    setTimeRemaining(30 * 60);
  };

  if (!testStarted) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">CBSE Accountancy MCQ Test</h2>

        {showCustomization ? (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-lg mb-2">Welcome, {studentName}!</p>
              <p className="text-gray-600">Customize your test settings below</p>
            </div>

            {/* Question Count Selection */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">📊 Number of Questions</h3>
              <div className="flex justify-center space-x-4">
                {[10, 20, 50].map(count => (
                  <button
                    key={count}
                    onClick={() => setSelectedQuestionCount(count)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                      selectedQuestionCount === count
                        ? 'bg-blue-600 text-white'
                        : 'bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {count} Questions
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Selected: {selectedQuestionCount} questions
              </p>
            </div>

            {/* Chapter Selection */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">📚 Chapter Selection</h3>
              <p className="text-sm text-gray-600 mb-4">
                Select specific chapters to focus on (leave empty for exam-weighted selection)
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(chapterInfo).map(([chapterNum, info]) => {
                  const chapter = parseInt(chapterNum);
                  const isSelected = selectedChapters.includes(chapter);
                  const questionCount = mcqPool.filter(q => q.chapter === chapter).length;

                  return (
                    <div
                      key={chapter}
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        isSelected
                          ? 'border-green-500 bg-green-100'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                      onClick={() => handleChapterToggle(chapter)}
                    >
                      <div className="flex items-start space-x-3">
                        <input
                          type="checkbox"
                          id={`chapter-${chapter}`}
                          checked={isSelected}
                          onChange={() => handleChapterToggle(chapter)}
                          className="mt-1 w-4 h-4 text-green-600"
                        />
                        <label htmlFor={`chapter-${chapter}`} className="flex-1 cursor-pointer">
                          <h4 className="font-semibold">Chapter {chapter}</h4>
                          <p className="text-sm text-gray-600">{info.name}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className={`text-xs px-2 py-1 rounded ${
                              info.priority === 'High' ? 'bg-red-100 text-red-800' :
                              info.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {info.priority} Priority
                            </span>
                            <span className="text-xs text-gray-500">
                              {questionCount} questions
                            </span>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            Weightage: {info.weightage}%
                          </p>
                        </label>
                      </div>
                    </div>
                  );
                })}
              </div>

              {selectedChapters.length > 0 && (
                <div className="mt-4 p-3 bg-green-200 rounded-lg">
                  <p className="text-sm font-medium">
                    Selected Chapters: {selectedChapters.sort().join(', ')}
                  </p>
                  <p className="text-xs text-gray-700 mt-1">
                    Questions will be distributed evenly across selected chapters
                  </p>
                </div>
              )}
            </div>

            {/* Test Summary */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">📋 Test Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-600">{selectedQuestionCount}</p>
                  <p className="text-sm text-gray-600">Questions</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">
                    {selectedChapters.length > 0 ? selectedChapters.length : 'All'}
                  </p>
                  <p className="text-sm text-gray-600">Chapters</p>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Test Instructions:</h3>
              <ul className="text-sm space-y-1">
                <li>• Total time: 30 minutes</li>
                <li>• Each question carries 1 mark</li>
                <li>• No negative marking</li>
                <li>• Questions are randomized each test</li>
                <li>• You can navigate between questions</li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="text-center space-x-4">
              <button
                onClick={startTest}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Test
              </button>
              <button
                onClick={resetCustomization}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600 transition-colors"
              >
                Reset Settings
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg mb-4">Ready to start your customized test?</p>
            <div className="space-x-4">
              <button
                onClick={startTest}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Start Test
              </button>
              <button
                onClick={() => setShowCustomization(true)}
                className="bg-gray-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-600"
              >
                Change Settings
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (showResults && testResult) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Test Results</h2>

        {/* Overall Score */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg mb-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Score: {testResult.score}/{testResult.totalQuestions}</h3>
            <p className="text-xl">{testResult.percentage}%</p>
            <p className="text-sm mt-2 capitalize">{testResult.performanceLevel.replace('_', ' ')}</p>
          </div>
        </div>

        {/* Chapter-wise Performance */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Chapter-wise Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Object.entries(testResult.chapterWiseScore).map(([chapter, score]) => {
              const scoreData = score as { correct: number; total: number; percentage: number };
              if (scoreData.total === 0) return null;
              const getColor = (percentage: number) => {
                if (percentage >= 80) return 'bg-green-500';
                if (percentage >= 60) return 'bg-yellow-500';
                return 'bg-red-500';
              };

              return (
                <div key={chapter} className={`${getColor(scoreData.percentage)} text-white p-4 rounded-lg`}>
                  <h4 className="font-semibold">Chapter {chapter}</h4>
                  <p className="text-2xl font-bold">{scoreData.percentage}%</p>
                  <p className="text-sm">{scoreData.correct}/{scoreData.total}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weak Areas */}
        {testResult.weakAreas.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4 text-red-600">⚠️ Weak Areas</h3>
            <ul className="space-y-2">
              {testResult.weakAreas.map((area, index) => (
                <li key={index} className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommendations */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-green-600">💡 Recommendations</h3>
          <ul className="space-y-2">
            {testResult.recommendations.map((rec, index) => (
              <li key={index} className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                {rec}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-x-4">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
          >
            Print Results
          </button>
          <button
            onClick={() => window.location.reload()}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
          >
            Take Another Test
          </button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div className="text-center p-8">Loading questions...</div>;
  }

  const currentQ = questions[currentQuestion];
  const answeredQuestions = Object.keys(answers).length;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Question {currentQuestion + 1} of {questions.length}</h2>
        <div className="text-right">
          <p className="text-lg font-semibold text-red-600">{formatTime(timeRemaining)}</p>
          <p className="text-sm text-gray-600">Answered: {answeredQuestions}/{questions.length}</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
        <div
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Question */}
      <div className="mb-6">
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-lg font-medium mb-2">Chapter {currentQ.chapter} - {currentQ.topic}</p>
          <p className="text-gray-700">{currentQ.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <label key={index} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
              <input
                type="radio"
                name={`question-${currentQ.id}`}
                value={index}
                checked={answers[currentQ.id] === index}
                onChange={() => handleAnswerSelect(currentQ.id, index)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg disabled:bg-gray-300 hover:bg-gray-600"
        >
          Previous
        </button>

        <div className="flex space-x-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-full text-sm ${
                index === currentQuestion
                  ? 'bg-blue-600 text-white'
                  : answers[questions[index].id] !== undefined
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={handleSubmitTest}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

// Hook for managing test history
export const useTestHistory = () => {
  const [testHistory, setTestHistory] = useState<TestResult[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('accountancy-test-history');
    if (saved) {
      setTestHistory(JSON.parse(saved));
    }
  }, []);

  const addTestResult = (result: TestResult) => {
    const newHistory = [...testHistory, result];
    setTestHistory(newHistory);
    localStorage.setItem('accountancy-test-history', JSON.stringify(newHistory));
  };

  const clearHistory = () => {
    setTestHistory([]);
    localStorage.removeItem('accountancy-test-history');
  };

  return { testHistory, addTestResult, clearHistory };
};