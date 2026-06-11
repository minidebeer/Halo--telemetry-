export const kpiData = [
  {
    label: 'API calls today',
    icon: 'activity',
    value: '2,847',
    subLabel: '↑ 12% today',
    subLabelColor: 'green',
  },
  {
    label: 'Tokens used',
    icon: 'hash',
    value: '1.4M',
    subLabel: '↑ 8% today',
    subLabelColor: 'green',
  },
  {
    label: 'Est. cost',
    icon: 'dollar',
    value: 'R184',
    subLabel: 'of R500 budget',
    subLabelColor: 'gray',
  },
  {
    label: 'Active practices',
    icon: 'users',
    value: '7',
    subLabel: 'of 9 practices',
    subLabelColor: 'gray',
  },
]

export const practices = [
  {
    id: 'all',
    name: 'All Practices',
    kpis: {
      apiCalls: '12,847',
      apiTrend: '+9%',
      tokens: '5.8M',
      tokenTrend: '+11%',
      cost: 'R741',
      budget: 'R2,000',
      active: '5',
      total: '5',
    },
    featureUsage: {
      all: [85, 68, 52, 38, 24],
      scribe: [78, 60, 45, 30, 18],
      labsRadiology: [40, 30, 22, 18, 10],
      billing: [55, 44, 33, 22, 11],
      admin: [30, 25, 18, 12, 8],
    },
    benchmark: null,
    zScore: null,
    cost: null,
  },
  {
    id: 'cornelissen',
    name: 'Dr Cornelissen',
    kpis: {
      apiCalls: '2,847',
      apiTrend: '+12%',
      tokens: '1.4M',
      tokenTrend: '+8%',
      cost: 'R184',
      budget: 'R500',
      active: null,
      total: null,
      avgTokensPerNote: '1,830',
    },
    featureUsage: {
      all: [85, 0, 0, 0, 0],
      scribe: [78, 0, 0, 0, 0],
      labsRadiology: [40, 0, 0, 0, 0],
      billing: [55, 0, 0, 0, 0],
      admin: [30, 0, 0, 0, 0],
    },
    benchmark: {
      multiplier: '3× above avg',
      metrics: [
        { label: 'Notes generated', doctorValue: 187, average: 62, doctorDisplay: '187', averageDisplay: '62' },
        { label: 'Transcription mins', doctorValue: 402, average: 180, doctorDisplay: '402m', averageDisplay: '180m' },
      ],
    },
    zScore: {
      value: '+2.1',
      initials: 'Dr C',
      markerX: 195,
      description: 'Dr Cornelissen sits at +2.1σ — significantly above average. Flags activate after day 30.',
    },
    cost: {
      month: 'June',
      internal: {
        lineItems: [
          { label: 'OpenAI tokens', value: 'R68' },
          { label: 'Deepgram audio', value: 'R31' },
          { label: 'Note generation', value: 'R24' },
        ],
        haloCost: 'R123',
        chargedToClient: 'R500',
        margin: 'R377',
        marginPct: '75%',
      },
      client: {
        features: [
          { label: 'Scribe', value: 'R300' },
          { label: 'Admin agent', value: 'R150' },
          { label: 'Billing agent', value: 'R100' },
        ],
        featureTotal: 'R550',
        usage: 'R84',
        total: 'R634',
      },
    },
  },
  {
    id: 'chetty',
    name: 'Prof Chetty ICU',
    kpis: {
      apiCalls: '3,210',
      apiTrend: '+5%',
      tokens: '1.8M',
      tokenTrend: '+14%',
      cost: 'R220',
      budget: 'R500',
      active: null,
      total: null,
      avgTokensPerNote: '1,830',
    },
    featureUsage: {
      all: [0, 68, 0, 0, 0],
      scribe: [0, 60, 0, 0, 0],
      labsRadiology: [0, 50, 0, 0, 0],
      billing: [0, 44, 0, 0, 0],
      admin: [0, 25, 0, 0, 0],
    },
    benchmark: {
      multiplier: '4× above avg',
      metrics: [
        { label: 'Notes generated', doctorValue: 241, average: 62, doctorDisplay: '241', averageDisplay: '62' },
        { label: 'Transcription mins', doctorValue: 520, average: 180, doctorDisplay: '520m', averageDisplay: '180m' },
      ],
    },
    zScore: {
      value: '+2.8',
      initials: 'ICU',
      markerX: 215,
      description: 'Prof Chetty ICU sits at +2.8σ — highest usage on the platform. Flags active.',
    },
    cost: {
      month: 'June',
      internal: {
        lineItems: [
          { label: 'OpenAI tokens', value: 'R88' },
          { label: 'Deepgram audio', value: 'R52' },
          { label: 'Note generation', value: 'R40' },
        ],
        haloCost: 'R180',
        chargedToClient: 'R500',
        margin: 'R320',
        marginPct: '64%',
      },
      client: {
        features: [
          { label: 'Scribe', value: 'R300' },
          { label: 'Admin agent', value: 'R150' },
          { label: 'Billing agent', value: 'R100' },
        ],
        featureTotal: 'R550',
        usage: 'R120',
        total: 'R670',
      },
    },
  },
  {
    id: 'karjieker',
    name: 'Dr Karjieker',
    kpis: {
      apiCalls: '1,940',
      apiTrend: '+3%',
      tokens: '980k',
      tokenTrend: '+6%',
      cost: 'R142',
      budget: 'R500',
      active: null,
      total: null,
      avgTokensPerNote: '1,830',
    },
    featureUsage: {
      all: [0, 0, 52, 0, 0],
      scribe: [0, 0, 45, 0, 0],
      labsRadiology: [0, 0, 22, 0, 0],
      billing: [0, 0, 33, 0, 0],
      admin: [0, 0, 18, 0, 0],
    },
    benchmark: {
      multiplier: '1.8× above avg',
      metrics: [
        { label: 'Notes generated', doctorValue: 112, average: 62, doctorDisplay: '112', averageDisplay: '62' },
        { label: 'Transcription mins', doctorValue: 290, average: 180, doctorDisplay: '290m', averageDisplay: '180m' },
      ],
    },
    zScore: {
      value: '+0.9',
      initials: 'Dr K',
      markerX: 148,
      description: 'Dr Karjieker sits at +0.9σ — slightly above average. Cold-start period active (day 11 of 30).',
    },
    cost: {
      month: 'June',
      internal: {
        lineItems: [
          { label: 'OpenAI tokens', value: 'R55' },
          { label: 'Deepgram audio', value: 'R28' },
          { label: 'Note generation', value: 'R19' },
        ],
        haloCost: 'R102',
        chargedToClient: 'R500',
        margin: 'R398',
        marginPct: '80%',
      },
      client: {
        features: [
          { label: 'Scribe', value: 'R300' },
          { label: 'Admin agent', value: 'R150' },
        ],
        featureTotal: 'R450',
        usage: 'R62',
        total: 'R512',
      },
    },
  },
  {
    id: 'vanwyk',
    name: 'Dr van Wyk',
    kpis: {
      apiCalls: '1,420',
      apiTrend: '-2%',
      tokens: '820k',
      tokenTrend: '-4%',
      cost: 'R110',
      budget: 'R500',
      active: null,
      total: null,
      avgTokensPerNote: '1,830',
    },
    featureUsage: {
      all: [0, 0, 0, 38, 0],
      scribe: [0, 0, 0, 30, 0],
      labsRadiology: [0, 0, 0, 18, 0],
      billing: [0, 0, 0, 22, 0],
      admin: [0, 0, 0, 12, 0],
    },
    benchmark: {
      multiplier: 'Near average',
      metrics: [
        { label: 'Notes generated', doctorValue: 71, average: 62, doctorDisplay: '71', averageDisplay: '62' },
        { label: 'Transcription mins', doctorValue: 195, average: 180, doctorDisplay: '195m', averageDisplay: '180m' },
      ],
    },
    zScore: {
      value: '+0.2',
      initials: 'Dr W',
      markerX: 120,
      description: 'Dr van Wyk sits at +0.2σ — right at the Halo average. Usage trending down slightly.',
    },
    cost: {
      month: 'June',
      internal: {
        lineItems: [
          { label: 'OpenAI tokens', value: 'R42' },
          { label: 'Deepgram audio', value: 'R18' },
          { label: 'Note generation', value: 'R14' },
        ],
        haloCost: 'R74',
        chargedToClient: 'R500',
        margin: 'R426',
        marginPct: '85%',
      },
      client: {
        features: [
          { label: 'Scribe', value: 'R300' },
          { label: 'Billing agent', value: 'R100' },
        ],
        featureTotal: 'R400',
        usage: 'R48',
        total: 'R448',
      },
    },
  },
  {
    id: 'naidoo',
    name: 'Dr Naidoo',
    kpis: {
      apiCalls: '1,180',
      apiTrend: '+1%',
      tokens: '620k',
      tokenTrend: '+2%',
      cost: 'R85',
      budget: 'R500',
      active: null,
      total: null,
      avgTokensPerNote: '1,830',
    },
    featureUsage: {
      all: [0, 0, 0, 0, 24],
      scribe: [0, 0, 0, 0, 18],
      labsRadiology: [0, 0, 0, 0, 10],
      billing: [0, 0, 0, 0, 11],
      admin: [0, 0, 0, 0, 8],
    },
    benchmark: {
      multiplier: 'Below average',
      metrics: [
        { label: 'Notes generated', doctorValue: 38, average: 62, doctorDisplay: '38', averageDisplay: '62' },
        { label: 'Transcription mins', doctorValue: 120, average: 180, doctorDisplay: '120m', averageDisplay: '180m' },
      ],
    },
    zScore: {
      value: '-0.8',
      initials: 'Dr N',
      markerX: 75,
      description: 'Dr Naidoo sits at -0.8σ — below average. May indicate low adoption or onboarding gap.',
    },
    cost: {
      month: 'June',
      internal: {
        lineItems: [
          { label: 'OpenAI tokens', value: 'R32' },
          { label: 'Deepgram audio', value: 'R12' },
          { label: 'Note generation', value: 'R10' },
        ],
        haloCost: 'R54',
        chargedToClient: 'R500',
        margin: 'R446',
        marginPct: '89%',
      },
      client: {
        features: [{ label: 'Scribe', value: 'R300' }],
        featureTotal: 'R300',
        usage: 'R28',
        total: 'R328',
      },
    },
  },
]

