import { MCQ } from './mcq-pool';

export interface TestResult {
  studentName: string;
  testDate: Date;
  answers: { [questionId: string]: number };
  score: number;
  totalQuestions: number;
  percentage: number;
  chapterWiseScore: { [chapter: number]: { correct: number; total: number; percentage: number } };
  weakAreas: string[];
  recommendations: string[];
  performanceLevel: 'excellent' | 'good' | 'average' | 'needs_improvement';
}

export class MCQAnalyzer {
  private mcqPool: MCQ[];

  constructor(mcqPool: MCQ[]) {
    this.mcqPool = mcqPool;
  }

  analyzeTest(answers: { [questionId: string]: number }, studentName: string = 'Student'): TestResult {
    let correctAnswers = 0;
    const chapterWiseScore: { [chapter: number]: { correct: number; total: number; percentage: number } } = {};
    const topicWisePerformance: { [topic: string]: { correct: number; total: number } } = {};
    const difficultyWisePerformance: { [difficulty: string]: { correct: number; total: number } } = {};

    // Initialize chapter scores
    for (let i = 1; i <= 10; i++) {
      chapterWiseScore[i] = { correct: 0, total: 0, percentage: 0 };
    }

    // Analyze each answer
    Object.entries(answers).forEach(([questionId, selectedAnswer]) => {
      const mcq = this.mcqPool.find(q => q.id === questionId);
      if (!mcq) return;

      const isCorrect = selectedAnswer === mcq.correctAnswer;
      if (isCorrect) correctAnswers++;

      // Update chapter-wise score
      chapterWiseScore[mcq.chapter].total++;
      if (isCorrect) chapterWiseScore[mcq.chapter].correct++;

      // Update topic-wise performance
      if (!topicWisePerformance[mcq.topic]) {
        topicWisePerformance[mcq.topic] = { correct: 0, total: 0 };
      }
      topicWisePerformance[mcq.topic].total++;
      if (isCorrect) topicWisePerformance[mcq.topic].correct++;

      // Update difficulty-wise performance
      if (!difficultyWisePerformance[mcq.difficulty]) {
        difficultyWisePerformance[mcq.difficulty] = { correct: 0, total: 0 };
      }
      difficultyWisePerformance[mcq.difficulty].total++;
      if (isCorrect) difficultyWisePerformance[mcq.difficulty].correct++;
    });

    // Calculate percentages
    Object.keys(chapterWiseScore).forEach(chapter => {
      const score = chapterWiseScore[parseInt(chapter)];
      score.percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;
    });

    const totalQuestions = Object.keys(answers).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Determine performance level
    let performanceLevel: TestResult['performanceLevel'];
    if (percentage >= 85) performanceLevel = 'excellent';
    else if (percentage >= 70) performanceLevel = 'good';
    else if (percentage >= 55) performanceLevel = 'average';
    else performanceLevel = 'needs_improvement';

    // Identify weak areas
    const weakAreas = this.identifyWeakAreas(chapterWiseScore, topicWisePerformance, difficultyWisePerformance);

    // Generate recommendations
    const recommendations = this.generateRecommendations(
      chapterWiseScore,
      topicWisePerformance,
      difficultyWisePerformance,
      performanceLevel
    );

    return {
      studentName,
      testDate: new Date(),
      answers,
      score: correctAnswers,
      totalQuestions,
      percentage,
      chapterWiseScore,
      weakAreas,
      recommendations,
      performanceLevel
    };
  }

