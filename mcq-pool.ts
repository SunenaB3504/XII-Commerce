import { Question } from './types';

export interface MCQ {
  id: string;
  chapter: number;
  topic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  weightage: number; // Based on exam importance
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  relatedConcepts: string[];
}

export const mcqPool: MCQ[] = [
  // Chapter 2: Partnership Fundamentals (High Priority - 24% weightage)
  {
    id: 'C2_001',
    chapter: 2,
    topic: 'Profit Sharing Ratio',
    difficulty: 'easy',
    weightage: 5,
    question: 'A, B and C are partners sharing profits in the ratio 3:2:1. The total profit of ₹60,000 will be distributed as:',
    options: ['₹30,000, ₹20,000, ₹10,000', '₹36,000, ₹24,000, ₹12,000', '₹20,000, ₹20,000, ₹20,000', '₹40,000, ₹15,000, ₹5,000'],
    correctAnswer: 1,
    explanation: 'Profit distribution: A (3/6)×₹60,000 = ₹30,000; B (2/6)×₹60,000 = ₹20,000; C (1/6)×₹60,000 = ₹10,000',
    relatedConcepts: ['Profit sharing ratio', 'Profit distribution']
  },
  {
    id: 'C2_002',
    chapter: 2,
    topic: 'Interest on Capital',
    difficulty: 'medium',
    weightage: 4,
    question: 'X and Y are partners with capitals ₹1,00,000 and ₹80,000 respectively. Interest on capital is 10% p.a. Interest on X\'s capital will be:',
    options: ['₹8,000', '₹10,000', '₹9,000', '₹12,000'],
    correctAnswer: 1,
    explanation: 'Interest on capital = Capital × Rate × Time = ₹1,00,000 × 10% = ₹10,000',
    relatedConcepts: ['Interest on capital', 'Capital accounts']
  },
  {
    id: 'C2_003',
    chapter: 2,
    topic: 'Salary to Partner',
    difficulty: 'medium',
    weightage: 4,
    question: 'P, Q and R are partners. P gets salary of ₹12,000 p.a. and Q gets commission of ₹8,000. These are charged to:',
    options: ['Profit and Loss Account', 'Partners\' Capital Accounts', 'Profit and Loss Appropriation Account', 'Balance Sheet'],
    correctAnswer: 2,
    explanation: 'Salary and commission to partners are appropriations of profit, hence charged to Profit and Loss Appropriation Account.',
    relatedConcepts: ['Salary to partner', 'Commission to partner', 'Profit appropriation']
  },
  {
    id: 'C2_004',
    chapter: 2,
    topic: 'Guarantee to Partner',
    difficulty: 'hard',
    weightage: 5,
    question: 'A, B and C share profits 3:2:1. C is guaranteed minimum profit of ₹24,000. Actual profit is ₹60,000. Deficiency borne by A and B equally will be:',
    options: ['₹6,000 each', '₹12,000 each', '₹8,000 each', '₹4,000 each'],
    correctAnswer: 0,
    explanation: 'C\'s actual share = (1/6)×₹60,000 = ₹10,000. Guarantee = ₹24,000. Deficiency = ₹14,000. Borne equally by A and B = ₹7,000 each.',
    relatedConcepts: ['Guarantee to partner', 'Deficiency sharing']
  },
  {
    id: 'C2_005',
    chapter: 2,
    topic: 'Interest on Drawings',
    difficulty: 'medium',
    weightage: 3,
    question: 'Partner withdrew ₹20,000 at the beginning of each quarter. Interest on drawings @ 10% p.a. will be:',
    options: ['₹2,000', '₹1,500', '₹2,500', '₹3,000'],
    correctAnswer: 0,
    explanation: 'Average period = 4.5 months. Interest = ₹20,000 × 10% × 4.5/12 = ₹2,000',
    relatedConcepts: ['Interest on drawings', 'Average period']
  },
  {
    id: 'C2_006',
    chapter: 2,
    topic: 'Past Adjustments',
    difficulty: 'hard',
    weightage: 3,
    question: 'In 2023, profit was distributed equally instead of 2:1 ratio. The adjustment entry will debit:',
    options: ['Senior partner\'s capital account', 'Junior partner\'s capital account', 'Profit and Loss account', 'Both partners equally'],
    correctAnswer: 1,
    explanation: 'Junior partner was overpaid. Adjustment entry debits junior partner and credits senior partner.',
    relatedConcepts: ['Past adjustments', 'Profit distribution errors']
  },

  // Chapter 3: Partnership Reconstitution (High Priority - 16% weightage)
  {
    id: 'C3_001',
    chapter: 3,
    topic: 'Admission of Partner',
    difficulty: 'easy',
    weightage: 4,
    question: 'On admission of a new partner, the main purpose of revaluation account is to:',
    options: ['Calculate new profit sharing ratio', 'Adjust assets and liabilities to fair value', 'Determine goodwill', 'Adjust capital accounts'],
    correctAnswer: 1,
    explanation: 'Revaluation account records increase/decrease in value of assets and liabilities on admission.',
    relatedConcepts: ['Revaluation account', 'Asset revaluation']
  },
  {
    id: 'C3_002',
    chapter: 3,
    topic: 'Goodwill Treatment',
    difficulty: 'medium',
    weightage: 5,
    question: 'X and Y share profits 3:2. Z is admitted with 1/6 share. Goodwill of firm is ₹60,000. Z brings ₹10,000 as goodwill. The entry will credit:',
    options: ['X\'s capital ₹18,000, Y\'s capital ₹12,000', 'X\'s capital ₹15,000, Y\'s capital ₹10,000', 'X\'s capital ₹22,500, Y\'s capital ₹15,000', 'X\'s capital ₹27,000, Y\'s capital ₹18,000'],
    correctAnswer: 0,
    explanation: 'Goodwill credited to old partners in old ratio: X (3/5)×₹60,000 = ₹36,000; Y (2/5)×₹60,000 = ₹24,000. Z brings ₹10,000, so adjustment needed.',
    relatedConcepts: ['Goodwill valuation', 'Goodwill adjustment']
  },
  {
    id: 'C3_003',
    chapter: 3,
    topic: 'Capital Adjustment',
    difficulty: 'hard',
    weightage: 4,
    question: 'In proportionate capital method, if new partner brings capital equal to his share, the adjustment is made through:',
    options: ['Cash account', 'Current account', 'Revaluation account', 'Goodwill account'],
    correctAnswer: 1,
    explanation: 'Current accounts are used to adjust capital contributions in proportionate capital method.',
    relatedConcepts: ['Proportionate capital method', 'Current accounts']
  },
  {
    id: 'C3_004',
    chapter: 3,
    topic: 'Sacrificing Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Old ratio 3:2, new ratio 2:2:1. Sacrificing ratio is:',
    options: ['3:2', '2:1', '1:1', '3:1'],
    correctAnswer: 2,
    explanation: 'Sacrificing ratio = Old share - New share. X: 3/5 - 2/5 = 1/5; Y: 2/5 - 2/5 = 0. Ratio 1:0 or 1:0.',
    relatedConcepts: ['Sacrificing ratio', 'Profit sharing ratio change']
  },

  // Chapter 6: Issue of Shares (High Priority - 14% weightage)
  {
    id: 'C6_001',
    chapter: 6,
    topic: 'Share Issue',
    difficulty: 'easy',
    weightage: 4,
    question: 'When shares are issued at par, the amount received is credited to:',
    options: ['Share Capital Account', 'Securities Premium Account', 'Share Application Account', 'Calls in Advance Account'],
    correctAnswer: 0,
    explanation: 'At par means face value, so full amount goes to Share Capital Account.',
    relatedConcepts: ['Issue of shares at par', 'Share capital']
  },
  {
    id: 'C6_002',
    chapter: 6,
    topic: 'Premium on Shares',
    difficulty: 'medium',
    weightage: 4,
    question: 'Company issued 10,000 shares at ₹12 per share (₹10 + ₹2 premium). Securities Premium will be:',
    options: ['₹1,00,000', '₹20,000', '₹1,20,000', '₹1,20,000'],
    correctAnswer: 1,
    explanation: 'Securities Premium = Number of shares × Premium per share = 10,000 × ₹2 = ₹20,000',
    relatedConcepts: ['Securities premium', 'Premium on shares']
  },
  {
    id: 'C6_003',
    chapter: 6,
    topic: 'Forfeiture of Shares',
    difficulty: 'hard',
    weightage: 4,
    question: 'A shareholder holding 100 shares of ₹10 each failed to pay ₹3 call money. Amount debited to Share Forfeiture Account is:',
    options: ['₹300', '₹1,000', '₹700', '₹1,300'],
    correctAnswer: 0,
    explanation: 'Share Forfeiture Account is debited with unpaid call money = 100 × ₹3 = ₹300',
    relatedConcepts: ['Forfeiture of shares', 'Calls in arrears']
  },
  {
    id: 'C6_004',
    chapter: 6,
    topic: 'Re-issue of Shares',
    difficulty: 'hard',
    weightage: 2,
    question: 'Forfeited shares can be re-issued at:',
    options: ['Face value only', 'Premium only', 'Face value or premium', 'Discount only'],
    correctAnswer: 2,
    explanation: 'Forfeited shares can be re-issued at face value, premium, or even discount in some cases.',
    relatedConcepts: ['Re-issue of forfeited shares', 'Share forfeiture']
  },

  // Chapter 4: Dissolution (Medium Priority - 10% weightage)
  {
    id: 'C4_001',
    chapter: 4,
    topic: 'Dissolution Process',
    difficulty: 'easy',
    weightage: 3,
    question: 'Realization Account is prepared to record:',
    options: ['Profit distribution', 'Asset realization', 'Capital adjustment', 'Profit appropriation'],
    correctAnswer: 1,
    explanation: 'Realization Account records sale of assets and payment of liabilities during dissolution.',
    relatedConcepts: ['Realization account', 'Dissolution of partnership']
  },
  {
    id: 'C4_002',
    chapter: 4,
    topic: 'Partner\'s Loan',
    difficulty: 'medium',
    weightage: 3,
    question: 'When partner\'s loan is paid in installments with interest, the interest is calculated on:',
    options: ['Total loan amount', 'Outstanding balance', 'Original amount only', 'Paid amount'],
    correctAnswer: 1,
    explanation: 'Interest is charged on the outstanding balance of partner\'s loan.',
    relatedConcepts: ['Partner\'s loan account', 'Interest calculation']
  },
  {
    id: 'C4_003',
    chapter: 4,
    topic: 'Insolvency of Partner',
    difficulty: 'hard',
    weightage: 4,
    question: 'In case of insolvent partner during dissolution, the deficiency is borne by:',
    options: ['All partners equally', 'Solvent partners in profit sharing ratio', 'Bank', 'Government'],
    correctAnswer: 1,
    explanation: 'Deficiency of insolvent partner is shared by solvent partners in their profit sharing ratio.',
    relatedConcepts: ['Insolvent partner', 'Deficiency sharing']
  },

  // Chapter 7: Debentures (Medium Priority - 8% weightage)
  {
    id: 'C7_001',
    chapter: 7,
    topic: 'Issue of Debentures',
    difficulty: 'easy',
    weightage: 3,
    question: 'Debentures are:',
    options: ['Ownership securities', 'Borrowed capital', 'Current liabilities', 'Revenue receipts'],
    correctAnswer: 1,
    explanation: 'Debentures represent borrowed capital or loan capital of the company.',
    relatedConcepts: ['Debentures', 'Borrowed capital']
  },
  {
    id: 'C7_002',
    chapter: 7,
    topic: 'Interest on Debentures',
    difficulty: 'medium',
    weightage: 3,
    question: '12% debentures of ₹1,00,000 are issued at par. Annual interest will be:',
    options: ['₹10,000', '₹12,000', '₹15,000', '₹20,000'],
    correctAnswer: 1,
    explanation: 'Interest = Face value × Rate = ₹1,00,000 × 12% = ₹12,000',
    relatedConcepts: ['Interest on debentures', 'Debenture interest']
  },
  {
    id: 'C7_003',
    chapter: 7,
    topic: 'Debenture Redemption',
    difficulty: 'hard',
    weightage: 2,
    question: 'Debentures can be redeemed using:',
    options: ['Fresh issue of shares only', 'Accumulated profits only', 'Any method approved by law', 'Bank loan only'],
    correctAnswer: 2,
    explanation: 'Companies can redeem debentures using various methods as per Companies Act.',
    relatedConcepts: ['Debenture redemption', 'Redemption methods']
  },

  // Chapter 9: Financial Analysis (Medium Priority - 12% weightage)
  {
    id: 'C9_001',
    chapter: 9,
    topic: 'Current Ratio',
    difficulty: 'easy',
    weightage: 3,
    question: 'Current Ratio of 2:1 means:',
    options: ['Current Assets = Current Liabilities', 'Current Assets = 2 × Current Liabilities', 'Current Liabilities = 2 × Current Assets', 'Fixed Assets = Current Assets'],
    correctAnswer: 1,
    explanation: 'Current Ratio = Current Assets : Current Liabilities = 2:1 means Current Assets = 2 × Current Liabilities.',
    relatedConcepts: ['Current ratio', 'Liquidity ratios']
  },
  {
    id: 'C9_002',
    chapter: 9,
    topic: 'Quick Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Quick Ratio excludes:',
    options: ['Cash', 'Debtors', 'Inventory', 'Bank balance'],
    correctAnswer: 2,
    explanation: 'Quick Ratio = (Current Assets - Inventory) : Current Liabilities',
    relatedConcepts: ['Quick ratio', 'Liquid assets']
  },
  {
    id: 'C9_003',
    chapter: 9,
    topic: 'Debt-Equity Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Debt-Equity Ratio of 1:1 is considered:',
    options: ['Conservative', 'Aggressive', 'Balanced', 'Risky'],
    correctAnswer: 2,
    explanation: 'Debt-Equity Ratio of 1:1 indicates balanced capital structure.',
    relatedConcepts: ['Debt-equity ratio', 'Capital structure']
  },
  {
    id: 'C9_004',
    chapter: 9,
    topic: 'Cash Flow Statement',
    difficulty: 'hard',
    weightage: 3,
    question: 'Cash flow from operating activities includes:',
    options: ['Issue of shares', 'Purchase of fixed assets', 'Payment of dividends', 'Receipt from debtors'],
    correctAnswer: 3,
    explanation: 'Receipt from debtors (collection of receivables) is operating cash flow.',
    relatedConcepts: ['Cash flow statement', 'Operating activities']
  },

  // Chapter 1: Theory (Low Priority - 4% weightage)
  {
    id: 'C1_001',
    chapter: 1,
    topic: 'Accounting Principles',
    difficulty: 'easy',
    weightage: 2,
    question: 'Going Concern concept assumes:',
    options: ['Business will close soon', 'Business will continue indefinitely', 'Business will be sold', 'Business has unlimited resources'],
    correctAnswer: 1,
    explanation: 'Going Concern concept assumes that business will continue to operate for foreseeable future.',
    relatedConcepts: ['Going concern concept', 'Accounting assumptions']
  },
  {
    id: 'C1_002',
    chapter: 1,
    topic: 'Accounting Standards',
    difficulty: 'medium',
    weightage: 2,
    question: 'AS 1 deals with:',
    options: ['Inventory valuation', 'Disclosure of accounting policies', 'Cash flow statement', 'Fixed assets'],
    correctAnswer: 1,
    explanation: 'AS 1 deals with Disclosure of Accounting Policies.',
    relatedConcepts: ['Accounting standards', 'Disclosure requirements']
  },

  // Chapter 5: NPO (Low Priority - 6% weightage)
  {
    id: 'C5_001',
    chapter: 5,
    topic: 'Receipts and Payments Account',
    difficulty: 'easy',
    weightage: 2,
    question: 'Receipts and Payments Account is a:',
    options: ['Nominal account', 'Real account', 'Personal account', 'Summary account'],
    correctAnswer: 1,
    explanation: 'Receipts and Payments Account is a real account showing cash transactions.',
    relatedConcepts: ['Receipts and payments account', 'NPO accounts']
  },
  {
    id: 'C5_002',
    chapter: 5,
    topic: 'Income and Expenditure Account',
    difficulty: 'medium',
    weightage: 3,
    question: 'Income and Expenditure Account shows:',
    options: ['Cash position', 'Revenue items only', 'Surplus or deficit', 'Asset position'],
    correctAnswer: 2,
    explanation: 'Income and Expenditure Account shows surplus (income > expenditure) or deficit.',
    relatedConcepts: ['Income and expenditure account', 'NPO final accounts']
  },

  // Chapter 8: Debenture Redemption (Low Priority - 6% weightage)
  {
    id: 'C8_001',
    chapter: 8,
    topic: 'Redemption Methods',
    difficulty: 'easy',
    weightage: 2,
    question: 'Debentures can be redeemed at:',
    options: ['Par value only', 'Premium only', 'Par or premium', 'Discount only'],
    correctAnswer: 2,
    explanation: 'Debentures can be redeemed at par value or at premium as per terms.',
    relatedConcepts: ['Debenture redemption', 'Redemption value']
  },
  {
    id: 'C8_002',
    chapter: 8,
    topic: 'Redemption Accounting',
    difficulty: 'medium',
    weightage: 3,
    question: 'Premium on redemption of debentures is charged to:',
    options: ['Profit and Loss Account', 'Securities Premium', 'Capital Reserve', 'General Reserve'],
    correctAnswer: 0,
    explanation: 'Premium on redemption is a loss charged to Profit and Loss Account.',
    relatedConcepts: ['Premium on redemption', 'Debenture redemption loss']
  }
];

