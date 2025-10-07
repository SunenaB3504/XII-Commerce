import React from 'react';
import type { KnowledgeQuestion } from '../types';

interface KnowledgeQuestionProps {
  question: KnowledgeQuestion;
  answer?: string;
  onAnswerSubmit: (index: number, answer: string) => void;
  showSolution: boolean;
  index: number;
}

const KnowledgeQuestionComponent: React.FC<KnowledgeQuestionProps> = ({
  question,
  answer,
  onAnswerSubmit,
  showSolution,
  index
}) => {
  const handleAnswerChange = (value: string) => {
    console.log('Selected answer:', value);
    onAnswerSubmit(index, value);
  };

  // Extract options from the question content
  const extractOptions = (questionContent: any): { [key: string]: string } => {
    const options: { [key: string]: string } = {};

    // Helper function to extract text from React elements
    const extractText = (element: any): string => {
      if (typeof element === 'string') return element;
      if (typeof element === 'number') return element.toString();
      if (!element || typeof element !== 'object') return '';

      if (element.props && element.props.children) {
        if (Array.isArray(element.props.children)) {
          return element.props.children.map(extractText).join(' ');
        }
        return extractText(element.props.children);
      }
      return '';
    };

    // Find the ul element containing options
    const findOptions = (element: any): void => {
      if (!element || typeof element !== 'object') return;

      if (element.type === 'ul' && element.props?.children) {
        const children = Array.isArray(element.props.children) ? element.props.children : [element.props.children];
        children.forEach((child: any) => {
          if (child?.type === 'li') {
            const text = extractText(child).trim();
            // Match patterns like "(A) Option text" or "A) Option text" or "a) Option text"
            const match = text.match(/^\(?([a-dA-D])\)?\s*(.+)$/);
            if (match) {
              const optionKey = match[1].toLowerCase();
              const optionText = match[2].trim();
              options[optionKey] = optionText;
            }
          }
        });
      } else if (element.props?.children) {
        const children = Array.isArray(element.props.children) ? element.props.children : [element.props.children];
        children.forEach(findOptions);
      }
    };

    findOptions(questionContent);
    console.log('Question options extracted:', options);
    return options;
  };

  const options = extractOptions(question.question);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      {/* Question */}
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-4">
          <span className="bg-blue-100 text-blue-800 font-bold px-3 py-1 rounded-full text-sm">
            Q{index + 1}
          </span>
          <div className="flex-1">
            {question.question}
          </div>
        </div>

        {/* Chapter/Topic info */}
        {(question.chapter || question.topic) && (
          <div className="flex gap-2 mb-4">
            {question.chapter && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Chapter {question.chapter}
              </span>
            )}
            {question.topic && (
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {question.topic}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {Object.entries(options).length === 0 ? (
          <p className="text-red-500">No options found for this question</p>
        ) : (
          Object.entries(options).map(([key, text]) => (
            <label key={key} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                value={key}
                checked={answer === key}
                onChange={(e) => handleAnswerChange(e.target.value)}
                className="w-4 h-4 text-blue-600"
              />
              <span className="font-medium text-slate-800">{key})</span>
              <span className="text-slate-700">{text}</span>
            </label>
          ))
        )}
      </div>

      {/* Solution/Explanations (when showSolution is true) */}
      {showSolution && (
        <div className="border-t pt-6 space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold text-green-800 mb-2">✅ Correct Answer</h4>
            <p className="text-green-700">{question.solution}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-bold text-blue-800 mb-2">📚 Explanation</h4>
            <div className="text-blue-700">{question.explanation}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KnowledgeQuestionComponent;