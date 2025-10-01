import React from 'react';

interface SubjectTabsProps {
  subjects: string[];
  selectedSubject: string;
  onSelectSubject: (name: string) => void;
}

const SubjectTabs: React.FC<SubjectTabsProps> = ({ subjects, selectedSubject, onSelectSubject }) => {
  return (
    <div className="border-b border-slate-300">
      <nav className="-mb-px flex space-x-6" aria-label="Tabs">
        {subjects.map((subject) => {
          const isSelected = subject === selectedSubject;
          return (
            <button
              key={subject}
              onClick={() => onSelectSubject(subject)}
              className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-lg focus:outline-none transition-colors duration-200 ${
                isSelected
                  ? 'border-blue-600 text-blue-700'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-400'
              }`}
            >
              {subject}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SubjectTabs;