  private identifyWeakAreas(
    chapterWiseScore: { [chapter: number]: { correct: number; total: number; percentage: number } },
    topicWisePerformance: { [topic: string]: { correct: number; total: number } },
    difficultyWisePerformance: { [difficulty: string]: { correct: number; total: number } }
  ): string[] {
    const weakAreas: string[] = [];

    // Check chapter-wise performance
    Object.entries(chapterWiseScore).forEach(([chapter, score]) => {
      if (score.total >= 2) { // Only consider chapters with at least 2 questions
        const chapterNum = parseInt(chapter);
        if (score.percentage < 60) {
          weakAreas.push(`Chapter ${chapterNum}: ${score.percentage}% (${score.correct}/${score.total})`);
        }
      }
    });

    // Check topic-wise performance
    Object.entries(topicWisePerformance).forEach(([topic, performance]) => {
      if (performance.total >= 2 && (performance.correct / performance.total) < 0.6) {
        weakAreas.push(`Topic: ${topic} (${performance.correct}/${performance.total})`);
      }
    });

    // Check difficulty-wise performance
    Object.entries(difficultyWisePerformance).forEach(([difficulty, performance]) => {
      if (performance.total >= 3 && (performance.correct / performance.total) < 0.5) {
        weakAreas.push(`Difficulty: ${difficulty} level questions (${performance.correct}/${performance.total})`);
      }
    });

    return weakAreas;
  }

  private generateRecommendations(
    chapterWiseScore: { [chapter: number]: { correct: number; total: number; percentage: number } },
    topicWisePerformance: { [topic: string]: { correct: number; total: number } },
    difficultyWisePerformance: { [difficulty: string]: { correct: number; total: number } },
    performanceLevel: TestResult['performanceLevel']
  ): string[] {
    const recommendations: string[] = [];

    // Overall performance recommendations
    switch (performanceLevel) {
      case 'excellent':
        recommendations.push('🎉 Excellent performance! Focus on maintaining this level and practice advanced problems.');
        break;
      case 'good':
        recommendations.push('👍 Good performance! Identify weak areas and strengthen them for better results.');
        break;
      case 'average':
        recommendations.push('📚 Average performance. Need focused revision on weak chapters and regular practice.');
        break;
      case 'needs_improvement':
        recommendations.push('⚠️ Needs improvement. Start with basics and seek additional help for weak areas.');
        break;
    }

    // Chapter-specific recommendations
    const highPriorityChapters = [2, 3, 6];
    const mediumPriorityChapters = [4, 7, 9];
    const lowPriorityChapters = [1, 5, 8];

    highPriorityChapters.forEach(chapter => {
      const score = chapterWiseScore[chapter];
      if (score.total > 0 && score.percentage < 70) {
        recommendations.push(`🔴 HIGH PRIORITY: Chapter ${chapter} needs immediate attention (${score.percentage}%). Dedicate extra time to this chapter.`);
      }
    });

    mediumPriorityChapters.forEach(chapter => {
      const score = chapterWiseScore[chapter];
      if (score.total > 0 && score.percentage < 60) {
        recommendations.push(`🟡 MEDIUM PRIORITY: Chapter ${chapter} requires focused practice (${score.percentage}%).`);
      }
    });

    // Topic-specific recommendations
    const weakTopics = Object.entries(topicWisePerformance)
      .filter(([_, performance]) => performance.total >= 2 && (performance.correct / performance.total) < 0.6)
      .map(([topic, _]) => topic);

    if (weakTopics.length > 0) {
      recommendations.push(`📖 Focus on these weak topics: ${weakTopics.join(', ')}`);
    }

    // Difficulty-specific recommendations
    if (difficultyWisePerformance.hard && difficultyWisePerformance.hard.total >= 3) {
      const hardAccuracy = difficultyWisePerformance.hard.correct / difficultyWisePerformance.hard.total;
      if (hardAccuracy < 0.4) {
        recommendations.push('🎯 Practice more hard-level questions. Focus on understanding complex scenarios.');
      }
    }

    // Study plan recommendations
    if (performanceLevel === 'needs_improvement') {
      recommendations.push('📅 Suggested Study Plan: 3 hours daily - 2 hours theory, 1 hour practice questions');
      recommendations.push('👨‍🏫 Consider additional coaching or group study for difficult concepts');
    } else if (performanceLevel === 'average') {
      recommendations.push('📅 Suggested Study Plan: 2.5 hours daily - 1.5 hours revision, 1 hour practice');
      recommendations.push('🔄 Weekly mock tests to track improvement');
    } else {
      recommendations.push('📅 Suggested Study Plan: 2 hours daily - 1 hour revision, 1 hour advanced practice');
      recommendations.push('📊 Take full-length mock tests every two weeks');
    }

    // Specific improvement areas
    if (chapterWiseScore[2]?.percentage < 70) {
      recommendations.push('💼 Chapter 2: Practice profit distribution calculations and partnership deed clauses');
    }
    if (chapterWiseScore[3]?.percentage < 70) {
      recommendations.push('🔄 Chapter 3: Focus on revaluation accounts and goodwill adjustments');
    }
    if (chapterWiseScore[6]?.percentage < 70) {
      recommendations.push('📈 Chapter 6: Master journal entries for share issues and forfeitures');
    }
    if (chapterWiseScore[9]?.percentage < 70) {
      recommendations.push('📊 Chapter 9: Practice ratio calculations and cash flow analysis');
    }

    return recommendations;
  }

