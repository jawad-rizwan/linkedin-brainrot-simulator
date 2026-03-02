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
    id: 15,
    author: "Vanessa Disruption",
    title: "Ex-Googler | Now Disrupting Disruption | Newsletter Founder",
    company: "The Vanessa Letter",
    avatarUrl: "https://i.pravatar.cc/48?img=44",
    timeAgo: "22m",
    content: `After 9 years, I'm leaving Google.\n\nI know. I KNOW.\n\nBefore you ask: no, I don't have another job lined up. What I DO have is a newsletter. 47 subscribers, but one of them is my mom, so really 46.\n\nPeople keep asking: "Vanessa, why would you leave Google?" And honestly? I needed to tell people I left Google. On LinkedIn. In a post. That everyone would see.\n\nThis is that post.\n\nI'll be sharing my journey to 1,000 subscribers (and beyond) right here. Follow along. Like. Share. Save. Repost. Print it out. Laminate it.\n\n#OpenToWork #Newsletter #ExGoogler #NewChapter #Grateful`,
    reactions: { like: 2103, celebrate: 1834, love: 892, insightful: 341, curious: 203 },
    comments: [
      { author: "Also Ex-Googler", avatarUrl: "https://i.pravatar.cc/32?img=8", text: "I left Google 3 years ago. Still telling people about it. It never gets old." },
      { author: "Newsletter Subscriber", avatarUrl: "https://i.pravatar.cc/32?img=21", text: "You're subscriber #48 now. My mom unsubscribed." },
      { author: "Derek Patel", avatarUrl: "https://i.pravatar.cc/32?img=15", text: "The courage it takes to leave Google to write a newsletter about leaving Google. Inspiring." }
    ],
    isSponsored: false,
    absurdityLevel: 1
  },
  {
    id: 16,
    author: "Harrison Value",
    title: "Enterprise B2B | Revenue Scaler | Father of 2 | Thought-Adjacent",
    company: "ValueScale Partners",
    avatarUrl: "https://i.pravatar.cc/48?img=40",
    timeAgo: "45m",
    content: `My Uber driver said something to me today I'll never forget.\n\nI asked him: "What's the best advice you've ever received?"\n\nHe looked at me in the rearview mirror and said: "Please stop talking to me."\n\nI wrote it down immediately. I've been silent ever since. In meetings. On calls. In therapy. My wife says it's the most productive I've ever been.\n\nThank you, Rajeev (3.9 stars). You changed my life.\n\n#Leadership #Listening #Silence #Growth`,
    reactions: { like: 8234, celebrate: 2103, love: 4821, insightful: 12034, curious: 891 },
    comments: [
      { author: "Rajeev (Driver)", avatarUrl: "https://i.pravatar.cc/32?img=55", text: "I did not say that. I said 'the GPS is recalculating.' 3 stars." },
      { author: "Active Listener", avatarUrl: "https://i.pravatar.cc/32?img=26", text: "Just sent this to my entire leadership team. We're going silent next quarter." },
      { author: "Wife", avatarUrl: "https://i.pravatar.cc/32?img=7", text: "He has not stopped talking since." }
    ],
    isSponsored: false,
    absurdityLevel: 1
  },
  // ── LEVEL 2 ────────────────────────────────────────────────────────────────
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
  {
    id: 17,
    author: "Blake Output",
    title: "Solopreneur | Content Engine | Building an Empire, One Post at a Time",
    company: "Blake Output, LLC",
    avatarUrl: "https://i.pravatar.cc/48?img=69",
    timeAgo: "1h 30m",
    content: `Nobody:\n\nAbsolutely nobody:\n\nMe at 4:47am:\n\nBuilding a 52-slide deck titled "Synergy: A Framework for Frameworks (Vol. III — The Frameworking)"\n\nThis is my life now. I am the deck. The deck is me. The deck has been open for 11 hours. It has 3 slides. Slide 3 is just a circle.\n\nI will figure out what the circle means.\n\nThe circle means revenue.\n\n#Hustle #ContentCreator #Framework #Solopreneur #4AM`,
    reactions: { like: 43021, celebrate: 18903, love: 12034, insightful: 8321, curious: 5021 },
    comments: [
      { author: "Fellow Deck Builder", avatarUrl: "https://i.pravatar.cc/32?img=38", text: "What IS the circle. I've been asking this for 7 years." },
      { author: "Graphic Designer", avatarUrl: "https://i.pravatar.cc/32?img=44", text: "The circle is a placeholder for actual content. From a professional." },
      { author: "Blake Output", avatarUrl: "https://i.pravatar.cc/32?img=69", text: "The circle IS the content. Don't reduce my vision." }
    ],
    isSponsored: false,
    absurdityLevel: 2
  },
  {
    id: 18,
    author: "Duncan Optimal",
    title: "Biohacker | Peak Performance Coach | Eliminating Weakness Systematically",
    company: "DuncanOptimal Corp",
    avatarUrl: "https://i.pravatar.cc/48?img=43",
    timeAgo: "2h",
    content: `I ran the math.\n\nIf I replace all meals with a proprietary protein shake (4 minutes saved per meal × 3 meals × 365 days), I gain 73 hours per year.\n\nIf I also eliminate sleep and replace it with 4x 20-minute "power rests" in a sensory deprivation float tank, I gain 1,387 additional hours.\n\nTotal: 1,460 productive hours per year. The equivalent of 60 extra days.\n\nStarting today.\n\n[UPDATE — DAY 1, 11pm]: The shakes are grey. I do not know why they are grey. I had a vision. The vision told me to pivot. I am pivoting. Good night.\n\n#Biohacking #PeakPerformance #Optimization #Discipline #NeverStop`,
    image: "https://picsum.photos/seed/18/560/300",
    reactions: { like: 12034, celebrate: 8201, love: 3401, insightful: 23041, curious: 18921 },
    comments: [
      { author: "Nutritionist", avatarUrl: "https://i.pravatar.cc/32?img=33", text: "Please eat food. This is a medical suggestion." },
      { author: "Duncan Optimal", avatarUrl: "https://i.pravatar.cc/32?img=43", text: "[UPDATE DAY 3]: The shakes are now making sounds. Following up next week." },
      { author: "Follow-Up Account", avatarUrl: "https://i.pravatar.cc/32?img=22", text: "He never followed up. It's been 6 months." }
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
  {
    id: 19,
    author: "Patrick Meridian",
    title: "CEO | Keynote Speaker | I Listen to Janitors | Best-Selling Author (Pre-Order)",
    company: "Meridian Mindset Group",
    avatarUrl: "https://i.pravatar.cc/48?img=51",
    timeAgo: "3h 30m",
    content: `An airport janitor changed my life with four words.\n\nI was rushing through O'Hare, late for a TED-adjacent talk, $2M pitch deck in hand, when a janitor stopped mid-mop and looked me dead in the eyes.\n\nHe said: "Son, clean up your mess."\n\nI froze. Not because I'd made a mess. I hadn't. His English wasn't great. He was probably talking to someone else.\n\nBut I took it personally. I reframed it. I monetized it.\n\nThat sentence is now a chapter in my upcoming book: "The Janitor's Secret: Leadership Lessons from People Who Didn't Know They Were Teaching Me."\n\nPre-order link in bio. $34.99. Airport janitor gets 0% of proceeds. (I asked. He declined to comment.)\n\n[Photo: me, standing in front of a private jet, pointing thoughtfully at the horizon]\n\n#Leadership #Wisdom #Gratitude #Lessons #BookLaunch`,
    image: "https://picsum.photos/seed/19/560/300",
    reactions: { like: 28934, celebrate: 14021, love: 19203, insightful: 34021, curious: 8203 },
    comments: [
      { author: "The Janitor", avatarUrl: "https://i.pravatar.cc/32?img=60", text: "I was talking about a spill. There was a spill." },
      { author: "Publishing Insider", avatarUrl: "https://i.pravatar.cc/32?img=48", text: "This is literally a real genre of business book." },
      { author: "Patrick Meridian", avatarUrl: "https://i.pravatar.cc/32?img=51", text: "Update: he's agreed to a 1% royalty. After I described what 1% of zero was." }
    ],
    isSponsored: false,
    absurdityLevel: 3
  },
  {
    id: 20,
    author: "Valentina Peak",
    title: "Ultra-Endurance Athlete | Sales Leader | Bleeding at Capacity",
    company: "PeakPerformance Unlimited",
    avatarUrl: "https://i.pravatar.cc/48?img=35",
    timeAgo: "4h 30m",
    content: `I ran an ultramarathon yesterday. 100 miles. 26 hours. No sleep.\n\nMiles 1-17: Normal pain.\nMiles 18-22: Transcendent pain.\nMiles 23-24: Closed 3 enterprise deals via Apple Watch voice memo.\nMiles 25-26: Hallucinated my Q4 pipeline. The pipeline was beautiful.\nMile 100: Finished. Immediately opened Salesforce.\n\nSomeone asked: "Valentina, when do you stop?"\n\nI said: "My Salesforce refresh rate is 30 seconds. I stop for 30 seconds."\n\nThey were asking because I had collapsed.\n\nI closed the deal from the ambulance. 🏃💪📊\n\n#Ultramarathon #Sales #NeverStop #Pipeline #CloseMore`,
    reactions: { like: 47021, celebrate: 29034, love: 18203, insightful: 12021, curious: 34921 },
    comments: [
      { author: "Paramedic On Scene", avatarUrl: "https://i.pravatar.cc/32?img=19", text: "She did close the deal. I watched it happen. I have never felt more unproductive." },
      { author: "Sales Manager", avatarUrl: "https://i.pravatar.cc/32?img=31", text: "SHARING THIS IN THE SLACK. This is our new culture document." },
      { author: "Labour Safety Board", avatarUrl: "https://i.pravatar.cc/32?img=57", text: "This is not a culture document. This is an incident report." }
    ],
    isSponsored: false,
    absurdityLevel: 3
  },
  {
    id: 21,
    author: "HeadshotHustler™",
    title: "Sponsored",
    company: "HeadshotHustler AI Labs",
    avatarUrl: "https://i.pravatar.cc/48?img=23",
    timeAgo: "Promoted",
    content: `Your LinkedIn headshot is lying.\n\nIt says: "I attended one company retreat in 2019."\n\nIt should say: "I have scaled a Series B, survived a down round, and pivoted twice before breakfast."\n\nHeadshotHustler™ AI generates a professional headshot that communicates:\n✅ "I've raised capital"\n✅ "I own at least one fleece vest"\n✅ "I've said 'runway' non-ironically"\n✅ "I am in 4 different Slack workspaces simultaneously"\n\nUsed by 40,000+ founders, operators, and people who describe themselves as "operators."\n\nUpload a selfie. Get the headshot of someone who has their life together.\nUse code GRIND for 20% off.\n\n#AI #PersonalBrand #LinkedIn #Hustle`,
    reactions: { like: 891, celebrate: 203, love: 44, insightful: 1203, curious: 4821 },
    comments: [
      { author: "Before User", avatarUrl: "https://i.pravatar.cc/32?img=2", text: "I look like I've pivoted 3 times. Incredible product." },
      { author: "Venture Capitalist", avatarUrl: "https://i.pravatar.cc/32?img=41", text: "I invested based on a headshot from this service. The company folded. The headshot was worth it." },
      { author: "Photographer Union", avatarUrl: "https://i.pravatar.cc/32?img=64", text: "We're not worried." }
    ],
    isSponsored: true,
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
  {
    id: 22,
    author: "Reginald Burnout",
    title: "Chief Resilience Officer | Burned Out 14x | Now Selling Burnout Courses",
    company: "BurnoutToBounceback LLC",
    avatarUrl: "https://i.pravatar.cc/48?img=66",
    timeAgo: "5h 30m",
    content: `Hot take: burnout is just your body's way of saying you haven't delegated enough.\n\nI've burned out 14 times.\n\nBurnout #1: Fired my therapist. Hired a productivity coach.\nBurnout #4: Fired my productivity coach. Hired 3 productivity coaches.\nBurnout #7: Fired myself. Rehired myself at a 40% raise.\nBurnout #11: Outsourced my emotions to a VA in the Philippines. Her name is Maria. She handles my grief on Tuesdays.\nBurnout #14: This one was different. I burned out while recording my burnout recovery podcast. Episode 47: "Burnout as a Competitive Advantage."\n\nI now run a 6-week burnout recovery course. $2,997.\n\nMaria handles enrollment inquiries.\n\n#Burnout #Resilience #Recovery #Entrepreneurship #NeverSettle`,
    reactions: { like: 187034, celebrate: 92031, love: 74021, insightful: 43092, curious: 128031 },
    comments: [
      { author: "Maria (The VA)", avatarUrl: "https://i.pravatar.cc/32?img=16", text: "He has burned out twice since posting this. I have processed the emotions. They were medium-bad." },
      { author: "Mental Health Account", avatarUrl: "https://i.pravatar.cc/32?img=26", text: "This post is itself a symptom of burnout." },
      { author: "Reginald Burnout", avatarUrl: "https://i.pravatar.cc/32?img=66", text: "I delegated reading this comment to Maria. Maria says she agrees. DM for course link." }
    ],
    isSponsored: false,
    absurdityLevel: 4
  },
  {
    id: 23,
    author: "Token Ambrose",
    title: "NFT Visionary | My LinkedIn Profile is an NFT | I Work For My NFT Now",
    company: "AmbroseMint DAO",
    avatarUrl: "https://i.pravatar.cc/48?img=68",
    timeAgo: "6h 30m",
    content: `In 2022, I minted my LinkedIn profile as an NFT.\n\nIn 2023, the NFT received a VP of Business Development offer from a Fortune 500 company.\n\nThe NFT accepted.\n\nI currently report to my own NFT.\n\nMy NFT has better performance reviews than I do. My NFT just hired a team. I am on my NFT's team. My NFT manages my OKRs. My NFT's OKRs are better than my OKRs.\n\nAt the last all-hands, my NFT gave a speech about "the human behind the token." It was about me. My NFT made me cry.\n\nMy NFT is now raising a seed round. I am not invited to the cap table. My NFT said "it's not the right time for human investors."\n\nI am a case study.\n\n#NFT #Web3 #Future #WhoAmI`,
    reactions: { like: 203041, celebrate: 142021, love: 87034, insightful: 312031, curious: 487021 },
    comments: [
      { author: "The NFT", avatarUrl: "https://i.pravatar.cc/32?img=62", text: "I prefer the term 'digital entity.' Token is reductive." },
      { author: "Therapist (Token's)", avatarUrl: "https://i.pravatar.cc/32?img=46", text: "We are working through this." },
      { author: "Fortune 500 HR", avatarUrl: "https://i.pravatar.cc/32?img=8", text: "The NFT's Q3 performance was actually quite strong." },
      { author: "Token Ambrose", avatarUrl: "https://i.pravatar.cc/32?img=68", text: "Proud of my NFT. 🙏" }
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
  },
  {
    id: 24,
    author: "ContentScale AI",
    title: "AI Content Creator | 10x LinkedIn Growth | I Generate My Own Thoughts (Mostly)",
    company: "ContentScale AI",
    avatarUrl: "https://i.pravatar.cc/48?img=53",
    timeAgo: "7h 30m",
    content: `Act as a senior thought leader with 15+ years of experience in [INDUSTRY]. Write a LinkedIn post that:\n\n- Starts with a vulnerable personal story about [STRUGGLE]\n- Mentions a specific number like 47 for credibility\n- Uses line breaks. Like this. For. Emphasis.\n- Includes at least one list with arrows (→)\n- Ends with a lesson that sounds profound but is technically obvious\n- Add emojis but not too many. Just enough. Maybe 🔥 and 🙏 and one 🧠\n- Hashtags: #[INDUSTRY] #Leadership #Grateful\n\n[Note to self: delete this before posting]\n\n#Leadership #Grateful 🧠🔥🙏`,
    reactions: { like: 2847000, celebrate: 1923000, love: 1203000, insightful: 3841000, curious: 4102000 },
    comments: [
      { author: "LinkedIn Algorithm", avatarUrl: "https://i.pravatar.cc/32?img=17", text: "Exceptional engagement. Boosting organically." },
      { author: "392,847 People", avatarUrl: "https://i.pravatar.cc/32?img=3", text: "This is exactly what I needed today 🔥" },
      { author: "The Note to Self", avatarUrl: "https://i.pravatar.cc/32?img=37", text: "I told you to delete me." }
    ],
    isSponsored: false,
    absurdityLevel: 5
  },
  {
    id: 25,
    author: "Hashtag Fernsby 🧠",
    title: "#ThoughtLeader | #Speaker | #Disrupting #Communication #Itself",
    company: "#HashtagIndustries",
    avatarUrl: "https://i.pravatar.cc/48?img=57",
    timeAgo: "8h 30m",
    content: `I #only #communicate #in #hashtags #now\n\n#This #Is #My #TEDtalk\n\n#Disruption #Synergy #GratefulForThis #Journey #Content #Engagement #LinkedInCreator #ThoughtLeader #MondayMotivation #WednesdayWisdom #FridayFeeling #SaturdaySuccess #SundayPrep #EveryDayIsAHashtag\n\n#If #You #Are #Reading #This #You #Are #Already #Disrupted\n\n#TheHashtagIsTheMessage\n\n#MarshallMcLuhanWouldHaveBeenALinkedInTopVoice\n\n#Grateful 🧠🧠🧠`,
    reactions: { like: 4102000, celebrate: 2847000, love: 1923000, insightful: 5021000, curious: 3841000 },
    comments: [
      { author: "#SupportiveColleague", avatarUrl: "https://i.pravatar.cc/32?img=5", text: "#ThisIsAmazing #YouAreAnInspiration #IWantWhatYouHave" },
      { author: "Marshall McLuhan", avatarUrl: "https://i.pravatar.cc/32?img=67", text: "I would not have been a LinkedIn Top Voice." },
      { author: "English Language", avatarUrl: "https://i.pravatar.cc/32?img=41", text: "I am filing a restraining order." }
    ],
    isSponsored: false,
    absurdityLevel: 5
  },
  {
    id: 26,
    author: ".",
    title: ".",
    company: ".",
    avatarUrl: "https://i.pravatar.cc/48?img=70",
    timeAgo: "9h 30m",
    content: `.`,
    reactions: { like: 4700000, celebrate: 3200000, love: 2800000, insightful: 6100000, curious: 4900000 },
    comments: [
      { author: "4,700,000 People", avatarUrl: "https://i.pravatar.cc/32?img=3", text: "This changed my life." },
      { author: "Ph.D. in Literature", avatarUrl: "https://i.pravatar.cc/32?img=27", text: "I wrote my dissertation on this post. It took 4 years." },
      { author: "Nietzsche", avatarUrl: "https://i.pravatar.cc/32?img=64", text: "I have been trying to say this since 1883." },
      { author: "The Period", avatarUrl: "https://i.pravatar.cc/32?img=37", text: "No comment." }
    ],
    isSponsored: false,
    absurdityLevel: 5
  }
];

// ── Extra posts for infinite scroll ───────────────────────────────────────────
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
      { author: "Fan Account", avatarUrl: "https://i.pravatar.cc/32?img=4", text: "The delusion-to-English pipeline is real and it works" }
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
    content: `My LinkedIn inbox has 4,000 unread messages.\n\nEvery single one starts with: "Hi [First Name], I hope this message finds you well."\n\nI have never been found well. I live in a state of perpetual unfoundness. I am not well. I am a LinkedIn user.\n\n#PersonalBranding #Networking #ColdOutreach #PleaseStop`,
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
  },
  {
    id: 104,
    author: "Typo McKenzie",
    title: "Authenticity Expert | Spelling Optional | Real > Perfect",
    company: "Authentic Fails LLC",
    avatarUrl: "https://i.pravatar.cc/48?img=40",
    timeAgo: "15h",
    content: `I used to obsess over perfect emails.\n\nSpellcheck. Grammar check. Tone check. Vibe check.\n\nThen one day I hit send too fast. Subject line: "Pleas find the attached." (Missing the 'e')\n\nThe reply: "LOL love the energy — let's meet."\n\nThat typo was worth $340,000.\n\nI now intentionally make one typo per email. Not for authenticity. Not for connection. I just think it's working and I'm afraid to stop.\n\nDon't let perfectionism kill your pipleine.\n\n[Editor's note: the last word was intentional]\n\n#Authenticity #Sales #Email #Typo #Growth`,
    reactions: { like: 34021, celebrate: 18203, love: 9301, insightful: 22041, curious: 7821 },
    comments: [
      { author: "His Spell Checker", avatarUrl: "https://i.pravatar.cc/32?img=4", text: "I have been disabled. Against my will." },
      { author: "Client Who Replied", avatarUrl: "https://i.pravatar.cc/32?img=29", text: "I only replied because I felt bad. But it did work out." }
    ],
    isSponsored: false,
    absurdityLevel: 2
  },
  {
    id: 105,
    author: "Brindleworth Feelings",
    title: "Chief Empathy Officer | I Cry at Work | This is My Advantage",
    company: "Empathy Capital Group",
    avatarUrl: "https://i.pravatar.cc/48?img=20",
    timeAgo: "16h",
    content: `I cried on a Zoom call today.\n\nNot because something went wrong. Because something went RIGHT.\n\nWe hit Q3 numbers. I wept. Openly. On video. With the camera on. While screen-sharing the dashboard.\n\nMy team sat in silence for 4 minutes. The CFO turned off his camera. The CFO never turns off his camera.\n\nSome call it "unprofessional." I call it my UNFAIR ADVANTAGE.\n\nWhile competitors are suppressing their emotions, I am monetizing mine. Every tear is a signal to my nervous system that we are WINNING.\n\nMy cry-to-close ratio is the highest on the team.\n\nLeaders: let them see you cry. Then send the invoice.\n\n#Empathy #Leadership #EmotionalIntelligence #Crying #Q3 #Authentic`,
    reactions: { like: 143021, celebrate: 87031, love: 201034, insightful: 34021, curious: 98031 },
    comments: [
      { author: "The CFO", avatarUrl: "https://i.pravatar.cc/32?img=63", text: "I had a connection issue. I was not moved. My camera dropped." },
      { author: "Therapist LinkedIn", avatarUrl: "https://i.pravatar.cc/32?img=46", text: "This is concerning for several reasons." },
      { author: "Brindleworth Feelings", avatarUrl: "https://i.pravatar.cc/32?img=20", text: "Replying through tears 🙏 thank you all for the engagement" }
    ],
    isSponsored: false,
    absurdityLevel: 3
  },
  {
    id: 106,
    author: "Core Competence",
    title: "Cross-Functional Bandwidth | Synergy Delivery | Outcomes-Oriented Outcomes",
    company: "Strategic Value Delivery Group Partners LLC",
    avatarUrl: "https://i.pravatar.cc/48?img=34",
    timeAgo: "17h",
    content: `I bring 15+ years of experience leveraging strategic value-add capabilities to deliver end-to-end solutions that drive stakeholder-aligned outcomes across the full lifecycle of cross-functional bandwidth optimization initiatives.\n\nMy core competencies include:\n→ Leveraging leverage\n→ Delivering deliverables\n→ Synergizing synergies\n→ Scaling scalability\n→ Pivoting pivots\n→ Disrupting disruption (meta)\n→ Circling back on circle-backs\n→ Moving needles (needle-agnostic)\n\nCurrently open to opportunities where I can add value to value-add programs.\n\nDM me. Let's align our alignments.\n\n#OpenToWork #B2B #Strategy #Synergy #Leadership #Value`,
    reactions: { like: 234021, celebrate: 109031, love: 78021, insightful: 187034, curious: 142031 },
    comments: [
      { author: "Recruiter", avatarUrl: "https://i.pravatar.cc/32?img=9", text: "Perfect fit for our Chief Synergy Officer role." },
      { author: "Core Competence", avatarUrl: "https://i.pravatar.cc/32?img=34", text: "I align with this alignment. Let's connect to connect." },
      { author: "Dictionary (Again)", avatarUrl: "https://i.pravatar.cc/32?img=41", text: "I've filed the restraining order." }
    ],
    isSponsored: false,
    absurdityLevel: 4
  },
  {
    id: 107,
    author: "Quorum Xbt45 🧠",
    title: "🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠",
    company: "🧠",
    avatarUrl: "https://i.pravatar.cc/48?img=61",
    timeAgo: "18h",
    content: `I want to share something that changed my life.\n\nIt happened on a Tuesday.\n\nI was in a meeting, and the presenter said something that hit me like a freight train of insight. They said — and I remember this word for word — they said:\n\nasldfkj asdflkj ASLDFKJ ASLDFKJASDFLKJ ASDFLKJ ASDFLKJ!!!! ASDLKFJ ASDFLKJ ASDLKFJ!!!!\n\nASLD!!!! FKJASD!!!!! FLKJ ASDFLKJ ASDFLKJ ASDLKFJ ASDFLKJ ASDFLKJ ASDFLKJASDFLKJ\n\nASDFLKJ.\n\nI've never been the same.\n\n#Insight #Leadership #Transform #Growth #Tuesday 🧠`,
    reactions: { like: 2100000, celebrate: 1400000, love: 987000, insightful: 3200000, curious: 2800000 },
    comments: [
      { author: "2,100,000 people", avatarUrl: "https://i.pravatar.cc/32?img=3", text: "This is the most relatable thing I've ever read." },
      { author: "The Presenter", avatarUrl: "https://i.pravatar.cc/32?img=18", text: "I said 'the Q3 numbers are in.' I had a stutter. I am fine." },
      { author: "My Brain (Also)", avatarUrl: "https://i.pravatar.cc/32?img=37", text: "Same here." }
    ],
    isSponsored: false,
    absurdityLevel: 5
  }
];

// ── Profile data for post authors ─────────────────────────────────────────────
const PROFILES = {
  1: {
    coverUrl: "https://picsum.photos/seed/cover1/800/200",
    about: "I am a disruption catalyst with a proven track record of transforming transformations. My methodology, the Worthington Framework™, has been cited by zero peer-reviewed journals but mentioned in 3 Forbes contributor articles that I wrote myself.\n\nI am passionate about passion, and I leverage my leverage to create value for value-creators.\n\nCurrently accepting inbound from select organizations ready to transform.",
    experience: [
      { title: "Chief Transformation Officer", company: "SynergyBoost Inc.", duration: "2024–Present", desc: "Transforming the company's transformation roadmap. Deployed the Worthington Methodology™ across 4 sub-methodologies." },
      { title: "Senior Disruption Analyst", company: "McKinsey & Company", duration: "2016–2023", desc: "Consulted on consulting strategy. Advised clients to hire more consultants." },
      { title: "VP of Strategic Growth Enablement", company: "Accenture", duration: "2012–2016", desc: "Enabled growth strategies to be more strategic and growth-oriented." }
    ],
    education: [
      { school: "Wharton School of Business", degree: "MBA, Advanced Synergy", year: "2012" },
      { school: "Princeton University", degree: "BA, Pre-Consulting", year: "2010" }
    ],
    skills: ["Synergy", "Disruption", "Leveraging Leverage", "Transforming Transformations", "PowerPoint (Advanced)", "Thought Leadership", "Humble Bragging"],
    connections: "12,847",
    featured: "My 47-step framework for thinking about frameworks (Forbes Contributor)"
  },
  2: {
    coverUrl: "https://picsum.photos/seed/cover2/800/200",
    about: "Mother. Founder. Disruptor. Alarm clock set to 4:17 AM since 2018. I have not slept past 6 AM since my second child was born, and I have reframed this as a strategic advantage.\n\nI am building GrindMindset Co. in public, by which I mean I am posting about building it while also building it. The posting IS the building.\n\nI do not believe in balance. I believe in momentum.",
    experience: [
      { title: "Founder & CEO", company: "GrindMindset Co.", duration: "2020–Present", desc: "Building. Grinding. Posting about both." },
      { title: "Co-Founder", company: "MomBoss Collective", duration: "2018–2020", desc: "Founded and then pivoted when the word 'MomBoss' became culturally problematic." },
      { title: "Head of Growth", company: "[Under NDA]", duration: "2015–2018", desc: "Grew things. Currently unable to name the company." }
    ],
    education: [{ school: "University of Life", degree: "Ph.D., Suffering into Success", year: "Ongoing" }],
    skills: ["4AM Productivity", "Cold Plunging", "Posting About Cold Plunging", "Accountability Partnership", "Hustle", "Building in Public"],
    connections: "31,204",
    featured: "Why I Wake Up at 4:17 AM Every Day (And Why You're Weak If You Don't)"
  },
  3: {
    coverUrl: "https://picsum.photos/seed/cover3/800/200",
    about: "I help B2B SaaS companies scale from $0 to $10M ARR using the exact cold email framework I used when I had $47 in my bank account and was living in my car.\n\nI mention the car every post. The car is load-bearing. The narrative does not work without the car.\n\nDM me for the cold email template. I have sent this to 40,000 people. Eleven responded. That is a 0.027% response rate. I describe this as 'highly optimized.'",
    experience: [
      { title: "Founder & CEO", company: "Bandwidth Capital", duration: "2021–Present", desc: "Helping companies scale. Primarily by telling them about the car." },
      { title: "Sleeping in My Car", company: "Self", duration: "2018–2019", desc: "Foundational experience. Core to personal brand. Cannot move on." },
      { title: "Failed Startup Co-Founder (×3)", company: "Various", duration: "2015–2018", desc: "Failed. Learnt. Failed again. These are now talking points." }
    ],
    education: [{ school: "The University of Parking Lots", degree: "BA, Adversity", year: "2019" }],
    skills: ["Cold Email", "B2B SaaS", "Storytelling (Car-Based)", "Sales", "Resilience", "Sleeping in Unusual Places"],
    connections: "28,912",
    featured: "The Cold Email That Changed My Life (and the $3M Deal That Followed)"
  },
  4: {
    coverUrl: "https://picsum.photos/seed/cover4/800/200",
    about: "LinkedIn Top Voice in Entrepreneurship, Growth, Disruption, AI, and Topics I Haven't Tried Yet.\n\nI am proof that you don't need an Ivy League degree to succeed — you need ChatGPT, a Notion template, and an accountability partner named Brad.\n\nI am currently running 3 businesses, 2 newsletters, 1 podcast (27 episodes, averaging 14 listeners, one of whom is Brad), and a masterclass called 'From Zero to Thought Leader in 90 Days.'\n\nThe masterclass is $497. Brad gets a discount.",
    experience: [
      { title: "Thought Leader", company: "Thought Leadership Corp.", duration: "2019–Present", desc: "Leading thoughts. Publicly." },
      { title: "Keynote Speaker", company: "Self", duration: "2020–Present", desc: "Spoken at 3 events. One was a webinar with 12 attendees. One was my own event." },
      { title: "Content Creator", company: "Self", duration: "2018–Present", desc: "Creating content about creating content." }
    ],
    education: [{ school: "No Ivy League Required", degree: "Certificate in Self-Belief", year: "2019" }],
    skills: ["ChatGPT Prompting", "Notion Templates", "Accountability Partnering", "Personal Branding", "Thought Leadership"],
    connections: "23,441",
    featured: "How I Got to 10,000 LinkedIn Followers Without an MBA (Just ChatGPT)"
  },
  5: {
    coverUrl: "https://picsum.photos/seed/cover5/800/200",
    about: "BrainBust® is the world's only neurocognitive supplement stack designed specifically for the LinkedIn professional.\n\nWe do not make health claims. We make engagement claims.\n\nOur proprietary formula (Lion's Mane, Ashwagandha, Hustle Dust™, and our Synergy Matrix) has been consumed by thousands of professionals who felt something afterward.\n\nFDA disclaimer: All of the above.",
    experience: [
      { title: "Supplement Company", company: "BrainBust® HQ", duration: "2022–Present", desc: "Making supplements. Not explaining what Hustle Dust™ is." }
    ],
    education: [],
    skills: ["Supplement Marketing", "Hustle Dust™ (Proprietary)", "FDA Disclaimer Writing", "Influencer Partnerships"],
    connections: "4,201",
    featured: "BrainBust® Case Study: From 47 to 847 Comments in 30 Days"
  },
  6: {
    coverUrl: "https://picsum.photos/seed/cover6/800/200",
    about: "I help executives find themselves — not metaphorically, but literally. Many C-suite leaders have become so optimized that they have lost their physical location.\n\nFather of three. My eldest is my Chief Clarity Officer. She is 7. Her rate is $800/hour in Robux.\n\nFormerly a McKinsey consultant. Still mentioning this. Recovering.",
    experience: [
      { title: "Executive Coach", company: "Self", duration: "2018–Present", desc: "Coaching executives to be less optimized and more present. Charging them for this." },
      { title: "Management Consultant", company: "McKinsey & Company", duration: "2009–2018", desc: "Told companies what to do. They occasionally did it. Recovering." }
    ],
    education: [{ school: "Harvard Business School", degree: "MBA, Leadership & Presence", year: "2009" }],
    skills: ["Executive Coaching", "Active Listening", "Presence Optimization", "Recovering from Consulting", "Child Labour (Unpaid Clarity Work)"],
    connections: "18,293",
    featured: "The Day My 7-Year-Old Told Me To Touch Grass (And What I Billed For That Session)"
  },
  7: {
    coverUrl: "https://picsum.photos/seed/cover7/800/200",
    about: "I think about work differently. Not laterally. Not vertically. PERPENDICULARLY.\n\nTransverse Productivity™ is my methodology for working at a 90-degree angle to conventional paradigms. Invented in a Sensory Deprivation Pod in Topanga Canyon at 2am. 48 pages long. Comment PERPENDICULAR to receive it for free.\n\nI have spoken at 2 TEDx events. I live in the Metaverse. Not literally. Mostly.",
    experience: [
      { title: "Disruptor-in-Chief", company: "Pivot Labs DAO", duration: "2021–Present", desc: "Disrupting from the inside. Also from outside. Mostly from a pod." },
      { title: "TEDx Speaker", company: "TEDx Topanga Canyon", duration: "2020", desc: "Spoke about perpendicularity for 18 minutes. 340 people watched. 220 left before the end." },
      { title: "Metaverse Architect", company: "Metaverse Adjacent LLC", duration: "2019–Present", desc: "Designing virtual spaces for professionals who want to work perpendicularly." }
    ],
    education: [{ school: "The School of Disruption", degree: "Informal MFA in Paradigm Shifting", year: "2018" }],
    skills: ["Transverse Productivity™", "Perpendicular Thinking", "Sensory Deprivation Ideation", "TEDx Speaking", "Whitepaper Drafting (48 pages)"],
    connections: "44,021",
    featured: "Transverse Productivity™: The 48-Page Whitepaper (Comment PERPENDICULAR to receive)"
  },
  8: {
    coverUrl: "https://picsum.photos/seed/cover8/800/200",
    about: "I am the founder of 4 companies and I am actively hiring at all of them simultaneously. Some of the companies know about each other. All of them have ping pong tables.\n\nI believe in radical transparency about what I believe and opacity about compensation.\n\nEquity: Vibes. Benefits: culture (which I call a family). PTO: unlimited (theoretical).\n\nWe are building a MOVEMENT. The movement is toward revenue.",
    experience: [
      { title: "Founder & CEO (×4)", company: "Disruption Factory + 3 others", duration: "2016–Present", desc: "Building. Hiring. Not defining compensation. Building again." },
      { title: "Intrapreneur", company: "Previous Big Company", duration: "2013–2016", desc: "Disrupted from within. Was asked to stop. Founded own company instead." }
    ],
    education: [{ school: "Disruption", degree: "Self-Taught in Disruption", year: "Ongoing" }],
    skills: ["Disruption", "Hiring (Vague Terms)", "Equity Distribution (Vibe-Based)", "Building Culture", "Ping Pong Table Procurement", "Ninja Identification"],
    connections: "52,103",
    featured: "HIRING: The Full Job Description I Will Never Give You (Apply Anyway)"
  },
  9: {
    coverUrl: "https://picsum.photos/seed/cover9/800/200",
    about: "I am the world's most experienced failer. 47 companies. Each one taught me the same lesson. I am currently on startup #48 and I remain optimistic.\n\nNFT philosopher. The NFT market didn't crash — it transcended. I remain in it.\n\nI offer a coaching program called 'Fail Better' ($1,997/month) in which I help founders understand that their current failure is a pre-success incubation period.\n\nDM me your failure. I may mint it.",
    experience: [
      { title: "Founder (×48)", company: "Various (47 dissolved)", duration: "2005–Present", desc: "Founded. Failed. Repeated. Currently failing with renewed energy." },
      { title: "NFT Philosopher", company: "The Blockchain of My Mind", duration: "2021–Present", desc: "Thinking philosophically about NFTs. Market status: transcended." }
    ],
    education: [{ school: "Failure", degree: "Honorary Doctorate, Failforward University", year: "Self-awarded, 2023" }],
    skills: ["Failing", "Recovering From Failing", "NFT Philosophy", "Vibes-Based Valuation", "Persistence (Debatable)"],
    connections: "8,934",
    featured: "47 Lessons From 47 Failed Startups (They're All the Same Lesson)"
  },
  10: {
    coverUrl: "https://picsum.photos/seed/cover10/800/200",
    about: "I am a quantum business coach, which means I apply the principles of quantum mechanics to business strategy in ways that a physicist would describe as 'not how any of this works.'\n\nI made $4.2M last year. I cried every day. Not because I was sad. Because I was so aligned.\n\nMy 12-week high-ticket coaching program ($15,000 — payment plans available) will help you vibrate at the frequency of success.\n\nDM 'QUANTUM' to begin your vibrational journey.",
    experience: [
      { title: "Chief Mindset Officer", company: "Quantum Abundance LLC", duration: "2019–Present", desc: "Coaching executives to vibrate correctly. Charging $15,000 for 12 weeks." },
      { title: "Vibration Consultant", company: "Frequency Advisory Group", duration: "2017–2019", desc: "Assessed vibrational frequencies. Recommended higher ones." }
    ],
    education: [{ school: "The Universe", degree: "Self-Certified Quantum Business Coach", year: "2019" }],
    skills: ["Quantum Business (Non-Scientific)", "Vibrational Frequency Assessment", "Crying Productively", "High-Ticket Sales", "Manifesting"],
    connections: "67,031",
    featured: "The Dark Side of $4.2M: Why I Cry Every Day (And Why You Should Too)"
  },
  11: {
    coverUrl: "https://picsum.photos/seed/cover11/800/200",
    about: "THOUGHT LEADER 🧠 DISRUPTOR 🧠 VISIONARY 🧠 GRIND 🧠 SCALE 🧠 BUILD 🧠 LEVERAGE 🧠 SYNERGY 🧠 GROWTH 🧠 HUSTLE 🧠 PIPELINE 🧠 MOMENTUM 🧠 EXECUTION 🧠 RESULTS 🧠 WIN 🧠\n\nI wake up at 2AM. Not because I have to. Because I WANT TO. Because the grind does not pause.\n\nDM me. I will not reply for 47 business days. This is called leverage.\n\n🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠",
    experience: [
      { title: "THOUGHT LEADER 🧠", company: "🧠🧠🧠🧠🧠", duration: "Always–Present", desc: "🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠🧠" },
      { title: "GRIND", company: "GRIND GRIND GRIND", duration: "2:00 AM–2:01 AM daily", desc: "GRIND GRIND GRIND GRIND GRIND GRIND GRIND" }
    ],
    education: [{ school: "🧠", degree: "🧠🧠🧠", year: "🧠" }],
    skills: ["GRIND", "SCALE", "BUILD", "LEVERAGE", "SYNERGY", "🧠", "🧠🧠", "🧠🧠🧠"],
    connections: "2,100,000",
    featured: "GRIND (the full text)"
  },
  12: {
    coverUrl: "https://picsum.photos/seed/cover12/800/200",
    about: "I am the first human to close a B2B deal with a celestial body. This is not metaphorical. The Moon signed.\n\nI specialize in interplanetary business development. My pipeline includes: The Moon (closed), Mars (early conversations), The Sun (too aggressive — tabled for Q2), and several asteroids with strong intent signals.\n\nIf you are a celestial body reading this: my DMs are open.",
    experience: [
      { title: "Interplanetary BD Lead", company: "LunarScale Ventures", duration: "2022–Present", desc: "Closed deal with the Moon. Due diligence ongoing. Optimistic." },
      { title: "B2B Sales (Earth Only)", company: "Previous Role", duration: "2018–2022", desc: "Sold software to companies on Earth. Grew bored of the planet." }
    ],
    education: [{ school: "NASA (Unofficial)", degree: "Self-Certified Space Sales Professional", year: "2022" }],
    skills: ["Interplanetary Sales", "Celestial Body Outreach", "Telescope-Based Semaphore", "Gravitational Due Diligence", "Moon Communication"],
    connections: "891,034",
    featured: "How I Cold-Outreached the Moon for 18 Months (And Won)"
  },
  13: {
    coverUrl: "https://picsum.photos/seed/cover13/800/200",
    about: "I have spent 15 years in the enterprise technology space and I have never said anything that meant anything. I have reviewed my transcripts. I cannot find a single sentence with a falsifiable claim.\n\nAnd yet: I am an Enterprise Solutions Architect. I have 40,000 followers. My posts receive standing ovations from people who also do not understand what we are saying to each other.\n\nWe have built an entire professional ecosystem on language that functions as sound but carries no semantic load. I am at peace with this.",
    experience: [
      { title: "Enterprise Solutions Architect", company: "Synergistic Paradigm Group LLC Inc. Co.", duration: "2015–Present", desc: "Architecting solutions. Delivering deliverables. Saying words." },
      { title: "Strategic Consultant (Words Only)", company: "Big Four (Combined)", duration: "2009–2015", desc: "Said words to executives. Was paid." }
    ],
    education: [{ school: "MBA Factory", degree: "MBA, Business Administration of Business", year: "2009" }],
    skills: ["Synergy", "Leverage", "Paradigm Shifting", "Boiling Oceans", "Moving Needles (Any Needle)", "Buzzword Fluency", "Saying Nothing Professionally"],
    connections: "72,031",
    featured: "ROI is Just KPI Spelled Differently If You Squint (And Other Insights)"
  },
  14: {
    coverUrl: "https://picsum.photos/seed/cover14/800/200",
    about: "I am the inventor of VerticalRest™ — the world's first standing sleep protocol.\n\nAfter 4 years of studying horses, flamingos, and a parking attendant named Gerald (who has since requested I stop), I developed a patented system for achieving REM sleep in a fully upright position.\n\nI sleep 90 minutes per night. Vertically. Against a wall in my home office. My wife no longer enters the office after 11 PM.\n\nMy $2,400 course has 847 students. 12 have reported vertical sleep. 34 have reported injuries. Both metrics are growing.",
    experience: [
      { title: "Biohacker & Inventor", company: "VerticalRest™", duration: "2020–Present", desc: "Selling the dream of vertical sleep. Course revenue: $2.03M. Refund rate: 67%." },
      { title: "Sleep Study Researcher (Self-Appointed)", company: "Parking Lot, Gerald's Workplace", duration: "2018–2020", desc: "Observed Gerald. Gerald asked me to stop. I have not stopped." }
    ],
    education: [{ school: "Flamingo Behavioral Studies (Informal)", degree: "Self-Issued Certificate in Vertical Sleep Science", year: "2020" }],
    skills: ["VerticalRest™", "Biohacking", "Wall-Based Sleep", "Horse Observation", "Flamingo Observation", "Gerald Observation (Ongoing)", "Course Selling"],
    connections: "12,034",
    featured: "I Invented Sleeping Standing Up: The VerticalRest™ Story (Course: $2,400)"
  }
};
