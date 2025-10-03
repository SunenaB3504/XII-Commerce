import React, { useState, useEffect } from 'react';
import { MCQ, mcqPool, getWeightedRandomMCQs } from './mcq-pool';
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

  const startTest = () => {
    setTestStarted(true);
  };

  if (!testStarted) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">CBSE Accountancy MCQ Test</h2>
        <div className="text-center mb-6">
          <p className="text-lg mb-2">Welcome, {studentName}!</p>
          <p className="text-gray-600 mb-4">This test contains {questionCount} questions based on exam weightage</p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <h3 className="font-semibold mb-2">Test Instructions:</h3>
            <ul className="text-sm text-left space-y-1">
              <li>• Total time: 30 minutes</li>
              <li>• Each question carries 1 mark</li>
              <li>• No negative marking</li>
              <li>• Questions are weighted by chapter importance</li>
              <li>• You can navigate between questions</li>
            </ul>
          </div>
          <button
            onClick={startTest}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Test
          </button>
        </div>
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
          style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }} /* stylelint-disable-line */
        ></div>
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