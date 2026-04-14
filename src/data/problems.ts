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
  },
  {
    id: "hc-002",
    hmw: "How might we help chronic pain patients track symptoms without adding cognitive burden?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "Chronic pain patients often need to log symptoms daily, but existing tracking tools are tedious and worsen fatigue. Doctors need consistent data to adjust treatments effectively.",
    persona: {
      name: "Elena Vasquez",
      age: 45,
      role: "Chronic Pain Patient & Part-Time Bookkeeper",
      bio: "Elena has fibromyalgia and struggles with brain fog. She needs to track pain levels, sleep, and medication but forgets or finds it exhausting.",
      goals: ["Track symptoms with minimal effort", "Share accurate data with her rheumatologist", "Identify patterns in flare-ups"],
      frustrations: ["Apps require too many taps", "Forgets to log by end of day", "Data doesn't translate to actionable insights"]
    },
    constraints: ["Must not require more than 30 seconds per entry", "Must work offline", "Must export data in formats doctors can use", "Must be accessible during flare-ups"]
  },
  {
    id: "hc-003",
    hmw: "How might we reduce medication errors in home healthcare settings?",
    category: "Healthcare",
    difficulty: "Advanced",
    context: "Home healthcare aides administer medications to elderly patients with complex regimens. Errors occur due to similar-looking pills, schedule confusion, and lack of pharmacist oversight.",
    persona: {
      name: "Denise Washington",
      age: 52,
      role: "Home Healthcare Aide",
      bio: "Denise manages medications for 6 elderly patients across different homes. She's experienced but overwhelmed by the complexity of overlapping schedules and drug interactions.",
      goals: ["Never make a medication error", "Quickly verify she has the right medication", "Alert families about potential issues"],
      frustrations: ["Paper medication lists are often outdated", "Can't pronounce or distinguish similar drug names", "No way to check interactions in real-time"]
    },
    constraints: ["Must work without internet in rural areas", "Must comply with state healthcare regulations", "Cannot replace pharmacist consultation", "Must support multiple languages"]
  },
  {
    id: "hc-004",
    hmw: "How might we improve mental health screening in primary care without stigmatizing patients?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "Only 50% of patients with depression are diagnosed in primary care. Doctors lack time for thorough mental health assessments, and patients often hide symptoms due to stigma.",
    persona: {
      name: "Dr. James Park",
      age: 39,
      role: "Family Medicine Physician",
      bio: "Dr. Park sees 30 patients daily and wants to screen for mental health issues but has only 15 minutes per visit. He worries about missing signs of depression and anxiety.",
      goals: ["Screen all patients efficiently", "Create a safe space for disclosure", "Connect patients to resources seamlessly"],
      frustrations: ["Standard questionnaires feel clinical and cold", "Patients lie on paper forms", "No time to follow up on positive screens"]
    },
    constraints: ["Must fit within a 15-minute visit", "Must comply with PHQ-9 standards", "Must not feel like a 'mental health test'", "Must integrate with EHR systems"]
  },
  {
    id: "hc-005",
    hmw: "How might we help new parents navigate infant feeding decisions without judgment?",
    category: "Healthcare",
    difficulty: "Beginner",
    context: "New parents face enormous pressure around breastfeeding vs. formula feeding. Online communities are polarized, and pediatricians have limited time to address concerns.",
    persona: {
      name: "Taylor Kim-Anderson",
      age: 30,
      role: "First-Time Parent on Parental Leave",
      bio: "Taylor is struggling with breastfeeding and feels guilty about considering formula. They need evidence-based information without the 'mom guilt' that pervades online forums.",
      goals: ["Make an informed feeding decision", "Feel supported regardless of choice", "Track baby's growth and feeding patterns"],
      frustrations: ["Every online source has an agenda", "Pediatrician appointments are too short", "Partner doesn't understand the emotional weight"]
    },
    constraints: ["Must present evidence-based information neutrally", "Must not promote any single feeding method", "Must be inclusive of all family structures", "Must comply with FDA guidelines on infant nutrition claims"]
  },
  {
    id: "hc-006",
    hmw: "How might we reduce emergency room overcrowding for non-urgent cases?",
    category: "Healthcare",
    difficulty: "Advanced",
    context: "40% of ER visits are for non-emergency conditions. Patients go to the ER because they don't know where else to go after hours, or they distrust urgent care quality.",
    persona: {
      name: "Nurse Patricia Okafor",
      age: 48,
      role: "ER Triage Nurse",
      bio: "Patricia has worked ER triage for 20 years. She watches critical patients wait while non-urgent cases fill beds. She's compassionate but exhausted by the systemic failure.",
      goals: ["Redirect non-urgent cases before they arrive", "Ensure redirected patients get proper care", "Reduce wait times for true emergencies"],
      frustrations: ["Can't turn anyone away legally", "Patients don't trust urgent care centers", "No system to track what happens after redirection"]
    },
    constraints: ["Must not deny care to anyone", "Must comply with EMTALA regulations", "Must work for uninsured patients", "Must account for health literacy disparities"]
  },
  {
    id: "hc-007",
    hmw: "How might we support caregivers of dementia patients in managing daily routines?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "Family caregivers of dementia patients spend an average of 21 hours per week on caregiving. They lack training, experience burnout, and struggle with unpredictable behavior changes.",
    persona: {
      name: "Robert Chen",
      age: 58,
      role: "Son & Primary Caregiver for Mother with Alzheimer's",
      bio: "Robert quit his job to care for his mother full-time. He has no medical training and relies on YouTube videos. He's isolated and rarely gets a full night's sleep.",
      goals: ["Create predictable daily routines", "Manage behavioral episodes calmly", "Find respite care when he needs a break"],
      frustrations: ["Every day is different and unpredictable", "Medical jargon in caregiving guides", "Guilt about needing help"]
    },
    constraints: ["Must work for non-medical caregivers", "Must be usable during high-stress moments", "Must connect to local support resources", "Must respect patient dignity and privacy"]
  },
  {
    id: "hc-008",
    hmw: "How might we make clinical trial participation more accessible to underrepresented populations?",
    category: "Healthcare",
    difficulty: "Advanced",
    context: "Clinical trials lack diversity\u201480% of participants are white. Underrepresented groups face barriers including distrust, transportation, and complex eligibility criteria.",
    persona: {
      name: "Dr. Amara Osei",
      age: 44,
      role: "Clinical Research Coordinator",
      bio: "Dr. Osei runs oncology trials and struggles to recruit diverse participants. She understands historical distrust but needs solutions beyond 'more outreach.'",
      goals: ["Increase minority enrollment by 40%", "Build genuine trust with communities", "Simplify the enrollment process"],
      frustrations: ["Eligibility criteria exclude too many people", "Trial sites are in affluent areas only", "Informed consent documents are at a college reading level"]
    },
    constraints: ["Must address historical medical mistrust", "Must comply with IRB protocols", "Must not exploit vulnerable populations", "Must provide equitable compensation for participation"]
  },
  {
    id: "ft-002",
    hmw: "How might we help recent immigrants build credit history in a new country?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "Immigrants arrive with no credit history, making it impossible to rent apartments, get car loans, or even open phone plans. Traditional credit scoring ignores international financial behavior.",
    persona: {
      name: "Fatima Al-Rashid",
      age: 33,
      role: "Software Developer Recently Immigrated from Jordan",
      bio: "Fatima has excellent financial habits and a stable job but can't get a credit card in the US. She's frustrated that 10 years of responsible banking in Jordan means nothing here.",
      goals: ["Build US credit score to 700+ within a year", "Qualify for an apartment lease without a cosigner", "Understand the US credit system"],
      frustrations: ["Secured credit cards require large deposits", "No one explains how credit scoring actually works", "Feels discriminated against despite being financially responsible"]
    },
    constraints: ["Must comply with Fair Credit Reporting Act", "Must not require a Social Security Number initially", "Must work across different immigration statuses", "Cannot make lending decisions based on country of origin"]
  },
  {
    id: "ft-003",
    hmw: "How might we make investment portfolios understandable for first-time investors?",
    category: "FinTech",
    difficulty: "Beginner",
    context: "72% of first-time investors don't understand their portfolio allocation. They invest based on app recommendations without comprehending risk, leading to panic selling during downturns.",
    persona: {
      name: "DeShawn Mitchell",
      age: 24,
      role: "Recent College Graduate Starting First Job",
      bio: "DeShawn's employer offers a 401k match but he doesn't understand the fund options. He put everything in a target-date fund because it was the default but has no idea what that means.",
      goals: ["Understand what he's investing in", "Feel confident during market drops", "Maximize his employer match"],
      frustrations: ["Financial jargon is intimidating", "YouTube 'finance bros' give conflicting advice", "HR just handed him a packet of forms"]
    },
    constraints: ["Must not constitute financial advice", "Must explain concepts at an 8th-grade reading level", "Must work within existing brokerage platforms", "Must not gamify investing in addictive ways"]
  },
  {
    id: "ft-004",
    hmw: "How might we help freelancers manage quarterly tax payments without surprises?",
    category: "FinTech",
    difficulty: "Intermediate",
    context: "Freelancers owe quarterly estimated taxes but most don't set money aside consistently. This leads to large unexpected bills, penalties, and tax debt that spirals quickly.",
    persona: {
      name: "Carla Mendez",
      age: 37,
      role: "Freelance Graphic Designer",
      bio: "Carla earns between $3K-$8K per month and dreads tax season. She was hit with a $4,000 penalty last year for underpaying quarterly estimates. She doesn't have an accountant.",
      goals: ["Never get a surprise tax bill again", "Automatically set aside the right amount", "File quarterly estimates without stress"],
      frustrations: ["Income varies too much to calculate percentages", "IRS forms are incomprehensible", "Accounting software is designed for businesses, not individuals"]
    },
    constraints: ["Must handle variable income accurately", "Must integrate with major banks", "Must comply with IRS estimated tax rules", "Must be affordable for solo freelancers"]
  },
  {
    id: "ft-005",
    hmw: "How might we reduce financial anxiety for couples merging finances?",
    category: "FinTech",
    difficulty: "Beginner",
    context: "Money is the #1 cause of relationship stress. Couples struggle with different spending habits, debt disclosure, and deciding between joint vs. separate accounts.",
    persona: {
      name: "Alex & Jordan Rivera",
      age: 29,
      role: "Newly Married Couple with Different Financial Backgrounds",
      bio: "Alex is a saver with no debt; Jordan has $45K in student loans. They fight about money weekly and avoid the topic until it explodes. They need a neutral space to plan together.",
      goals: ["Create a shared budget without fighting", "Pay off Jordan's debt while still enjoying life", "Save for a house down payment"],
      frustrations: ["Budget apps assume one user, not two", "No way to set shared goals with individual spending freedom", "Conversations about money always turn into arguments"]
    },
    constraints: ["Must support two users with different financial views", "Must maintain individual privacy for personal spending", "Must not require linking all accounts", "Must be culturally sensitive about money taboos"]
  },
  {
    id: "ft-006",
    hmw: "How might we protect elderly users from financial scams without restricting their independence?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "Seniors lose $3B annually to financial scams. Family members want to help monitor accounts but elders resist losing financial autonomy. Banks detect fraud too late.",
    persona: {
      name: "Margaret Wilson",
      age: 76,
      role: "Retired Principal Living Independently",
      bio: "Margaret is sharp and independent but recently fell for a phone scam that cost her $2,000. Her son wants access to her accounts but she refuses\u2014she doesn't want to be treated like a child.",
      goals: ["Stay financially independent", "Have a safety net for suspicious transactions", "Learn to identify scams without feeling patronized"],
      frustrations: ["Fraud alerts are confusing and she ignores them", "Son's concern feels controlling", "Bank's response was 'you authorized the transaction'"]
    },
    constraints: ["Must preserve user autonomy and dignity", "Must comply with elder financial protection laws", "Must not share information without explicit consent", "Must work with traditional banking systems"]
  },
  {
    id: "ft-007",
    hmw: "How might we help small business owners access microloans without predatory terms?",
    category: "FinTech",
    difficulty: "Intermediate",
    context: "Small business owners in underserved communities turn to predatory lenders because traditional banks reject them. APRs can exceed 400% on some microloans.",
    persona: {
      name: "Luis Herrera",
      age: 41,
      role: "Owner of a Small Auto Repair Shop",
      bio: "Luis needs $5,000 to buy diagnostic equipment. His bank denied him due to thin credit. Online lenders approved him instantly but at 36% APR. He doesn't know what alternatives exist.",
      goals: ["Get a fair loan under 10% APR", "Build business credit history", "Expand his shop within 2 years"],
      frustrations: ["Banks require 2+ years of tax returns he doesn't have properly filed", "Can't tell which online lenders are legitimate", "Feels trapped between no funding and bad funding"]
    },
    constraints: ["Must comply with Truth in Lending Act", "Must clearly display total cost of borrowing", "Must not require perfect credit scores", "Must provide financial education alongside lending"]
  },
  {
    id: "ft-008",
    hmw: "How might we make cross-border remittances faster and cheaper for migrant workers?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "Migrant workers send $700B in remittances annually, losing 6-9% to fees. Transfers take 3-5 days. Families in developing countries depend on this money for daily survival.",
    persona: {
      name: "Emmanuel Okoro",
      age: 35,
      role: "Construction Worker Sending Money to Nigeria",
      bio: "Emmanuel sends $500 monthly to his family in Lagos. Between fees and exchange rate markups, they receive about $440. He uses Western Union because it's the only brand his mother trusts.",
      goals: ["Send more of his earnings home", "Ensure money arrives same-day", "Help his mother receive money without traveling to a pickup location"],
      frustrations: ["Hidden fees in exchange rates", "Mother doesn't have a bank account", "Cheaper apps aren't available in his mother's region"]
    },
    constraints: ["Must work in regions with limited banking infrastructure", "Must comply with international anti-money laundering laws", "Must support mobile money systems", "Must handle multiple currencies accurately"]
  },
  {
    id: "ed-002",
    hmw: "How might we help students with ADHD manage long-term assignments without last-minute panic?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Students with ADHD struggle with time blindness and task initiation. They understand deadlines intellectually but can't break large projects into manageable steps without support.",
    persona: {
      name: "Jake Morrison",
      age: 20,
      role: "College Sophomore with ADHD",
      bio: "Jake is intelligent but has failed two classes due to incomplete term papers. He starts strong but loses momentum. By the time panic sets in, it's too late to do quality work.",
      goals: ["Break projects into daily micro-tasks", "Get reminders that actually work for his brain", "Feel accomplished instead of ashamed"],
      frustrations: ["Calendar reminders are easy to dismiss", "To-do apps assume neurotypical executive function", "Professors don't understand why he can't 'just start earlier'"]
    },
    constraints: ["Must account for ADHD-specific executive function challenges", "Must not be patronizing or overly rigid", "Must integrate with university LMS systems", "Must work without requiring a diagnosis disclosure"]
  },
  {
    id: "ed-003",
    hmw: "How might we make coding bootcamps more effective for career changers over 40?",
    category: "EdTech",
    difficulty: "Beginner",
    context: "Career changers over 40 enroll in coding bootcamps but drop out at twice the rate of younger students. The pace, culture, and teaching methods assume young digital natives.",
    persona: {
      name: "Sandra Petrov",
      age: 47,
      role: "Former Accountant Transitioning to Web Development",
      bio: "Sandra enrolled in a 12-week bootcamp after being laid off. She's a fast learner but feels out of place among 22-year-olds. The instructor moves too fast and uses slang she doesn't know.",
      goals: ["Complete the bootcamp and get hired", "Learn at her own pace without falling behind", "Connect with peers in her age group"],
      frustrations: ["Asking questions makes her feel old", "Examples reference apps and games she's never used", "No accommodations for different learning speeds"]
    },
    constraints: ["Must not assume prior tech culture knowledge", "Must provide multiple learning pace options", "Must connect to age-appropriate job placement", "Must be respectful of diverse life experiences"]
  },
  {
    id: "ed-004",
    hmw: "How might we help parents support their children's math learning without recreating school at home?",
    category: "EdTech",
    difficulty: "Beginner",
    context: "Parents want to help with math but teaching methods have changed since they were students. Homework help often devolves into frustration and tears for both parent and child.",
    persona: {
      name: "Michael Torres",
      age: 38,
      role: "Father of Two Elementary School Children",
      bio: "Michael's daughter brings home 'new math' homework he doesn't understand. When he teaches her 'his way,' she gets confused. He feels useless and she cries.",
      goals: ["Understand current math teaching methods", "Help without creating confusion", "Make math feel fun, not stressful"],
      frustrations: ["School doesn't explain the methods to parents", "YouTube tutorials are hit-or-miss", "Tutoring is expensive"]
    },
    constraints: ["Must align with Common Core and state standards", "Must be understandable by adults unfamiliar with current methods", "Must be free or very low cost", "Must work for grades K-6"]
  },
  {
    id: "ed-005",
    hmw: "How might we reduce academic dishonesty in online exams without invasive proctoring?",
    category: "EdTech",
    difficulty: "Advanced",
    context: "Online exam proctoring software monitors students' faces, screens, and rooms. Students report anxiety, privacy violations, and false flags. Yet without proctoring, cheating rates triple.",
    persona: {
      name: "Dr. Lisa Nakamura",
      age: 51,
      role: "Professor of Organic Chemistry",
      bio: "Dr. Nakamura teaches 400 students and moved exams online. Proctoring software flagged a student for 'suspicious eye movement' who was actually reading the question. She wants integrity without surveillance.",
      goals: ["Maintain exam integrity fairly", "Reduce student anxiety during exams", "Spend less time on academic integrity cases"],
      frustrations: ["Proctoring software is biased against students of color", "Open-book exams don't work for her subject", "Creating 400 unique exam versions is impossible"]
    },
    constraints: ["Must not use facial recognition or biometrics", "Must comply with FERPA and disability accommodations", "Must work across different devices and internet speeds", "Must not disproportionately impact any demographic group"]
  },
  {
    id: "ed-006",
    hmw: "How might we help teachers create inclusive lesson plans without spending extra hours?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Teachers want to differentiate instruction for diverse learners but lack time. Creating modified materials for gifted, struggling, and ESL students triples preparation work.",
    persona: {
      name: "Ms. Keisha Williams",
      age: 34,
      role: "5th Grade Teacher at a Title I School",
      bio: "Keisha's class includes students reading at 2nd-grade through 8th-grade levels. She spends evenings and weekends modifying lessons. She loves teaching but is burning out.",
      goals: ["Create differentiated materials in half the time", "Ensure all students access grade-level content", "Reclaim personal time without sacrificing quality"],
      frustrations: ["Pre-made resources don't match her curriculum", "Admin wants differentiation but doesn't provide planning time", "Technology tools require too much setup"]
    },
    constraints: ["Must align with state curriculum standards", "Must support English Language Learners", "Must require minimal training to use", "Must work with existing classroom technology"]
  },
  {
    id: "ed-007",
    hmw: "How might we make vocational training more appealing to high school students?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Vocational programs have a stigma problem\u2014students and parents see them as 'lesser.' Meanwhile, skilled trades have labor shortages and offer salaries exceeding many college-degree careers.",
    persona: {
      name: "Coach Ray Dimitri",
      age: 55,
      role: "High School Career Counselor",
      bio: "Ray has watched hundreds of students take on college debt for degrees they never use while his welding program goes empty. Parents pressure kids into college regardless of fit.",
      goals: ["Change perception of vocational careers", "Help students explore trades without commitment", "Show earning potential data to parents"],
      frustrations: ["'College for all' culture dominates his school", "Students interested in trades feel embarrassed", "No way to give students hands-on experience safely"]
    },
    constraints: ["Must not disparage college education", "Must include real salary and job placement data", "Must be parent-facing as well as student-facing", "Must comply with school district technology policies"]
  },
  {
    id: "ed-008",
    hmw: "How might we support neurodivergent students during the transition from high school to college?",
    category: "EdTech",
    difficulty: "Advanced",
    context: "Students with autism, ADHD, and learning disabilities lose their IEP accommodations when entering college. They must self-advocate in a system they don't understand, leading to high dropout rates.",
    persona: {
      name: "Maya Johansson",
      age: 18,
      role: "Incoming College Freshman with Autism Spectrum Disorder",
      bio: "Maya thrived in high school with an IEP and dedicated support team. She's terrified of college where she must register with disability services herself, explain her needs to each professor, and manage her own schedule.",
      goals: ["Successfully register for accommodations independently", "Build self-advocacy skills gradually", "Find a supportive community on campus"],
      frustrations: ["College disability services website is confusing", "Doesn't know what accommodations to request", "Feels like she's starting over from scratch"]
    },
    constraints: ["Must respect student autonomy and self-determination", "Must comply with ADA and Section 504", "Must not require disability disclosure to peers", "Must bridge the gap between K-12 and higher education systems"]
  },
  {
    id: "st-002",
    hmw: "How might we help apartment dwellers compost without odor or pests?",
    category: "Sustainability",
    difficulty: "Beginner",
    context: "70% of food waste goes to landfills from urban apartments. Composting solutions exist for houses with yards, but apartment residents face space, odor, and pest constraints.",
    persona: {
      name: "Yuki Tanaka",
      age: 27,
      role: "Sustainability-Minded Studio Apartment Resident",
      bio: "Yuki wants to compost but her 400 sq ft studio has no outdoor space. Her previous attempt attracted fruit flies and her roommate complained about the smell.",
      goals: ["Compost food scraps without odor", "Fit the solution in a small kitchen", "Actually use or donate the finished compost"],
      frustrations: ["Countertop composters are expensive and noisy", "Community gardens are a 30-minute bus ride", "Freezing scraps takes up all her freezer space"]
    },
    constraints: ["Must fit in spaces under 500 sq ft", "Must not produce noticeable odor", "Must cost under $50 to start", "Must not require daily maintenance"]
  },
  {
    id: "st-003",
    hmw: "How might we encourage fast fashion consumers to extend the life of their clothing?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "The average garment is worn only 7 times before being discarded. Fast fashion makes clothes disposable. Repair and alteration skills have disappeared from most households.",
    persona: {
      name: "Brianna Cole",
      age: 22,
      role: "College Student and Social Media Fashion Enthusiast",
      bio: "Brianna buys new outfits for every event and posts them on Instagram. She knows fast fashion is bad but secondhand shopping takes too long and she doesn't know how to mend clothes.",
      goals: ["Look stylish without constant new purchases", "Learn basic clothing repair", "Feel good about her fashion choices socially"],
      frustrations: ["Thrift stores are overwhelming and time-consuming", "Sustainable brands are unaffordable", "Her social circle judges outfit repeats"]
    },
    constraints: ["Must not shame consumers for past behavior", "Must work within existing social media culture", "Must make sustainable choices feel aspirational, not sacrificial", "Must be accessible across income levels"]
  },
  {
    id: "st-004",
    hmw: "How might we help small farms reduce water usage without reducing crop yield?",
    category: "Sustainability",
    difficulty: "Advanced",
    context: "Agriculture uses 70% of global freshwater. Small farms lack access to precision irrigation technology that large agribusinesses use. Climate change is making water scarcity worse.",
    persona: {
      name: "Maria Gonzales",
      age: 55,
      role: "Small Farm Owner Growing Vegetables",
      bio: "Maria runs a 20-acre vegetable farm that's been in her family for generations. Droughts have intensified and her water bill has tripled. She can't afford the smart irrigation systems she reads about.",
      goals: ["Reduce water usage by 30%", "Maintain current crop yields", "Afford whatever solution she implements"],
      frustrations: ["Precision ag tech costs more than her annual profit", "Government subsidies favor large operations", "Extension services give generic advice"]
    },
    constraints: ["Budget under $5,000 for implementation", "Must work with existing irrigation infrastructure", "Must not require technical expertise to operate", "Must account for varying soil types and crops"]
  },
  {
    id: "st-005",
    hmw: "How might we make carbon footprint tracking meaningful instead of guilt-inducing?",
    category: "Sustainability",
    difficulty: "Beginner",
    context: "Carbon footprint calculators tell people their impact but offer no actionable, personalized next steps. Users feel guilty and overwhelmed, then disengage entirely.",
    persona: {
      name: "Ryan O'Brien",
      age: 34,
      role: "Middle Manager Wanting to Live More Sustainably",
      bio: "Ryan calculated his carbon footprint and learned he produces 16 tons of CO2 annually. The recommendation was to 'stop flying,' but his job requires travel. He felt hopeless and deleted the app.",
      goals: ["Take meaningful climate action within his actual lifestyle", "See tangible impact of his changes", "Not feel like a hypocrite for imperfect choices"],
      frustrations: ["All-or-nothing sustainability messaging", "Can't tell which actions actually matter most", "Calculators don't account for constraints like job requirements"]
    },
    constraints: ["Must provide personalized, actionable recommendations", "Must account for real-world lifestyle constraints", "Must show impact in tangible, relatable units", "Must not use shame as a motivator"]
  },
  {
    id: "st-006",
    hmw: "How might we reduce single-use packaging in food delivery without compromising hygiene?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "Food delivery generates 2 billion containers annually in the US alone. Reusable container programs exist but face logistics, hygiene perception, and participation challenges.",
    persona: {
      name: "Diana Cho",
      age: 40,
      role: "Restaurant Owner Concerned About Waste",
      bio: "Diana's Korean restaurant does 200 delivery orders daily. She hates the mountain of plastic containers but reusable systems she's seen add cost and complexity. Customers worry about hygiene.",
      goals: ["Eliminate 80% of single-use packaging", "Maintain food safety and quality", "Not increase delivery costs for customers"],
      frustrations: ["Biodegradable containers leak and don't hold up", "Return logistics for reusables are a nightmare", "Customers won't pay a deposit for containers"]
    },
    constraints: ["Must maintain food safety standards", "Must not significantly increase costs", "Must work with existing delivery platforms", "Must handle return logistics efficiently"]
  },
  {
    id: "st-007",
    hmw: "How might we help cities manage e-waste from rapidly cycling consumer electronics?",
    category: "Sustainability",
    difficulty: "Advanced",
    context: "E-waste is the fastest-growing waste stream globally. Most consumers don't know how to properly dispose of old electronics, and recycling infrastructure is fragmented.",
    persona: {
      name: "Council Member Patricia Wu",
      age: 49,
      role: "City Sustainability Committee Chair",
      bio: "Patricia's city collects 500 tons of e-waste annually but only properly recycles 20%. Drop-off events happen quarterly and most residents don't know about them.",
      goals: ["Increase e-waste recycling rate to 60%", "Make disposal convenient for all neighborhoods", "Recover valuable materials for the local economy"],
      frustrations: ["Residents throw electronics in regular trash", "Private recyclers cherry-pick profitable items", "No year-round convenient collection infrastructure"]
    },
    constraints: ["Budget limited to existing waste management budget", "Must serve all neighborhoods equitably", "Must comply with EPA e-waste regulations", "Must handle data security on discarded devices"]
  },
  {
    id: "ac-002",
    hmw: "How might we make grocery shopping more independent for wheelchair users?",
    category: "Accessibility",
    difficulty: "Intermediate",
    context: "Grocery stores are designed for standing adults. Wheelchair users can't reach top shelves, read high signage, or navigate narrow aisles. They depend on unreliable store assistance.",
    persona: {
      name: "Chris Baldwin",
      age: 36,
      role: "Paraplegic Marketing Professional",
      bio: "Chris uses a power wheelchair and shops weekly. He can only reach items on the bottom two shelves and must wait 10-20 minutes for staff help. It makes a simple errand feel humiliating.",
      goals: ["Shop independently like everyone else", "Access any product in the store", "Complete grocery trips in under an hour"],
      frustrations: ["Store assistants are always busy", "Online grocery doesn't let him pick his own produce", "Self-checkout screens are too high"]
    },
    constraints: ["Must work within existing store layouts", "Must not require store renovation", "Must preserve dignity and independence", "Must be scalable across different store chains"]
  },
  {
    id: "ac-003",
    hmw: "How might we make live events accessible for deaf attendees beyond basic captioning?",
    category: "Accessibility",
    difficulty: "Advanced",
    context: "Deaf attendees at concerts, conferences, and sports events miss ambient sounds, crowd reactions, and side commentary that create the full experience. Captioning only covers speech.",
    persona: {
      name: "Leah Washington",
      age: 28,
      role: "Deaf UX Researcher and Music Lover",
      bio: "Leah was born deaf and communicates via ASL. She attends concerts for the visual spectacle and vibrations but misses the nuances. Conference networking is nearly impossible in noisy rooms.",
      goals: ["Experience live events fully, not partially", "Network at conferences without an interpreter", "Access real-time information about ambient sounds"],
      frustrations: ["Interpreters block her view at concerts", "Captioning has a 5-second delay", "Other attendees don't know how to communicate with her"]
    },
    constraints: ["Must go beyond speech-to-text captioning", "Must work in loud, crowded environments", "Must not require event organizers to buy expensive equipment", "Must respect Deaf culture and preferences"]
  },
  {
    id: "ac-004",
    hmw: "How might we make digital banking accessible for users with cognitive disabilities?",
    category: "Accessibility",
    difficulty: "Intermediate",
    context: "People with cognitive disabilities struggle with complex banking interfaces. Fraud protection questions, transfer workflows, and financial jargon create barriers to financial independence.",
    persona: {
      name: "Danny Kowalski",
      age: 25,
      role: "Young Adult with Down Syndrome Working Part-Time",
      bio: "Danny works at a grocery store and earns his own paycheck. He wants to manage his money independently but his banking app is confusing. His parents help but he wants autonomy.",
      goals: ["Check his balance and pay bills independently", "Understand where his money goes", "Save for things he wants"],
      frustrations: ["Too many options and menus in banking apps", "Security questions he can't remember", "Can't tell if something is a scam"]
    },
    constraints: ["Must comply with WCAG 2.1 AAA guidelines", "Must support guardian oversight without removing autonomy", "Must use plain language throughout", "Must include visual supports and simplified workflows"]
  },
  {
    id: "ac-005",
    hmw: "How might we help colorblind users navigate data visualizations effectively?",
    category: "Accessibility",
    difficulty: "Beginner",
    context: "8% of men are colorblind but most dashboards and charts rely on color to convey meaning. Colorblind-friendly palettes exist but are rarely implemented, and they don't solve all chart types.",
    persona: {
      name: "Henrik Larsson",
      age: 42,
      role: "Financial Analyst with Deuteranopia",
      bio: "Henrik reviews financial dashboards daily but can't distinguish red from green\u2014the most common colors used for profit/loss. He's embarrassed to keep asking colleagues what colors mean.",
      goals: ["Read any chart without asking for help", "Customize visualizations to his needs", "Not have to disclose his condition to every new team"],
      frustrations: ["'Colorblind mode' is usually an afterthought toggle that barely helps", "Pie charts are his worst nightmare", "Presentations at meetings are impossible to follow"]
    },
    constraints: ["Must work with existing BI tools like Tableau and Power BI", "Must support multiple types of color vision deficiency", "Must not require redesigning existing charts", "Must provide real-time assistance"]
  },
  {
    id: "ac-006",
    hmw: "How might we make emergency alert systems accessible for people with sensory disabilities?",
    category: "Accessibility",
    difficulty: "Advanced",
    context: "Emergency alerts rely on sirens (deaf people can't hear them) and flashing lights (blind people can't see them). During disasters, the most vulnerable are the last to know.",
    persona: {
      name: "Grace Okonkwo",
      age: 53,
      role: "Emergency Management Director for a Mid-Size City",
      bio: "Grace's city has 15,000 residents with hearing or vision impairments. During a recent tornado warning, many didn't receive the alert in time. She needs a multi-modal system that reaches everyone.",
      goals: ["Achieve 100% alert reach within 2 minutes", "Support multiple sensory channels", "Integrate with existing emergency infrastructure"],
      frustrations: ["ADA compliance is minimum bar, not enough for emergencies", "No budget for specialized devices for every resident", "Can't test alert systems without causing public panic"]
    },
    constraints: ["Must work during power outages", "Must not rely on a single sensory channel", "Must comply with ADA and FCC regulations", "Must reach people who aren't registered in any system"]
  },
  {
    id: "cx-002",
    hmw: "How might we reduce customer churn during the onboarding phase of a SaaS product?",
    category: "Customer Experience",
    difficulty: "Intermediate",
    context: "40% of SaaS users who sign up never complete onboarding. Product tours are skipped, and users who don't reach the 'aha moment' within 48 hours rarely return.",
    persona: {
      name: "Nina Patel",
      age: 36,
      role: "Head of Product at a B2B SaaS Startup",
      bio: "Nina's product has strong retention after 30 days but loses 40% of users in the first week. Her team built a 12-step onboarding wizard but analytics show most users drop off at step 3.",
      goals: ["Get 80% of signups to the 'aha moment'", "Reduce time-to-value below 10 minutes", "Identify at-risk users before they churn"],
      frustrations: ["Users skip the product tour immediately", "Can't tell if users are confused or uninterested", "Sales team blames product; product team blames sales"]
    },
    constraints: ["Must not add friction to the signup flow", "Must work for both self-serve and sales-led users", "Must integrate with existing analytics stack", "Must personalize based on user role"]
  },
  {
    id: "cx-003",
    hmw: "How might we make return policies feel fair to both customers and retailers?",
    category: "Customer Experience",
    difficulty: "Beginner",
    context: "Generous return policies drive sales but also fraud. Restrictive policies lose customers. Retailers struggle to find the balance, and customers feel punished for legitimate returns.",
    persona: {
      name: "Jennifer Liu",
      age: 44,
      role: "VP of E-Commerce at a Fashion Retailer",
      bio: "Jennifer's company loses $2M annually to return fraud but their liberal return policy drives 30% of sales. When they tightened the policy, customer complaints tripled.",
      goals: ["Reduce fraudulent returns by 50%", "Maintain customer satisfaction with returns", "Make the return process painless for legitimate customers"],
      frustrations: ["Can't distinguish legitimate returns from wardrobing", "Return shipping costs eat into margins", "Competitors offer free returns so she can't eliminate them"]
    },
    constraints: ["Must not penalize legitimate customers", "Must comply with consumer protection laws", "Must work across online and in-store channels", "Must not require excessive documentation from customers"]
  },
  {
    id: "cx-004",
    hmw: "How might we help customer service teams handle emotionally charged interactions without burnout?",
    category: "Customer Experience",
    difficulty: "Intermediate",
    context: "Customer service agents handle 40-50 calls daily, many involving angry or distressed customers. Emotional labor leads to 45% annual turnover and declining service quality.",
    persona: {
      name: "Marcus Bennett",
      age: 31,
      role: "Customer Service Team Lead at an Insurance Company",
      bio: "Marcus manages 15 agents who handle claims for natural disasters. His team hears devastating stories daily. Three agents quit last month citing emotional exhaustion. Marcus himself is considering leaving.",
      goals: ["Reduce agent burnout and turnover", "Maintain empathetic service quality", "Give agents tools to manage emotional toll"],
      frustrations: ["Company says 'self-care' but doesn't reduce call volume", "No training on handling traumatic conversations", "Metrics focus on call time, not call quality"]
    },
    constraints: ["Must not add to agent workload", "Must be implementable without executive buy-in", "Must respect agent privacy", "Must show ROI to justify investment"]
  },
  {
    id: "cx-005",
    hmw: "How might we personalize customer experiences without making users feel surveilled?",
    category: "Customer Experience",
    difficulty: "Advanced",
    context: "Customers want personalization but distrust how their data is used. 71% expect personalized interactions, but 86% are concerned about data privacy. This creates a paradox for businesses.",
    persona: {
      name: "Sarah Kim",
      age: 39,
      role: "Chief Marketing Officer at an E-Commerce Platform",
      bio: "Sarah's team uses behavioral data to personalize recommendations, increasing revenue 25%. But after a data breach at a competitor, customers are deleting accounts and blocking cookies.",
      goals: ["Maintain personalization quality with less data", "Build customer trust around data practices", "Comply with evolving privacy regulations proactively"],
      frustrations: ["GDPR and CCPA requirements keep changing", "Privacy-first browsers break her analytics", "Customers want personalization but won't share data"]
    },
    constraints: ["Must comply with GDPR, CCPA, and emerging regulations", "Must provide value exchange for data sharing", "Must work with cookieless tracking alternatives", "Must be transparent about data usage"]
  },
  {
    id: "cx-006",
    hmw: "How might we improve self-service support for non-technical users of technical products?",
    category: "Customer Experience",
    difficulty: "Beginner",
    context: "Knowledge bases are written by engineers for engineers. Non-technical users can't find or understand help articles, leading to expensive support calls for simple issues.",
    persona: {
      name: "Tom Eriksson",
      age: 55,
      role: "Small Business Owner Using CRM Software",
      bio: "Tom bought a CRM to manage his plumbing business contacts. The help documentation assumes he knows what 'API integration' means. He just wants to add a customer and send an invoice.",
      goals: ["Solve problems without calling support", "Understand help articles on first read", "Feel competent using the software"],
      frustrations: ["Search returns 50 results, none matching his question", "Screenshots in help articles don't match his version", "Video tutorials are 20 minutes long for a 30-second task"]
    },
    constraints: ["Must use plain language at a 6th-grade reading level", "Must match the user's current software version", "Must provide step-by-step visual guides", "Must be searchable by problem description, not feature name"]
  },
  {
    id: "hr-002",
    hmw: "How might we reduce bias in resume screening without removing human judgment entirely?",
    category: "HR Tech",
    difficulty: "Advanced",
    context: "AI resume screeners remove 75% of candidates before a human sees them. These systems perpetuate biases from historical hiring data while giving a false sense of objectivity.",
    persona: {
      name: "David Okafor",
      age: 46,
      role: "VP of Talent Acquisition at a Tech Company",
      bio: "David's company screened 50,000 resumes last year using AI. An audit revealed the system favored candidates from 10 specific universities. He wants to fix this without drowning his team in manual reviews.",
      goals: ["Ensure diverse candidate pools reach interviews", "Maintain screening efficiency at scale", "Build a defensible, transparent screening process"],
      frustrations: ["AI vendors claim their tools are 'unbiased' without proof", "Removing names isn't enough\u2014bias exists in experience descriptions", "Legal team is nervous about discrimination lawsuits"]
    },
    constraints: ["Must comply with EEOC guidelines", "Must be auditable and explainable", "Must process high volumes efficiently", "Must not create reverse discrimination"]
  },
  {
    id: "hr-003",
    hmw: "How might we help remote employees feel recognized without performative praise?",
    category: "HR Tech",
    difficulty: "Beginner",
    context: "Remote workers report feeling invisible compared to office colleagues. Recognition programs feel forced and public praise in Slack makes introverts uncomfortable.",
    persona: {
      name: "Emma Lindqvist",
      age: 33,
      role: "Senior Data Scientist Working Remotely",
      bio: "Emma does excellent work but her manager only gives feedback during quarterly reviews. Public Slack shoutouts embarrass her. She'd rather have meaningful private recognition than emoji reactions.",
      goals: ["Feel valued for her contributions", "Receive feedback she can act on", "Not be forced into public recognition rituals"],
      frustrations: ["Recognition programs reward visibility, not quality", "Quiet contributions go unnoticed", "Peer recognition badges feel meaningless"]
    },
    constraints: ["Must support different recognition preferences", "Must not create social pressure to participate", "Must work across time zones", "Must complement, not replace, compensation"]
  },
  {
    id: "hr-004",
    hmw: "How might we make workplace mental health resources actually accessible and used?",
    category: "HR Tech",
    difficulty: "Intermediate",
    context: "95% of companies offer EAP programs but utilization is under 5%. Employees don't use them due to stigma, distrust, and cumbersome access processes.",
    persona: {
      name: "Carlos Ruiz",
      age: 37,
      role: "HR Director at a Manufacturing Company",
      bio: "Carlos spent $200K on an EAP contract that 23 employees used last year. Workers on the factory floor think therapy is weakness. Office workers fear it'll go on their record.",
      goals: ["Increase EAP utilization to 20%", "Reduce stigma around mental health at work", "Show leadership that mental health investment has ROI"],
      frustrations: ["Can't track utilization without violating privacy", "Managers aren't trained to recognize struggles", "Company culture equates toughness with value"]
    },
    constraints: ["Must maintain complete confidentiality", "Must work for both office and frontline workers", "Must not require manager involvement", "Must provide measurable outcomes without identifying individuals"]
  },
  {
    id: "hr-005",
    hmw: "How might we help working parents transition back after parental leave without career penalties?",
    category: "HR Tech",
    difficulty: "Intermediate",
    context: "Parents returning from leave face an unspoken career penalty. Projects were reassigned, relationships changed, and skills may have shifted. 43% of new mothers leave their jobs within a year of returning.",
    persona: {
      name: "Jennifer Park-Wilson",
      age: 34,
      role: "Product Manager Returning from 6-Month Leave",
      bio: "Jennifer was a top performer before leave. She returned to find her projects reassigned, her team restructured, and peers promoted. She feels like a new hire in her own company.",
      goals: ["Ramp back up quickly without burning out", "Regain her career trajectory", "Balance new parenting demands with work expectations"],
      frustrations: ["No structured return-to-work program", "Manager treats her like she's fragile", "Pumping schedule makes her miss key meetings"]
    },
    constraints: ["Must not require disclosure of parenting status", "Must apply equally to all parents regardless of gender", "Must integrate with existing HRIS and leave management", "Must address both practical and cultural barriers"]
  },
  {
    id: "hr-006",
    hmw: "How might we make skills-based hiring practical for companies stuck on degree requirements?",
    category: "HR Tech",
    difficulty: "Intermediate",
    context: "70% of job postings require degrees for roles that don't need them. Companies want skills-based hiring but don't know how to evaluate candidates without credential proxies.",
    persona: {
      name: "Amanda Chen",
      age: 41,
      role: "CHRO at a Mid-Size Insurance Company",
      bio: "Amanda wants to remove degree requirements but her hiring managers don't know how to assess candidates without them. The legal team worries about consistency and discrimination claims.",
      goals: ["Remove degree requirements from 50% of roles", "Create reliable skills assessment methods", "Maintain hiring quality and legal compliance"],
      frustrations: ["Hiring managers default to pedigree when overwhelmed", "Skills assessments are time-consuming for candidates", "No industry standard for skills equivalency"]
    },
    constraints: ["Must provide consistent evaluation criteria", "Must comply with employment discrimination laws", "Must not disadvantage any demographic group", "Must be practical for high-volume hiring"]
  },
  {
    id: "rt-002",
    hmw: "How might we help independent bookstores compete with online retailers?",
    category: "Retail & Commerce",
    difficulty: "Beginner",
    context: "Independent bookstores can't match online prices or selection. They survive on community loyalty and curation, but these advantages don't translate to digital storefronts.",
    persona: {
      name: "Grace Holloway",
      age: 52,
      role: "Owner of a 25-Year-Old Independent Bookstore",
      bio: "Grace's bookstore is a community institution but sales drop 10% annually. She can't compete on price with Amazon. Her staff's curation expertise is her secret weapon but it doesn't scale.",
      goals: ["Grow online sales without losing the personal touch", "Leverage staff expertise as a competitive advantage", "Build a sustainable revenue model beyond just book sales"],
      frustrations: ["Her website is basically a worse version of Amazon", "Can't afford same-day delivery", "Social media marketing feels inauthentic for books"]
    },
    constraints: ["Budget under $300/month for technology", "Must preserve the personal curation experience", "Must work for a team of 5 without technical expertise", "Must integrate with existing inventory systems"]
  },
  {
    id: "rt-003",
    hmw: "How might we reduce shopping cart abandonment for mobile users?",
    category: "Retail & Commerce",
    difficulty: "Intermediate",
    context: "Mobile cart abandonment rates exceed 85%. Small screens make checkout forms painful, payment entry is error-prone, and users browse on mobile but intend to purchase later on desktop.",
    persona: {
      name: "Omar Hassan",
      age: 33,
      role: "E-Commerce Director at a DTC Skincare Brand",
      bio: "Omar's site gets 70% mobile traffic but 80% of revenue comes from desktop. Mobile users add to cart but abandon at checkout. He's optimized forms but the fundamental experience is broken.",
      goals: ["Increase mobile conversion rate from 1.2% to 3%", "Make mobile checkout as easy as one-click", "Recover abandoned carts without annoying customers"],
      frustrations: ["A/B tests show marginal improvements at best", "Apple Pay/Google Pay adoption is lower than expected", "Cart abandonment emails have 5% open rates"]
    },
    constraints: ["Must not add friction to the browsing experience", "Must comply with PCI-DSS for payment handling", "Must work across iOS and Android browsers", "Must not rely solely on email for recovery"]
  },
  {
    id: "rt-004",
    hmw: "How might we help local retailers offer same-day delivery without building their own logistics?",
    category: "Retail & Commerce",
    difficulty: "Advanced",
    context: "Consumers expect same-day delivery but local retailers can't afford dedicated delivery infrastructure. Third-party delivery services charge high commissions and control the customer relationship.",
    persona: {
      name: "Patricia Morrison",
      age: 47,
      role: "Owner of a Boutique Home Goods Store",
      bio: "Patricia's store has unique handcrafted items that can't be found online. Customers love browsing in person but want delivery for large items. She can't afford a delivery van or driver.",
      goals: ["Offer same-day delivery within 20 miles", "Keep delivery costs under $10 per order", "Maintain her brand in the delivery experience"],
      frustrations: ["Delivery apps take 25% commission", "Can't track packages once they leave the store", "Customers complain when delivery experience is poor"]
    },
    constraints: ["Budget under $500/month for delivery solution", "Must not require hiring delivery staff", "Must maintain product quality during transit", "Must provide tracking for both retailer and customer"]
  },
  {
    id: "rt-005",
    hmw: "How might we make loyalty programs valuable without overwhelming customers with spam?",
    category: "Retail & Commerce",
    difficulty: "Beginner",
    context: "The average consumer belongs to 14 loyalty programs but actively uses only 6. Programs bombard members with irrelevant emails, and points expire before they're redeemed.",
    persona: {
      name: "Rebecca Thornton",
      age: 43,
      role: "Marketing Director at a Regional Grocery Chain",
      bio: "Rebecca's loyalty program has 500K members but only 15% are active. Points expiration emails generate complaints. Members who earn rewards often don't know they have them.",
      goals: ["Increase active membership to 40%", "Make rewards feel valuable and easy to use", "Reduce customer complaints about the program"],
      frustrations: ["Email open rates are below 10%", "Competitors copy every new feature within months", "Can't personalize without seeming creepy"]
    },
    constraints: ["Must comply with CAN-SPAM and privacy regulations", "Must not require an app download", "Must work for both digital and in-store shoppers", "Must be implementable with existing POS system"]
  },
  {
    id: "rt-006",
    hmw: "How might we help consumers make sustainable purchasing decisions at the point of sale?",
    category: "Retail & Commerce",
    difficulty: "Intermediate",
    context: "Consumers say they want to buy sustainable products but can't identify them at the shelf. Eco-labels are confusing, greenwashing is rampant, and price premiums deter good intentions.",
    persona: {
      name: "David Yamamoto",
      age: 38,
      role: "Conscious Consumer and Father of Two",
      bio: "David wants to buy eco-friendly products but can't decode 47 different eco-certifications. He doesn't trust brand claims and doesn't have time to research every purchase.",
      goals: ["Quickly identify genuinely sustainable products", "Make informed choices without extensive research", "Stay within his family's budget"],
      frustrations: ["Every product claims to be 'green'", "Sustainable options cost 30-50% more", "No way to compare environmental impact across brands"]
    },
    constraints: ["Must provide verified, not self-reported, sustainability data", "Must work at the physical point of sale", "Must be understandable in under 5 seconds", "Must not be funded by the brands being rated"]
  },
  {
    id: "cv-002",
    hmw: "How might we increase voter turnout among young adults without partisan messaging?",
    category: "Civic & Workplace",
    difficulty: "Intermediate",
    context: "Only 50% of 18-29 year olds vote. They're not apathetic\u2014they're confused by registration, overwhelmed by candidates, and distrustful of the system.",
    persona: {
      name: "Jordan Williams",
      age: 21,
      role: "College Senior and First-Time Eligible Voter",
      bio: "Jordan cares about climate and housing costs but doesn't know how to research local candidates. The last time she tried to register, the form asked for her 'precinct' and she gave up.",
      goals: ["Register to vote without confusion", "Understand what candidates actually stand for", "Feel like her vote matters in local elections"],
      frustrations: ["Voter guides are written in legalese", "Can't tell which sources are biased", "Doesn't know what offices are even on her ballot"]
    },
    constraints: ["Must be strictly nonpartisan", "Must comply with election laws", "Must not collect or sell voter data", "Must be accessible in multiple languages"]
  },
  {
    id: "cv-003",
    hmw: "How might we make neighborhood safety reporting inclusive and non-discriminatory?",
    category: "Civic & Workplace",
    difficulty: "Advanced",
    context: "Neighborhood safety apps like Nextdoor have been criticized for enabling racial profiling. Reports of 'suspicious people' disproportionately target minorities. Yet residents need ways to report genuine concerns.",
    persona: {
      name: "Officer Maria Gonzalez",
      age: 38,
      role: "Community Policing Coordinator",
      bio: "Maria reviews 100+ neighborhood reports weekly. 60% describe someone's appearance without any actual suspicious behavior. She wants community engagement without enabling profiling.",
      goals: ["Receive actionable safety reports", "Reduce racially biased reporting", "Maintain community trust in the reporting system"],
      frustrations: ["Can't reject reports without community backlash", "No way to educate reporters about bias", "Current app encourages appearance-based descriptions"]
    },
    constraints: ["Must not facilitate racial or ethnic profiling", "Must comply with community reporting laws", "Must protect reporter and subject privacy", "Must be usable by diverse community members"]
  },
  {
    id: "cv-004",
    hmw: "How might we help distributed teams maintain company culture without forced fun?",
    category: "Civic & Workplace",
    difficulty: "Beginner",
    context: "Remote companies struggle to build culture beyond 'virtual happy hours' that nobody enjoys. Culture happens in unscripted moments that remote work eliminates.",
    persona: {
      name: "Sam Rodriguez",
      age: 45,
      role: "CEO of a 150-Person Fully Remote Company",
      bio: "Sam's company went remote in 2020 and never went back. He's tried everything\u2014virtual escape rooms, Slack bots, monthly game nights. Attendance drops every month. He knows culture matters but doesn't know how to build it remotely.",
      goals: ["Build genuine connections without mandatory events", "Create shared experiences across time zones", "Maintain culture as the company scales"],
      frustrations: ["'Fun' events feel like more meetings", "New hires say they feel like contractors, not teammates", "Culture initiatives only engage the same 20% of people"]
    },
    constraints: ["Must not require synchronous participation", "Must work across 10+ time zones", "Must appeal to introverts and extroverts equally", "Must scale without dedicated culture team"]
  },
  {
    id: "cv-005",
    hmw: "How might we make city council meetings accessible and relevant to working residents?",
    category: "Civic & Workplace",
    difficulty: "Intermediate",
    context: "Less than 1% of residents attend city council meetings. Meetings are during work hours, run 3+ hours, and use procedural language. Decisions that affect neighborhoods are made without resident input.",
    persona: {
      name: "Councilwoman Lisa Park",
      age: 52,
      role: "City Council Member Representing a Diverse District",
      bio: "Lisa represents 80,000 residents but the same 15 retirees attend every meeting. Working parents, renters, and young people are absent. She makes decisions without hearing from most constituents.",
      goals: ["Get input from at least 1,000 residents per major decision", "Make meetings accessible to working people", "Build trust in local government"],
      frustrations: ["Live-streaming meetings hasn't increased participation", "Public comment periods are dominated by professional advocates", "Residents only engage when they're angry about something"]
    },
    constraints: ["Must work for residents without reliable internet", "Must support multiple languages", "Must comply with open meeting laws", "Must not be gameable by special interest groups"]
  },
  {
    id: "cv-006",
    hmw: "How might we help nonprofits measure impact beyond vanity metrics?",
    category: "Civic & Workplace",
    difficulty: "Intermediate",
    context: "Nonprofits report metrics like 'meals served' or 'people reached' but funders want outcome data. Measuring actual impact is expensive, methodologically complex, and diverts resources from mission.",
    persona: {
      name: "Angela Moretti",
      age: 48,
      role: "Executive Director of a Youth Mentoring Nonprofit",
      bio: "Angela's org mentors 500 teens annually. She reports 'hours of mentoring provided' but funders want to know if teens' lives actually improve. She can't afford a research team to measure outcomes.",
      goals: ["Demonstrate measurable impact to funders", "Track outcomes without burdening staff", "Compare her program's effectiveness to alternatives"],
      frustrations: ["Every funder wants different metrics", "Tracking long-term outcomes requires following people for years", "Output metrics feel meaningless but are easy to collect"]
    },
    constraints: ["Must be affordable for small nonprofits", "Must not create excessive data entry burden", "Must respect participant privacy", "Must produce reports that satisfy diverse funders"]
  },
  {
    id: "cv-007",
    hmw: "How might we reduce misinformation spread in local community Facebook groups?",
    category: "Civic & Workplace",
    difficulty: "Advanced",
    context: "Local Facebook groups are primary news sources for many communities. Health misinformation, scam listings, and political conspiracy theories spread unchecked. Volunteer moderators are overwhelmed.",
    persona: {
      name: "Karen Oduya",
      age: 39,
      role: "Volunteer Moderator of a 25,000-Member Community Group",
      bio: "Karen moderates her town's Facebook group and removes 20+ misinformation posts daily. She's received death threats for fact-checking. She wants to keep the community informed without becoming the 'truth police.'",
      goals: ["Reduce misinformation without heavy-handed moderation", "Protect herself from harassment", "Keep the group useful for genuine community information"],
      frustrations: ["Facebook's reporting system is slow and inconsistent", "Members accuse her of censorship", "Can't verify every claim herself"]
    },
    constraints: ["Must not suppress legitimate political speech", "Must protect moderator identity", "Must work within Facebook's platform constraints", "Must be implementable by volunteer moderators"]
  },
  {
    id: "mh-002",
    hmw: "How might we help college students recognize burnout before it becomes a crisis?",
    category: "Mental Health",
    difficulty: "Beginner",
    context: "College student mental health crises have increased 50% since 2019. Students often don't recognize burnout symptoms until they're failing classes or having breakdowns.",
    persona: {
      name: "Kai Nguyen",
      age: 19,
      role: "Pre-Med Sophomore Working Two Jobs",
      bio: "Kai maintains a 3.8 GPA while working as a tutor and barista. He sleeps 4-5 hours a night and considers it normal. He thinks asking for help means he's not cut out for medicine.",
      goals: ["Recognize when he's pushing too hard", "Find support without feeling weak", "Maintain his grades and financial stability"],
      frustrations: ["Campus counseling has a 3-week waitlist", "Self-care advice feels irrelevant to his schedule", "Peers seem to handle the same load without struggling"]
    },
    constraints: ["Must not diagnose or provide medical advice", "Must be available 24/7", "Must normalize help-seeking behavior", "Must be free for students"]
  },
  {
    id: "mh-003",
    hmw: "How might we support grief processing in the digital age when mourning rituals have faded?",
    category: "Mental Health",
    difficulty: "Intermediate",
    context: "Traditional mourning communities have eroded. Social media creates pressure to 'move on.' Grief apps exist but feel transactional. People grieve alone while appearing fine online.",
    persona: {
      name: "Rachel Simmons",
      age: 44,
      role: "Recently Widowed Mother of Three",
      bio: "Rachel's husband died suddenly 6 months ago. Friends stopped checking in after month two. She performs normalcy on social media but cries herself to sleep. Therapy helps but she needs community.",
      goals: ["Connect with people who understand her grief", "Process emotions at her own pace", "Find practical help for single parenting"],
      frustrations: ["Grief groups meet at inconvenient times", "People say 'let me know if you need anything' but don't follow through", "Social media memories of her husband are painful and treasured"]
    },
    constraints: ["Must handle sensitive emotional content carefully", "Must not push religious frameworks", "Must protect user privacy absolutely", "Must have crisis intervention protocols"]
  },
  {
    id: "mh-004",
    hmw: "How might we make therapy more culturally responsive for immigrant communities?",
    category: "Mental Health",
    difficulty: "Advanced",
    context: "Immigrants face unique mental health challenges\u2014acculturation stress, intergenerational trauma, language barriers\u2014but therapy models are based on Western frameworks. Many cultures stigmatize therapy.",
    persona: {
      name: "Dr. Amira Hassan",
      age: 40,
      role: "Licensed Therapist Serving Somali Community",
      bio: "Dr. Hassan sees clients who don't have words for 'depression' in their language. Western talk therapy feels foreign. She adapts her practice constantly but there's no framework to guide her.",
      goals: ["Develop culturally grounded therapeutic approaches", "Train other therapists in cultural competence", "Reach community members who won't enter a therapy office"],
      frustrations: ["Clinical tools aren't validated for non-Western populations", "Insurance requires diagnostic codes that don't fit", "Community leaders are gatekeepers who distrust therapy"]
    },
    constraints: ["Must respect diverse cultural frameworks for mental health", "Must not pathologize cultural differences", "Must support multiple languages", "Must comply with clinical licensing requirements"]
  },
  {
    id: "sc-002",
    hmw: "How might we reduce urban noise pollution without restricting economic activity?",
    category: "Smart Cities",
    difficulty: "Intermediate",
    context: "Urban noise pollution causes hearing loss, cardiovascular disease, and cognitive impairment. Cities grow louder as they densify but noise regulations are blunt instruments that hurt businesses.",
    persona: {
      name: "Dr. Helena Frost",
      age: 47,
      role: "City Environmental Health Director",
      bio: "Helena's data shows noise levels exceeding WHO guidelines in 60% of residential areas. Complaints have tripled but enforcement is nearly impossible. She needs smart solutions, not more rules.",
      goals: ["Reduce residential noise exposure by 30%", "Identify and mitigate worst noise sources", "Balance economic vitality with livability"],
      frustrations: ["Noise monitoring is expensive and sparse", "Construction and nightlife are politically untouchable", "Residents blame each other rather than systemic causes"]
    },
    constraints: ["Must use data-driven approaches", "Must not require banning any economic activity", "Must be equitable across neighborhoods", "Must show measurable results within 1 year"]
  },
  {
    id: "sc-003",
    hmw: "How might we make urban green spaces useful for communities that don't currently use parks?",
    category: "Smart Cities",
    difficulty: "Beginner",
    context: "Parks in low-income neighborhoods are underused despite proximity. Safety concerns, lack of amenities, and cultural irrelevance keep residents indoors. Park design reflects planners' values, not community needs.",
    persona: {
      name: "Director James Foster",
      age: 56,
      role: "Parks & Recreation Director",
      bio: "James manages 47 parks across the city. Affluent neighborhood parks are packed while parks in low-income areas sit empty. He has budget for improvements but doesn't know what communities actually want.",
      goals: ["Increase park usage in underserved areas by 50%", "Design parks that reflect community needs", "Justify budget allocation with usage data"],
      frustrations: ["Community meetings attract the same vocal minority", "Survey responses don't match observed behavior", "One-size-fits-all park design wastes money"]
    },
    constraints: ["Must involve genuine community co-design", "Must address safety concerns concretely", "Must work within existing park footprints", "Must serve diverse age groups and cultural backgrounds"]
  },
  {
    id: "sc-004",
    hmw: "How might we help cities prepare for climate migration without displacing existing residents?",
    category: "Smart Cities",
    difficulty: "Advanced",
    context: "Climate change will drive 143 million internal migrants by 2050. Receiving cities face housing shortages, infrastructure strain, and social tension. No playbook exists for managed climate migration.",
    persona: {
      name: "Mayor Sandra Chen",
      age: 53,
      role: "Mayor of a Mid-Size Inland City",
      bio: "Sandra's city is receiving 5,000 new residents annually from coastal areas. Housing prices are rising 15% yearly. Long-time residents feel pushed out. She needs to grow without breaking.",
      goals: ["Accommodate growth without pricing out residents", "Build infrastructure ahead of demand", "Maintain community cohesion during rapid change"],
      frustrations: ["Federal funding doesn't account for climate migration", "NIMBYism blocks new housing", "No data on how many more people are coming"]
    },
    constraints: ["Must protect existing residents from displacement", "Must plan for uncertain migration volumes", "Must comply with fair housing laws", "Must address infrastructure capacity proactively"]
  },
  {
    id: "ge-002",
    hmw: "How might we make multiplayer gaming inclusive for players with physical disabilities?",
    category: "Gaming & Entertainment",
    difficulty: "Intermediate",
    context: "Standard game controllers assume full hand dexterity. Adaptive controllers exist but games aren't designed for them. Players with disabilities are excluded from social gaming experiences.",
    persona: {
      name: "Tyler Brooks",
      age: 22,
      role: "Competitive Gamer with Cerebral Palsy",
      bio: "Tyler has limited fine motor control in his left hand. He uses an adaptive controller but most games don't support custom input mapping for competitive play. He's skilled but can't compete equally.",
      goals: ["Compete in online gaming at a high level", "Use custom controls without being flagged as cheating", "Find games that are designed for diverse input methods"],
      frustrations: ["Anti-cheat software flags his adaptive tools", "Can't rebind keys in most competitive games", "Teammates don't understand his limitations"]
    },
    constraints: ["Must work with existing adaptive controller hardware", "Must not create unfair advantages", "Must integrate with major gaming platforms", "Must support competitive and casual play"]
  },
  {
    id: "ge-003",
    hmw: "How might we help parents set healthy gaming boundaries without constant conflict?",
    category: "Gaming & Entertainment",
    difficulty: "Beginner",
    context: "Parents struggle to limit children's screen time without becoming the enemy. Time-limit tools are blunt\u2014they interrupt mid-game, causing meltdowns. Kids find workarounds for every restriction.",
    persona: {
      name: "Linda Park-Kim",
      age: 41,
      role: "Mother of Two Gamers Ages 9 and 13",
      bio: "Linda's kids play Roblox and Fortnite daily. She's tried screen time limits but they cause daily fights. She doesn't understand the games enough to have informed conversations about usage.",
      goals: ["Set reasonable boundaries collaboratively", "Understand what her kids actually do in games", "Reduce daily conflicts about screen time"],
      frustrations: ["Parental controls are all-or-nothing", "Kids are better at technology than she is", "Other parents seem to have no limits, making her the bad guy"]
    },
    constraints: ["Must involve children in the boundary-setting process", "Must not be easily circumvented", "Must educate parents about gaming culture", "Must support different rules for different age groups"]
  },
  {
    id: "ge-004",
    hmw: "How might we reduce toxic behavior in online gaming communities?",
    category: "Gaming & Entertainment",
    difficulty: "Advanced",
    context: "75% of online gamers have experienced harassment. Toxicity drives away diverse players and reduces game lifespan. Reporting systems are slow and punishments don't change behavior.",
    persona: {
      name: "Game Director Yuki Sato",
      age: 35,
      role: "Lead Game Designer at a AAA Studio",
      bio: "Yuki's game has 10M active players but loses 30% of new players within a week due to toxic interactions. The report system generates 50K reports daily. Banning accounts doesn't work\u2014toxic players make new ones.",
      goals: ["Reduce toxic interactions by 60%", "Retain new players through their first week", "Create positive community norms without heavy moderation"],
      frustrations: ["Bans don't change behavior, just create new accounts", "Can't moderate voice chat at scale", "Positive players are silent while toxic ones dominate"]
    },
    constraints: ["Must handle multiple languages and cultural contexts", "Must work for voice and text communication", "Must not punish trash talk that's part of competitive culture", "Must scale to millions of daily interactions"]
  },
  {
    id: "lc-002",
    hmw: "How might we make terms of service actually understandable for consumers?",
    category: "Legal & Compliance",
    difficulty: "Beginner",
    context: "The average ToS is 8,000 words at a college reading level. Nobody reads them, everyone agrees. Companies hide important clauses in legal jargon. This creates an informed consent fiction.",
    persona: {
      name: "Professor Diana Rhodes",
      age: 50,
      role: "Consumer Protection Law Professor",
      bio: "Diana has studied 500+ ToS agreements and found that 92% contain clauses consumers would object to if they understood them. She wants to fix the system, not just criticize it.",
      goals: ["Make ToS readable by average consumers", "Highlight clauses that differ from industry norms", "Create accountability for predatory terms"],
      frustrations: ["Simplified summaries lose legally important nuances", "Companies have no incentive to be clear", "Regulatory frameworks are decades behind"]
    },
    constraints: ["Must maintain legal validity of the agreement", "Must highlight unusual or predatory clauses", "Must work across different jurisdictions", "Must not constitute legal advice"]
  },
  {
    id: "lc-003",
    hmw: "How might we help small businesses comply with data privacy regulations without dedicated legal teams?",
    category: "Legal & Compliance",
    difficulty: "Intermediate",
    context: "GDPR, CCPA, and 15+ state privacy laws create a compliance maze. Small businesses face the same requirements as corporations but without legal departments. Non-compliance fines can bankrupt them.",
    persona: {
      name: "Raj Kapoor",
      age: 38,
      role: "Founder of a 12-Person E-Commerce Company",
      bio: "Raj's company sells handmade goods across the US and EU. He received a GDPR compliance letter and panicked. A privacy lawyer quoted him $15,000 for an audit. His entire legal budget is $5,000/year.",
      goals: ["Understand which privacy laws apply to him", "Implement compliance without a lawyer", "Stay updated as regulations change"],
      frustrations: ["Every regulation uses different definitions for the same concepts", "Templates online may not be legally valid", "Can't tell if he's compliant or just lucky"]
    },
    constraints: ["Must be affordable for businesses under 50 employees", "Must cover multiple jurisdictions", "Must update as regulations change", "Must not replace qualified legal counsel for complex cases"]
  },
  {
    id: "lc-004",
    hmw: "How might we make whistleblowing safer and more effective in corporate environments?",
    category: "Legal & Compliance",
    difficulty: "Advanced",
    context: "80% of employees who witness misconduct don't report it. Fear of retaliation, unclear processes, and distrust in outcomes keep them silent. Current systems protect the company, not the whistleblower.",
    persona: {
      name: "Anonymous (Former Compliance Officer)",
      age: 45,
      role: "Ex-Compliance Officer Who Experienced Retaliation",
      bio: "After reporting financial fraud at her previous company, she was sidelined, denied promotion, and eventually forced out. The hotline she reported to was managed by the same executives committing fraud.",
      goals: ["Create truly independent reporting channels", "Protect whistleblowers from retaliation", "Ensure reports actually lead to investigation"],
      frustrations: ["'Anonymous' hotlines aren't truly anonymous", "Internal investigations protect leadership", "Legal protections are theoretical\u2014practically useless"]
    },
    constraints: ["Must guarantee true anonymity", "Must comply with SOX and EU Whistleblower Directive", "Must be independent from company management", "Must provide secure two-way communication"]
  },
  {
    id: "hc-100",
    hmw: "How might we help nurses manage shift handoffs without losing critical patient information?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "Shift handoffs are a leading cause of medical errors. Nurses rush through verbal reports, key details get lost, and incoming staff miss critical changes in patient status.",
    persona: {
      name: "Nurse Angela Torres",
      age: 34,
      role: "ICU Night Shift Nurse",
      bio: "Angela takes over 6 critical patients every night. The outgoing nurse gives a rapid verbal report while simultaneously charting. Angela has missed medication changes twice this month.",
      goals: ["Receive complete patient updates efficiently", "Never miss a critical status change", "Reduce handoff time without losing quality"],
      frustrations: ["Verbal reports are inconsistent between nurses", "EHR notes don't highlight what changed during the shift", "No standardized handoff process across units"]
    },
    constraints: ["Must integrate with existing EHR systems", "Must take under 5 minutes per patient", "Must work on mobile devices", "Must comply with patient privacy regulations"]
  },
  {
    id: "hc-101",
    hmw: "How might we make prenatal care accessible for women in healthcare deserts?",
    category: "Healthcare",
    difficulty: "Advanced",
    context: "7 million women in the US live in maternity care deserts with no OB-GYN or birthing facility. They drive 100+ miles for prenatal visits, leading to missed appointments and complications.",
    persona: {
      name: "Ashley Crow Feather",
      age: 26,
      role: "Expectant Mother on a Rural Reservation",
      bio: "Ashley is 5 months pregnant and the nearest OB-GYN is 90 miles away. She's missed two appointments because her car broke down. She worries something could go wrong with no hospital nearby.",
      goals: ["Get consistent prenatal monitoring", "Know when something requires emergency care", "Deliver safely despite distance from a hospital"],
      frustrations: ["Telehealth can't do physical exams", "No reliable transportation", "Cultural disconnect with off-reservation providers"]
    },
    constraints: ["Must work with limited internet connectivity", "Must be culturally sensitive to Native communities", "Must integrate with Indian Health Service", "Must handle emergency escalation protocols"]
  },
  {
    id: "ft-100",
    hmw: "How might we help college students avoid predatory student loan refinancing?",
    category: "FinTech",
    difficulty: "Beginner",
    context: "Students receive dozens of refinancing offers with misleading terms. They don't understand the difference between federal and private loans, risking loss of income-driven repayment options.",
    persona: {
      name: "Destiny Howard",
      age: 22,
      role: "Recent Graduate with $60K in Student Loans",
      bio: "Destiny consolidated her federal loans into a private refinance because the interest rate was lower. She didn't realize she lost access to income-driven repayment and Public Service Loan Forgiveness.",
      goals: ["Understand her repayment options clearly", "Make informed decisions about refinancing", "Create a realistic payoff plan"],
      frustrations: ["Loan servicer websites are deliberately confusing", "Can't tell which advice is sponsored content", "Monthly payment feels impossible on her starting salary"]
    },
    constraints: ["Must not promote any specific lender", "Must clearly explain federal vs. private loan tradeoffs", "Must be free to use", "Must comply with financial education regulations"]
  },
  {
    id: "ft-101",
    hmw: "How might we help unbanked populations access digital financial services?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "6 million US households have no bank account. They rely on check cashers and money orders, paying premium fees. Digital-only financial services exclude them entirely.",
    persona: {
      name: "Rosa Martinez",
      age: 48,
      role: "House Cleaner Paid in Cash",
      bio: "Rosa has worked for cash for 20 years. Banks require documentation she doesn't have. She pays $30/month in check-cashing fees and can't receive direct deposits or use Venmo.",
      goals: ["Access basic financial services without a traditional bank", "Send money digitally", "Build a financial identity"],
      frustrations: ["Banks require SSN and two forms of ID", "Check-cashing stores charge outrageous fees", "Can't participate in the digital economy"]
    },
    constraints: ["Must not require traditional identification documents", "Must comply with KYC/AML regulations", "Must work for cash-heavy users", "Must be available in Spanish and other languages"]
  },
  {
    id: "ed-100",
    hmw: "How might we help teachers identify and support gifted students who are underperforming?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Gifted students who underperform are often misidentified as average or even struggling. Twice-exceptional students (gifted with learning disabilities) are particularly missed by screening processes.",
    persona: {
      name: "Dr. Patricia Yoon",
      age: 43,
      role: "School Psychologist in a Large District",
      bio: "Patricia evaluates 200 students annually for gifted programs. She knows she's missing kids\u2014especially from low-income families and non-English-speaking homes where giftedness presents differently.",
      goals: ["Identify gifted students across all demographics", "Screen for twice-exceptionality", "Provide actionable recommendations to teachers"],
      frustrations: ["Standardized tests miss creative and practical giftedness", "Referrals come mostly from white, affluent parents", "Teachers confuse compliance with intelligence"]
    },
    constraints: ["Must use culturally fair assessment methods", "Must identify multiple types of giftedness", "Must comply with state gifted education mandates", "Must be practical for large-scale screening"]
  },
  {
    id: "st-100",
    hmw: "How might we help consumers reduce food waste at home?",
    category: "Sustainability",
    difficulty: "Beginner",
    context: "The average American household wastes $1,500 in food annually. People overbuy, forget what's in their fridge, and misunderstand expiration dates. Meal planning apps have low sustained adoption.",
    persona: {
      name: "Nicole Foster",
      age: 32,
      role: "Busy Working Parent of Three",
      bio: "Nicole throws away produce weekly because she forgets she bought it. She meal plans sometimes but life gets chaotic. She feels guilty about waste but doesn't have a system that sticks.",
      goals: ["Stop throwing away forgotten groceries", "Plan meals realistically for her chaotic schedule", "Save money on groceries"],
      frustrations: ["Meal planning apps assume she has time to cook from scratch", "Expiration dates are confusing", "Her family won't eat leftovers"]
    },
    constraints: ["Must require minimal daily effort", "Must work for families with picky eaters", "Must not require scanning every grocery item", "Must integrate with common grocery delivery services"]
  },
  {
    id: "st-101",
    hmw: "How might we make renewable energy adoption accessible for renters?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "Renters make up 36% of US households but have almost no ability to install solar panels or choose their energy source. Green energy programs are designed for homeowners.",
    persona: {
      name: "Andre Thompson",
      age: 29,
      role: "Apartment Renter Concerned About Climate",
      bio: "Andre wants to use renewable energy but his landlord won't install solar panels and his utility doesn't offer green energy plans. He feels powerless to reduce his carbon footprint at home.",
      goals: ["Use renewable energy despite renting", "Reduce his energy bills", "Take meaningful climate action within his constraints"],
      frustrations: ["Community solar programs have 2-year waitlists", "Portable solar panels can't power an apartment", "Green energy certificates feel like greenwashing"]
    },
    constraints: ["Must work without landlord permission", "Must provide real environmental impact", "Must be affordable on a renter's budget", "Must not require property modifications"]
  },
  {
    id: "ac-100",
    hmw: "How might we make cooking accessible for people with limited hand mobility?",
    category: "Accessibility",
    difficulty: "Beginner",
    context: "Arthritis affects 54 million Americans. Many give up cooking due to difficulty with chopping, opening containers, and handling hot pots. Adaptive kitchen tools exist but are hard to find and expensive.",
    persona: {
      name: "Dorothy Chambers",
      age: 68,
      role: "Retired Librarian with Severe Arthritis",
      bio: "Dorothy loved cooking but her rheumatoid arthritis makes gripping, chopping, and stirring painful. She relies on frozen meals now and misses the joy and nutrition of home cooking.",
      goals: ["Cook simple meals independently", "Find tools that work for her limitations", "Maintain nutrition without relying on processed food"],
      frustrations: ["Adaptive tools she bought online were poorly designed", "Recipes assume full hand dexterity", "Kitchen accessibility isn't covered by insurance"]
    },
    constraints: ["Must address common arthritis limitations", "Must not require expensive equipment", "Must include practical workarounds and techniques", "Must be usable with voice or simplified interfaces"]
  },
  {
    id: "cx-100",
    hmw: "How might we reduce wait times for government services without increasing staff?",
    category: "Customer Experience",
    difficulty: "Intermediate",
    context: "DMV and social services offices have average wait times of 2+ hours. Citizens take time off work, miss wages, and often leave without resolution. Digital alternatives exclude those without tech access.",
    persona: {
      name: "Director Maria Espinoza",
      age: 50,
      role: "County Social Services Director",
      bio: "Maria's office serves 500 people daily with a staff of 30. Wait times average 2.5 hours. She's lost good employees to burnout and can't hire replacements fast enough.",
      goals: ["Reduce average wait times to under 30 minutes", "Serve more people with the same staff", "Improve both client and employee satisfaction"],
      frustrations: ["Budget for new hires was cut 3 years running", "Online systems exclude elderly and homeless clients", "Appointment systems fill up instantly"]
    },
    constraints: ["Must serve clients without internet access", "Must comply with government accessibility requirements", "Must work with legacy IT systems", "Must not exclude any demographic"]
  },
  {
    id: "hr-100",
    hmw: "How might we help organizations retain mid-career women during the 'motherhood penalty' years?",
    category: "HR Tech",
    difficulty: "Advanced",
    context: "Women's earnings drop 30% after having children. Companies lose high-performers who feel forced to choose between career advancement and family. Flexibility policies exist but usage is stigmatized.",
    persona: {
      name: "VP Sandra Liu",
      age: 43,
      role: "VP of People Strategy at a Fortune 500",
      bio: "Sandra has data showing women leave her company at twice the rate of men between ages 30-40. Exit interviews cite 'culture' but she can't get specifics. Policies are progressive on paper.",
      goals: ["Retain 80% of women through the 30-40 age bracket", "Make flexibility policies truly usable without stigma", "Promote women at rates proportional to the pipeline"],
      frustrations: ["Managers punish flexibility use in subtle ways", "Mentorship programs pair junior women with senior men who don't understand the challenges", "Part-time means career death"]
    },
    constraints: ["Must address cultural, not just policy, barriers", "Must not single out mothers (include all caregivers)", "Must protect employee privacy", "Must produce measurable retention improvements"]
  },
  {
    id: "rt-100",
    hmw: "How might we help brick-and-mortar stores create compelling in-store experiences that online can't replicate?",
    category: "Retail & Commerce",
    difficulty: "Intermediate",
    context: "Physical retail foot traffic has declined 60% in a decade. Stores that survive offer experiences\u2014but most retailers don't know how to create them. 'Experiential retail' is a buzzword without a playbook.",
    persona: {
      name: "Kevin Park",
      age: 38,
      role: "Regional Manager for a Sporting Goods Chain",
      bio: "Kevin manages 12 stores competing against Amazon. His corporate office says 'create experiences' but gives no budget or training. His staff are retail workers, not event planners.",
      goals: ["Increase foot traffic by 25%", "Give customers reasons to visit that can't be replicated online", "Do it within existing payroll budget"],
      frustrations: ["Corporate sends generic merchandising plans", "Staff don't have time for anything beyond stocking and checkout", "Competitor down the street closed and he fears he's next"]
    },
    constraints: ["Must work within existing store footprints", "Must not require additional staffing", "Must be measurable with existing POS data", "Must be replicable across different store locations"]
  },
  {
    id: "cv-100",
    hmw: "How might we help immigrants navigate complex bureaucratic processes in a new country?",
    category: "Civic & Workplace",
    difficulty: "Intermediate",
    context: "Immigrants face dozens of bureaucratic requirements\u2014visas, permits, school enrollment, healthcare registration\u2014across multiple agencies with different rules. Missing one step can cascade into legal issues.",
    persona: {
      name: "Yusuf Abdi",
      age: 35,
      role: "Somali Refugee Resettled in Minnesota",
      bio: "Yusuf arrived 6 months ago with his family. He has appointments at 5 different agencies, forms in English he can't read, and deadlines he doesn't understand. One caseworker helps but can't keep up.",
      goals: ["Understand all requirements in order of priority", "Complete paperwork correctly the first time", "Become self-sufficient in navigating the system"],
      frustrations: ["Every agency gives conflicting information", "Interpreters aren't always available", "Missing one appointment can delay everything by months"]
    },
    constraints: ["Must support multiple languages", "Must work for people with limited literacy", "Must not require smartphone or internet", "Must protect sensitive immigration information"]
  },
  {
    id: "mh-100",
    hmw: "How might we help veterans transition to civilian careers without losing their sense of purpose?",
    category: "Mental Health",
    difficulty: "Intermediate",
    context: "Veterans have higher unemployment rates and report feeling purposeless after service. Military skills don't translate to civilian resumes, and corporate culture feels foreign.",
    persona: {
      name: "Sgt. Marcus Williams",
      age: 32,
      role: "Recently Discharged Army Sergeant",
      bio: "Marcus led a platoon of 30 for 8 years. His leadership skills are exceptional but his resume says 'infantry.' Civilian job interviews feel trivial after combat deployments. He misses the mission.",
      goals: ["Find meaningful civilian work", "Translate military experience into business language", "Rebuild a sense of purpose and community"],
      frustrations: ["Recruiters don't understand military roles", "VA career services are overwhelmed", "Corporate culture feels petty compared to military service"]
    },
    constraints: ["Must translate military skills to civilian equivalents", "Must address identity transition, not just job placement", "Must connect to veteran support networks", "Must not be patronizing about military service"]
  },
  {
    id: "sc-100",
    hmw: "How might we make public restrooms in cities safer, cleaner, and more available?",
    category: "Smart Cities",
    difficulty: "Beginner",
    context: "Public restroom scarcity disproportionately affects women, elderly, disabled, and homeless populations. Cities remove restrooms to discourage loitering, creating a public health crisis.",
    persona: {
      name: "Public Health Director Amy Chen",
      age: 44,
      role: "City Public Health Director",
      bio: "Amy's city has 12 public restrooms for 500,000 people. Open defecation complaints have tripled. She has data showing restroom access is a health equity issue but council sees it as a homelessness problem.",
      goals: ["Triple public restroom availability within 2 years", "Keep facilities clean and safe 24/7", "Address public health without criminalizing homelessness"],
      frustrations: ["Self-cleaning units cost $250K each", "Staffed facilities are politically unpopular", "Needle disposal creates community opposition"]
    },
    constraints: ["Must be maintainable with existing city staff", "Budget under $100K per unit", "Must deter misuse without restricting access", "Must be ADA compliant"]
  },
  {
    id: "sc-101",
    hmw: "How might we reduce urban heat island effects in low-income neighborhoods?",
    category: "Smart Cities",
    difficulty: "Advanced",
    context: "Low-income neighborhoods are 5-10\u00b0F hotter than wealthy ones due to less tree cover and more pavement. Heat kills more people than any other weather event. AC isn't affordable for many.",
    persona: {
      name: "Commissioner Rosa Alvarez",
      age: 51,
      role: "City Commissioner for Environmental Justice",
      bio: "Rosa's district has the highest heat-related ER visits in the city. Tree canopy is 10% vs 40% in wealthy areas. Residents can't afford AC and cooling centers are miles away.",
      goals: ["Reduce surface temperatures by 5\u00b0F in hottest areas", "Provide immediate cooling solutions while long-term fixes grow", "Ensure equitable distribution of green infrastructure"],
      frustrations: ["Trees take 15 years to provide meaningful shade", "Cool roof programs exclude renters", "Community doesn't trust government promises"]
    },
    constraints: ["Must provide both immediate and long-term cooling", "Must prioritize most vulnerable populations", "Must work within existing rights-of-way", "Must involve community in planning"]
  },
  {
    id: "ge-100",
    hmw: "How might we help content creators monetize without depending on platform algorithms?",
    category: "Gaming & Entertainment",
    difficulty: "Intermediate",
    context: "Creators earn based on algorithms they don't control. A single algorithm change can cut income 80% overnight. Platform dependency creates precarious livelihoods for millions.",
    persona: {
      name: "Aisha Johnson",
      age: 27,
      role: "YouTube Creator with 200K Subscribers",
      bio: "Aisha makes educational science videos. An algorithm change cut her views by 70% overnight. She went from earning $4K/month to $800. She has no direct relationship with most of her audience.",
      goals: ["Build income streams independent of any platform", "Own her audience relationship", "Sustain herself without clickbait content"],
      frustrations: ["Platforms take 30-45% of revenue", "No way to contact subscribers directly", "Algorithm rewards quantity over quality"]
    },
    constraints: ["Must work alongside existing platform presence", "Must not require large upfront investment", "Must handle payment processing securely", "Must scale from small to large audiences"]
  },
  {
    id: "lc-100",
    hmw: "How might we make intellectual property protection affordable for independent creators?",
    category: "Legal & Compliance",
    difficulty: "Intermediate",
    context: "Independent artists, musicians, and writers can't afford IP lawyers. Their work is stolen regularly. Copyright registration is confusing and enforcement against large companies feels impossible.",
    persona: {
      name: "Maya Robinson",
      age: 30,
      role: "Independent Illustrator and Surface Pattern Designer",
      bio: "Maya found her designs on products at a major retailer without permission or payment. A cease-and-desist letter would cost $500. A lawsuit would cost $50K. She made $30K last year.",
      goals: ["Protect her work proactively", "Enforce her rights affordably", "Understand copyright without going to law school"],
      frustrations: ["Reverse image search finds her work everywhere without credit", "DMCA takedowns are whack-a-mole", "Legal help is priced for corporations"]
    },
    constraints: ["Must be affordable for creators earning under $50K", "Must handle multiple types of IP", "Must provide actionable enforcement options", "Must not require legal expertise to use"]
  }
];

export const categories = [...new Set(problems.map(p => p.category))];
export const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;
