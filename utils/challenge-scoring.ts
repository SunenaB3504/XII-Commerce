import type { ChallengeSession, ChallengeResult, Question } from '../types';

/**
 * Evaluates a user's answer against the correct solution
 * This is a simplified implementation - in production, you'd want more sophisticated
 * natural language processing or pattern matching for subjective answers
 */
export const evaluateAnswer = (userAnswer: any, correctSolution: any): boolean => {
  if (!userAnswer || !correctSolution) return false;

  // For string answers, do a basic text comparison
  // In a real implementation, you'd use NLP or pattern matching
  const userStr = String(userAnswer).toLowerCase().trim();
  const correctStr = String(correctSolution).toLowerCase().trim();

  // Simple exact match (very basic - would need enhancement)
  return userStr === correctStr;
};

/**
 * Calculates the results of a challenge session
 */
export const calculateChallengeScore = (
  session: ChallengeSession,
  questions: Question[]
): ChallengeResult => {
  let totalScore = 0;
  let correctAnswers = 0;
  const questionBreakdown: { questionId: string; correct: boolean; timeSpent: number; marks: number }[] = [];

  questions.forEach(question => {
    const userAnswer = session.answers[question.id];
    const isCorrect = evaluateAnswer(userAnswer, question.solution);

    if (isCorrect) {
      totalScore += question.marks;
      correctAnswers++;
    }

    questionBreakdown.push({
      questionId: question.id,
      correct: isCorrect,
      marks: question.marks,
      timeSpent: 0 // Would need to track per-question timing
    });
  });

  const percentage = questions.length > 0 ? (totalScore / questions.reduce((sum, q) => sum + q.marks, 0)) * 100 : 0;

  return {
    sessionId: session.id,
    totalQuestions: questions.length,
    correctAnswers,
    score: totalScore,
    percentage: Math.round(percentage * 100) / 100, // Round to 2 decimal places
    timeSpent: session.timeSpent || 0,
    questionBreakdown
  };
};

/**
 * Determines performance level based on percentage score
 */
export const getPerformanceLevel = (percentage: number): 'excellent' | 'good' | 'average' | 'needs_improvement' => {
  if (percentage >= 85) return 'excellent';
  if (percentage >= 70) return 'good';
  if (percentage >= 50) return 'average';
  return 'needs_improvement';
};

/**
 * Generates personalized recommendations based on challenge results
 */
export const generateRecommendations = (result: ChallengeResult): string[] => {
  const recommendations = [];

  const performanceLevel = getPerformanceLevel(result.percentage);

  switch (performanceLevel) {
    case 'excellent':
      recommendations.push('🎉 Excellent work! Focus on maintaining this high performance level.');
      recommendations.push('📚 Review the few questions you missed to ensure complete understanding.');
      break;

    case 'good':
      recommendations.push('👍 Good performance! Focus on the topics where you lost marks.');
      recommendations.push('🔄 Practice similar questions to improve consistency.');
      break;

    case 'average':
      recommendations.push('📈 You\'re on the right track! Dedicate more time to weak areas.');
      recommendations.push('📝 Review solutions carefully and understand marking schemes.');
      break;

    case 'needs_improvement':
      recommendations.push('🎯 Focus on fundamental concepts and basic problem-solving.');
      recommendations.push('📖 Go back to learning modules for topics you struggled with.');
      recommendations.push('⏰ Practice regularly with timed challenges to improve speed.');
      break;
  }

  // Time-based recommendations
  const avgTimePerQuestion = result.timeSpent / result.totalQuestions;
  if (avgTimePerQuestion > 300) { // More than 5 minutes per question
    recommendations.push('⏱️ Work on time management - try to solve questions more quickly.');
  }

  return recommendations;
};

/**
 * Analyzes weak areas based on incorrect answers
 */
export const analyzeWeakAreas = (result: ChallengeResult): string[] => {
  const weakAreas = [];

  // Group incorrect questions by topic (would need topic metadata)
  const incorrectQuestions = result.questionBreakdown.filter(q => !q.correct);

  if (incorrectQuestions.length > result.totalQuestions * 0.5) {
    weakAreas.push('Broad conceptual understanding needs improvement');
  }

  if (incorrectQuestions.some(q => q.marks >= 4)) {
    weakAreas.push('Complex problem-solving and application skills');
  }

  return weakAreas.length > 0 ? weakAreas : ['Performance analysis shows good overall understanding'];
};