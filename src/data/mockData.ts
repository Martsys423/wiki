export const metricsData = [
  { label: 'SKILLS LIVE', value: '20', progress: 6 },
  { label: 'SOURCES REVIEWED', value: '1,240', progress: 9 },
  { label: 'UPDATED THIS WEEK', value: '7', progress: 3 },
  { label: 'TEST CASES PASSED', value: '384', progress: 8 },
];

export const skillsData = [
  {
    name: 'First-Time Vegetable Garden Planner',
    promise: 'Build a realistic garden plan based on space, sunlight, climate, budget, and available time.',
    status: 'LIVE',
    sources: 42,
    lastReviewed: 'May 2026'
  },
  {
    name: 'Dating Profile Improvement',
    promise: 'Improve photos, prompts, tone, and conversation strategy using structured feedback.',
    status: 'IN REVIEW',
    sources: 26,
    lastReviewed: 'May 2026'
  },
  {
    name: 'Prenup Conversation Prep',
    promise: 'Understand the conversation, questions to ask, and topics to clarify before speaking with an attorney.',
    status: 'EDUCATIONAL',
    sources: 31,
    lastReviewed: 'May 2026'
  },
  {
    name: 'Solo Consultant Client Onboarding',
    promise: 'Turn scattered intake, proposal, and kickoff steps into a repeatable client workflow.',
    status: 'LIVE',
    sources: 18,
    lastReviewed: 'May 2026'
  },
  {
    name: 'Financial Advisor Question Prep',
    promise: 'Prepare better questions before meeting a financial advisor.',
    status: 'EDUCATIONAL',
    sources: 35,
    lastReviewed: 'May 2026'
  }
];

export const feedItemsData = [
  { time: '11:22:45', action: 'NEW SKILL', detail: 'First-Time Garden Planner', highlight: true },
  { time: '11:20:12', action: 'SOURCE REVIEW', detail: '14 university extension guides approved' },
  { time: '11:15:00', action: 'CLAIM AUDIT', detail: 'Prenup Conversation Prep updated' },
  { time: '10:55:22', action: 'TEST ADDED', detail: 'Low-sun balcony garden scenario' },
  { time: '10:42:11', action: 'USER REQUEST', detail: 'Lease prep skill queued' },
  { time: '10:31:08', action: 'CHANGELOG', detail: 'Client onboarding workflow v0.2.1' },
];

export const fieldNotesData = [
  { title: 'How We Built the First-Time Garden Planner', date: '02 MAY 2026' },
  { title: 'Why Source Quality Matters More Than Prompt Quality', date: '28 APR 2026' },
  { title: 'What Changed in the Prenup Conversation Skill', date: '21 APR 2026' },
  { title: 'The Difference Between a Prompt Pack and a Living Skill', date: '15 APR 2026' },
];

export const glossaryTermsData = [
  { term: 'Living Skill', def: 'A maintained, source-governed, versioned AI-native playbook.' },
  { term: 'Source Graph', def: 'The documented network of citations backing a specific skill.' },
  { term: 'Claim Audit', def: 'The process of verifying AI-generated output against trusted sources.' },
  { term: 'Agent-Ready Package', def: 'A structured format allowing autonomous agents to execute the skill.' },
];
