const POSTS = [
  // ── LEVEL 1: Realistic corporate LinkedIn ──────────────────────────────────
  {
    id: 1,
    author: "Chad Worthington III",
    title: "VP of Strategic Growth Enablement | Ex-McKinsey | Forbes 30 Under 30",
    company: "SynergyBoost Inc.",
    avatarUrl: "https://i.pravatar.cc/48?img=11",
    timeAgo: "2m",
    content: `Thrilled to announce I've accepted the role of Chief Transformation Officer at SynergyBoost Inc.\n\nThis journey has been nothing short of incredible. From my humble beginnings at Wharton, to 7 years crushing it at McKinsey, to founding two companies (both successfully exited 🎉), I never imagined I'd be here.\n\nI am truly humbled, inspired, and READY.\n\nThank you to every single person who believed in me — especially those who didn't. You were my fuel. 🔥\n\n#NewChapter #Leadership #Grateful #Blessed #TransformingFutures`,
    reactions: { like: 1247, celebrate: 892, love: 341, insightful: 203, curious: 48 },
    comments: [
      { author: "Brittany Holloway", avatarUrl: "https://i.pravatar.cc/32?img=5", text: "Congratulations Chad!! So well deserved 🎉🎉" },
      { author: "Derek Patel", avatarUrl: "https://i.pravatar.cc/32?img=15", text: "The world needed this. Congrats king 👑" },
      { author: "Sarah M.", avatarUrl: "https://i.pravatar.cc/32?img=20", text: "I had the pleasure of working with Chad 3 years ago. He once saved a startup with a single PowerPoint. True story." }
    ],
    isSponsored: false,
    absurdityLevel: 1
  },
  {
    id: 2,
    author: "Jessica Leverage",
    title: "Serial Entrepreneur | 2x Founder | Mom of 3 | Building in Public",
    company: "GrindMindset Co.",
    avatarUrl: "https://i.pravatar.cc/48?img=25",
    timeAgo: "14m",
    content: `Unpopular opinion: Work-life balance is a myth invented by people who don't love what they do.\n\nI wake up at 4:17 AM every single day. I'm in the gym by 4:30. Cold plunge by 5:00. Three hours of deep work before my kids wake up. By 9 AM I've done more than most people do in a week.\n\nDo I miss things? Yes. Do I regret it? Absolutely not.\n\nYour dreams don't care about your "balance." 💪\n\n#Hustle #Grindset #4AM #Founder #BuildInPublic #Accountability`,
    reactions: { like: 4821, celebrate: 1203, love: 892, insightful: 3401, curious: 677 },
    comments: [
      { author: "Marcus Stone", avatarUrl: "https://i.pravatar.cc/32?img=12", text: "This. A thousand times this. 🔥" },
      { author: "Priya Sharma", avatarUrl: "https://i.pravatar.cc/32?img=33", text: "I needed to hear this today. Setting my alarm for 3:45 AM." },
      { author: "Dave K.", avatarUrl: "https://i.pravatar.cc/32?img=22", text: "As a doctor, please sleep. But also this is inspiring somehow." }
    ],
    isSponsored: false,
    absurdityLevel: 1
  },
  {
    id: 3,
    author: "Tyler Bandwidth",
    title: "Founder & CEO | Helping B2B SaaS Companies Scale to $10M ARR",
    company: "Bandwidth Capital",
    avatarUrl: "https://i.pravatar.cc/48?img=67",
    timeAgo: "1h",
    content: `3 years ago I was sleeping in my car.\n\nI had $47 in my bank account. My girlfriend had just left. I failed 3 startups. My dad said I was an embarrassment to the family.\n\nI remember sitting in that parking lot outside a Starbucks, stealing WiFi, cold-emailing 200 prospects.\n\nOne replied.\n\nThat one reply turned into a client.\nThat client turned into a referral.\nThat referral turned into a $3M contract.\n\nToday I closed a $3M deal.\n\nDon't give up. 🙏\n\n(DM me if you want to know the exact cold email template I used)\n\n#NeverGiveUp #Entrepreneurship #Sales #Success #GlowUp`,
    image: "https://picsum.photos/seed/3/560/300",
    reactions: { like: 18203, celebrate: 12441, love: 9832, insightful: 2103, curious: 4821 },
    comments: [
      { author: "Amanda F.", avatarUrl: "https://i.pravatar.cc/32?img=9", text: "This made me tear up. Sending this to my brother right now 😭" },
      { author: "Roberto Vega", avatarUrl: "https://i.pravatar.cc/32?img=55", text: "Can you DM me that cold email? I've been sleeping in a Marriott (company travel budget ran out)" },
      { author: "Skeptical Steve", avatarUrl: "https://i.pravatar.cc/32?img=60", text: "The Starbucks WiFi detail really sold it for me" }
    ],
    isSponsored: false,
    absurdityLevel: 2
  },
  {
    id: 4,
    author: "Olivia Stackhouse",
    title: "LinkedIn Top Voice | Digital Transformation Thought Leader | Keynote Speaker",
    company: "Thought Leadership Corp.",
    avatarUrl: "https://i.pravatar.cc/48?img=47",
    timeAgo: "2h",
    content: `I don't have an Ivy League degree.\nI don't have rich parents.\nI don't have 10 years of corporate experience.\nI don't have a network of 500 LinkedIn connections (I have 23,000).\n\nWhat I DO have:\n\n→ Hunger\n→ Grit\n→ ChatGPT Premium\n→ A Notion template\n→ A 6-step morning routine\n→ An accountability partner named Brad\n→ A vision board I look at every morning\n→ Access to 7 different AI tools\n→ A podcast no one listens to\n→ An unwavering belief in myself\n\nAnyone can do this. You just have to want it badly enough.\n\n#GrowthMindset #AI #Entrepreneurship #YouCanDoIt`,
    reactions: { like: 9102, celebrate: 3201, love: 2108, insightful: 7834, curious: 921 },
    comments: [
      { author: "Brad (the accountability partner)", avatarUrl: "https://i.pravatar.cc/32?img=18", text: "Thank you for the shoutout Olivia 🙏 our 5 AM Zoom calls mean the world to me" },
      { author: "GPT Enjoyer", avatarUrl: "https://i.pravatar.cc/32?img=30", text: "Inspired. Just subscribed to ChatGPT Premium. See you in the Forbes list." },
      { author: "Carla Weston", avatarUrl: "https://i.pravatar.cc/32?img=44", text: "What's the Notion template? Asking for a friend (the friend is me)" }
    ],
    isSponsored: false,
    absurdityLevel: 2
  },
  // ── LEVEL 3: Getting weird ─────────────────────────────────────────────────
  {
    id: 5,
    author: "BrainBust® Official",
    title: "Sponsored",
    company: "BrainBust Supplements",
    avatarUrl: "https://i.pravatar.cc/48?img=65",
    timeAgo: "Promoted",
    content: `Your LinkedIn bio is costing you MILLIONS.\n\nBrainBust® is the world's first neurocognitive supplement stack scientifically formulated to optimize your personal brand at the cellular level.\n\n✅ 47% more thought leadership per serving\n✅ Clinically proven to increase reply rates by 300%*\n✅ Each capsule contains: Lion's Mane, Ashwagandha, Hustle Dust™, and Proprietary Synergy Matrix\n\nUsed by 3 Forbes 30 Under 30 winners and at least one person who appeared on Shark Tank.\n\nUse code GRIND for 10% off.\n\n*These statements have not been evaluated by the FDA.`,
    image: "https://picsum.photos/seed/5/560/300",
    reactions: { like: 203, celebrate: 44, love: 12, insightful: 891, curious: 2341 },
    comments: [
      { author: "Totally Real Customer", avatarUrl: "https://i.pravatar.cc/32?img=2", text: "I took BrainBust for 30 days and my ARR doubled. Not even joking." },
      { author: "Jennifer Q.", avatarUrl: "https://i.pravatar.cc/32?img=7", text: "What is 'Hustle Dust™'?" },
      { author: "BrainBust® Official", avatarUrl: "https://i.pravatar.cc/32?img=65", text: "Hi Jennifer! That's proprietary 🙂 DM us!" }
    ],
    isSponsored: true,
    absurdityLevel: 3
  },
  {
    id: 6,
    author: "Gregory Paradigm",
    title: "Executive Coach | Father | Human Being | Recovering Consultant",
    company: "Self",
    avatarUrl: "https://i.pravatar.cc/48?img=52",
    timeAgo: "3h",
    content: `I asked my 7-year-old daughter what "hustle" means.\n\nShe looked up from her iPad and said: "Daddy, go touch grass."\n\nI cancelled my 2pm and sat with that for an hour.\n\nShe was right. I'd been optimizing my output when I should have been optimizing my presence. I'd been scaling my productivity when I should have been scaling my availability — to myself, to my family, to the simple joy of grass-touching.\n\nShe's now my Chief Clarity Officer.\n\nCome to think of it, she's been running my personal operating system for years. I just hadn't given her the title.\n\nListen to the children, leaders. They see what we've trained ourselves not to.\n\n#Leadership #Presence #Work #Family #Mindfulness`,
    reactions: { like: 21034, celebrate: 8321, love: 19203, insightful: 4892, curious: 1023 },
    comments: [
      { author: "Michelle Park", avatarUrl: "https://i.pravatar.cc/32?img=10", text: "I'm literally crying at my standing desk right now 😭" },
      { author: "Tim Hargrove", avatarUrl: "https://i.pravatar.cc/32?img=35", text: "Does she take on clients? Asking seriously." },
      { author: "Gregory Paradigm", avatarUrl: "https://i.pravatar.cc/32?img=52", text: "She charges $800/hour in Robux. DM me." }
    ],
    isSponsored: false,
    absurdityLevel: 3
  },
  {
    id: 7,
    author: "Praxis Momentum",
    title: "Disruptor-in-Chief | Future of Work Evangelist | 2x TEDx | Metaverse Architect",
    company: "Pivot Labs DAO",
    avatarUrl: "https://i.pravatar.cc/48?img=59",
    timeAgo: "4h",
    content: `I had a revelation in my Sensory Deprivation Pod this morning.\n\nThe future of work is not remote.\nIt's not hybrid.\nIt's not in-office.\n\nIt's PERPENDICULAR.\n\nHear me out. We've been thinking linearly. Remote vs. office is a false binary. The real question is: what if we worked at a 90-degree angle to existing paradigms?\n\nI call it Transverse Productivity™.\n\nInstead of asking "where do I work?" ask: "in which dimension does my highest self contribute maximum leverage?"\n\nI've built an entire framework around this. 48-page whitepaper dropping Tuesday.\n\nLike this post if you're ready to work perpendicular.\n\n#FutureOfWork #Innovation #ThoughtLeadership #TransverseProductivity`,
    reactions: { like: 34021, celebrate: 12043, love: 8932, insightful: 29103, curious: 15821 },
    comments: [
      { author: "Ashley Kumar", avatarUrl: "https://i.pravatar.cc/32?img=16", text: "I've never felt so seen. I've ALWAYS been a perpendicular worker." },
      { author: "Ron Blackwell", avatarUrl: "https://i.pravatar.cc/32?img=42", text: "Just sent this to our entire C-suite. We're pivoting our pivot strategy." },
      { author: "Normal Person", avatarUrl: "https://i.pravatar.cc/32?img=50", text: "What does this mean" }
    ],
    isSponsored: false,
    absurdityLevel: 3
  },
  // ── LEVEL 4: Full derangement ──────────────────────────────────────────────
  {
    id: 8,
    author: "Xander Disruption",
    title: "Founder @ 4 companies (hiring at all of them) | No VC, no problem | Built different",
    company: "Disruption Factory",
    avatarUrl: "https://i.pravatar.cc/48?img=63",
    timeAgo: "5h",
    content: `🚨 WE'RE HIRING 🚨\n\nLooking for a Ninja Rockstar Guru Wizard who:\n→ Bleeds KPIs\n→ Breathes synergy\n→ Dreams in OKRs\n→ Can disrupt an industry before their morning cold plunge\n→ Communicates via interpretive dance AND Slack\n→ Is "passionate" (mandatory)\n→ Identifies as an "intrapreneur"\n→ Works weekends (non-negotiable; Saturdays are just Mondays with better energy)\n→ Is comfortable with "unlimited PTO" (we've never seen anyone actually use it)\n\nCompensation: Competitive (we won't tell you what that means)\nEquity: Vibes\nBenefits: Ping pong table. Kombucha. A sense of purpose.\n\nApply in the comments with your favorite Gary Vee quote.\n\n#Hiring #Startup #Culture #WeAreFamily`,
    reactions: { like: 87203, celebrate: 43021, love: 21034, insightful: 9821, curious: 54021 },
    comments: [
      { author: "Todd Brimstone", avatarUrl: "https://i.pravatar.cc/32?img=38", text: '"Motivate and inspire people: You have to understand and appreciate their inspiration." — Gary Vee. Am I hired?' },
      { author: "Candidate #4,821", avatarUrl: "https://i.pravatar.cc/32?img=48", text: "I bleed KPIs literally. Does that count? (Please say yes)" },
      { author: "Labour Law Account", avatarUrl: "https://i.pravatar.cc/32?img=57", text: "Several things in this post are illegal in 47 states." },
      { author: "Xander Disruption", avatarUrl: "https://i.pravatar.cc/32?img=63", text: "We don't believe in states. We're fully remote from a legal standpoint." }
    ],
    isSponsored: false,
    absurdityLevel: 4
  },
  {
    id: 9,
    author: "Maximus Failforward",
    title: "Professional Failer | NFT Philosopher | Recovering MBA",
    company: "Failforward Capital",
    avatarUrl: "https://i.pravatar.cc/48?img=36",
    timeAgo: "6h",
    content: `I've failed 47 startups.\n\nEach one taught me the exact same lesson.\n\nEvery single time.\n\nThe lesson?\n\n.\n\n.\n\n.\n\n.\n\nMore NFTs.\n\nI know what you're thinking. "Max, the market crashed." Wrong. The market transcended. We didn't lose money — we liberated it from the fiat paradigm.\n\nStartup 1: Failed. Lesson: More NFTs.\nStartup 23: Failed. Lesson: More NFTs.\nStartup 47: Currently failing. Current lesson: EVEN MORE NFTs.\n\nI'm now raising $2M for my 48th venture: an NFT marketplace... for failed startup post-mortems. Each failure becomes a token. Each token becomes a legacy. Each legacy becomes a floor price.\n\nDeck available. Vibes-based valuation.\n\n#NFT #Web3 #Failure #Resilience #Innovation #Crypto`,
    image: "https://picsum.photos/seed/9/560/300",
    reactions: { like: 142083, celebrate: 89032, love: 54021, insightful: 203041, curious: 98321 },
    comments: [
      { author: "Venture Capital Kevin", avatarUrl: "https://i.pravatar.cc/32?img=19", text: "Sending term sheet. We love the vibes-based valuation model." },
      { author: "My Portfolio", avatarUrl: "https://i.pravatar.cc/32?img=31", text: "I am down 94%. I am now an NFT." },
      { author: "Econ Professor", avatarUrl: "https://i.pravatar.cc/32?img=43", text: "I'm going to use this as a primary source in my next paper." },
      { author: "Maximus Failforward", avatarUrl: "https://i.pravatar.cc/32?img=36", text: "DM me your failure. I'll mint it." }
    ],
    isSponsored: false,
    absurdityLevel: 4
  },
  {
    id: 10,
    author: "Celeste Quantum",
    title: "Chief Mindset Officer | Quantum Business Coach | Vibration Consultant",
    company: "Quantum Abundance LLC",
    avatarUrl: "https://i.pravatar.cc/48?img=29",
    timeAgo: "7h",
    content: `No one talks about the DARK SIDE of success.\n\nThe loneliness. The 7-figure pressure. The existential weight of being a thought leader in a world that isn't ready for your thoughts.\n\nI made $4.2M last year. I cried every single day.\n\nNot because I was sad. Because I was SO ALIGNED with my purpose that my nervous system could only process it through tears. Happy tears. Grateful tears. Quantum tears.\n\nWhen you're vibrating at the frequency of success, your body literally cannot contain the abundance. It leaks out through your eyes.\n\nIf you're not crying about your revenue, you're not thinking big enough.\n\n💎 DM me "QUANTUM" for my 12-week high-ticket coaching program ($15,000 investment — payment plans available)\n\n#Mindset #Success #HighTicket #Coaching #Abundance #Manifest`,
    reactions: { like: 203841, celebrate: 98021, love: 182034, insightful: 32041, curious: 154021 },
    comments: [
      { author: "Crying CEO", avatarUrl: "https://i.pravatar.cc/32?img=6", text: "I made $400k last year and only cried twice. This post is a wake up call." },
      { author: "Quantum Physics Dep.", avatarUrl: "https://i.pravatar.cc/32?img=26", text: "This is not how quantum mechanics works" },
      { author: "Celeste Quantum", avatarUrl: "https://i.pravatar.cc/32?img=29", text: "I think you mean it's not how quantum mechanics works YET 🌟" },
      { author: "My Therapist", avatarUrl: "https://i.pravatar.cc/32?img=46", text: "Please do not replace therapy with vibration consulting" }
    ],
    isSponsored: false,
    absurdityLevel: 4
  },
  // ── LEVEL 5: Complete cognitive collapse ──────────────────────────────────
  {
    id: 11,
    author: "Brandon Hyperscale 🧠",
    title: "THOUGHT LEADER 🧠 | DISRUPTOR 🧠 | VISIONARY 🧠 | I WAKE UP AT 2AM 🧠",
    company: "🧠🧠🧠🧠🧠",
    avatarUrl: "https://i.pravatar.cc/48?img=61",
    timeAgo: "8h",
    content: `GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND GRIND\n\n#Grind`,
    reactions: { like: 847000, celebrate: 612000, love: 489000, insightful: 923000, curious: 334000 },
    comments: [
      { author: "847,000 others", avatarUrl: "https://i.pravatar.cc/32?img=3", text: "847,000 people found this inspiring. We are all GRINDING together." },
      { author: "LinkedIn Algorithm", avatarUrl: "https://i.pravatar.cc/32?img=17", text: "This post is performing exceptionally well. Consider boosting." },
      { author: "My Brain", avatarUrl: "https://i.pravatar.cc/32?img=37", text: "please help me" }
    ],
    isSponsored: false,
    absurdityLevel: 5
  },
  {
    id: 12,
    author: "Zephyr Moonshot 🌙",
    title: "Interplanetary Business Development | B2Moon Pioneer | Space Synergy",
    company: "LunarScale Ventures",
    avatarUrl: "https://i.pravatar.cc/48?img=54",
    timeAgo: "9h",
    content: `🌙 MASSIVE ANNOUNCEMENT 🌙\n\nI am beyond thrilled 🧠 excited 🧠 and frankly 🧠 a little emotional 🧠 to share that I have officially 🧠 closed 🧠 a deal 🧠 with The Moon 🧠\n\nThe Moon said yes. 🧠\n\nAfter 18 months of cold outreach (DMs, carrier pigeon, telescope-based semaphore), The Moon finally responded.\n\nThe terms:\n→ We get the dark side (undervalued, high upside)\n→ They get my LinkedIn newsletter\n→ Revenue share: TBD pending gravitational due diligence\n→ Closing gift: a signed copy of "Zero to One" (hardcover)\n\nPeople said I was crazy to prospect a celestial body.\n\nThose people are NOT in my Mastermind.\n\nDue diligence is pending 🌙\nGo-live: Q3 (Earth time)\n\n#B2Moon #LunarSales #SpaceTech #Entrepreneurship #CloseMoreDeals 🌙`,
    reactions: { like: 1203000, celebrate: 892000, love: 541000, insightful: 2103000, curious: 1847000 },
    comments: [
      { author: "The Moon", avatarUrl: "https://i.pravatar.cc/32?img=62", text: "Confirmed 🌙 Looking forward to the partnership" },
      { author: "NASA", avatarUrl: "https://i.pravatar.cc/32?img=13", text: "We have questions" },
      { author: "The Sun", avatarUrl: "https://i.pravatar.cc/32?img=66", text: "I've been in your inbox for MONTHS Zephyr. Open my DMs." },
      { author: "Zephyr Moonshot 🌙", avatarUrl: "https://i.pravatar.cc/32?img=54", text: "Sun — you're too hot to handle right now. Q4 pipeline." }
    ],
    isSponsored: false,
    absurdityLevel: 5
  },
  {
    id: 13,
    author: "Axiom Deliverable",
    title: "Enterprise Solutions Architect | Leveraging Leverage to Leverage Leverage",
    company: "Synergistic Paradigm Group LLC Inc. Co.",
    avatarUrl: "https://i.pravatar.cc/48?img=58",
    timeAgo: "10h",
    content: `In today's rapidly evolving disruptive landscape, the convergence of next-generation paradigm shifts requires stakeholders to proactively leverage cross-functional synergies in order to ideate scalable solutions that move the needle vis-à-vis core competency bandwidth.\n\nCircling back on our deep-dive: the low-hanging fruit is no longer low-hanging. We need to boil the ocean, but smarter. We need to think outside the box that is inside the other box. We need to pivot our pivot.\n\nAt end of day, ROI is just KPI spelled differently if you squint.\n\nI've been in this industry for 15 years and I have never once understood anything I have said.\n\nThis post has gotten 40,000 likes.\n\nAsk me how.\n\n#Business #Strategy #Innovation #Leadership #ThoughtLeadership #Buzzwords #Synergy`,
    reactions: { like: 40000, celebrate: 18000, love: 9000, insightful: 65000, curious: 32000 },
    comments: [
      { author: "C-Suite Karen", avatarUrl: "https://i.pravatar.cc/32?img=8", text: "This is literally our company's entire strategic plan. Are you spying on us?" },
      { author: "MBA Graduate", avatarUrl: "https://i.pravatar.cc/32?img=27", text: "I paid $180,000 to learn exactly this. Worth it." },
      { author: "Dictionary", avatarUrl: "https://i.pravatar.cc/32?img=41", text: "Please stop." }
    ],
    isSponsored: false,
    absurdityLevel: 5
  },
  {
    id: 14,
    author: "Percival Nap-Standing",
    title: "Biohacker | Sleep Disruptor | Inventor | I Do Not Sleep Like You",
    company: "VerticalRest™",
    avatarUrl: "https://i.pravatar.cc/48?img=56",
    timeAgo: "11h",
    content: `I invented sleeping standing up.\n\nI know. I know.\n\nHear me out. Traditional sleep requires you to be HORIZONTAL. Passive. Surrendered. Taking up 6 feet of real estate while your competitors are AWAKE and GRINDING.\n\nI spent 4 years studying the sleep patterns of horses, flamingos, and one very tired parking attendant named Gerald.\n\nThe result: VerticalRest™ — a patented biohacking protocol that allows you to achieve REM sleep in a full standing position using only:\n→ A wall\n→ A willingness to evolve\n→ My $2,400 online course\n\nI now sleep 90 minutes per night. Vertically. While updating my LinkedIn.\n\nThis post was written during REM sleep. 🧠\n\n*Results may vary. Side effects include: falling, confusion, and becoming a LinkedIn post.\n\n#Biohacking #Sleep #Innovation #Disruption #VerticalRest #Productivity`,
    image: "https://picsum.photos/seed/14/560/300",
    reactions: { like: 2847000, celebrate: 1923000, love: 847000, insightful: 3204000, curious: 4100000 },
    comments: [
      { author: "Gerald (the parking attendant)", avatarUrl: "https://i.pravatar.cc/32?img=24", text: "I did not consent to being studied. Also I am fine." },
      { author: "Sleep Scientist", avatarUrl: "https://i.pravatar.cc/32?img=39", text: "Everything in this post is medically false. Everything." },
      { author: "Percival Nap-Standing", avatarUrl: "https://i.pravatar.cc/32?img=56", text: "Replying to this from my wall. Feeling refreshed. DM for the course link. 🧠" },
      { author: "A Horse", avatarUrl: "https://i.pravatar.cc/32?img=70", text: "Stop watching me sleep" }
    ],
    isSponsored: false,
    absurdityLevel: 5
  }
];