export const practiceNames = practices.map((p) => p.name)

export const featureKeys = {
  All: 'all',
  Scribe: 'scribe',
  'Labs & Radiology': 'labsRadiology',
  Billing: 'billing',
  Admin: 'admin',
}

export const practiceBarLabels = [
  'Dr Cornelissen',
  'Prof Chetty ICU',
  'Dr Karjieker',
  'Dr van Wyk',
  'Dr Naidoo',
]

export const zScoreTitle = 'Notes/month across all doctors'

export const benchmarkLegend = {
  doctor: 'This doctor',
  average: 'Halo average',
}

export const allPracticesInfoMessage =
  'Select a practice to see cost breakdown, benchmark, and Z-score'
export const activityFeed = [
  {
    dotColor: '#0D7A9A',
    title: 'Note — SOAP, post-op knee arthroscopy',
    practice: 'Dr Cornelissen',
    time: '2 mins ago',
    tokens: '1,840 tok',
    cost: 'R0.18',
    isError: false,
  },
  {
    dotColor: '#8B5CF6',
    title: 'Transcription · 4m 32s audio',
    practice: 'Prof Chetty ICU',
    time: '6 mins ago',
    tokens: 'Deepgram',
    cost: 'R0.09',
    isError: false,
  },
  {
    dotColor: '#F59E0B',
    title: 'Referral letter — Dr Muller, physio',
    practice: 'Dr Karjieker',
    time: '11 mins ago',
    tokens: '2,210 tok',
    cost: 'R0.22',
    isError: false,
  },
  {
    dotColor: '#EF4444',
    title: 'OpenAI timeout — note gen failed',
    practice: 'Dr Cornelissen',
    time: '18 mins ago',
    tokens: '—',
    cost: 'Error',
    isError: true,
  },
  {
    dotColor: '#22C55E',
    title: 'Discharge summary — appendectomy',
    practice: 'Dr Naidoo',
    time: '22 mins ago',
    tokens: '2,440 tok',
    cost: 'R0.24',
    isError: false,
  },
  {
    dotColor: '#0D7A9A',
    title: 'Inbox processed · 3 tasks created',
    practice: 'Dr Karjieker',
    time: '31 mins ago',
    tokens: '980 tok',
    cost: 'R0.10',
    isError: false,
  },
]

