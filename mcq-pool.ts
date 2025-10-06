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
  // Additional Chapter 2 Questions
  {
    id: 'C2_007',
    chapter: 2,
    topic: 'Fixed Capital Method',
    difficulty: 'medium',
    weightage: 4,
    question: 'Under fixed capital method, drawings are:',
    options: ['Debited to capital account', 'Debited to current account', 'Credited to capital account', 'Credited to current account'],
    correctAnswer: 1,
    explanation: 'In fixed capital method, drawings are debited to current account to maintain fixed capital balance.',
    relatedConcepts: ['Fixed capital method', 'Current account']
  },
  {
    id: 'C2_008',
    chapter: 2,
    topic: 'Fluctuating Capital',
    difficulty: 'easy',
    weightage: 3,
    question: 'Fluctuating capital method shows:',
    options: ['Fixed balance', 'Changing balance', 'Zero balance', 'Negative balance'],
    correctAnswer: 1,
    explanation: 'Fluctuating capital method shows changing capital balances due to direct entries of profits, losses, and drawings.',
    relatedConcepts: ['Fluctuating capital method', 'Capital accounts']
  },
  {
    id: 'C2_009',
    chapter: 2,
    topic: 'Interest on Capital',
    difficulty: 'medium',
    weightage: 4,
    question: 'Interest on capital is allowed only if:',
    options: ['There is profit', 'Partnership deed provides', 'Partners agree', 'Court orders'],
    correctAnswer: 1,
    explanation: 'Interest on capital is allowed only if partnership deed specifically provides for it.',
    relatedConcepts: ['Interest on capital', 'Partnership deed']
  },
  {
    id: 'C2_010',
    chapter: 2,
    topic: 'Profit Sharing Ratio',
    difficulty: 'easy',
    weightage: 3,
    question: 'If partnership deed is silent about profit sharing, profits are shared:',
    options: ['Equally', 'In capital ratio', 'As per interest on capital', 'As decided by court'],
    correctAnswer: 0,
    explanation: 'In absence of partnership deed provisions, profits are shared equally among partners.',
    relatedConcepts: ['Profit sharing ratio', 'Partnership deed']
  },
  {
    id: 'C2_011',
    chapter: 2,
    topic: 'Salary to Partner',
    difficulty: 'medium',
    weightage: 4,
    question: 'Salary to partner is charged to:',
    options: ['Profit and Loss Account', 'Partners\' Capital Accounts', 'Profit and Loss Appropriation Account', 'Trading Account'],
    correctAnswer: 2,
    explanation: 'Salary to partner is an appropriation of profit, hence charged to Profit and Loss Appropriation Account.',
    relatedConcepts: ['Salary to partner', 'Profit appropriation']
  },
  {
    id: 'C2_012',
    chapter: 2,
    topic: 'Commission to Partner',
    difficulty: 'medium',
    weightage: 4,
    question: 'Commission to partner is calculated on:',
    options: ['Gross profit', 'Net profit', 'Sales', 'As per partnership deed'],
    correctAnswer: 3,
    explanation: 'Commission to partner is calculated as per terms specified in partnership deed.',
    relatedConcepts: ['Commission to partner', 'Partnership deed']
  },
  {
    id: 'C2_013',
    chapter: 2,
    topic: 'Interest on Drawings',
    difficulty: 'hard',
    weightage: 3,
    question: 'Partner withdrew ₹12,000 at end of each quarter. Interest @ 12% p.a. on drawings is:',
    options: ['₹1,080', '₹1,440', '₹1,620', '₹1,800'],
    correctAnswer: 1,
    explanation: 'Average period = 3 months. Interest = ₹12,000 × 12% × 3/12 = ₹1,440',
    relatedConcepts: ['Interest on drawings', 'Average period']
  },
  {
    id: 'C2_014',
    chapter: 2,
    topic: 'Guarantee to Partner',
    difficulty: 'hard',
    weightage: 5,
    question: 'A and B share profits 3:1. B is guaranteed ₹30,000. Actual profit ₹80,000. Deficiency borne by A is:',
    options: ['₹10,000', '₹20,000', '₹15,000', '₹25,000'],
    correctAnswer: 0,
    explanation: 'B\'s actual share = (1/4)×₹80,000 = ₹20,000. Guarantee = ₹30,000. Deficiency = ₹10,000 borne by A.',
    relatedConcepts: ['Guarantee to partner', 'Deficiency sharing']
  },
  {
    id: 'C2_015',
    chapter: 2,
    topic: 'Capital Accounts',
    difficulty: 'medium',
    weightage: 3,
    question: 'In fixed capital method, interest on capital is credited to:',
    options: ['Capital account', 'Current account', 'Profit and Loss Account', 'Trading Account'],
    correctAnswer: 1,
    explanation: 'In fixed capital method, interest on capital is credited to current account.',
    relatedConcepts: ['Fixed capital method', 'Current account']
  },
  {
    id: 'C2_016',
    chapter: 2,
    topic: 'Profit Distribution',
    difficulty: 'easy',
    weightage: 3,
    question: 'The divisible profit is distributed in:',
    options: ['Profit sharing ratio', 'Capital ratio', 'Equal ratio', 'As per court order'],
    correctAnswer: 0,
    explanation: 'Divisible profit after all appropriations is distributed in profit sharing ratio.',
    relatedConcepts: ['Profit distribution', 'Profit sharing ratio']
  },
  {
    id: 'C2_017',
    chapter: 2,
    topic: 'Interest on Capital',
    difficulty: 'hard',
    weightage: 4,
    question: 'Interest on capital is calculated on:',
    options: ['Opening capital', 'Closing capital', 'Average capital', 'As per deed'],
    correctAnswer: 0,
    explanation: 'Interest on capital is calculated on opening capital balance unless otherwise specified.',
    relatedConcepts: ['Interest on capital', 'Capital calculation']
  },
  {
    id: 'C2_018',
    chapter: 2,
    topic: 'Drawings',
    difficulty: 'medium',
    weightage: 3,
    question: 'Drawings reduce:',
    options: ['Capital only', 'Current account only', 'Both capital and current', 'Neither'],
    correctAnswer: 2,
    explanation: 'Drawings reduce both capital and current account balances depending on the method used.',
    relatedConcepts: ['Drawings', 'Capital accounts']
  },
  {
    id: 'C2_019',
    chapter: 2,
    topic: 'Profit and Loss Appropriation',
    difficulty: 'medium',
    weightage: 4,
    question: 'Profit and Loss Appropriation Account shows:',
    options: ['Net profit', 'Divisible profit', 'Distributed profit', 'All appropriations'],
    correctAnswer: 3,
    explanation: 'Profit and Loss Appropriation Account shows all appropriations like interest, salary, commission, etc.',
    relatedConcepts: ['Profit and Loss Appropriation Account', 'Profit appropriation']
  },
  {
    id: 'C2_020',
    chapter: 2,
    topic: 'Partnership Deed',
    difficulty: 'easy',
    weightage: 2,
    question: 'Partnership deed contains:',
    options: ['Only profit sharing ratio', 'All terms of partnership', 'Only capital contributions', 'Only business name'],
    correctAnswer: 1,
    explanation: 'Partnership deed contains all terms and conditions agreed upon by partners.',
    relatedConcepts: ['Partnership deed', 'Partnership agreement']
  },
  {
    id: 'C2_021',
    chapter: 2,
    topic: 'Current Account',
    difficulty: 'medium',
    weightage: 3,
    question: 'Current account shows:',
    options: ['Fixed capital', 'Fluctuations in capital', 'Only drawings', 'Only profits'],
    correctAnswer: 1,
    explanation: 'Current account shows fluctuations due to profits, losses, drawings, interest, etc.',
    relatedConcepts: ['Current account', 'Fluctuating capital']
  },
  {
    id: 'C2_022',
    chapter: 2,
    topic: 'Interest Calculation',
    difficulty: 'hard',
    weightage: 3,
    question: 'Partner withdrew ₹15,000 on 1st July. Interest @ 10% p.a. for 6 months is:',
    options: ['₹750', '₹1,500', '₹1,125', '₹2,250'],
    correctAnswer: 0,
    explanation: 'Interest = ₹15,000 × 10% × 6/12 = ₹750',
    relatedConcepts: ['Interest on drawings', 'Time period']
  },
  {
    id: 'C2_023',
    chapter: 2,
    topic: 'Profit Sharing',
    difficulty: 'easy',
    weightage: 3,
    question: 'Profit sharing ratio can be changed by:',
    options: ['One partner', 'Mutual agreement', 'Court order', 'Managing partner'],
    correctAnswer: 1,
    explanation: 'Profit sharing ratio can be changed only by mutual agreement of all partners.',
    relatedConcepts: ['Profit sharing ratio', 'Partnership agreement']
  },
  {
    id: 'C2_024',
    chapter: 2,
    topic: 'Capital Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'If capitals are ₹2,00,000, ₹1,50,000, ₹1,00,000, capital ratio is:',
    options: ['4:3:2', '2:3:4', '3:2:1', '1:2:3'],
    correctAnswer: 0,
    explanation: 'Capital ratio = 2,00,000:1,50,000:1,00,000 = 4:3:2',
    relatedConcepts: ['Capital ratio', 'Profit sharing ratio']
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
  // Additional Chapter 3 Questions
  {
    id: 'C3_005',
    chapter: 3,
    topic: 'Admission of Partner',
    difficulty: 'easy',
    weightage: 4,
    question: 'On admission of partner, unrecorded assets are:',
    options: ['Ignored', 'Recorded at market value', 'Recorded at book value', 'Not considered'],
    correctAnswer: 1,
    explanation: 'Unrecorded assets are brought into books at market value through revaluation account.',
    relatedConcepts: ['Revaluation account', 'Unrecorded assets']
  },
  {
    id: 'C3_006',
    chapter: 3,
    topic: 'Goodwill Valuation',
    difficulty: 'medium',
    weightage: 5,
    question: 'Goodwill brought by new partner is shared by old partners in:',
    options: ['New profit sharing ratio', 'Old profit sharing ratio', 'Equal ratio', 'Capital ratio'],
    correctAnswer: 1,
    explanation: 'Goodwill brought by new partner is shared by old partners in their old profit sharing ratio.',
    relatedConcepts: ['Goodwill valuation', 'Profit sharing ratio']
  },
  {
    id: 'C3_007',
    chapter: 3,
    topic: 'Revaluation Account',
    difficulty: 'medium',
    weightage: 4,
    question: 'Increase in value of assets on admission is credited to:',
    options: ['Asset account', 'Revaluation account', 'Partners\' capital accounts', 'Profit and Loss account'],
    correctAnswer: 1,
    explanation: 'Increase in asset values is credited to revaluation account.',
    relatedConcepts: ['Revaluation account', 'Asset revaluation']
  },
  {
    id: 'C3_008',
    chapter: 3,
    topic: 'New Profit Sharing Ratio',
    difficulty: 'hard',
    weightage: 4,
    question: 'Old ratio 2:1:1, new partner admitted with 1/4 share. New ratio will be:',
    options: ['3:1:1:1', '2:1:1:1', '1:1:1:1', '4:2:2:1'],
    correctAnswer: 1,
    explanation: 'New partner gets 1/4 share, remaining 3/4 shared by old partners in 2:1:1 ratio.',
    relatedConcepts: ['New profit sharing ratio', 'Admission of partner']
  },
  {
    id: 'C3_009',
    chapter: 3,
    topic: 'Hidden Goodwill',
    difficulty: 'hard',
    weightage: 5,
    question: 'In case of hidden goodwill, the amount brought by new partner is:',
    options: ['Credited to goodwill account', 'Debited to goodwill account', 'Shared by old partners', 'Added to capital'],
    correctAnswer: 2,
    explanation: 'In hidden goodwill, amount brought extra is shared by old partners as goodwill.',
    relatedConcepts: ['Hidden goodwill', 'Goodwill treatment']
  },
  {
    id: 'C3_010',
    chapter: 3,
    topic: 'Accumulated Profits',
    difficulty: 'medium',
    weightage: 4,
    question: 'On admission, accumulated profits are distributed to old partners in:',
    options: ['New ratio', 'Old ratio', 'Equal ratio', 'Capital ratio'],
    correctAnswer: 1,
    explanation: 'Accumulated profits belong to old partners and are distributed in old ratio.',
    relatedConcepts: ['Accumulated profits', 'Profit distribution']
  },
  {
    id: 'C3_011',
    chapter: 3,
    topic: 'Reserve Distribution',
    difficulty: 'medium',
    weightage: 3,
    question: 'General reserve on admission is transferred to:',
    options: ['New partners only', 'Old partners only', 'All partners in new ratio', 'Credited to revaluation'],
    correctAnswer: 1,
    explanation: 'General reserve belongs to old partners and is distributed in old ratio.',
    relatedConcepts: ['General reserve', 'Reserve distribution']
  },
  {
    id: 'C3_012',
    chapter: 3,
    topic: 'Capital Adjustment',
    difficulty: 'hard',
    weightage: 4,
    question: 'In minimum capital method, excess capital is adjusted through:',
    options: ['Cash payment', 'Current account', 'Goodwill adjustment', 'Revaluation'],
    correctAnswer: 1,
    explanation: 'In minimum capital method, excess capital is adjusted through current accounts.',
    relatedConcepts: ['Minimum capital method', 'Capital adjustment']
  },
  {
    id: 'C3_013',
    chapter: 3,
    topic: 'Premium for Goodwill',
    difficulty: 'medium',
    weightage: 5,
    question: 'Premium for goodwill paid by new partner is:',
    options: ['Revenue receipt', 'Capital receipt', 'Deferred revenue', 'Operating expense'],
    correctAnswer: 1,
    explanation: 'Premium for goodwill is a capital receipt for the firm.',
    relatedConcepts: ['Premium for goodwill', 'Capital receipt']
  },
  {
    id: 'C3_014',
    chapter: 3,
    topic: 'Retirement of Partner',
    difficulty: 'easy',
    weightage: 4,
    question: 'On retirement, gaining ratio is:',
    options: ['Old ratio - New ratio', 'New ratio - Old ratio', 'Same as old ratio', 'Equal ratio'],
    correctAnswer: 1,
    explanation: 'Gaining ratio = New ratio - Old ratio for remaining partners.',
    relatedConcepts: ['Gaining ratio', 'Retirement of partner']
  },
  {
    id: 'C3_015',
    chapter: 3,
    topic: 'Joint Life Policy',
    difficulty: 'hard',
    weightage: 3,
    question: 'Surrender value of Joint Life Policy on retirement is:',
    options: ['Debited to revaluation', 'Credited to revaluation', 'Distributed to retiring partner', 'Shared by all partners'],
    correctAnswer: 1,
    explanation: 'Surrender value is credited to revaluation account as profit on asset.',
    relatedConcepts: ['Joint Life Policy', 'Surrender value']
  },
  {
    id: 'C3_016',
    chapter: 3,
    topic: 'Death of Partner',
    difficulty: 'hard',
    weightage: 4,
    question: 'On death of partner, Joint Life Policy amount is:',
    options: ['Paid to legal heirs', 'Distributed to remaining partners', 'Added to capital', 'Debited to revaluation'],
    correctAnswer: 0,
    explanation: 'Joint Life Policy amount is paid to legal heirs of deceased partner.',
    relatedConcepts: ['Death of partner', 'Joint Life Policy']
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
  // Additional Chapter 6 Questions
  {
    id: 'C6_005',
    chapter: 6,
    topic: 'Share Application',
    difficulty: 'easy',
    weightage: 4,
    question: 'Share application money is:',
    options: ['Liability', 'Asset', 'Revenue', 'Capital'],
    correctAnswer: 0,
    explanation: 'Share application money received is a liability until shares are allotted.',
    relatedConcepts: ['Share application', 'Share allotment']
  },
  {
    id: 'C6_006',
    chapter: 6,
    topic: 'Allotment of Shares',
    difficulty: 'medium',
    weightage: 4,
    question: 'On allotment of shares, share allotment account is:',
    options: ['Debited', 'Credited', 'Not affected', 'Closed'],
    correctAnswer: 1,
    explanation: 'Share allotment account is credited with the allotment money received.',
    relatedConcepts: ['Share allotment', 'Share capital']
  },
  {
    id: 'C6_007',
    chapter: 6,
    topic: 'Calls on Shares',
    difficulty: 'medium',
    weightage: 4,
    question: 'First call money is received through:',
    options: ['Share application', 'Share allotment', 'Call notice', 'Bank draft'],
    correctAnswer: 2,
    explanation: 'First call money is received through call notice sent to shareholders.',
    relatedConcepts: ['Calls on shares', 'Share calls']
  },
  {
    id: 'C6_008',
    chapter: 6,
    topic: 'Discount on Issue',
    difficulty: 'hard',
    weightage: 4,
    question: 'Discount on issue of shares is:',
    options: ['Revenue expenditure', 'Capital expenditure', 'Deferred revenue', 'Operating expense'],
    correctAnswer: 1,
    explanation: 'Discount on issue of shares is capital expenditure written off over years.',
    relatedConcepts: ['Discount on shares', 'Capital expenditure']
  },
  {
    id: 'C6_009',
    chapter: 6,
    topic: 'Over-subscription',
    difficulty: 'hard',
    weightage: 4,
    question: 'In case of over-subscription, excess application money is:',
    options: ['Refunded', 'Forfeited', 'Adjusted against allotment', 'Added to capital'],
    correctAnswer: 0,
    explanation: 'Excess application money in over-subscription is refunded to applicants.',
    relatedConcepts: ['Over-subscription', 'Share application']
  },
  {
    id: 'C6_010',
    chapter: 6,
    topic: 'Under-subscription',
    difficulty: 'medium',
    weightage: 3,
    question: 'Under-subscription means:',
    options: ['More applications than shares', 'Less applications than shares', 'Equal applications and shares', 'No applications'],
    correctAnswer: 1,
    explanation: 'Under-subscription occurs when applications received are less than shares offered.',
    relatedConcepts: ['Under-subscription', 'Share issue']
  },
  {
    id: 'C6_011',
    chapter: 6,
    topic: 'Calls in Arrears',
    difficulty: 'medium',
    weightage: 4,
    question: 'Calls in arrears account shows:',
    options: ['Money received', 'Money not received', 'Total calls made', 'Share capital'],
    correctAnswer: 1,
    explanation: 'Calls in arrears account shows the amount of calls not received from shareholders.',
    relatedConcepts: ['Calls in arrears', 'Share calls']
  },
  {
    id: 'C6_012',
    chapter: 6,
    topic: 'Forfeiture of Shares',
    difficulty: 'hard',
    weightage: 4,
    question: 'On forfeiture, share capital account is debited with:',
    options: ['Face value', 'Paid up value', 'Called up value', 'Market value'],
    correctAnswer: 1,
    explanation: 'On forfeiture, share capital account is debited with paid-up value.',
    relatedConcepts: ['Forfeiture of shares', 'Share capital']
  },
  {
    id: 'C6_013',
    chapter: 6,
    topic: 'Re-issue of Forfeited Shares',
    difficulty: 'hard',
    weightage: 2,
    question: 'On re-issue of forfeited shares, share forfeiture account is:',
    options: ['Debited', 'Credited', 'Not affected', 'Closed'],
    correctAnswer: 1,
    explanation: 'Share forfeiture account is credited with the amount received on re-issue.',
    relatedConcepts: ['Re-issue of shares', 'Share forfeiture account']
  },
  {
    id: 'C6_014',
    chapter: 6,
    topic: 'Issue at Premium',
    difficulty: 'medium',
    weightage: 4,
    question: 'Securities premium can be used for:',
    options: ['Dividend payment', 'Writing off preliminary expenses', 'Reducing share capital', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Securities premium can be used for various purposes as specified in Companies Act.',
    relatedConcepts: ['Securities premium', 'Premium utilization']
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
  // Additional Chapter 4 Questions
  {
    id: 'C4_004',
    chapter: 4,
    topic: 'Dissolution Process',
    difficulty: 'easy',
    weightage: 3,
    question: 'Dissolution of partnership firm means:',
    options: ['Change in profit sharing ratio', 'Admission of new partner', 'Complete closure of business', 'Retirement of partner'],
    correctAnswer: 2,
    explanation: 'Dissolution means complete closure and winding up of partnership business.',
    relatedConcepts: ['Dissolution of partnership', 'Winding up']
  },
  {
    id: 'C4_005',
    chapter: 4,
    topic: 'Realization Account',
    difficulty: 'medium',
    weightage: 3,
    question: 'Realization account is prepared to:',
    options: ['Calculate profit on dissolution', 'Record sale of assets and payment of liabilities', 'Distribute assets among partners', 'Calculate goodwill'],
    correctAnswer: 1,
    explanation: 'Realization account records the sale of assets and payment of external liabilities.',
    relatedConcepts: ['Realization account', 'Dissolution accounts']
  },
  {
    id: 'C4_006',
    chapter: 4,
    topic: 'Bankruptcy of Partner',
    difficulty: 'hard',
    weightage: 4,
    question: 'When partner becomes bankrupt, his capital deficiency is:',
    options: ['Written off', 'Borne by other partners', 'Added to assets', 'Ignored'],
    correctAnswer: 1,
    explanation: 'Capital deficiency of bankrupt partner is borne by solvent partners in profit sharing ratio.',
    relatedConcepts: ['Bankruptcy of partner', 'Capital deficiency']
  },
  {
    id: 'C4_007',
    chapter: 4,
    topic: 'Asset Distribution',
    difficulty: 'medium',
    weightage: 3,
    question: 'On dissolution, assets are distributed in the order of:',
    options: ['Realization, payment of liabilities, partners\' capital', 'Partners\' capital, realization, liabilities', 'Liabilities, realization, partners\' capital', 'Realization, partners\' capital, liabilities'],
    correctAnswer: 0,
    explanation: 'First realize assets, then pay external liabilities, then distribute remaining to partners.',
    relatedConcepts: ['Asset distribution', 'Dissolution procedure']
  },
  {
    id: 'C4_008',
    chapter: 4,
    topic: 'Loss on Realization',
    difficulty: 'hard',
    weightage: 4,
    question: 'Loss on realization is distributed to partners in:',
    options: ['Equal ratio', 'Capital ratio', 'Profit sharing ratio', 'As per court order'],
    correctAnswer: 2,
    explanation: 'Loss on realization is distributed to partners in their profit sharing ratio.',
    relatedConcepts: ['Loss on realization', 'Profit sharing ratio']
  },
  {
    id: 'C4_009',
    chapter: 4,
    topic: 'Partners\' Loan',
    difficulty: 'medium',
    weightage: 3,
    question: 'Partner\'s loan is treated as:',
    options: ['External liability', 'Internal liability', 'Capital', 'Revenue'],
    correctAnswer: 0,
    explanation: 'Partner\'s loan is treated as external liability and paid before capital.',
    relatedConcepts: ['Partner\'s loan', 'External liability']
  },
  {
    id: 'C4_010',
    chapter: 4,
    topic: 'Dissolution Expenses',
    difficulty: 'easy',
    weightage: 2,
    question: 'Dissolution expenses are borne by:',
    options: ['Partners equally', 'Partners in profit sharing ratio', 'The firm', 'Government'],
    correctAnswer: 1,
    explanation: 'Dissolution expenses are borne by partners in their profit sharing ratio.',
    relatedConcepts: ['Dissolution expenses', 'Expense sharing']
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
  // Additional Chapter 7 Questions
  {
    id: 'C7_004',
    chapter: 7,
    topic: 'Types of Debentures',
    difficulty: 'easy',
    weightage: 3,
    question: 'Debentures which can be converted into shares are called:',
    options: ['Convertible debentures', 'Non-convertible debentures', 'Redeemable debentures', 'Irredeemable debentures'],
    correctAnswer: 0,
    explanation: 'Convertible debentures can be converted into equity shares at a future date.',
    relatedConcepts: ['Convertible debentures', 'Types of debentures']
  },
  {
    id: 'C7_005',
    chapter: 7,
    topic: 'Debenture Interest',
    difficulty: 'medium',
    weightage: 3,
    question: 'Debenture interest is:',
    options: ['Tax deductible', 'Not tax deductible', 'Partially deductible', 'Depends on company'],
    correctAnswer: 0,
    explanation: 'Debenture interest is tax deductible expense for the company.',
    relatedConcepts: ['Debenture interest', 'Tax treatment']
  },
  {
    id: 'C7_006',
    chapter: 7,
    topic: 'Debenture Trust Deed',
    difficulty: 'medium',
    weightage: 3,
    question: 'Debenture trust deed contains:',
    options: ['Only interest rate', 'Terms and conditions of debentures', 'Only redemption date', 'Only face value'],
    correctAnswer: 1,
    explanation: 'Debenture trust deed contains all terms and conditions of the debenture issue.',
    relatedConcepts: ['Debenture trust deed', 'Debenture terms']
  },
  {
    id: 'C7_007',
    chapter: 7,
    topic: 'Secured Debentures',
    difficulty: 'hard',
    weightage: 2,
    question: 'Secured debentures have charge on:',
    options: ['Only movable assets', 'Only immovable assets', 'Both movable and immovable assets', 'No charge'],
    correctAnswer: 2,
    explanation: 'Secured debentures have charge on both movable and immovable assets of the company.',
    relatedConcepts: ['Secured debentures', 'Asset charge']
  },
  {
    id: 'C7_008',
    chapter: 7,
    topic: 'Debenture Redemption Reserve',
    difficulty: 'hard',
    weightage: 2,
    question: 'Debenture Redemption Reserve is created for:',
    options: ['All companies', 'Private companies only', 'Public companies issuing debentures', 'Foreign companies'],
    correctAnswer: 2,
    explanation: 'DRR is created by public companies issuing debentures for redemption.',
    relatedConcepts: ['Debenture Redemption Reserve', 'Debenture redemption']
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
  // Additional Chapter 9 Questions
  {
    id: 'C9_005',
    chapter: 9,
    topic: 'Working Capital',
    difficulty: 'easy',
    weightage: 3,
    question: 'Working capital is:',
    options: ['Fixed Assets - Current Assets', 'Current Assets - Current Liabilities', 'Fixed Assets + Current Assets', 'Share Capital + Reserves'],
    correctAnswer: 1,
    explanation: 'Working capital = Current Assets - Current Liabilities.',
    relatedConcepts: ['Working capital', 'Current assets']
  },
  {
    id: 'C9_006',
    chapter: 9,
    topic: 'Current Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Ideal current ratio is:',
    options: ['1:1', '2:1', '3:1', '4:1'],
    correctAnswer: 1,
    explanation: 'Ideal current ratio is 2:1, meaning current assets should be twice current liabilities.',
    relatedConcepts: ['Current ratio', 'Ideal ratio']
  },
  {
    id: 'C9_007',
    chapter: 9,
    topic: 'Liquid Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Liquid ratio is also known as:',
    options: ['Current ratio', 'Quick ratio', 'Absolute ratio', 'Cash ratio'],
    correctAnswer: 1,
    explanation: 'Liquid ratio is also called quick ratio or acid test ratio.',
    relatedConcepts: ['Liquid ratio', 'Quick ratio']
  },
  {
    id: 'C9_008',
    chapter: 9,
    topic: 'Debt-Equity Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Debt-equity ratio indicates:',
    options: ['Profitability', 'Liquidity', 'Solvency', 'Activity'],
    correctAnswer: 2,
    explanation: 'Debt-equity ratio indicates long-term solvency of the business.',
    relatedConcepts: ['Debt-equity ratio', 'Solvency ratios']
  },
  {
    id: 'C9_009',
    chapter: 9,
    topic: 'Gross Profit Ratio',
    difficulty: 'hard',
    weightage: 3,
    question: 'Gross profit ratio is calculated as:',
    options: ['Gross Profit / Sales × 100', 'Net Profit / Sales × 100', 'Gross Profit / Cost of Goods Sold × 100', 'Net Profit / Capital × 100'],
    correctAnswer: 0,
    explanation: 'Gross profit ratio = (Gross Profit / Sales) × 100',
    relatedConcepts: ['Gross profit ratio', 'Profitability ratios']
  },
  {
    id: 'C9_010',
    chapter: 9,
    topic: 'Net Profit Ratio',
    difficulty: 'hard',
    weightage: 3,
    question: 'Net profit ratio measures:',
    options: ['Operational efficiency', 'Overall profitability', 'Liquidity position', 'Solvency position'],
    correctAnswer: 1,
    explanation: 'Net profit ratio measures overall profitability of the business.',
    relatedConcepts: ['Net profit ratio', 'Profitability ratios']
  },
  {
    id: 'C9_011',
    chapter: 9,
    topic: 'Inventory Turnover Ratio',
    difficulty: 'hard',
    weightage: 3,
    question: 'Inventory turnover ratio is:',
    options: ['Cost of Goods Sold / Inventory', 'Sales / Inventory', 'Inventory / Cost of Goods Sold', 'Inventory / Sales'],
    correctAnswer: 0,
    explanation: 'Inventory turnover ratio = Cost of Goods Sold / Average Inventory',
    relatedConcepts: ['Inventory turnover ratio', 'Activity ratios']
  },
  {
    id: 'C9_012',
    chapter: 9,
    topic: 'Return on Investment',
    difficulty: 'hard',
    weightage: 3,
    question: 'ROI is calculated as:',
    options: ['Net Profit / Sales × 100', 'Net Profit / Capital Employed × 100', 'Sales / Capital Employed × 100', 'Profit / Investment × 100'],
    correctAnswer: 1,
    explanation: 'ROI = (Net Profit / Capital Employed) × 100',
    relatedConcepts: ['Return on investment', 'Profitability ratios']
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
  // Additional Chapter 1 Questions
  {
    id: 'C1_003',
    chapter: 1,
    topic: 'Business Entity Concept',
    difficulty: 'easy',
    weightage: 2,
    question: 'Business Entity concept means:',
    options: ['Business and owner are same', 'Business and owner are separate', 'Business owns everything', 'Owner owns business'],
    correctAnswer: 1,
    explanation: 'Business Entity concept treats business as separate from its owners.',
    relatedConcepts: ['Business entity concept', 'Accounting assumptions']
  },
  {
    id: 'C1_004',
    chapter: 1,
    topic: 'Money Measurement Concept',
    difficulty: 'easy',
    weightage: 2,
    question: 'Money Measurement concept records only:',
    options: ['All transactions', 'Monetary transactions', 'Non-monetary transactions', 'Cash transactions only'],
    correctAnswer: 1,
    explanation: 'Only those transactions which can be measured in monetary terms are recorded.',
    relatedConcepts: ['Money measurement concept', 'Accounting assumptions']
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
  // Additional Chapter 5 Questions
  {
    id: 'C5_003',
    chapter: 5,
    topic: 'Balance Sheet of NPO',
    difficulty: 'medium',
    weightage: 3,
    question: 'In NPO Balance Sheet, capital fund is:',
    options: ['Liability', 'Asset', 'Revenue', 'Expense'],
    correctAnswer: 0,
    explanation: 'Capital fund in NPO Balance Sheet appears on the liabilities side.',
    relatedConcepts: ['Balance sheet of NPO', 'Capital fund']
  },
  {
    id: 'C5_004',
    chapter: 5,
    topic: 'Subscription Income',
    difficulty: 'easy',
    weightage: 2,
    question: 'Subscription received in advance is:',
    options: ['Income', 'Liability', 'Asset', 'Expense'],
    correctAnswer: 1,
    explanation: 'Subscription received in advance is a liability until earned.',
    relatedConcepts: ['Subscription income', 'Advance income']
  },
  {
    id: 'C5_005',
    chapter: 5,
    topic: 'Life Membership Fee',
    difficulty: 'hard',
    weightage: 2,
    question: 'Life membership fee is treated as:',
    options: ['Revenue income', 'Capital receipt', 'Liability', 'Expense'],
    correctAnswer: 1,
    explanation: 'Life membership fee is a capital receipt as it is received once for lifetime membership.',
    relatedConcepts: ['Life membership fee', 'Capital receipt']
  },
  {
    id: 'C5_006',
    chapter: 5,
    topic: 'Entrance Fees',
    difficulty: 'medium',
    weightage: 2,
    question: 'Entrance fees received by NPO are:',
    options: ['Revenue income', 'Capital receipt', 'Liability', 'Expense'],
    correctAnswer: 1,
    explanation: 'Entrance fees are capital receipts as they are received once at the time of admission.',
    relatedConcepts: ['Entrance fees', 'Capital receipt']
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
  },
  // Additional Chapter 8 Questions
  {
    id: 'C8_003',
    chapter: 8,
    topic: 'Redemption by Purchase',
    difficulty: 'hard',
    weightage: 3,
    question: 'When debentures are purchased in open market for redemption:',
    options: ['Profit is credited to Profit and Loss Account', 'Profit is transferred to Capital Reserve', 'Loss is charged to Profit and Loss Account', 'No profit or loss'],
    correctAnswer: 1,
    explanation: 'Profit on purchase of own debentures is transferred to Capital Reserve.',
    relatedConcepts: ['Redemption by purchase', 'Capital reserve']
  },
  {
    id: 'C8_004',
    chapter: 8,
    topic: 'Redemption by Draw',
    difficulty: 'medium',
    weightage: 2,
    question: 'In redemption by draw, selected debentures are redeemed at:',
    options: ['Face value only', 'Premium only', 'Face value or premium', 'Market value'],
    correctAnswer: 2,
    explanation: 'In redemption by draw, selected debentures are redeemed at face value or premium as per terms.',
    relatedConcepts: ['Redemption by draw', 'Debenture redemption']
  },
  {
    id: 'C8_005',
    chapter: 8,
    topic: 'Redemption by Conversion',
    difficulty: 'hard',
    weightage: 3,
    question: 'When debentures are converted into shares:',
    options: ['No journal entry required', 'Debentures account is credited', 'Shares account is debited', 'Both B and C'],
    correctAnswer: 3,
    explanation: 'On conversion, debentures are cancelled and shares are issued.',
    relatedConcepts: ['Redemption by conversion', 'Debenture conversion']
  },
  {
    id: 'C8_006',
    chapter: 8,
    topic: 'Sinking Fund',
    difficulty: 'hard',
    weightage: 2,
    question: 'Sinking fund investments are shown in Balance Sheet as:',
    options: ['Current assets', 'Fixed assets', 'Investments', 'Current liabilities'],
    correctAnswer: 2,
    explanation: 'Sinking fund investments are shown under investments in Balance Sheet.',
    relatedConcepts: ['Sinking fund', 'Investments']
  },

  // Chapter 10: Accounting Ratios (High Priority - 15% weightage)
  {
    id: 'C10_001',
    chapter: 10,
    topic: 'Current Ratio',
    difficulty: 'easy',
    weightage: 4,
    question: 'Current Ratio of 2.5:1 indicates:',
    options: ['Current Assets are 2.5 times Current Liabilities', 'Current Liabilities are 2.5 times Current Assets', 'Fixed Assets are 2.5 times Current Assets', 'Current Assets are 2.5 times Fixed Assets'],
    correctAnswer: 0,
    explanation: 'Current Ratio = Current Assets ÷ Current Liabilities. A ratio of 2.5:1 means Current Assets are 2.5 times Current Liabilities.',
    relatedConcepts: ['Current ratio', 'Liquidity ratios']
  },
  {
    id: 'C10_002',
    chapter: 10,
    topic: 'Quick Ratio',
    difficulty: 'medium',
    weightage: 4,
    question: 'Quick Ratio is also known as:',
    options: ['Current Ratio', 'Acid-Test Ratio', 'Cash Ratio', 'Working Capital Ratio'],
    correctAnswer: 1,
    explanation: 'Quick Ratio is also called Acid-Test Ratio as it measures immediate liquidity excluding inventory.',
    relatedConcepts: ['Quick ratio', 'Acid-test ratio']
  },
  {
    id: 'C10_003',
    chapter: 10,
    topic: 'Debt-Equity Ratio',
    difficulty: 'easy',
    weightage: 4,
    question: 'A Debt-Equity Ratio of 1:1 is considered:',
    options: ['Highly risky', 'Conservative', 'Balanced', 'Aggressive'],
    correctAnswer: 2,
    explanation: 'A Debt-Equity Ratio of 1:1 indicates balanced capital structure with equal proportion of debt and equity.',
    relatedConcepts: ['Debt-equity ratio', 'Capital structure']
  },
  {
    id: 'C10_004',
    chapter: 10,
    topic: 'Gross Profit Ratio',
    difficulty: 'medium',
    weightage: 4,
    question: 'Gross Profit Ratio indicates:',
    options: ['Overall profitability', 'Manufacturing efficiency', 'Operational efficiency', 'Return on investment'],
    correctAnswer: 1,
    explanation: 'Gross Profit Ratio shows manufacturing or trading efficiency by relating gross profit to sales.',
    relatedConcepts: ['Gross profit ratio', 'Manufacturing efficiency']
  },
  {
    id: 'C10_005',
    chapter: 10,
    topic: 'Net Profit Ratio',
    difficulty: 'medium',
    weightage: 4,
    question: 'Net Profit Ratio is calculated as:',
    options: ['Net Profit ÷ Sales × 100', 'Gross Profit ÷ Sales × 100', 'Net Profit ÷ Capital × 100', 'Sales ÷ Net Profit × 100'],
    correctAnswer: 0,
    explanation: 'Net Profit Ratio = (Net Profit ÷ Revenue from Operations) × 100',
    relatedConcepts: ['Net profit ratio', 'Overall profitability']
  },
  {
    id: 'C10_006',
    chapter: 10,
    topic: 'Inventory Turnover Ratio',
    difficulty: 'hard',
    weightage: 5,
    question: 'If cost of goods sold is ₹6,00,000 and average inventory is ₹1,00,000, inventory turnover ratio is:',
    options: ['6 times', '5 times', '7 times', '4 times'],
    correctAnswer: 0,
    explanation: 'Inventory Turnover Ratio = Cost of Goods Sold ÷ Average Inventory = ₹6,00,000 ÷ ₹1,00,000 = 6 times',
    relatedConcepts: ['Inventory turnover ratio', 'Inventory management']
  },
  {
    id: 'C10_007',
    chapter: 10,
    topic: 'Return on Investment',
    difficulty: 'hard',
    weightage: 5,
    question: 'ROI is calculated as:',
    options: ['Net Profit ÷ Capital Employed × 100', 'Profit before Interest & Tax ÷ Capital Employed × 100', 'Net Profit ÷ Sales × 100', 'Profit before Tax ÷ Sales × 100'],
    correctAnswer: 1,
    explanation: 'ROI = (Profit before Interest and Tax ÷ Capital Employed) × 100',
    relatedConcepts: ['Return on investment', 'Capital employed']
  },
  {
    id: 'C10_008',
    chapter: 10,
    topic: 'Current Assets Calculation',
    difficulty: 'medium',
    weightage: 3,
    question: 'Which of the following is NOT a current asset?',
    options: ['Cash', 'Inventory', 'Debtors', 'Fixed Assets'],
    correctAnswer: 3,
    explanation: 'Fixed Assets are long-term assets, not current assets. Current assets include cash, inventory, debtors, etc.',
    relatedConcepts: ['Current assets', 'Balance sheet classification']
  },
  {
    id: 'C10_009',
    chapter: 10,
    topic: 'Proprietary Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Proprietary Ratio shows:',
    options: ['Proportion of debt in financing', 'Proportion of equity in total assets', 'Proportion of current assets', 'Proportion of fixed assets'],
    correctAnswer: 1,
    explanation: 'Proprietary Ratio = Shareholders\' Funds ÷ Total Assets, showing proportion of assets financed by owners.',
    relatedConcepts: ['Proprietary ratio', 'Equity financing']
  },
  {
    id: 'C10_010',
    chapter: 10,
    topic: 'Interest Coverage Ratio',
    difficulty: 'hard',
    weightage: 4,
    question: 'Interest Coverage Ratio of 5 means:',
    options: ['Company can pay interest 5 times', 'Profit is 5 times interest', 'Assets are 5 times liabilities', 'Sales are 5 times expenses'],
    correctAnswer: 1,
    explanation: 'Interest Coverage Ratio = Profit before Interest & Tax ÷ Interest. A ratio of 5 means profit is 5 times the interest expense.',
    relatedConcepts: ['Interest coverage ratio', 'Debt servicing capacity']
  },
  {
    id: 'C10_011',
    chapter: 10,
    topic: 'Working Capital Turnover Ratio',
    difficulty: 'hard',
    weightage: 4,
    question: 'Working Capital Turnover Ratio indicates:',
    options: ['How many times working capital is turned over in sales', 'How many times sales exceed working capital', 'Efficiency of working capital utilization', 'All of the above'],
    correctAnswer: 3,
    explanation: 'Working Capital Turnover Ratio = Sales ÷ Working Capital, showing efficiency of working capital utilization.',
    relatedConcepts: ['Working capital turnover', 'Working capital efficiency']
  },
  {
    id: 'C10_012',
    chapter: 10,
    topic: 'Trade Receivables Turnover',
    difficulty: 'hard',
    weightage: 4,
    question: 'Higher Trade Receivables Turnover Ratio indicates:',
    options: ['Poor collection efficiency', 'Good collection efficiency', 'High credit sales', 'Low credit sales'],
    correctAnswer: 1,
    explanation: 'Higher receivables turnover ratio indicates faster collection of receivables, hence better efficiency.',
    relatedConcepts: ['Trade receivables turnover', 'Collection efficiency']
  },
  {
    id: 'C10_013',
    chapter: 10,
    topic: 'Cash Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Cash Ratio is calculated as:',
    options: ['Cash ÷ Current Liabilities', 'Cash + Bank ÷ Current Liabilities', 'Cash + Bank + Marketable Securities ÷ Current Liabilities', 'Cash + Receivables ÷ Current Liabilities'],
    correctAnswer: 2,
    explanation: 'Cash Ratio = (Cash + Bank + Marketable Securities) ÷ Current Liabilities',
    relatedConcepts: ['Cash ratio', 'Absolute liquid ratio']
  },
  {
    id: 'C10_014',
    chapter: 10,
    topic: 'Return on Equity',
    difficulty: 'hard',
    weightage: 5,
    question: 'ROE is calculated as:',
    options: ['Net Profit ÷ Sales × 100', 'Net Profit ÷ Shareholders\' Funds × 100', 'Profit before Tax ÷ Shareholders\' Funds × 100', 'Net Profit ÷ Total Assets × 100'],
    correctAnswer: 1,
    explanation: 'ROE = (Net Profit after Tax ÷ Shareholders\' Funds) × 100',
    relatedConcepts: ['Return on equity', 'Shareholders\' return']
  },
  {
    id: 'C10_015',
    chapter: 10,
    topic: 'Operating Ratio',
    difficulty: 'medium',
    weightage: 3,
    question: 'Operating Ratio is calculated as:',
    options: ['Operating Cost ÷ Sales × 100', 'Operating Profit ÷ Sales × 100', 'Cost of Goods Sold ÷ Sales × 100', 'Total Expenses ÷ Sales × 100'],
    correctAnswer: 0,
    explanation: 'Operating Ratio = (Operating Cost ÷ Revenue from Operations) × 100. Lower ratio indicates better operational efficiency.',
    relatedConcepts: ['Operating ratio', 'Operational efficiency']
  },
  {
    id: 'C10_016',
    chapter: 10,
    topic: 'Fixed Assets Turnover',
    difficulty: 'hard',
    weightage: 4,
    question: 'Fixed Assets Turnover Ratio measures:',
    options: ['Efficiency in using fixed assets', 'Liquidity of the firm', 'Profitability of fixed assets', 'Solvency of the firm'],
    correctAnswer: 0,
    explanation: 'Fixed Assets Turnover = Revenue from Operations ÷ Fixed Assets, measuring efficiency in utilizing fixed assets.',
    relatedConcepts: ['Fixed assets turnover', 'Asset utilization']
  },
  {
    id: 'C10_017',
    chapter: 10,
    topic: 'Trade Payables Turnover',
    difficulty: 'hard',
    weightage: 4,
    question: 'Trade Payables Turnover Ratio indicates:',
    options: ['How quickly company pays suppliers', 'How quickly company collects from customers', 'How efficiently inventory is managed', 'How profitable the operations are'],
    correctAnswer: 0,
    explanation: 'Trade Payables Turnover = Net Credit Purchases ÷ Average Trade Payables, showing payment period to suppliers.',
    relatedConcepts: ['Trade payables turnover', 'Payment efficiency']
  },
  {
    id: 'C10_018',
    chapter: 10,
    topic: 'Earnings Per Share',
    difficulty: 'hard',
    weightage: 4,
    question: 'EPS is calculated as:',
    options: ['Net Profit ÷ Number of Shares', 'Net Profit available to Equity Shareholders ÷ Number of Equity Shares', 'Total Profit ÷ Number of Shares', 'Profit before Tax ÷ Number of Shares'],
    correctAnswer: 1,
    explanation: 'EPS = Net Profit available to Equity Shareholders ÷ Number of Equity Shares Outstanding',
    relatedConcepts: ['Earnings per share', 'Share value']
  },
  {
    id: 'C10_019',
    chapter: 10,
    topic: 'Ratio Analysis Interpretation',
    difficulty: 'medium',
    weightage: 3,
    question: 'A current ratio of 3:1 indicates:',
    options: ['Very poor liquidity', 'Excellent liquidity', 'Ideal liquidity', 'Dangerous liquidity'],
    correctAnswer: 1,
    explanation: 'A current ratio of 3:1 indicates excellent liquidity as current assets are 3 times current liabilities.',
    relatedConcepts: ['Ratio interpretation', 'Liquidity analysis']
  },
  {
    id: 'C10_020',
    chapter: 10,
    topic: 'Comparative Analysis',
    difficulty: 'easy',
    weightage: 2,
    question: 'Ratio analysis helps in:',
    options: ['Only calculating ratios', 'Comparing with industry standards', 'Only preparing financial statements', 'Only tax calculations'],
    correctAnswer: 1,
    explanation: 'Ratio analysis helps in comparing company performance with industry standards, past performance, and competitors.',
    relatedConcepts: ['Comparative analysis', 'Ratio analysis']
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
    2: 0.20, // 20% - High priority (Partnership)
    3: 0.14, // 14% - High priority (Partnership)
    6: 0.12, // 12% - High priority (Company)
    10: 0.12, // 12% - High priority (Ratios)
    9: 0.10, // 10% - Medium priority
    4: 0.08, // 8% - Medium priority
    7: 0.07, // 7% - Medium priority
    5: 0.05, // 5% - Low priority
    8: 0.05, // 5% - Low priority
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

export const getCustomChapterMCQs = (selectedChapters: number[], totalCount: number): MCQ[] => {
  if (selectedChapters.length === 0) {
    return getWeightedRandomMCQs(totalCount);
  }

  const selectedMCQs: MCQ[] = [];
  const questionsPerChapter = Math.floor(totalCount / selectedChapters.length);
  const remainder = totalCount % selectedChapters.length;

  selectedChapters.forEach((chapter, index) => {
    const chapterMCQs = getMCQsByChapter(chapter);
    const targetCount = questionsPerChapter + (index < remainder ? 1 : 0);

    // Randomly select MCQs from this chapter
    const shuffled = [...chapterMCQs].sort(() => 0.5 - Math.random());
    selectedMCQs.push(...shuffled.slice(0, Math.min(targetCount, chapterMCQs.length)));
  });

  // Fill remaining slots with random MCQs from selected chapters if needed
  while (selectedMCQs.length < totalCount) {
    const randomChapter = selectedChapters[Math.floor(Math.random() * selectedChapters.length)];
    const chapterMCQs = getMCQsByChapter(randomChapter);
    const availableMCQs = chapterMCQs.filter(mcq => !selectedMCQs.find(selected => selected.id === mcq.id));

    if (availableMCQs.length > 0) {
      const randomMCQ = availableMCQs[Math.floor(Math.random() * availableMCQs.length)];
      selectedMCQs.push(randomMCQ);
    } else {
      break; // No more questions available in selected chapters
    }
  }

  return selectedMCQs.slice(0, totalCount);
};

export const getChapterInfo = () => {
  return {
    1: { name: 'Theory', weightage: 4, priority: 'Low' },
    2: { name: 'Partnership Fundamentals', weightage: 20, priority: 'High' },
    3: { name: 'Partnership Reconstitution', weightage: 14, priority: 'High' },
    4: { name: 'Dissolution', weightage: 8, priority: 'Medium' },
    5: { name: 'NPO', weightage: 5, priority: 'Low' },
    6: { name: 'Issue of Shares', weightage: 12, priority: 'High' },
    7: { name: 'Debentures', weightage: 7, priority: 'Medium' },
    8: { name: 'Debenture Redemption', weightage: 5, priority: 'Low' },
    9: { name: 'Financial Analysis', weightage: 10, priority: 'Medium' },
    10: { name: 'Accounting Ratios', weightage: 12, priority: 'High' }
  };
};