export const getMCQsByChapter = (chapter: number): MCQ[] => {
  return mcqPool.filter(mcq => mcq.chapter === chapter);
};

export const getMCQsByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): MCQ[] => {
  return mcqPool.filter(mcq => mcq.difficulty === difficulty);
};

export const getWeightedRandomMCQs = (count: number = 20): MCQ[] => {
  // Weight distribution based on chapter importance
  const weights = {
    2: 0.24, // 24% - High priority
    3: 0.16, // 16% - High priority
    6: 0.14, // 14% - High priority
    9: 0.12, // 12% - Medium priority
    4: 0.10, // 10% - Medium priority
    7: 0.08, // 8% - Medium priority
    5: 0.06, // 6% - Low priority
    8: 0.06, // 6% - Low priority
    1: 0.04  // 4% - Low priority
  };

  const selectedMCQs: MCQ[] = [];
  const chapters = Object.keys(weights).map(Number);

  chapters.forEach(chapter => {
    const chapterMCQs = getMCQsByChapter(chapter);
    const targetCount = Math.round(count * weights[chapter as keyof typeof weights]);

    // Randomly select MCQs from this chapter
    const shuffled = [...chapterMCQs].sort(() => 0.5 - Math.random());
    selectedMCQs.push(...shuffled.slice(0, Math.min(targetCount, chapterMCQs.length)));
  });

  // Fill remaining slots with random MCQs if needed
  while (selectedMCQs.length < count) {
    const randomMCQ = mcqPool[Math.floor(Math.random() * mcqPool.length)];
    if (!selectedMCQs.find(mcq => mcq.id === randomMCQ.id)) {
      selectedMCQs.push(randomMCQ);
    }
  }

  return selectedMCQs.slice(0, count);
};