export const healthEndpoints = [
  {
    icon: 'brain',
    name: 'OpenAI',
    response: '142ms',
    status: 'healthy',
  },
  {
    icon: 'microphone',
    name: 'Deepgram',
    response: '88ms',
    status: 'healthy',
  },
  {
    icon: 'file-text',
    name: 'Note gen',
    response: '1.8s',
    status: 'degraded',
  },
  {
    icon: 'mail',
    name: 'Email agent',
    response: '205ms',
    status: 'healthy',
  },
]

export const weeklyStats = [
  { label: 'Uptime', value: '99.4%', danger: false },
  { label: 'Errors', value: '7 events', danger: true },
  { label: 'Avg response', value: '310ms', danger: false },
  { label: 'Peak load', value: 'Tue 09:30', danger: false },
]

export const practiceFilter = {
  defaultOption: 'All Practices',
  activeSummary: '7 of 9 active today',
}

export const coldStartPractices = [
  {
    practice: 'Dr Karjieker',
    daysCurrent: 11,
    daysTotal: 30,
    daysLeft: 19,
    footerText: 'Z-score, rule-based & LLM flags activate at day 30',
  },
]

export const driveSync = [
  { name: 'Google Workspace', queue: 'drive_sync_queue', pending: 4, status: 'Syncing' },
  { name: 'OneDrive', queue: 'drive_sync_queue', pending: 0, status: 'Clear' },
]

