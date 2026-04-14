export interface Problem {
  id: string;
  hmw: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  context: string;
  persona: {
    name: string;
    age: number;
    role: string;
    bio: string;
    goals: string[];
    frustrations: string[];
  };
  constraints: string[];
}

export const problems: Problem[] = [
  {
    id: "hc-001",
    hmw: "How might we reduce patient anxiety during telehealth consultations?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "Telehealth usage surged post-pandemic, but patients report feeling disconnected and anxious during virtual visits. Providers struggle to build rapport through a screen, leading to lower satisfaction scores and missed follow-ups.",
    persona: {
      name: "Maria Santos",
      age: 62,
      role: "Retired Teacher with Chronic Conditions",
      bio: "Maria manages diabetes and hypertension. She lives alone in a rural area and relies on telehealth for specialist visits. She's not tech-savvy and finds video calls stressful.",
      goals: ["Feel heard and understood by her doctor", "Easily navigate the telehealth platform", "Get clear post-visit instructions"],
      frustrations: ["Can't figure out how to share her screen", "Feels rushed during appointments", "Forgets what the doctor said after the call"]
    },
    constraints: ["Must comply with HIPAA regulations", "Solution must work on low-bandwidth connections", "Cannot require additional hardware purchases", "Must be accessible for users with low digital literacy"]
  },
  {
    id: "ft-001",
    hmw: "How might we help gig workers build emergency savings without feeling deprived?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "Over 60% of gig workers have less than $400 in emergency savings. Their irregular income makes traditional savings advice ineffective. Existing fintech solutions assume steady paychecks.",
    persona: {
      name: "Jaylen Brooks",
      age: 28,
      role: "Rideshare Driver & Freelance Photographer",
      bio: "Jaylen juggles two gig jobs. His income varies wildly week-to-week. He wants to save but every 'spare' dollar feels essential for next week's gas or rent.",
      goals: ["Build a $1,000 emergency fund", "Save without thinking about it", "See progress without anxiety"],
      frustrations: ["Savings apps assume biweekly paychecks", "Round-up features feel pointless on small transactions", "Guilt when he can't meet savings goals"]
    },
    constraints: ["Must handle variable income gracefully", "No minimum deposit requirements", "Must integrate with major gig platforms", "Cannot charge monthly subscription fees"]
  },
  {
    id: "ed-001",
    hmw: "How might we make online learning feel less isolating for adult learners?",
    category: "EdTech",
    difficulty: "Beginner",
    context: "Adult learners returning to education online report high dropout rates, citing loneliness and lack of accountability. Unlike traditional students, they can't form study groups organically.",
    persona: {
      name: "Priya Sharma",
      age: 35,
      role: "Working Mother Pursuing a Degree",
      bio: "Priya works full-time and studies at night after her kids go to bed. She's highly motivated but feels invisible in her online classes. She misses having classmates.",
      goals: ["Connect with peers in similar life stages", "Stay motivated through the semester", "Balance study time with family obligations"],
      frustrations: ["Discussion forums feel performative, not genuine", "Group projects assume everyone is available at the same time", "No one notices when she's struggling"]
    },
    constraints: ["Must work asynchronously", "Cannot require webcam or microphone", "Must respect time zone differences", "Privacy-first—no mandatory profile sharing"]
  },
  {
    id: "st-001",
    hmw: "How might we reduce food waste in university dining halls?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "University dining halls waste an average of 30% of prepared food daily. Students take more than they eat, and kitchens over-prepare to avoid shortages. Current waste tracking is manual and infrequent.",
    persona: {
      name: "Chef David Kim",
      age: 45,
      role: "Head of University Dining Services",
      bio: "David manages a team of 30 serving 5,000 meals daily across three dining halls. He cares about sustainability but is measured on student satisfaction, not waste reduction.",
      goals: ["Reduce waste by 50% within one year", "Maintain or improve student satisfaction", "Get actionable data, not just reports"],
      frustrations: ["Waste bins are mixed, making tracking hard", "Students complain if any item runs out", "Budget doesn't allow for smart kitchen equipment"]
    },
    constraints: ["Budget under $15,000 for implementation", "Must not slow down the serving line", "Solution must work across three different dining hall layouts", "Must produce reports for the sustainability office"]
  },
  {
    id: "ac-001",
    hmw: "How might we make public transit navigation accessible for visually impaired commuters?",
    category: "Accessibility",
    difficulty: "Advanced",
    context: "Visually impaired commuters rely on memorized routes and avoid unfamiliar transit systems. Existing navigation apps provide visual-first directions. Real-time disruptions (detours, elevator outages) create dangerous situations.",
    persona: {
      name: "Tomás Rivera",
      age: 31,
      role: "Software Engineer (Legally Blind)",
      bio: "Tomás has 10% vision and uses a white cane. He's tech-savvy and uses VoiceOver daily. He commutes by bus and subway but avoids new routes because wayfinding is exhausting and risky.",
      goals: ["Navigate new routes independently", "Get real-time alerts about accessibility disruptions", "Feel confident using unfamiliar transit systems"],
      frustrations: ["Map apps are useless without sight", "Audio announcements on trains are unreliable", "No way to know if an elevator is broken before arriving"]
    },
    constraints: ["Must work with screen readers (VoiceOver/TalkBack)", "Audio-first interface required", "Must integrate with real-time transit APIs", "Cannot rely on Bluetooth beacons (not available in most stations)"]
  },
  {
    id: "cx-001",
    hmw: "How might we reduce customer support ticket volume without sacrificing satisfaction?",
    category: "Customer Experience",
    difficulty: "Beginner",
    context: "A SaaS company receives 2,000+ support tickets monthly. 40% are repetitive questions covered in documentation. The support team is burned out, and response times have doubled in 6 months.",
    persona: {
      name: "Rachel Torres",
      age: 38,
      role: "VP of Customer Success",
      bio: "Rachel leads a team of 12 support agents. She knows documentation exists but customers don't use it. Her team is demoralized by answering the same questions daily. She needs a solution that doesn't feel like 'talk to a robot.'",
      goals: ["Reduce ticket volume by 40%", "Maintain CSAT score above 4.5/5", "Free up agents for complex, high-value interactions"],
      frustrations: ["Chatbots frustrated customers more than helped", "Knowledge base search is terrible", "Can't get engineering to prioritize UX fixes that would prevent tickets"]
    },
    constraints: ["Must integrate with existing Zendesk setup", "No increase in headcount budget", "Must show ROI within 3 months", "Cannot gate any features behind a chatbot"]
  },
  {
    id: "hr-001",
    hmw: "How might we make performance reviews feel like growth opportunities instead of judgments?",
    category: "HR Tech",
    difficulty: "Intermediate",
    context: "82% of employees say performance reviews are not useful. Managers dread writing them, employees dread reading them. The annual review cycle creates anxiety spikes and doesn't drive behavior change.",
    persona: {
      name: "Aisha Johnson",
      age: 42,
      role: "Engineering Manager (15 Direct Reports)",
      bio: "Aisha spends 3 weeks every quarter writing reviews. She cares about her team's growth but the review form forces her into rating boxes that don't capture nuance. Her best engineers get anxious despite strong performance.",
      goals: ["Give meaningful feedback efficiently", "Help reports see their growth trajectory", "Reduce review-related anxiety on the team"],
      frustrations: ["Rating scales create false precision", "No good way to capture 'trajectory' vs 'snapshot'", "Forced ranking pits teammates against each other"]
    },
    constraints: ["Must integrate with existing HRIS", "Cannot eliminate reviews entirely (legal/compliance)", "Must support both technical and non-technical roles", "Must be completable on mobile"]
  },
  {
    id: "rt-001",
    hmw: "How might we help small restaurants compete with delivery apps without losing their margins?",
    category: "Retail & Commerce",
    difficulty: "Advanced",
    context: "Delivery apps charge restaurants 15-30% commission. Small restaurants can't afford it but can't afford to not be listed. Direct ordering from restaurant websites has poor UX and low adoption.",
    persona: {
      name: "Sofia Nguyen",
      age: 50,
      role: "Owner of a Family Vietnamese Restaurant",
      bio: "Sofia's restaurant has been in the family for 20 years. She joined delivery apps during the pandemic and sales grew, but profits shrank. She tried building her own website but customers won't download another app.",
      goals: ["Keep delivery revenue without 30% commissions", "Build direct relationships with customers", "Compete with chains that have custom apps"],
      frustrations: ["Can't remove herself from delivery apps without losing customers", "Her website looks outdated", "No budget for a marketing team"]
    },
    constraints: ["Budget under $200/month for any solution", "Must not require customers to download an app", "Must handle payments securely", "Must work with existing POS system"]
  },
  {
    id: "cv-001",
    hmw: "How might we help remote teams maintain spontaneous collaboration without increasing meeting fatigue?",
    category: "Civic & Workplace",
    difficulty: "Beginner",
    context: "Remote teams miss 'watercooler moments' that spark innovation. Companies responded by adding more meetings, creating fatigue. Slack channels are too noisy. The spontaneity of in-person work is lost.",
    persona: {
      name: "Marcus Chen",
      age: 29,
      role: "Product Designer at a Fully Remote Startup",
      bio: "Marcus loves remote work but misses bumping into engineers and bouncing ideas. His calendar is packed with 'sync' meetings. He skips most Slack channels because the noise-to-signal ratio is terrible.",
      goals: ["Have more serendipitous conversations", "Fewer scheduled meetings", "Feel connected to teammates beyond his immediate team"],
      frustrations: ["'Virtual coffee' feels forced and awkward", "Too many Slack channels to monitor", "Never knows who's working on what across teams"]
    },
    constraints: ["Cannot add more scheduled meetings", "Must work across time zones (US, EU, Asia)", "Must not require always-on video/audio", "Must integrate with existing tools (Slack, Figma, Notion)"]
  },
  {
    id: "gm-001",
    hmw: "How might we encourage teens to develop financial literacy without it feeling like homework?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Only 17 US states require financial literacy courses. Teens learn about money from TikTok and peers. Existing financial education apps feel patronizing and lose engagement within a week.",
    persona: {
      name: "Zoe Williams",
      age: 16,
      role: "High School Junior with a Part-Time Job",
      bio: "Zoe earns $200/week at a frozen yogurt shop. She opened a bank account but doesn't really understand it. She's curious about investing because of TikTok but doesn't trust 'educational' apps that feel like school.",
      goals: ["Understand where her money goes", "Start investing small amounts", "Learn through doing, not reading"],
      frustrations: ["Financial apps use jargon she doesn't understand", "Parents give vague advice like 'just save'", "School doesn't teach anything practical about money"]
    },
    constraints: ["Must comply with COPPA for users under 18", "Cannot offer actual financial advice (regulatory)", "Must work without parental credit card", "Must feel like a social app, not a textbook"]
  }
];

export const categories = [...new Set(problems.map(p => p.category))];
export const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;