// Pool of extra posts for infinite scroll (randomly drawn)
const EXTRA_POSTS = [
  {
    id: 101,
    author: "Maxwell Synergy",
    title: "Chief Everything Officer | Thought Leading Thoughts",
    company: "Everything Co.",
    avatarUrl: "https://i.pravatar.cc/48?img=34",
    timeAgo: "12h",
    content: `Hot take: failure is just success that hasn't been optimized yet.\n\nI've been wrong about everything my entire career. Every prediction: wrong. Every bet: bad. Every pivot: a nosedive.\n\nAnd yet here I am, a LinkedIn Top Voice.\n\nMake it make sense. (DM me my course link so I can make it make money.)\n\n#Failure #Success #Mindset #CourseCreator`,
    reactions: { like: 23041, celebrate: 8901, love: 4321, insightful: 18302, curious: 7821 },
    comments: [
      { author: "Fan Account", avatarUrl: "https://i.pravatar.cc/32?img=4", text: "The delusion to English pipeline is real and it works" }
    ],
    isSponsored: false,
    absurdityLevel: 3
  },
  {
    id: 102,
    author: "Heather Bandwidth",
    title: "Scaling Humans | People Operations Disruptor | She/Her/Her Brand",
    company: "Human Capital Capital",
    avatarUrl: "https://i.pravatar.cc/48?img=14",
    timeAgo: "13h",
    content: `My LinkedIn inbox has 4,000 unread messages.\n\nEvery single one starts with: "Hi [First Name], I hope this message finds you well."\n\nI have never been found well. I live in a state of perpetual unfoundness. I am not well. I am a LinkedIn user.\n\n#PersonalBranding #Networking #Cold Outreach #PleaseStop`,
    reactions: { like: 184021, celebrate: 92034, love: 67021, insightful: 43021, curious: 29041 },
    comments: [
      { author: "Cold Emailer", avatarUrl: "https://i.pravatar.cc/32?img=21", text: "Hi Heather, I hope this comment finds you well. I wanted to reach out about a synergistic opportunity—" },
      { author: "Heather Bandwidth", avatarUrl: "https://i.pravatar.cc/32?img=14", text: "BLOCKED" }
    ],
    isSponsored: false,
    absurdityLevel: 4
  },
  {
    id: 103,
    author: "Sterling Leverage III",
    title: "Angel Investor | Built 12 Companies in my Sleep | Literally",
    company: "Sleep Ventures",
    avatarUrl: "https://i.pravatar.cc/48?img=68",
    timeAgo: "14h",
    content: `People ask me how I built 12 companies.\n\nI tell them: I didn't.\n\nMy subconscious did. While I was asleep.\n\nEvery night I go to sleep with a problem. Every morning I wake up with a term sheet.\n\nI am not the founder. I am the vessel. 🧠\n\n#Entrepreneurship #Sleep #Innovation #Vessel`,
    reactions: { like: 4892000, celebrate: 2103000, love: 1892000, insightful: 5821000, curious: 3021000 },
    comments: [
      { author: "Percival Nap-Standing", avatarUrl: "https://i.pravatar.cc/32?img=56", text: "This is exactly what VerticalRest™ enables. DM for course link." },
      { author: "Freud", avatarUrl: "https://i.pravatar.cc/32?img=64", text: "Interesting" }
    ],
    isSponsored: false,
    absurdityLevel: 5
  }
];