  generateProgressReport(results: TestResult[]): string {
    if (results.length === 0) return 'No test results available';

    const latestResult = results[results.length - 1];
    const firstResult = results[0];

    const improvement = latestResult.percentage - firstResult.percentage;
    const trend = improvement > 5 ? '📈 Improving' : improvement < -5 ? '📉 Declining' : '➡️ Stable';

    let report = `# Accountancy Progress Report\n\n`;
    report += `**Student:** ${latestResult.studentName}\n`;
    report += `**Report Date:** ${new Date().toLocaleDateString()}\n`;
    report += `**Tests Taken:** ${results.length}\n\n`;

    report += `## Overall Performance\n`;
    report += `- **Latest Score:** ${latestResult.percentage}%\n`;
    report += `- **Performance Level:** ${latestResult.performanceLevel.toUpperCase()}\n`;
    report += `- **Trend:** ${trend} (${improvement > 0 ? '+' : ''}${improvement}% from first test)\n\n`;

    report += `## Chapter-wise Performance (Latest Test)\n`;
    Object.entries(latestResult.chapterWiseScore).forEach(([chapter, score]) => {
      if (score.total > 0) {
        const status = score.percentage >= 80 ? '🟢' : score.percentage >= 60 ? '🟡' : '🔴';
        report += `- **Chapter ${chapter}:** ${status} ${score.percentage}% (${score.correct}/${score.total})\n`;
      }
    });

    report += `\n## Weak Areas Identified\n`;
    if (latestResult.weakAreas.length > 0) {
      latestResult.weakAreas.forEach(area => {
        report += `- ${area}\n`;
      });
    } else {
      report += `- No major weak areas identified\n`;
    }

    report += `\n## Recommendations\n`;
    latestResult.recommendations.forEach(rec => {
      report += `- ${rec}\n`;
    });

    return report;
  }
}

// Utility function to create a test
export const createWeightedTest = (mcqPool: MCQ[], questionCount: number = 20): MCQ[] => {
  // Implementation of weighted test creation based on chapter importance
  const chapterWeights = {
    2: 0.24, 3: 0.16, 6: 0.14, 9: 0.12, 4: 0.10,
    7: 0.08, 5: 0.06, 8: 0.06, 1: 0.04
  };

  const selectedQuestions: MCQ[] = [];

  Object.entries(chapterWeights).forEach(([chapter, weight]) => {
    const chapterQuestions = mcqPool.filter(q => q.chapter === parseInt(chapter));
    const targetCount = Math.round(questionCount * weight);

    if (chapterQuestions.length > 0) {
      const shuffled = [...chapterQuestions].sort(() => Math.random() - 0.5);
      selectedQuestions.push(...shuffled.slice(0, Math.min(targetCount, chapterQuestions.length)));
    }
  });

  // Fill remaining slots randomly
  while (selectedQuestions.length < questionCount) {
    const randomQuestion = mcqPool[Math.floor(Math.random() * mcqPool.length)];
    if (!selectedQuestions.find(q => q.id === randomQuestion.id)) {
      selectedQuestions.push(randomQuestion);
    }
  }

  return selectedQuestions.slice(0, questionCount).sort(() => Math.random() - 0.5);
};