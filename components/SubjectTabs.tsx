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
    <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-2 border-4 border-white/60 mb-6">
      <nav className="flex flex-col sm:flex-row gap-3" aria-label="Subject Tabs">
        {subjects.map((subject) => {
          const isSelected = subject === selectedSubject;
          const gradient = getSubjectGradient(subject);
          const emoji = getSubjectIcon(subject);
          
          return (
            <button
              key={subject}
              onClick={() => onSelectSubject(subject)}
              className={`flex-1 px-6 py-4 rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 transform focus:outline-none focus:ring-4 focus:ring-yellow-400 ${
                isSelected
                  ? `bg-gradient-to-r ${gradient} text-white shadow-2xl scale-105 border-4 border-white`
                  : 'bg-gradient-to-r from-slate-100 to-slate-200 text-slate-700 hover:scale-105 hover:shadow-lg border-2 border-slate-300'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-2xl">{emoji}</span>
                <span>{subject}</span>
                {isSelected && <span className="text-xl animate-bounce">🔥</span>}
              </div>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default SubjectTabs;