export const agentData = [
  {
    emoji: '🎙',
    name: 'Scribe',
    status: 'Healthy',
    stats: [
      { value: '94', label: 'Transcriptions today' },
      { value: '187', label: 'Notes generated' },
      { value: '1.4s', label: 'Avg pipeline latency' },
      { value: '6h 42m', label: 'Total audio processed' },
    ],
  },
  {
    emoji: '🧾',
    name: 'Billing',
    status: 'Review needed',
    stats: [
      { value: '98.2%', label: 'ICD-10 accuracy' },
      { value: '3', label: 'Flagged for review' },
      { value: '142', label: 'Billing runs today' },
      { value: 'NHA/SAMA', label: 'Tariff standard' },
    ],
  },
  {
    emoji: '📋',
    name: 'Admin',
    status: 'Healthy',
    stats: [
      { value: '31', label: 'Letters drafted' },
      { value: '58', label: 'Emails processed' },
      { value: '12', label: 'Tasks created' },
      { value: '100%', label: 'Routing accuracy' },
    ],
  },
]

export const scribePipeline = [
  { name: 'Whisper → LLM', value: '1.4s avg', status: 'Healthy', label: 'Under 2s' },
  { name: 'Peak latency', value: '1.9s', status: 'Warning', label: 'Near limit' },
]

export const featureFilters = ['All', 'Scribe', 'Labs & Radiology', 'Billing', 'Admin']

export const paymentProcessing = {
  label: 'Payment processing',
  provider: null,
  options: ['Peach Payments', 'Stitch'],
  status: 'TBC',
  display: '+ fees',
}
