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
    context: "Telehealth usage surged post-pandemic, but patients report feeling disconnected and anxious during virtual visits. Providers struggle to build rapport through a screen.",
    persona: { name: "Maria Santos", age: 62, role: "Retired Teacher with Chronic Conditions", bio: "Maria manages diabetes and hypertension. She lives alone in a rural area and relies on telehealth for specialist visits.", goals: ["Feel heard by her doctor", "Easily navigate the platform", "Get clear post-visit instructions"], frustrations: ["Can't share her screen", "Feels rushed", "Forgets what the doctor said"] },
    constraints: ["Must comply with HIPAA", "Works on low-bandwidth", "No additional hardware", "Accessible for low digital literacy"]
  },
  {
    id: "ft-001",
    hmw: "How might we help gig workers build emergency savings without feeling deprived?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "Over 60% of gig workers have less than $400 in emergency savings. Their irregular income makes traditional savings advice ineffective.",
    persona: { name: "Jaylen Brooks", age: 28, role: "Rideshare Driver & Freelance Photographer", bio: "Jaylen juggles two gig jobs with wildly varying weekly income.", goals: ["Build a $1,000 emergency fund", "Save without thinking about it", "See progress without anxiety"], frustrations: ["Apps assume biweekly paychecks", "Round-ups feel pointless", "Guilt when missing goals"] },
    constraints: ["Handle variable income", "No minimum deposits", "Integrate with gig platforms", "No monthly fees"]
  },
  {
    id: "ed-001",
    hmw: "How might we make online learning feel less isolating for adult learners?",
    category: "EdTech",
    difficulty: "Beginner",
    context: "Adult learners returning to education online report high dropout rates, citing loneliness and lack of accountability.",
    persona: { name: "Priya Sharma", age: 35, role: "Working Mother Pursuing a Degree", bio: "Priya works full-time and studies at night after her kids go to bed.", goals: ["Connect with peers", "Stay motivated", "Balance study and family"], frustrations: ["Forums feel performative", "Group projects assume availability", "No one notices struggles"] },
    constraints: ["Must work asynchronously", "No webcam required", "Respect time zones", "Privacy-first"]
  },
  {
    id: "st-001",
    hmw: "How might we reduce food waste in university dining halls?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "University dining halls waste 30% of prepared food daily. Students take more than they eat, and kitchens over-prepare.",
    persona: { name: "Chef David Kim", age: 45, role: "Head of University Dining Services", bio: "David manages a team of 30 serving 5,000 meals daily across three halls.", goals: ["Reduce waste by 50%", "Maintain satisfaction", "Get actionable data"], frustrations: ["Mixed waste bins", "Complaints if items run out", "No budget for smart equipment"] },
    constraints: ["Budget under $15,000", "No serving line slowdown", "Works across three layouts", "Produces sustainability reports"]
  },
  {
    id: "ac-001",
    hmw: "How might we make public transit navigation accessible for visually impaired commuters?",
    category: "Accessibility",
    difficulty: "Advanced",
    context: "Visually impaired commuters avoid unfamiliar transit systems. Existing apps are visual-first. Real-time disruptions create dangerous situations.",
    persona: { name: "Tomás Rivera", age: 31, role: "Software Engineer (Legally Blind)", bio: "Tomás has 10% vision and uses a white cane. He's tech-savvy and uses VoiceOver daily.", goals: ["Navigate new routes independently", "Get real-time accessibility alerts", "Feel confident on unfamiliar transit"], frustrations: ["Map apps useless without sight", "Unreliable audio announcements", "No elevator status info"] },
    constraints: ["Screen reader compatible", "Audio-first interface", "Real-time transit API integration", "No Bluetooth beacon dependency"]
  },
  {
    id: "cx-001",
    hmw: "How might we reduce customer support ticket volume without sacrificing satisfaction?",
    category: "Customer Experience",
    difficulty: "Beginner",
    context: "A SaaS company receives 2,000+ support tickets monthly. 40% are repetitive questions covered in documentation.",
    persona: { name: "Rachel Torres", age: 38, role: "VP of Customer Success", bio: "Rachel leads 12 support agents. Documentation exists but customers don't use it.", goals: ["Reduce tickets by 40%", "Maintain CSAT above 4.5", "Free agents for complex issues"], frustrations: ["Chatbots frustrate customers", "Bad knowledge base search", "Can't get engineering to fix UX"] },
    constraints: ["Integrate with Zendesk", "No headcount increase", "ROI within 3 months", "No chatbot gating"]
  },
  {
    id: "hr-001",
    hmw: "How might we make performance reviews feel like growth opportunities instead of judgments?",
    category: "HR Tech",
    difficulty: "Intermediate",
    context: "82% of employees say performance reviews are not useful. Managers dread writing them, employees dread reading them.",
    persona: { name: "Aisha Johnson", age: 42, role: "Engineering Manager (15 Direct Reports)", bio: "Aisha spends 3 weeks every quarter writing reviews.", goals: ["Give meaningful feedback efficiently", "Show growth trajectory", "Reduce review anxiety"], frustrations: ["Rating scales create false precision", "Can't capture trajectory", "Forced ranking pits teammates"] },
    constraints: ["Integrate with HRIS", "Can't eliminate reviews", "Support technical and non-technical roles", "Mobile-completable"]
  },
  {
    id: "rt-001",
    hmw: "How might we help small restaurants compete with delivery apps without losing margins?",
    category: "Retail & Commerce",
    difficulty: "Advanced",
    context: "Delivery apps charge 15-30% commission. Small restaurants can't afford it but can't afford to not be listed.",
    persona: { name: "Sofia Nguyen", age: 50, role: "Owner of Family Vietnamese Restaurant", bio: "Sofia's restaurant has been in the family for 20 years. She joined delivery apps during the pandemic.", goals: ["Keep delivery revenue without commissions", "Build direct relationships", "Compete with chains"], frustrations: ["Can't leave delivery apps", "Outdated website", "No marketing budget"] },
    constraints: ["Budget under $200/month", "No app download required", "Secure payments", "Works with existing POS"]
  },
  {
    id: "cv-001",
    hmw: "How might we help remote teams maintain spontaneous collaboration without meeting fatigue?",
    category: "Civic & Workplace",
    difficulty: "Beginner",
    context: "Remote teams miss 'watercooler moments.' Companies added more meetings, creating fatigue. Slack is too noisy.",
    persona: { name: "Marcus Chen", age: 29, role: "Product Designer at Fully Remote Startup", bio: "Marcus loves remote work but misses bumping into engineers.", goals: ["More serendipitous conversations", "Fewer scheduled meetings", "Feel connected beyond immediate team"], frustrations: ["Virtual coffee feels forced", "Too many Slack channels", "Never knows who's working on what"] },
    constraints: ["No more scheduled meetings", "Works across time zones", "No always-on video/audio", "Integrates with Slack, Figma, Notion"]
  },
  {
    id: "gm-001",
    hmw: "How might we encourage teens to develop financial literacy without it feeling like homework?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Only 17 US states require financial literacy courses. Teens learn about money from TikTok and peers.",
    persona: { name: "Zoe Williams", age: 16, role: "High School Junior with Part-Time Job", bio: "Zoe earns $200/week at a frozen yogurt shop. She's curious about investing from TikTok.", goals: ["Understand where money goes", "Start investing small", "Learn by doing"], frustrations: ["Financial jargon", "Vague parental advice", "School doesn't teach money skills"] },
    constraints: ["COPPA compliant", "No financial advice", "No parental credit card needed", "Feels like social app"]
  },
  // 11-20: Healthcare
  {
    id: "hc-002",
    hmw: "How might we improve medication adherence for elderly patients living alone?",
    category: "Healthcare",
    difficulty: "Beginner",
    context: "Nearly 50% of medications for chronic diseases are not taken as prescribed. Elderly patients living alone have no one to remind them.",
    persona: { name: "George Patterson", age: 78, role: "Retired Veteran with Heart Disease", bio: "George takes 7 medications daily at different times. He sometimes forgets or doubles doses.", goals: ["Never miss a dose", "Understand why each medication matters", "Alert someone if he's in trouble"], frustrations: ["Too many pill bottles", "Alarm fatigue from phone reminders", "Can't read small labels"] },
    constraints: ["No smartphone dependency", "Must be affordable", "Simple setup", "Works for multiple medications"]
  },
  {
    id: "hc-003",
    hmw: "How might we reduce emergency room overcrowding for non-urgent cases?",
    category: "Healthcare",
    difficulty: "Advanced",
    context: "Up to 30% of ER visits are for non-urgent conditions. Patients go to the ER because they don't know where else to go after hours.",
    persona: { name: "Dr. Lisa Chang", age: 44, role: "Emergency Medicine Physician", bio: "Dr. Chang sees 40+ patients per shift. Many don't need emergency care but have nowhere else to go.", goals: ["Treat truly urgent cases faster", "Redirect non-urgent patients appropriately", "Reduce burnout in her team"], frustrations: ["4-hour waits for sore throats", "No good triage tools for patients", "Urgent care hours are limited"] },
    constraints: ["Must not discourage truly sick patients", "Works 24/7", "Integrates with hospital systems", "Multilingual support"]
  },
  {
    id: "hc-004",
    hmw: "How might we support mental health for first responders without stigma?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "First responders face PTSD, depression, and anxiety at rates 5x higher than the general population. Most avoid seeking help due to career stigma.",
    persona: { name: "Captain Mike Reeves", age: 39, role: "Fire Department Captain", bio: "Mike has served for 15 years and lost colleagues to suicide. He struggles with sleep but won't see a therapist on record.", goals: ["Access mental health support anonymously", "Help his crew without overstepping", "Process traumatic calls"], frustrations: ["Peer support feels unprofessional", "EAP sessions feel generic", "Fear of being deemed unfit"] },
    constraints: ["Complete anonymity", "No employer reporting", "Available 24/7", "Culturally competent for first responders"]
  },
  {
    id: "hc-005",
    hmw: "How might we make clinical trial recruitment more equitable across demographics?",
    category: "Healthcare",
    difficulty: "Advanced",
    context: "Clinical trials underrepresent minorities. 75% of participants are white. This leads to treatments that don't work equally for all populations.",
    persona: { name: "Dr. Amara Okafor", age: 52, role: "Clinical Research Director", bio: "Dr. Okafor has run 20+ trials and struggles to recruit diverse participants.", goals: ["Achieve representative demographics", "Build trust with minority communities", "Simplify the enrollment process"], frustrations: ["Historical mistrust of medical research", "Trials located far from minority communities", "Complex consent forms"] },
    constraints: ["IRB approved processes", "Plain language materials", "Transportation support", "Cultural sensitivity training"]
  },
  {
    id: "hc-006",
    hmw: "How might we help parents manage their children's chronic conditions between doctor visits?",
    category: "Healthcare",
    difficulty: "Beginner",
    context: "Parents of children with asthma, diabetes, or allergies feel lost between appointments. They rely on Google and Facebook groups for medical advice.",
    persona: { name: "Kevin & Diane Park", age: 34, role: "Parents of a 6-year-old with Severe Asthma", bio: "Their son has been hospitalized twice. They struggle to track triggers and medication schedules.", goals: ["Track symptoms and triggers daily", "Share data with the pediatrician", "Know when to seek emergency care"], frustrations: ["Paper logs are lost", "Apps are designed for adults", "Can't remember what doctor said to watch for"] },
    constraints: ["Child-friendly interface", "Shareable with medical team", "Offline capable", "No medical diagnosis features"]
  },
  // 17-22: FinTech
  {
    id: "ft-002",
    hmw: "How might we make investing accessible for people who distrust traditional financial institutions?",
    category: "FinTech",
    difficulty: "Intermediate",
    context: "Millions of Americans, particularly in Black and Latino communities, distrust banks due to historical redlining and predatory lending.",
    persona: { name: "Denise Washington", age: 45, role: "Small Business Owner", bio: "Denise runs a hair salon. She saves cash at home because she doesn't trust banks after her mother was denied a mortgage.", goals: ["Grow wealth safely", "Understand investment options", "Maintain control of her money"], frustrations: ["Financial advisors feel condescending", "Minimum investment requirements", "Hidden fees"] },
    constraints: ["Transparent fee structure", "Low minimums ($5)", "Educational-first approach", "Community-endorsed"]
  },
  {
    id: "ft-003",
    hmw: "How might we help freelancers manage quarterly tax payments without stress?",
    category: "FinTech",
    difficulty: "Beginner",
    context: "Freelancers must pay estimated quarterly taxes. Many miscalculate, leading to penalties or surprise bills in April.",
    persona: { name: "Sam Liu", age: 26, role: "Freelance Graphic Designer", bio: "Sam started freelancing last year. He didn't know about quarterly taxes until he owed $3,000 in penalties.", goals: ["Automatically set aside tax money", "Know exactly what he owes", "File quarterly without an accountant"], frustrations: ["Tax calculators assume simple income", "Deductions are confusing", "Quarterly deadlines sneak up"] },
    constraints: ["Integrates with bank accounts", "Handles multiple income streams", "No accounting knowledge needed", "Under $20/month"]
  },
  {
    id: "ft-004",
    hmw: "How might we reduce impulse spending for young adults with ADHD?",
    category: "FinTech",
    difficulty: "Advanced",
    context: "Adults with ADHD are 3x more likely to have compulsive spending issues. Traditional budgeting apps rely on executive function skills they struggle with.",
    persona: { name: "Taylor Kim", age: 24, role: "Junior Marketing Coordinator", bio: "Taylor was diagnosed with ADHD at 22. She hyperfocuses on shopping when stressed and regrets purchases later.", goals: ["Pause before impulsive purchases", "Build spending awareness", "Not feel ashamed about her patterns"], frustrations: ["Budget categories feel restrictive", "Notifications are annoying and ignored", "Shame from tracking 'failed' budgets"] },
    constraints: ["Non-judgmental tone", "Works with ADHD brain patterns", "Optional accountability partner", "No credit score impact"]
  },
  {
    id: "ft-005",
    hmw: "How might we help immigrant families send remittances more affordably?",
    category: "FinTech",
    difficulty: "Intermediate",
    context: "Immigrants send $600B annually in remittances. Fees average 6.5%, disproportionately affecting low-income senders.",
    persona: { name: "Rosa Gutierrez", age: 41, role: "Hotel Housekeeper", bio: "Rosa sends $300 monthly to her parents in Guatemala. Transfer fees eat $20 each time.", goals: ["Send money cheaply", "Ensure parents receive it easily", "Track exchange rates"], frustrations: ["Hidden fees in exchange rates", "Parents struggle with digital wallets", "Cash pickup locations are far away"] },
    constraints: ["Works without smartphones on receiving end", "Multiple payout options", "Regulatory compliant", "Under 1% fee"]
  },
  {
    id: "ft-006",
    hmw: "How might we help couples align on financial goals without conflict?",
    category: "FinTech",
    difficulty: "Beginner",
    context: "Money is the #1 source of relationship conflict. 35% of couples disagree on spending priorities. Most finance apps are designed for individuals.",
    persona: { name: "Jordan & Alex Martinez", age: 30, role: "Newly Married Couple", bio: "Jordan saves aggressively; Alex enjoys spending on experiences. They argue about money weekly.", goals: ["Agree on shared goals", "Maintain individual spending freedom", "See combined financial picture"], frustrations: ["Can't find apps for couples", "Spreadsheets cause arguments", "Different money mindsets"] },
    constraints: ["Supports joint and individual views", "No blame features", "Works with multiple bank accounts", "Guided conversation tools"]
  },
  // 23-30: EdTech
  {
    id: "ed-002",
    hmw: "How might we help teachers differentiate instruction for 30+ students with varying skill levels?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Teachers are expected to personalize learning but have 30+ students at different levels. Planning differentiated lessons takes hours.",
    persona: { name: "Ms. Carmen Reyes", age: 33, role: "4th Grade Teacher", bio: "Carmen has students reading at 2nd-8th grade levels. She spends weekends creating different worksheets.", goals: ["Automatically group students by skill", "Generate leveled materials quickly", "Track individual progress"], frustrations: ["One-size-fits-all curriculum", "No time for personalization", "Assessment data sits unused"] },
    constraints: ["Works with existing LMS", "No student data leaves the school", "Offline capable", "Aligned to state standards"]
  },
  {
    id: "ed-003",
    hmw: "How might we make coding education engaging for students who don't identify as 'tech people'?",
    category: "EdTech",
    difficulty: "Beginner",
    context: "Most coding education targets self-identified tech enthusiasts. Students in arts, humanities, and social sciences miss out on computational thinking skills.",
    persona: { name: "Maya Johnson", age: 20, role: "College Sophomore Studying Sociology", bio: "Maya thinks coding is 'not for her.' She doesn't realize data analysis could transform her research.", goals: ["See how coding applies to her field", "Start without math prerequisites", "Build something meaningful quickly"], frustrations: ["Tutorials assume CS background", "Examples are always about games or apps", "Feels behind peers who coded since childhood"] },
    constraints: ["No prior coding experience assumed", "Domain-specific examples", "Browser-based (no setup)", "Collaborative projects"]
  },
  {
    id: "ed-004",
    hmw: "How might we support students with dyslexia in traditional reading-heavy classrooms?",
    category: "EdTech",
    difficulty: "Advanced",
    context: "1 in 5 students has dyslexia, but most classrooms still rely heavily on text. Students fall behind not because of intelligence but because of reading format.",
    persona: { name: "Ethan Moore", age: 12, role: "7th Grader with Dyslexia", bio: "Ethan is bright and creative but reads at a 4th grade level. He avoids reading aloud and his confidence is low.", goals: ["Access content in multiple formats", "Keep up with classmates", "Feel smart, not broken"], frustrations: ["Textbooks have no audio option", "Being pulled out for 'special help' is embarrassing", "Tests measure reading speed, not knowledge"] },
    constraints: ["Works on school Chromebooks", "Teacher-controlled settings", "Multiple format outputs", "Integrates with Google Classroom"]
  },
  {
    id: "ed-005",
    hmw: "How might we help university students choose the right major based on skills rather than prestige?",
    category: "EdTech",
    difficulty: "Beginner",
    context: "33% of students change their major at least once. Many choose based on parental pressure or perceived prestige rather than alignment with their skills.",
    persona: { name: "Liam Park", age: 18, role: "College Freshman (Undecided)", bio: "Liam's parents want him to study pre-med. He's interested in design but thinks it's not 'practical.'", goals: ["Discover majors aligned with his strengths", "See real career outcomes", "Make a confident decision"], frustrations: ["Career services feel generic", "Can't shadow professionals easily", "No data on actual job satisfaction by major"] },
    constraints: ["Based on validated assessments", "Shows real career data", "No bias toward STEM", "Peer stories included"]
  },
  {
    id: "ed-006",
    hmw: "How might we reduce screen fatigue for K-12 students in hybrid learning environments?",
    category: "EdTech",
    difficulty: "Intermediate",
    context: "Students spend 6-8 hours on screens for school. Eye strain, attention deficits, and behavioral issues are rising. Parents and teachers are concerned.",
    persona: { name: "Principal Janet Lee", age: 48, role: "Elementary School Principal", bio: "Janet's school went hybrid. Teachers default to screen-based everything because it's easier to manage.", goals: ["Reduce unnecessary screen time", "Maintain engagement in hybrid format", "Support teachers in blended activities"], frustrations: ["Teachers use screens as babysitters", "No clear guidelines on screen limits", "Parents complain on both sides"] },
    constraints: ["Works in hybrid model", "Provides offline activity suggestions", "Teacher training included", "Measurable outcomes"]
  },
  {
    id: "ed-007",
    hmw: "How might we help non-native English speakers succeed in English-medium universities?",
    category: "EdTech",
    difficulty: "Advanced",
    context: "International students often have test-passing English skills but struggle with academic writing, lectures, and classroom participation.",
    persona: { name: "Yuki Tanaka", age: 22, role: "Japanese Graduate Student in the US", bio: "Yuki scored well on TOEFL but can't follow fast-paced lectures or participate in seminars.", goals: ["Understand lectures in real-time", "Improve academic writing", "Participate confidently in discussions"], frustrations: ["Accent bias from classmates", "Subtitles/transcripts aren't available", "Writing center has long waits"] },
    constraints: ["Real-time assistance", "Works across disciplines", "Culturally sensitive", "Privacy-preserving"]
  },
  // 31-38: Sustainability
  {
    id: "st-002",
    hmw: "How might we motivate households to reduce energy consumption without financial incentives?",
    category: "Sustainability",
    difficulty: "Beginner",
    context: "Residential energy consumption accounts for 20% of emissions. Smart thermostats help but adoption is low. People know they should save energy but don't change behavior.",
    persona: { name: "Linda Foster", age: 55, role: "Suburban Homeowner", bio: "Linda cares about the environment but doesn't connect her daily habits to climate impact.", goals: ["Understand her energy footprint", "Make easy changes", "Feel she's making a difference"], frustrations: ["Energy bills are confusing", "Smart home tech is intimidating", "Doesn't know what actually matters"] },
    constraints: ["No hardware purchases", "Works with any utility", "Gamified but not condescending", "Family-friendly"]
  },
  {
    id: "st-003",
    hmw: "How might we make sustainable fashion choices easier for budget-conscious consumers?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "Fast fashion generates 10% of global carbon emissions. Sustainable alternatives exist but are perceived as expensive or hard to find.",
    persona: { name: "Aaliyah Grant", age: 23, role: "Recent College Graduate", bio: "Aaliyah wants to shop sustainably but earns $35K/year and can't afford $80 t-shirts.", goals: ["Find affordable sustainable options", "Know which brands to trust", "Build a capsule wardrobe"], frustrations: ["Greenwashing is everywhere", "Thrift stores are picked over", "Sustainable brands don't have her size"] },
    constraints: ["Price comparison features", "Verified sustainability claims", "Size-inclusive", "Works with existing wardrobe"]
  },
  {
    id: "st-004",
    hmw: "How might we help small businesses measure and reduce their carbon footprint affordably?",
    category: "Sustainability",
    difficulty: "Advanced",
    context: "Large companies hire sustainability consultants. Small businesses want to reduce emissions but can't afford audits or complex tracking software.",
    persona: { name: "Miguel Santos", age: 38, role: "Owner of a 10-Person Marketing Agency", bio: "Miguel's clients ask about his company's sustainability practices. He has no idea where to start.", goals: ["Calculate his company's carbon footprint", "Make meaningful reductions", "Report progress to clients"], frustrations: ["Carbon calculators assume manufacturing", "Too many frameworks (GHG, SBTi, CDP)", "No time to become an expert"] },
    constraints: ["Under $50/month", "No consultant needed", "Industry-specific benchmarks", "Simple reporting"]
  },
  {
    id: "st-005",
    hmw: "How might we reduce single-use plastic in school cafeterias?",
    category: "Sustainability",
    difficulty: "Beginner",
    context: "US schools serve 30M meals daily, most with single-use plastics. Reusable alternatives exist but logistics are challenging at scale.",
    persona: { name: "Sarah Mitchell", age: 42, role: "School District Nutrition Director", bio: "Sarah manages food service for 15 schools. She wants to reduce plastic but can't risk health code violations.", goals: ["Eliminate unnecessary plastic", "Stay within budget", "Meet health codes"], frustrations: ["Reusables require washing infrastructure", "Compostable options cost 3x more", "No good tracking for waste reduction"] },
    constraints: ["Health code compliant", "No budget increase", "Works at scale (15 schools)", "Student buy-in required"]
  },
  {
    id: "st-006",
    hmw: "How might we encourage urban residents to compost when they lack outdoor space?",
    category: "Sustainability",
    difficulty: "Intermediate",
    context: "30% of household waste is compostable. Urban apartment dwellers want to compost but have no yard. Municipal programs are sparse.",
    persona: { name: "Derek Zhao", age: 27, role: "Apartment Dweller in Brooklyn", bio: "Derek generates food scraps daily but his apartment has no outdoor space. The nearest compost drop-off is 20 minutes away.", goals: ["Compost without smells", "Minimal effort to maintain", "Feel part of a community effort"], frustrations: ["Indoor bins smell terrible", "Drop-off locations are inconvenient", "Vermicomposting seems gross"] },
    constraints: ["Works in small apartments", "Odor-free", "Weekly or less maintenance", "Under $50 setup cost"]
  },
  // 39-45: Accessibility
  {
    id: "ac-002",
    hmw: "How might we make e-commerce checkout accessible for users with motor disabilities?",
    category: "Accessibility",
    difficulty: "Intermediate",
    context: "Small form fields, complex captchas, and multi-step checkouts exclude users with motor disabilities. 15% of the world has some form of disability.",
    persona: { name: "Jamie Chen", age: 34, role: "Architect with Cerebral Palsy", bio: "Jamie uses a trackball mouse and has limited fine motor control. She abandons most online purchases at checkout.", goals: ["Complete purchases independently", "Use her preferred input devices", "Not feel like an afterthought"], frustrations: ["Tiny form fields", "Drag-and-drop required features", "CAPTCHAs she can't solve"] },
    constraints: ["Keyboard-fully navigable", "Large click targets (44px+)", "No CAPTCHA dependency", "Works with switch devices"]
  },
  {
    id: "ac-003",
    hmw: "How might we make video content accessible for deaf users beyond basic captioning?",
    category: "Accessibility",
    difficulty: "Advanced",
    context: "Auto-captions miss nuance: tone, music, sound effects. Deaf users miss 30% of video context. ASL interpretation is expensive and rare.",
    persona: { name: "Kayla Simmons", age: 25, role: "Deaf College Student", bio: "Kayla is Deaf since birth. She uses ASL as her primary language. Written English is her second language.", goals: ["Full context from videos", "ASL interpretation available", "Participate in video-based discussions"], frustrations: ["Auto-captions are inaccurate", "No indication of tone or sounds", "Professors don't caption their videos"] },
    constraints: ["Works with existing video platforms", "ASL-first option", "Affordable for institutions", "Real-time for live content"]
  },
  {
    id: "ac-004",
    hmw: "How might we design emergency alert systems that work for people with cognitive disabilities?",
    category: "Accessibility",
    difficulty: "Intermediate",
    context: "Emergency alerts use complex language and assume quick decision-making. People with cognitive disabilities may not understand or know how to respond.",
    persona: { name: "Daniel Wright", age: 29, role: "Adult with Down Syndrome Living Semi-Independently", bio: "Daniel lives in supported housing. He can use a smartphone but gets confused by emergency alerts.", goals: ["Understand what's happening", "Know exactly what to do", "Contact his support person"], frustrations: ["Alerts use big words", "Too many beeps cause panic", "Doesn't know if it's about him or somewhere else"] },
    constraints: ["Simple language (5th grade reading level)", "Visual instructions", "Caregiver notification", "Works on basic smartphones"]
  },
  {
    id: "ac-005",
    hmw: "How might we make museum experiences meaningful for visitors with autism?",
    category: "Accessibility",
    difficulty: "Beginner",
    context: "Museums can be overwhelming for autistic visitors: crowds, noise, unpredictable layouts. Many families avoid museums entirely.",
    persona: { name: "The Patel Family", age: 40, role: "Parents of 10-year-old with Autism", bio: "The Patels want their son to experience museums but he melts down from sensory overload within 30 minutes.", goals: ["Plan visits to avoid triggers", "Find quiet spaces when needed", "Engage with exhibits at his pace"], frustrations: ["No sensory information available beforehand", "Staff don't understand autism", "No quiet rooms"] },
    constraints: ["Pre-visit planning tools", "Real-time crowd data", "Staff training component", "Works across museum types"]
  },
  {
    id: "ac-006",
    hmw: "How might we make job interviews fair for candidates with speech disabilities?",
    category: "Accessibility",
    difficulty: "Advanced",
    context: "Job interviews favor fluent speakers. Candidates who stutter, use AAC devices, or have speech differences are judged on delivery rather than content.",
    persona: { name: "Ryan Okonkwo", age: 27, role: "Data Analyst Who Stutters", bio: "Ryan is brilliant at data analysis but his stutter worsens under interview pressure. He's been passed over 12 times.", goals: ["Be judged on skills, not speech", "Have accommodation without stigma", "Feel confident in interviews"], frustrations: ["Phone screens are the worst", "Interviewers finish his sentences", "No standard accommodation process"] },
    constraints: ["Alternative assessment options", "Interviewer training", "Works with existing ATS", "Candidate-controlled accommodations"]
  },
  // 46-52: Customer Experience
  {
    id: "cx-002",
    hmw: "How might we reduce cart abandonment for mobile shoppers?",
    category: "Customer Experience",
    difficulty: "Beginner",
    context: "Mobile cart abandonment is 85.65%. Users browse on mobile but checkout on desktop. The mobile checkout experience is too friction-heavy.",
    persona: { name: "Nina Volkov", age: 31, role: "Busy Millennial Shopper", bio: "Nina adds items to cart on her commute but never checks out on mobile. She forgets by the time she's at her laptop.", goals: ["Checkout in under 60 seconds", "Trust the mobile payment process", "Remember what she was buying"], frustrations: ["Entering card details on small screens", "Account creation requirements", "Shipping costs revealed at the end"] },
    constraints: ["Under 3 checkout steps", "Guest checkout available", "Upfront pricing", "Works on all mobile browsers"]
  },
  {
    id: "cx-003",
    hmw: "How might we make customer feedback actually drive product changes?",
    category: "Customer Experience",
    difficulty: "Intermediate",
    context: "Companies collect mountains of feedback but rarely act on it. Customers feel ignored. Product teams say feedback is unstructured and hard to prioritize.",
    persona: { name: "Tom Wallace", age: 36, role: "Product Manager at a B2B SaaS Company", bio: "Tom receives 500+ feedback items monthly from NPS surveys, support tickets, and sales calls.", goals: ["Connect feedback to roadmap items", "Show customers their input matters", "Prioritize by impact, not volume"], frustrations: ["Feedback lives in 5 different tools", "Loudest customers drive priorities", "No way to close the feedback loop"] },
    constraints: ["Integrates with existing tools", "Automated categorization", "Customer-facing changelog", "Privacy-compliant"]
  },
  {
    id: "cx-004",
    hmw: "How might we onboard enterprise software users without overwhelming them?",
    category: "Customer Experience",
    difficulty: "Advanced",
    context: "Enterprise software has 200+ features. New users see everything at once and get lost. Time-to-value is 90+ days, causing churn.",
    persona: { name: "Karen Phillips", age: 47, role: "Operations Manager at a Mid-Size Company", bio: "Karen's company just bought new project management software. She has 2 weeks to learn it and train her team.", goals: ["Be productive in week one", "Train her team efficiently", "Find features when she needs them"], frustrations: ["10-video onboarding series", "Features she'll never use clutter the interface", "Help docs assume expertise"] },
    constraints: ["Progressive disclosure design", "Role-based onboarding", "Self-paced", "Measurable adoption metrics"]
  },
  {
    id: "cx-005",
    hmw: "How might we rebuild customer trust after a data breach?",
    category: "Customer Experience",
    difficulty: "Advanced",
    context: "After a data breach, 65% of customers lose trust. Companies send generic apology emails. Customer churn spikes for 6+ months.",
    persona: { name: "Diana Ruiz", age: 41, role: "Chief Customer Officer at a Breached Company", bio: "Diana's company exposed 2M customer records. She has to rebuild trust while legal limits what she can say.", goals: ["Retain existing customers", "Demonstrate concrete security improvements", "Rebuild brand reputation"], frustrations: ["Legal blocks transparent communication", "Customers want answers she can't give", "Competitors exploit the situation"] },
    constraints: ["Legal compliance", "Transparent within limits", "Measurable trust metrics", "Multi-channel approach"]
  },
  {
    id: "cx-006",
    hmw: "How might we personalize user experiences without being creepy?",
    category: "Customer Experience",
    difficulty: "Intermediate",
    context: "Users want personalized experiences but 72% are concerned about how their data is used. The line between helpful and invasive is thin.",
    persona: { name: "Alex Kim", age: 28, role: "Privacy-Conscious Online Shopper", bio: "Alex wants relevant recommendations but gets unnerved when ads follow him across the internet.", goals: ["Get useful recommendations", "Control what data is used", "Understand why he sees what he sees"], frustrations: ["No control over personalization", "Retargeting feels stalker-ish", "Can't turn off without losing all personalization"] },
    constraints: ["Explicit consent for data use", "User-controlled personalization levels", "No cross-site tracking", "Transparent algorithms"]
  },
  // 53-58: HR Tech
  {
    id: "hr-002",
    hmw: "How might we reduce unconscious bias in resume screening?",
    category: "HR Tech",
    difficulty: "Advanced",
    context: "Identical resumes with 'white-sounding' names receive 50% more callbacks. AI screening tools often replicate human biases from training data.",
    persona: { name: "Patricia Obi", age: 45, role: "Head of Talent Acquisition", bio: "Patricia knows her team has biases. She tried blind screening but it created logistical nightmares.", goals: ["Fair evaluation of all candidates", "Efficient screening at scale", "Defensible hiring process"], frustrations: ["Blind screening breaks workflow", "AI tools are black boxes", "Hiring managers push back on changes"] },
    constraints: ["Auditable decisions", "Works with existing ATS", "Bias metrics dashboard", "EEOC compliant"]
  },
  {
    id: "hr-003",
    hmw: "How might we help new employees build relationships during remote onboarding?",
    category: "HR Tech",
    difficulty: "Beginner",
    context: "Remote hires report feeling disconnected. 20% of turnover happens in the first 45 days. New hires don't know who to ask for help.",
    persona: { name: "Jason Park", age: 26, role: "New Software Engineer (Remote)", bio: "Jason started his first job remotely. He's met his manager on Zoom but has no idea who his teammates really are.", goals: ["Know who does what", "Find a work friend", "Feel like part of the team"], frustrations: ["Onboarding is just IT setup and policy docs", "No organic social opportunities", "Asking questions feels like bothering people"] },
    constraints: ["Not forced social events", "Works across time zones", "Integrated into work tools", "Manager-facilitated but not manager-dependent"]
  },
  {
    id: "hr-004",
    hmw: "How might we help managers have effective career development conversations?",
    category: "HR Tech",
    difficulty: "Intermediate",
    context: "Only 1 in 3 employees feel their manager helps with career development. Managers want to help but don't know how to have these conversations.",
    persona: { name: "Robert Chen", age: 37, role: "First-Time Manager of 6", bio: "Robert was promoted for his technical skills. He has no training in career coaching and wings every 1:1.", goals: ["Help reports grow in their careers", "Have structured but natural conversations", "Track development over time"], frustrations: ["No conversation frameworks", "HR templates are too corporate", "Doesn't know career paths outside his own"] },
    constraints: ["Conversation guides, not scripts", "Career path libraries", "Integration with performance tools", "Manager training included"]
  },
  {
    id: "hr-005",
    hmw: "How might we measure employee wellbeing without surveillance?",
    category: "HR Tech",
    difficulty: "Advanced",
    context: "Companies want to support employee wellbeing but monitoring tools (email sentiment, activity tracking) feel like surveillance.",
    persona: { name: "Dr. Maya Patel", age: 50, role: "Chief People Officer", bio: "Maya knows burnout is rising but her only data is exit interviews—by then it's too late.", goals: ["Identify burnout early", "Aggregate trends without individual tracking", "Create data-driven wellbeing programs"], frustrations: ["Surveys have low response rates", "Monitoring tools breach trust", "Anecdotal data isn't actionable"] },
    constraints: ["Fully anonymous individual data", "Aggregate-only reporting", "Voluntary participation", "Action recommendations included"]
  },
  {
    id: "hr-006",
    hmw: "How might we make company culture tangible for distributed teams?",
    category: "HR Tech",
    difficulty: "Beginner",
    context: "Remote companies struggle to maintain culture. Values on a website don't translate to daily behavior. New hires don't 'feel' the culture.",
    persona: { name: "Lisa Fernandez", age: 39, role: "VP of People at a 200-Person Remote Company", bio: "Lisa's company has great values but new hires say they don't experience them day-to-day.", goals: ["Make values visible in daily work", "Recognize culture-aligned behavior", "Measure cultural health"], frustrations: ["Values feel like posters", "Recognition programs feel forced", "Culture surveys are too abstract"] },
    constraints: ["Integrated into daily tools", "Peer-driven, not top-down", "Measurable but not gamified", "Authentic, not performative"]
  },
  // 59-65: Retail & Commerce
  {
    id: "rt-002",
    hmw: "How might we help brick-and-mortar stores compete with Amazon's convenience?",
    category: "Retail & Commerce",
    difficulty: "Intermediate",
    context: "Local stores offer unique products and experiences but can't match Amazon's speed, selection, and ease. 49% of product searches start on Amazon.",
    persona: { name: "Margaret O'Brien", age: 57, role: "Owner of a Bookstore for 25 Years", bio: "Margaret's bookstore is a community hub. Sales have dropped 30% as customers browse in-store and buy on Amazon.", goals: ["Drive in-store purchases", "Compete on experience, not price", "Build a loyal customer base"], frustrations: ["Customers use her store as a showroom", "Can't afford same-day delivery", "Online presence is weak"] },
    constraints: ["Budget under $500/month", "Leverages unique strengths", "Doesn't require app download", "Measurable foot traffic impact"]
  },
  {
    id: "rt-003",
    hmw: "How might we reduce returns in online fashion retail?",
    category: "Retail & Commerce",
    difficulty: "Beginner",
    context: "Online fashion returns average 30%. Customers order multiple sizes 'just in case.' Returns cost retailers $15-20 per item and generate waste.",
    persona: { name: "Amanda Price", age: 34, role: "E-Commerce Director at a Fashion Brand", bio: "Amanda's brand processes 50,000 returns monthly. The environmental and financial cost is unsustainable.", goals: ["Reduce returns by 25%", "Help customers buy the right size", "Maintain or improve conversion rates"], frustrations: ["Size guides don't work", "Virtual try-on tech is inaccurate", "Customers game free returns"] },
    constraints: ["No friction added to purchase flow", "Works without body scanning hardware", "Inclusive sizing", "Data-privacy compliant"]
  },
  {
    id: "rt-004",
    hmw: "How might we help local farmers sell directly to urban consumers?",
    category: "Retail & Commerce",
    difficulty: "Intermediate",
    context: "Farmers receive 15 cents of every retail food dollar. Direct-to-consumer models exist but logistics are complex. Consumers want local but want convenience.",
    persona: { name: "Jake Morrison", age: 44, role: "Third-Generation Vegetable Farmer", bio: "Jake grows organic produce on 50 acres. He sells at farmers markets but can only reach 200 customers weekly.", goals: ["Reach 1,000+ customers weekly", "Predictable revenue through subscriptions", "Reduce food waste from unsold produce"], frustrations: ["Farmers markets are weather-dependent", "Delivery logistics are expensive", "Competing with grocery store prices"] },
    constraints: ["Cold chain management", "Flexible subscription model", "Works in rural areas with limited tech", "Profitable at small scale"]
  },
  {
    id: "rt-005",
    hmw: "How might we create a loyalty program that customers actually care about?",
    category: "Retail & Commerce",
    difficulty: "Beginner",
    context: "The average American belongs to 16.7 loyalty programs but is active in only 7.6. Most programs offer irrelevant rewards and spam emails.",
    persona: { name: "Chris Taylor", age: 32, role: "Marketing Director at a Coffee Chain", bio: "Chris runs a loyalty program with 500K members but only 15% are active. Engagement is declining.", goals: ["Increase active member rate to 40%", "Drive meaningful engagement", "Collect actionable customer data"], frustrations: ["Points feel worthless", "Competitors have better programs", "Can't personalize at scale"] },
    constraints: ["Works in-store and online", "Simple earn/redeem structure", "Personalized without being creepy", "ROI measurable within 6 months"]
  },
  {
    id: "rt-006",
    hmw: "How might we help thrift stores manage inventory efficiently with unpredictable donations?",
    category: "Retail & Commerce",
    difficulty: "Advanced",
    context: "Thrift stores receive unpredictable donations. They can't forecast inventory, leading to overcrowding or empty shelves. 50% of donations end up in landfills.",
    persona: { name: "Dorothy James", age: 60, role: "Goodwill Store Manager", bio: "Dorothy manages a store that receives 2,000 donations weekly. She has no way to predict what's coming or price items efficiently.", goals: ["Price items quickly and fairly", "Reduce items sent to landfill", "Match supply with demand"], frustrations: ["Manual pricing takes hours", "No way to predict donation patterns", "Storage space is always full"] },
    constraints: ["Works with volunteers (minimal training)", "Under $100/month", "Handles diverse item categories", "Mobile-friendly for sorting"]
  },
  // 66-72: Civic & Workplace
  {
    id: "cv-002",
    hmw: "How might we increase voter turnout among young adults?",
    category: "Civic & Workplace",
    difficulty: "Intermediate",
    context: "Youth voter turnout is consistently 20-30% lower than older demographics. Young adults face registration confusion, information overload, and apathy.",
    persona: { name: "Destiny Adams", age: 19, role: "College Freshman (First-Time Voter)", bio: "Destiny cares about issues but finds the voting process confusing. She's not sure if she's registered.", goals: ["Know if she's registered", "Understand what's on her ballot", "Vote without missing class"], frustrations: ["Registration websites are confusing", "Can't find unbiased info on candidates", "Doesn't know her polling location"] },
    constraints: ["Non-partisan", "Works in all 50 states", "Mobile-first", "Handles registration deadlines by state"]
  },
  {
    id: "cv-003",
    hmw: "How might we help citizens participate in local government decisions beyond voting?",
    category: "Civic & Workplace",
    difficulty: "Advanced",
    context: "Local government meetings average 20 attendees in cities of 100,000+. Citizens feel disconnected from decisions that affect their daily lives.",
    persona: { name: "Maria Gonzalez", age: 48, role: "Restaurant Owner and Community Leader", bio: "Maria cares deeply about her neighborhood but can't attend 7pm city council meetings because of work.", goals: ["Influence local decisions", "Stay informed about zoning changes", "Connect with her city council rep"], frustrations: ["Meeting times conflict with work", "No way to comment remotely", "Doesn't know what's being decided until it's done"] },
    constraints: ["Asynchronous participation", "Multilingual", "Verified resident identity", "Transparent decision tracking"]
  },
  {
    id: "cv-004",
    hmw: "How might we reduce meeting time while improving decision quality in organizations?",
    category: "Civic & Workplace",
    difficulty: "Beginner",
    context: "Employees spend 31 hours/month in unproductive meetings. 71% of meetings are considered unproductive. Yet organizations keep adding more.",
    persona: { name: "Brian Kowalski", age: 43, role: "Director of Operations", bio: "Brian has 25 hours of meetings weekly. He can't get real work done and makes decisions under fatigue.", goals: ["Cut meeting time by 50%", "Make better decisions faster", "Give his team focus time"], frustrations: ["Meetings to plan meetings", "No accountability for meeting outcomes", "Default 60-minute slots"] },
    constraints: ["Integrates with calendar tools", "Asynchronous alternatives suggested", "Decision tracking", "No culture overhaul required"]
  },
  {
    id: "cv-005",
    hmw: "How might we help neighborhoods organize disaster preparedness collectively?",
    category: "Civic & Workplace",
    difficulty: "Intermediate",
    context: "Only 39% of Americans have a disaster plan. Neighborhoods have untapped collective resources but no coordination mechanism.",
    persona: { name: "Angela Cruz", age: 55, role: "Retired Nurse and Block Captain", bio: "Angela organized her block during a wildfire evacuation. She realized nobody knew each other's skills or needs.", goals: ["Map neighborhood resources and needs", "Coordinate during emergencies", "Build year-round community connections"], frustrations: ["Nextdoor is full of complaints", "No one knows who has medical skills", "Emergency plans assume individual families"] },
    constraints: ["Works offline during outages", "Low-tech participation option", "Privacy-respecting", "Scalable from block to neighborhood"]
  },
  {
    id: "cv-006",
    hmw: "How might we help whistleblowers report corporate misconduct safely?",
    category: "Civic & Workplace",
    difficulty: "Advanced",
    context: "82% of whistleblowers face retaliation. Many misconduct cases go unreported because employees fear losing their jobs or worse.",
    persona: { name: "Anonymous", age: 35, role: "Mid-Level Employee at a Large Corporation", bio: "This employee discovered their company is dumping chemicals illegally. They fear being identified and fired.", goals: ["Report misconduct anonymously", "Ensure investigation happens", "Stay protected from retaliation"], frustrations: ["Internal hotlines aren't anonymous", "Doesn't trust HR", "Doesn't know legal protections"] },
    constraints: ["True anonymity (no IP/device tracking)", "End-to-end encrypted", "Legal guidance included", "Multi-jurisdiction support"]
  },
  // 73-78: Gaming & Social
  {
    id: "gs-001",
    hmw: "How might we reduce toxic behavior in online multiplayer games?",
    category: "Gaming & Social",
    difficulty: "Advanced",
    context: "74% of online gamers experience harassment. Reporting systems are slow and punishment is inconsistent. Toxic players drive away casual gamers.",
    persona: { name: "Emma Rodriguez", age: 22, role: "Competitive Gamer & Streamer", bio: "Emma streams daily but gets harassed for being a woman. She mutes chat but loses community engagement.", goals: ["Play without harassment", "Build a positive community", "Not sacrifice competitive features"], frustrations: ["Muting loses the social aspect", "Reports feel like shouting into void", "Toxic players create new accounts"] },
    constraints: ["Real-time intervention", "No false positives that punish normal players", "Works across text and voice", "Player-controlled safety settings"]
  },
  {
    id: "gs-002",
    hmw: "How might we combat loneliness among seniors through social technology?",
    category: "Gaming & Social",
    difficulty: "Beginner",
    context: "Over 40% of seniors report feeling lonely regularly. Social isolation increases mortality risk by 26%. Existing social apps aren't designed for older adults.",
    persona: { name: "Harold Jenkins", age: 75, role: "Retired Engineer, Recently Widowed", bio: "Harold lost his wife last year. His children live far away. He's tech-curious but finds modern apps confusing.", goals: ["Talk to someone daily", "Find people with shared interests", "Learn new technology gradually"], frustrations: ["Social media is overwhelming", "Video calls are awkward with strangers", "Doesn't want to be a burden"] },
    constraints: ["Large text and simple navigation", "No predatory monetization", "Voice-first option", "Moderated for safety"]
  },
  {
    id: "gs-003",
    hmw: "How might we help parents manage their children's screen time without constant conflict?",
    category: "Gaming & Social",
    difficulty: "Intermediate",
    context: "Average child spends 7+ hours daily on screens. Parents set limits but enforcement creates daily battles. Current tools are either too strict or too lenient.",
    persona: { name: "The Johnsons", age: 42, role: "Parents of 3 Children (Ages 8, 11, 14)", bio: "The Johnsons argue about screens daily. Their 14-year-old circumvents every parental control they've tried.", goals: ["Set reasonable limits collaboratively", "Encourage self-regulation", "Reduce daily arguments about screens"], frustrations: ["Kids hack parental controls", "Different age-appropriate limits are complex", "Feel like the 'bad guys'"] },
    constraints: ["Age-appropriate flexibility", "Collaborative (not authoritarian)", "Works across devices and platforms", "Tamper-resistant but not invasive"]
  },
  {
    id: "gs-004",
    hmw: "How might we make online dating safer for women?",
    category: "Gaming & Social",
    difficulty: "Advanced",
    context: "57% of women on dating apps report being harassed. Safety features exist but are opt-in and after-the-fact. Women spend significant emotional labor screening for safety.",
    persona: { name: "Samantha Lee", age: 29, role: "Marketing Manager", bio: "Sam has been on dating apps for 3 years. She's had multiple uncomfortable encounters despite being cautious.", goals: ["Feel safe meeting matches", "Quickly identify red flags", "Share location with friends easily"], frustrations: ["Unverified profiles", "Blocking doesn't prevent new accounts", "Safety features feel like afterthoughts"] },
    constraints: ["Proactive, not reactive safety", "No victim-blaming design", "Identity verification without exclusion", "Emergency features built-in"]
  },
  // 79-85: Travel & Hospitality
  {
    id: "th-001",
    hmw: "How might we make travel planning accessible for people with disabilities?",
    category: "Travel & Hospitality",
    difficulty: "Advanced",
    context: "1B people have disabilities globally. Travel sites rarely show accessibility info. Wheelchair users spend 3x longer planning trips than able-bodied travelers.",
    persona: { name: "Olivia Park", age: 36, role: "Wheelchair User & Travel Blogger", bio: "Olivia has traveled to 30 countries. Every trip requires hours of research to find accessible accommodations.", goals: ["Find verified accessible hotels", "Plan accessible routes", "Share accessibility reviews"], frustrations: ["'Accessible' means different things to different hotels", "Photos don't show bathroom details", "No crowdsourced accessibility data"] },
    constraints: ["Verified accessibility details", "Photo-based reviews", "Crowdsourced data", "Works with major booking platforms"]
  },
  {
    id: "th-002",
    hmw: "How might we reduce the environmental impact of tourism in fragile ecosystems?",
    category: "Travel & Hospitality",
    difficulty: "Intermediate",
    context: "Over-tourism damages fragile ecosystems. Popular sites face erosion, wildlife disruption, and pollution. Visitor caps are unpopular and hard to enforce.",
    persona: { name: "Ranger Ana Torres", age: 38, role: "National Park Ranger", bio: "Ana manages a park that went from 500K to 2M visitors in 5 years. Trails are eroding and wildlife is retreating.", goals: ["Distribute visitors across the park", "Educate visitors on impact", "Enforce capacity without being punitive"], frustrations: ["Everyone goes to the same 3 spots", "Visitors ignore signs", "No real-time crowd data"] },
    constraints: ["Real-time visitor tracking", "No cell service in remote areas", "Works with existing infrastructure", "Multi-language support"]
  },
  {
    id: "th-003",
    hmw: "How might we help solo travelers feel safe in unfamiliar cities?",
    category: "Travel & Hospitality",
    difficulty: "Beginner",
    context: "Solo travel is growing 131% annually. Safety concerns, especially for women, remain the top barrier. Existing safety features are reactive.",
    persona: { name: "Mia Zhang", age: 27, role: "Solo Female Traveler", bio: "Mia travels alone for work and pleasure. She's cautious but wants to explore without anxiety.", goals: ["Know safe neighborhoods", "Connect with trusted locals", "Share real-time location with family"], frustrations: ["Safety info is scattered and outdated", "Travel apps focus on attractions, not safety", "Feels vulnerable walking alone at night"] },
    constraints: ["Offline capable", "Crowdsourced safety data", "Cultural sensitivity", "Battery-efficient tracking"]
  },
  {
    id: "th-004",
    hmw: "How might we help hotels reduce energy waste without affecting guest comfort?",
    category: "Travel & Hospitality",
    difficulty: "Intermediate",
    context: "Hotels spend $2,196 per room annually on energy. Guests leave lights and AC on in empty rooms. Key card systems are easily bypassed.",
    persona: { name: "Robert Simmons", age: 52, role: "Hotel Operations Director", bio: "Robert manages a 300-room hotel. Energy costs have risen 40% in 3 years.", goals: ["Reduce energy costs by 30%", "Maintain 5-star comfort", "Meet corporate sustainability goals"], frustrations: ["Guests bypass key card systems", "Smart room tech is expensive to retrofit", "Staff forget to check empty rooms"] },
    constraints: ["Works with existing HVAC", "No guest experience degradation", "ROI within 2 years", "Retrofittable"]
  },
  // 86-92: Health & Wellness
  {
    id: "hw-001",
    hmw: "How might we help people with chronic pain manage their condition without over-relying on medication?",
    category: "Health & Wellness",
    difficulty: "Intermediate",
    context: "50M Americans live with chronic pain. Opioid prescriptions are declining but alternatives are fragmented and hard to access.",
    persona: { name: "Steve Campbell", age: 48, role: "Construction Worker with Back Pain", bio: "Steve has had chronic back pain for 10 years. His doctor reduced his pain meds. He doesn't know what else to try.", goals: ["Find non-medication pain relief", "Track what works for him", "Stay working despite pain"], frustrations: ["Physical therapy appointments conflict with work", "Insurance doesn't cover alternative treatments", "Pain varies day to day unpredictably"] },
    constraints: ["Evidence-based approaches only", "Works with insurance systems", "Offline tracking", "Provider collaboration features"]
  },
  {
    id: "hw-002",
    hmw: "How might we help new parents manage sleep deprivation safely?",
    category: "Health & Wellness",
    difficulty: "Beginner",
    context: "New parents lose 350 hours of sleep in the first year. Sleep deprivation affects decision-making, driving, and mental health.",
    persona: { name: "Carlos & Wei Chen", age: 32, role: "New Parents of Twins", bio: "Carlos and Wei haven't slept more than 3 hours straight in 4 months. They take turns but are both exhausted.", goals: ["Optimize their sleep schedule", "Know when they're too tired to drive", "Maintain their relationship through exhaustion"], frustrations: ["Sleep advice assumes one baby", "Apps track baby sleep, not parent sleep", "Too tired to implement complex systems"] },
    constraints: ["Extremely simple interface", "Works for multiple caregivers", "Evidence-based recommendations", "No judgment about parenting choices"]
  },
  {
    id: "hw-003",
    hmw: "How might we make therapy more accessible for men who won't seek traditional counseling?",
    category: "Health & Wellness",
    difficulty: "Advanced",
    context: "Men are 3.5x more likely to die by suicide but half as likely to seek mental health treatment. Stigma and format are the top barriers.",
    persona: { name: "Jake Turner", age: 34, role: "Firefighter and Father of Two", bio: "Jake knows he needs help after a traumatic call but won't sit in a therapist's office. He thinks it shows weakness.", goals: ["Process difficult emotions", "Find support that feels masculine", "Not be labeled as 'mentally ill'"], frustrations: ["Therapy feels like weakness", "Online options feel impersonal", "Doesn't relate to typical therapy marketing"] },
    constraints: ["Non-clinical framing", "Peer support option", "Anonymous entry point", "Action-oriented approach"]
  },
  {
    id: "hw-004",
    hmw: "How might we help people with diabetes make food choices at restaurants?",
    category: "Health & Wellness",
    difficulty: "Beginner",
    context: "34M Americans have diabetes. Restaurant menus rarely show carb counts or glycemic impact. Eating out feels risky and stressful.",
    persona: { name: "Patricia Williams", age: 56, role: "Type 2 Diabetic Retired Teacher", bio: "Patricia avoids eating out because she can't calculate carb counts. She misses socializing over meals.", goals: ["Eat out without blood sugar spikes", "Quickly estimate carb content", "Enjoy meals without anxiety"], frustrations: ["Menus don't show nutrition info", "Estimating portions is hard", "Different cuisines have hidden sugars"] },
    constraints: ["Works with any restaurant", "Offline capable", "Photo-based estimation", "Connects with glucose monitor data"]
  },
  {
    id: "hw-005",
    hmw: "How might we reduce burnout among healthcare workers?",
    category: "Health & Wellness",
    difficulty: "Intermediate",
    context: "63% of physicians report burnout. Nurse turnover is at record highs. The people we rely on for health are themselves unwell.",
    persona: { name: "Nurse James Wilson", age: 31, role: "ICU Nurse", bio: "James has worked ICU for 6 years. He loves his patients but is exhausted, cynical, and considering leaving nursing.", goals: ["Find moments of rest during shifts", "Process emotional toll", "Reconnect with why he became a nurse"], frustrations: ["Wellness programs feel performative", "No time for self-care", "Talking about burnout feels taboo"] },
    constraints: ["Usable during shifts", "Doesn't add to workload", "Peer-supported", "Management buy-in tools"]
  },
  // 93-100: Emerging Tech & Society
  {
    id: "et-001",
    hmw: "How might we help citizens understand how AI decisions affect them?",
    category: "Emerging Tech",
    difficulty: "Advanced",
    context: "AI makes decisions about loan approvals, job applications, and parole. Most people don't know AI is involved, let alone how to challenge it.",
    persona: { name: "Andre Jackson", age: 40, role: "Small Business Owner Denied a Loan", bio: "Andre was denied a business loan by an algorithm. No one can explain why. He has good credit and 10 years of history.", goals: ["Understand why he was denied", "Challenge the decision", "Know his rights regarding AI decisions"], frustrations: ["No human to talk to", "Decision reasons are vague", "Doesn't know AI was involved"] },
    constraints: ["Plain language explanations", "Actionable appeal process", "Works across industries", "Legal framework integration"]
  },
  {
    id: "et-002",
    hmw: "How might we protect children's privacy in a world of smart toys and devices?",
    category: "Emerging Tech",
    difficulty: "Intermediate",
    context: "Smart toys collect voice recordings, location data, and behavioral patterns from children. Parents often don't realize the extent of data collection.",
    persona: { name: "Michelle Barnes", age: 36, role: "Mother of Two (Ages 4 and 7)", bio: "Michelle bought her kids a smart speaker and interactive toys. She later learned they record and store conversations.", goals: ["Know what data is collected", "Control data retention", "Make informed purchasing decisions"], frustrations: ["Privacy policies are 30 pages long", "Can't opt out without losing features", "No kid-privacy ratings for products"] },
    constraints: ["Simple privacy dashboard", "Product comparison tool", "COPPA-aligned guidance", "Manufacturer-agnostic"]
  },
  {
    id: "et-003",
    hmw: "How might we prepare workers for jobs that don't exist yet?",
    category: "Emerging Tech",
    difficulty: "Intermediate",
    context: "65% of children entering school today will work in jobs that don't exist yet. Current education and training systems prepare for today's jobs.",
    persona: { name: "Derek Thompson", age: 42, role: "Factory Worker Facing Automation", bio: "Derek's job will likely be automated in 5 years. He wants to reskill but doesn't know what skills will matter.", goals: ["Identify future-proof skills", "Reskill without going back to school full-time", "Maintain his income during transition"], frustrations: ["Career advice is generic", "Training programs are expensive", "Doesn't know which predictions to trust"] },
    constraints: ["Skills-based, not degree-based", "Part-time learning compatible", "Industry-validated credentials", "Financial support integration"]
  },
  {
    id: "et-004",
    hmw: "How might we combat deepfake misinformation without censorship?",
    category: "Emerging Tech",
    difficulty: "Advanced",
    context: "Deepfakes are used to spread misinformation. Detection tools exist but aren't accessible to everyday users. The line between satire and manipulation is unclear.",
    persona: { name: "Sandra Kelly", age: 63, role: "Local Newspaper Editor", bio: "Sandra's paper received a deepfake video of the mayor. She couldn't verify it before a competitor published it.", goals: ["Quickly verify media authenticity", "Educate her audience about deepfakes", "Maintain journalistic credibility"], frustrations: ["Verification tools require technical expertise", "Speed pressure leads to errors", "Readers share without checking"] },
    constraints: ["Real-time verification", "No technical expertise required", "Transparent methodology", "Free for journalists"]
  },
  {
    id: "et-005",
    hmw: "How might we make smart home technology work for multigenerational households?",
    category: "Emerging Tech",
    difficulty: "Beginner",
    context: "Multigenerational homes are rising. Smart home devices assume a single user or couple. Different generations have different needs and tech comfort levels.",
    persona: { name: "The Nakamura Family", age: 45, role: "Three-Generation Household", bio: "The Nakamuras live with grandparents (70s), parents (40s), and children (teens). Their smart home confuses grandma and annoys the teenager.", goals: ["Each person controls their own space", "Safety features for grandparents", "Entertainment for teens"], frustrations: ["Voice assistant responds to everyone", "Grandma accidentally triggers automations", "No user profiles for home devices"] },
    constraints: ["Multi-user profiles", "Accessibility for elderly", "Privacy between family members", "Works with existing smart devices"]
  },
  {
    id: "et-006",
    hmw: "How might we help small towns attract remote workers without losing their character?",
    category: "Emerging Tech",
    difficulty: "Beginner",
    context: "Small towns are losing population. Remote work offers an opportunity to attract new residents, but an influx can change the town's character and raise costs.",
    persona: { name: "Mayor Tom Henderson", age: 58, role: "Mayor of a Town of 5,000", bio: "Tom's town lost 20% of its population in a decade. He wants remote workers but fears becoming another generic suburb.", goals: ["Attract 200 remote workers in 2 years", "Preserve town character", "Improve infrastructure sustainably"], frustrations: ["No fast internet in parts of town", "Housing is cheap but limited", "Young locals can't compete with remote salaries"] },
    constraints: ["Infrastructure-first approach", "Community input required", "Affordable housing protections", "Broadband expansion plan"]
  },
  {
    id: "et-007",
    hmw: "How might we ensure algorithmic fairness in predictive policing systems?",
    category: "Emerging Tech",
    difficulty: "Advanced",
    context: "Predictive policing algorithms disproportionately target minority communities. Historical crime data reflects biased enforcement, creating feedback loops.",
    persona: { name: "Chief Patricia Morales", age: 50, role: "Police Chief in a Mid-Size City", bio: "Chief Morales adopted predictive policing but community trust plummeted. She wants data-driven policing without bias.", goals: ["Reduce crime without targeting communities", "Build community trust", "Use data responsibly"], frustrations: ["Algorithm's logic is opaque", "Community protests are growing", "Officers rely too heavily on predictions"] },
    constraints: ["Auditable algorithms", "Community oversight board", "Bias testing requirements", "Alternative data sources"]
  },
  {
    id: "et-008",
    hmw: "How might we help elderly people maintain independence through technology without overwhelming them?",
    category: "Emerging Tech",
    difficulty: "Beginner",
    context: "Technology can help seniors live independently longer, but 42% of seniors say technology is too complicated. Families install devices seniors never use.",
    persona: { name: "Eleanor Price", age: 82, role: "Independent Senior Living Alone", bio: "Eleanor's children bought her a tablet, smart watch, and video doorbell. She uses none of them.", goals: ["Stay in her home safely", "Communicate with family easily", "Not feel incompetent"], frustrations: ["Too many devices and passwords", "Instructions assume tech knowledge", "Feels like technology is replacing human contact"] },
    constraints: ["Single-device simplicity", "No passwords to remember", "Human support available", "Gradual feature introduction"]
  },
  {
    id: "gov-001",
    hmw: "How might we make public transit schedules understandable for non-native speakers?",
    category: "Government",
    difficulty: "Beginner",
    context: "Cities with diverse immigrant populations see low public transit adoption partly due to confusing schedules and signage available only in one language.",
    persona: { name: "Fatima Al-Rashid", age: 34, role: "Recent Immigrant and Factory Worker", bio: "Fatima moved from Syria and relies on buses to commute. She often misses connections due to confusing route maps.", goals: ["Get to work on time", "Navigate transfers confidently", "Help her children use transit independently"], frustrations: ["Signs are only in English", "Route changes aren't communicated clearly", "Apps require credit cards she doesn't have"] },
    constraints: ["Multilingual support for 5+ languages", "Works offline", "No account required", "Low-literacy friendly"]
  },
  {
    id: "gov-002",
    hmw: "How might we increase citizen participation in local government budget decisions?",
    category: "Government",
    difficulty: "Intermediate",
    context: "Participatory budgeting gives citizens a say, but turnout is below 5% in most cities. Meetings are held at inconvenient times and materials are dense.",
    persona: { name: "Derek Washington", age: 29, role: "Community Organizer", bio: "Derek believes in civic engagement but can't convince neighbors the process matters. Most think it's performative.", goals: ["Increase participation 10x", "Make budget data accessible", "Show residents their votes matter"], frustrations: ["PDFs with 200-page budgets", "No feedback loop after voting", "Only retirees attend meetings"] },
    constraints: ["Mobile-first", "Results visible within 48 hours", "Accessible in public libraries", "No jargon"]
  },
  {
    id: "gov-003",
    hmw: "How might we help small business owners navigate permit applications without hiring consultants?",
    category: "Government",
    difficulty: "Advanced",
    context: "Starting a business requires permits from multiple agencies. The average small business spends $12,000 on compliance consulting in year one.",
    persona: { name: "Rosa Martinez", age: 41, role: "Aspiring Restaurant Owner", bio: "Rosa is a talented chef trying to open her first restaurant. The permit process has taken 8 months and counting.", goals: ["Open her restaurant within budget", "Understand requirements clearly", "Track application status"], frustrations: ["Each agency has different forms", "Requirements change without notice", "Phone lines have 2-hour waits"] },
    constraints: ["Integrates with existing agency systems", "Step-by-step guidance", "Real-time status tracking", "Bilingual support"]
  },
  {
    id: "rt-001",
    hmw: "How might we reduce food waste in restaurant kitchens without adding prep complexity?",
    category: "Retail & Commerce",
    difficulty: "Intermediate",
    context: "Restaurants waste 30-40% of purchased food. Kitchen staff are too busy to track waste, and existing solutions require manual logging.",
    persona: { name: "Chef Andre Dubois", age: 38, role: "Executive Chef at a Mid-Range Restaurant", bio: "Andre cares about sustainability but his team of 6 is stretched thin during service. He needs solutions that don't slow the kitchen.", goals: ["Cut food costs by 15%", "Reduce waste without adding labor", "Track patterns automatically"], frustrations: ["Logging waste takes time nobody has", "Inventory systems don't match real usage", "Staff forget to rotate stock"] },
    constraints: ["Works in humid/greasy kitchen environment", "No additional staff training beyond 30 min", "Integrates with POS", "Under $200/month"]
  },
  {
    id: "rt-002",
    hmw: "How might we help brick-and-mortar stores compete with same-day delivery from online retailers?",
    category: "Retail & Commerce",
    difficulty: "Advanced",
    context: "Local retailers lose 23% of sales to online competitors offering same-day delivery. Most lack the logistics infrastructure to match.",
    persona: { name: "Priya Kapoor", age: 45, role: "Owner of a Family Hardware Store", bio: "Priya's store has served the community for 20 years but revenue dropped 30% since a major online retailer opened a distribution center nearby.", goals: ["Match online delivery speeds", "Leverage local expertise as advantage", "Keep costs manageable"], frustrations: ["Can't afford fleet of drivers", "Website gets little traffic", "Customers browse in-store then buy online"] },
    constraints: ["Budget under $500/month", "Works with existing inventory", "Covers 15-mile radius", "Same-day fulfillment"]
  },
  {
    id: "mn-001",
    hmw: "How might we help factory workers report safety concerns without fear of retaliation?",
    category: "Manufacturing",
    difficulty: "Intermediate",
    context: "OSHA estimates 50% of workplace injuries go unreported. Workers fear job loss, especially in at-will employment states.",
    persona: { name: "Carlos Vega", age: 33, role: "Assembly Line Worker", bio: "Carlos noticed a machine guard is loose but his supervisor dismissed it. Last month a coworker was injured on a similar machine.", goals: ["Report hazards safely", "See action taken on reports", "Protect his job"], frustrations: ["Anonymous hotline isn't truly anonymous", "Supervisor controls his schedule", "HR seems aligned with management"] },
    constraints: ["Truly anonymous reporting", "Works on basic smartphones", "Available in Spanish", "Tamper-proof records"]
  },
  {
    id: "mn-002",
    hmw: "How might we reduce onboarding time for new manufacturing employees from 6 weeks to 2?",
    category: "Manufacturing",
    difficulty: "Advanced",
    context: "Manufacturing faces a skilled labor shortage. Long onboarding periods cost $15,000 per employee and many quit before completing training.",
    persona: { name: "Tamika Johnson", age: 26, role: "New CNC Machine Operator", bio: "Tamika was excited about her new job but after 3 weeks of classroom training she still hasn't touched a machine. She's considering leaving.", goals: ["Learn by doing", "Feel productive quickly", "Understand safety protocols intuitively"], frustrations: ["Training manuals are 400 pages", "Classroom sessions are boring", "No hands-on practice until week 4"] },
    constraints: ["Safety cannot be compromised", "Works alongside production", "Measurable competency checkpoints", "Supports different learning speeds"]
  },
  {
    id: "sp-001",
    hmw: "How might we help amateur athletes track recovery as seriously as they track performance?",
    category: "Sports & Fitness",
    difficulty: "Beginner",
    context: "Weekend warriors and amateur athletes obsess over performance metrics but ignore recovery, leading to overtraining injuries that sideline them for months.",
    persona: { name: "Jake Morrison", age: 31, role: "Amateur Marathon Runner and Software Developer", bio: "Jake runs 50 miles a week while working full-time. He tracks every run but ignores sleep and nutrition. He's had two stress fractures.", goals: ["Run a sub-3-hour marathon", "Stay injury-free", "Balance training with work"], frustrations: ["Recovery feels like wasted time", "Too many apps for different metrics", "Doesn't know when to rest vs push through"] },
    constraints: ["Single dashboard for all metrics", "Integrates with running watches", "Evidence-based recommendations", "No subscription fatigue"]
  },
  {
    id: "sp-002",
    hmw: "How might we make youth sports more inclusive for children with physical disabilities?",
    category: "Sports & Fitness",
    difficulty: "Intermediate",
    context: "Only 1 in 5 children with disabilities participates in organized sports. Most leagues lack adaptive programs, and parents don't know what's available.",
    persona: { name: "Lisa Chen", age: 39, role: "Mother of a Child with Cerebral Palsy", bio: "Lisa's son Marcus loves basketball but every league they've tried treats him as an afterthought. She drives 45 minutes to the nearest adaptive program.", goals: ["Find local adaptive sports easily", "Ensure coaches are trained", "Help Marcus make friends through sports"], frustrations: ["Programs are scattered and poorly advertised", "Coaches don't know how to adapt activities", "Other parents are uncomfortable"] },
    constraints: ["Searchable by disability type and location", "Coach training resources included", "Parent community features", "Free for families"]
  },
  {
    id: "tr-001",
    hmw: "How might we help solo travelers feel safe while exploring unfamiliar cities?",
    category: "Travel",
    difficulty: "Beginner",
    context: "Solo travel is growing 40% year-over-year, but safety concerns—especially for women and LGBTQ+ travelers—limit where and how people explore.",
    persona: { name: "Aisha Nkemelu", age: 27, role: "Solo Female Traveler and Freelance Photographer", bio: "Aisha travels to capture street photography. She's been followed twice and harassed once. She now avoids exploring after dark.", goals: ["Explore confidently at any hour", "Connect with trusted locals", "Share location with someone she trusts"], frustrations: ["Safety apps are reactive, not preventive", "Travel forums give outdated advice", "Hotel staff don't know neighborhood-level safety"] },
    constraints: ["Works without data connection", "No social media account required", "Community-verified safety data", "Panic button feature"]
  },
  {
    id: "tr-002",
    hmw: "How might we reduce the environmental impact of tourism on fragile ecosystems?",
    category: "Travel",
    difficulty: "Advanced",
    context: "Overtourism damages coral reefs, hiking trails, and historic sites. Visitor caps help but frustrate travelers who planned trips around specific destinations.",
    persona: { name: "Dr. Kai Nakamura", age: 44, role: "Marine Biologist and Tourism Board Advisor", bio: "Kai watches 500 daily snorkelers destroy the reef he studies. He needs to balance conservation with the island's economic dependence on tourism.", goals: ["Reduce reef damage by 50%", "Maintain tourism revenue", "Educate visitors effectively"], frustrations: ["Visitor caps are politically impossible", "Educational signage is ignored", "Tour operators prioritize volume over sustainability"] },
    constraints: ["Revenue-neutral for local economy", "Measurable ecological impact", "Visitor satisfaction maintained", "Scalable to other ecosystems"]
  },
  {
    id: "lg-001",
    hmw: "How might we help tenants understand their lease agreements without legal expertise?",
    category: "Legal",
    difficulty: "Beginner",
    context: "68% of renters sign leases they don't fully understand. Hidden clauses about fees, maintenance responsibilities, and termination catch tenants off guard.",
    persona: { name: "Jordan Davis", age: 23, role: "First-Time Renter and College Graduate", bio: "Jordan just signed a lease for his first apartment. He didn't realize he's responsible for pest control costs until roaches appeared.", goals: ["Understand every clause before signing", "Know his rights as a tenant", "Compare lease terms across apartments"], frustrations: ["Legal language is impenetrable", "Can't afford a lawyer for a lease review", "Landlords rush the signing process"] },
    constraints: ["Plain-language summaries", "State-specific legal accuracy", "Free tier available", "Highlights unusual clauses"]
  },
  {
    id: "lg-002",
    hmw: "How might we help small claims court filers navigate the process without an attorney?",
    category: "Legal",
    difficulty: "Intermediate",
    context: "Small claims courts handle disputes under $10,000 but the filing process confuses most people. 40% of valid claims are dismissed due to procedural errors.",
    persona: { name: "Vanessa Park", age: 37, role: "Freelance Designer Owed $4,500", bio: "A client refused to pay Vanessa for completed work. She wants to file in small claims court but doesn't know where to start.", goals: ["File her claim correctly the first time", "Understand what evidence to bring", "Feel prepared for the hearing"], frustrations: ["Court website is a maze of PDFs", "Filing deadlines are confusing", "Doesn't know courtroom etiquette"] },
    constraints: ["Step-by-step guided workflow", "Jurisdiction-specific forms", "Evidence checklist generator", "Hearing preparation guide"]
  },
  {
    id: "np-001",
    hmw: "How might we help nonprofit donors see the tangible impact of their contributions?",
    category: "Social Impact",
    difficulty: "Beginner",
    context: "Donor retention drops below 45% after the first gift. Most donors stop giving because they never see what their money accomplished.",
    persona: { name: "Margaret O'Brien", age: 58, role: "Retired Nurse and Monthly Donor", bio: "Margaret donates $50/month to three charities. She gets thank-you emails but never learns what her money did. She's considering stopping.", goals: ["See specific outcomes from her donations", "Feel connected to beneficiaries", "Know her money is well-spent"], frustrations: ["Generic thank-you emails", "Annual reports are vague", "No way to choose where money goes"] },
    constraints: ["Privacy-safe beneficiary stories", "Real-time impact updates", "Works for organizations of all sizes", "Low admin overhead"]
  },
  {
    id: "np-002",
    hmw: "How might we help volunteers find opportunities that match their specific skills?",
    category: "Social Impact",
    difficulty: "Intermediate",
    context: "Nonprofits need skilled volunteers (designers, accountants, developers) but most volunteer platforms only list manual labor opportunities.",
    persona: { name: "Ryan Cho", age: 30, role: "UX Designer Wanting to Give Back", bio: "Ryan has 8 years of design experience and wants to volunteer his skills, but every opportunity he finds involves sorting canned goods.", goals: ["Use his professional skills for good", "Find flexible remote opportunities", "Build portfolio pieces while helping"], frustrations: ["Platforms don't filter by skill type", "Organizations don't know how to use designers", "Time commitments are vague"] },
    constraints: ["Skill-based matching algorithm", "Project scope clearly defined", "Time estimate accuracy", "Portfolio-ready deliverables"]
  },
  {
    id: "ag-001",
    hmw: "How might we help small-scale farmers access fair market prices without middlemen?",
    category: "Agriculture",
    difficulty: "Advanced",
    context: "Smallholder farmers receive only 10-25% of the retail price. Middlemen control market access, and farmers lack price transparency.",
    persona: { name: "Ibrahim Mwangi", age: 48, role: "Coffee Farmer in Rural Kenya", bio: "Ibrahim grows premium coffee but sells it to a broker for $1.20/kg while it retails for $25/kg in Europe. He has no direct buyer access.", goals: ["Sell directly to roasters", "Know real-time market prices", "Coordinate with neighboring farmers for volume"], frustrations: ["No internet at the farm", "Brokers set prices take-it-or-leave-it", "Quality certifications are expensive"] },
    constraints: ["Works via SMS/USSD", "No smartphone required", "Cooperative-friendly", "Multilingual support"]
  },
  {
    id: "ag-002",
    hmw: "How might we help urban apartment dwellers grow meaningful amounts of food?",
    category: "Agriculture",
    difficulty: "Beginner",
    context: "Urban gardening interest surged 300% but most apartment dwellers abandon their gardens within 3 months due to space constraints and plant deaths.",
    persona: { name: "Sophie Laurent", age: 28, role: "Apartment Dweller and Sustainability Enthusiast", bio: "Sophie has a north-facing balcony and killed three basil plants. She wants to grow food but doesn't know what works in limited light.", goals: ["Grow enough herbs and greens to reduce grocery trips", "Keep plants alive", "Maximize tiny balcony space"], frustrations: ["Generic advice doesn't account for her conditions", "Seed packets assume garden-sized spaces", "Watering schedules are confusing"] },
    constraints: ["Personalized to light and space conditions", "Beginner-proof plant recommendations", "Seasonal reminders", "Community support features"]
  },
  {
    id: "re-001",
    hmw: "How might we help first-time homebuyers understand the true cost of homeownership?",
    category: "Real Estate",
    difficulty: "Intermediate",
    context: "46% of first-time buyers are surprised by costs beyond the mortgage. Property taxes, insurance, maintenance, and HOA fees catch them off guard.",
    persona: { name: "David and Sarah Kim", age: 32, role: "Married Couple Saving for First Home", bio: "The Kims saved $60,000 and think they can afford a $350,000 home. They haven't factored in PMI, property tax increases, or a new roof in 5 years.", goals: ["Know exactly what they can truly afford", "Avoid financial surprises", "Compare neighborhoods holistically"], frustrations: ["Mortgage calculators only show principal and interest", "Agents downplay costs to close deals", "Every friend gives different advice"] },
    constraints: ["Includes ALL ownership costs", "Location-specific tax data", "5-year projection model", "No realtor bias"]
  },
  {
    id: "mu-001",
    hmw: "How might we help independent musicians monetize their work without giving up creative control?",
    category: "Entertainment",
    difficulty: "Intermediate",
    context: "Streaming pays artists $0.003-0.005 per play. Independent musicians need 250,000 monthly streams to earn minimum wage from streaming alone.",
    persona: { name: "Luna Reyes", age: 25, role: "Independent Singer-Songwriter", bio: "Luna has 15,000 dedicated fans but earns only $400/month from streaming. She's considering quitting music for a stable job.", goals: ["Earn a living from music", "Maintain artistic independence", "Deepen fan relationships"], frustrations: ["Algorithms favor major labels", "Fan engagement tools are scattered", "Merch requires upfront investment she can't afford"] },
    constraints: ["No upfront costs for artist", "Direct fan-to-artist payments", "Integrates with existing platforms", "Analytics that matter for independents"]
  },
  {
    id: "en-001",
    hmw: "How might we help households reduce energy consumption without sacrificing comfort?",
    category: "Sustainability",
    difficulty: "Beginner",
    context: "Residential energy use accounts for 20% of US emissions. Smart thermostats help but 73% of owners never program them beyond default settings.",
    persona: { name: "Tom and Rachel Bennett", age: 45, role: "Suburban Family of Four", bio: "The Bennetts installed a smart thermostat, solar panels, and LED bulbs but their energy bill barely changed. They don't know what else to try.", goals: ["Reduce energy bill by 30%", "Understand where energy goes", "Make it easy for the whole family"], frustrations: ["Smart home devices don't talk to each other", "Can't tell which appliance wastes energy", "Kids leave everything on"] },
    constraints: ["Works with existing devices", "Family-friendly interface", "Gamification for kids", "Privacy-respecting energy monitoring"]
  },
  {
    id: "hr-001",
    hmw: "How might we help remote teams build genuine interpersonal connections?",
    category: "Workplace",
    difficulty: "Intermediate",
    context: "65% of remote workers feel disconnected from colleagues. Virtual happy hours and forced fun activities have a 70% dislike rate.",
    persona: { name: "Mei-Lin Zhang", age: 34, role: "Engineering Manager Leading a Distributed Team", bio: "Mei-Lin's team of 12 spans 4 time zones. She notices silos forming and junior engineers aren't getting mentorship organically.", goals: ["Build genuine team bonds", "Facilitate organic mentorship", "Reduce isolation without adding meetings"], frustrations: ["Virtual events feel forced", "No watercooler moments online", "Cultural differences make small talk awkward"] },
    constraints: ["Async-friendly for time zones", "Not another meeting", "Culturally sensitive", "Measurable engagement without surveillance"]
  },
  {
    id: "hr-002",
    hmw: "How might we help hiring managers reduce unconscious bias in resume screening?",
    category: "Workplace",
    difficulty: "Advanced",
    context: "Studies show identical resumes with 'ethnic-sounding' names receive 50% fewer callbacks. Blind resume screening helps but removes context needed for good decisions.",
    persona: { name: "Patricia Holmes", age: 52, role: "VP of Talent at a Fortune 500 Company", bio: "Patricia genuinely wants diverse hiring but her team screens 500 resumes per role. Time pressure defaults to pattern matching that favors familiar backgrounds.", goals: ["Increase diverse hires by 40%", "Maintain hiring quality", "Make the process fair and efficient"], frustrations: ["Blind screening loses too much context", "AI tools have their own biases", "Hiring managers resist process changes"] },
    constraints: ["Reduces bias without reducing information", "Integrates with existing ATS", "Auditable fairness metrics", "Gradual adoption path"]
  },
  {
    id: "pet-001",
    hmw: "How might we help pet owners manage chronic conditions in aging pets affordably?",
    category: "Healthcare",
    difficulty: "Intermediate",
    context: "Veterinary costs rose 30% in 5 years. 28% of pet owners delay or skip vet visits due to cost, leading to worse outcomes and higher eventual bills.",
    persona: { name: "Grace Okafor", age: 40, role: "Single Mother with an Aging Labrador", bio: "Grace's dog Max has arthritis and early kidney disease. Monthly vet costs exceed $300 and she's already cut her own expenses to the bone.", goals: ["Keep Max comfortable affordably", "Understand which treatments are essential vs optional", "Plan for future costs"], frustrations: ["Vet bills are unpredictable", "Can't tell if expensive treatments are necessary", "Pet insurance doesn't cover pre-existing conditions"] },
    constraints: ["Cost transparency", "Prioritized treatment recommendations", "Telemedicine option for check-ins", "Payment plan integration"]
  }
];

export const categories = [...new Set(problems.map(p => p.category))];
export const difficulties = ["Beginner", "Intermediate", "Advanced"] as const;
