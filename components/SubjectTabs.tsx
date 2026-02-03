import React from 'react';

interface SubjectTabsProps {
  subjects: string[];
  selectedSubject: string;
  onSelectSubject: (name: string) => void;
}

const getSubjectIcon = (subject: string) => {
  switch (subject.toLowerCase()) {
    case 'accountancy':
      return '💰';
    case 'business studies':
      return '📊';
    case 'economics':
      return '📈';
    default:
      return '📚';
  }
};

const getSubjectGradient = (subject: string) => {
  switch (subject.toLowerCase()) {
    case 'accountancy':
      return 'from-emerald-500 to-teal-500';
    case 'business studies':
      return 'from-purple-500 to-pink-500';
    case 'economics':
      return 'from-orange-500 to-red-500';
    default:
      return 'from-blue-500 to-indigo-500';
  }
};

const SubjectTabs: React.FC<SubjectTabsProps> = ({ subjects, selectedSubject, onSelectSubject }) => {

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-1.5 mb-8">
      <nav className="flex flex-col sm:flex-row gap-2" aria-label="Subject Tabs">
        {subjects.map((subject) => {
          const isSelected = subject === selectedSubject;
          const emoji = getSubjectIcon(subject);

          let selectedClass = 'bg-slate-800 text-white shadow-sm';
          // Subtle color coding for active state only
          if (isSelected) {
            switch (subject.toLowerCase()) {
              case 'accountancy': selectedClass = 'bg-emerald-600 text-white shadow-md'; break;
              case 'business studies': selectedClass = 'bg-purple-600 text-white shadow-md'; break;
              case 'economics': selectedClass = 'bg-orange-600 text-white shadow-md'; break;
              default: selectedClass = 'bg-blue-600 text-white shadow-md';
            }
          }

          return (
            <button
              key={subject}
              onClick={() => onSelectSubject(subject)}
              className={`flex-1 px-4 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 focus:outline-none ${isSelected
                ? selectedClass
                : 'bg-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">{emoji}</span>
                <span>{subject}</span>
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SubjectTabs;
