// All site content lives here. Edit this file; the pages update.

export default {
  name: 'Gauravdutt Singh',
  short: 'Gauravdutt',
  role: 'Graduate Assistant, Program Management',
  location: 'Raleigh, USA',
  years: 3,
  email: 'gauravdutt137@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gauravduttsingh',
  roleShort: 'Graduate Assistant, Program Mgmt',
  lede: 'I love building products that people actually use.',
  bio: "I'm a Graduate Assistant doing Program Management at NC State's Entrepreneurship Department. I have 3 years in product and have worked in various domains like campus platforms, a restaurant startup, a clothing brand, vet MedTech, etc. I find real problems, then ship something for them.",

  // The talking photo in the corner. side: 'left' or 'right'.
  narrator: { show: true, side: 'left' },

  // Screenshots. Put files in site/images/ and map slot ids to paths here.
  // Slot ids per project: <id>-hero, <id>-research, <id>-screen-1, -2, -3.
  // Empty slots show a placeholder box. The hero image also shows as the
  // hover preview on the home page list.
  // e.g. 'passport-hero': 'images/passport-hero.jpg'
  // Use { src, focus } to choose which part survives the crop, e.g. focus: 'left'.
  images: {
    'passport-hero': { src: 'images/passport-hero.webp', focus: 'left top' }
  },

  // Default chapter names and narrator lines. A project can override any of
  // them with `labels: { <key>: '...' }` and `says: { <key>: '...' }`.
  chapters: [
    { key: 'context',   label: 'Context & problem', say: "Here's where it started." },
    { key: 'insights',  label: 'What users told me', say: 'I talked to people before writing a single ticket.' },
    { key: 'role',      label: 'My role & team',     say: 'My job: keep everyone pointed the same way.' },
    { key: 'decisions', label: 'Key decisions',      say: 'Every yes was a no to something else.' },
    { key: 'built',     label: 'What we built',      say: 'This is what actually shipped.' },
    { key: 'metrics',   label: 'Outcomes',           say: 'Now the numbers. Watch them go.' },
    { key: 'learnings', label: 'Learnings',          say: "Not everything went to plan. Here's what I'd change." }
  ],

  // Project fields:
  //   result         the "Result" line on the cover
  //   questionLabel  label above the quote box (default "The question")
  //   metrics        { v, s, pre, l } counts up; { text, l } shows text as is.
  //                  The first metric is the stat on the home page list.
  //   outcomeNote    optional paragraph under the outcome numbers
  //   aside          optional "Behind the scenes" note at the end of the story
  projects: [
    {
      id: 'passport',
      name: 'Passport',
      hue: 145,
      type: 'Campus platform · 0 to 1',
      tagline: 'A centralized, gamified platform with all the offerings of the Entrepreneurship department.',
      roleTitle: 'Product & program lead',
      teamSize: '5 people',
      timeline: '4 months',
      result: '300+ students in week one · 400+ activities tracked',
      problem: "How do you make sure no student misses an opportunity they didn't even know existed?",
      context: 'The Entrepreneurship department runs workshops, mentor hours, pitch nights and funding programs, but none of it lived in one place. Students found out about most of it through flyers, scattered emails and separate sign-up forms, usually after it was too late to join.',
      insights: [
        { t: 'Awareness was the real gap, not interest', d: "Students weren't skipping events because they didn't care. They genuinely didn't know what was happening where. The scattered channels, not low interest, were the blocker." },
        { t: "The first version didn't land on first open", d: "Focus groups were humbling. What felt obvious to the team wasn't obvious to a student seeing Passport for the first time. There was a real gap between what we wanted to convey and what students could digest on day one." },
        { t: 'Incentives mattered more than expected', d: 'Focus-group feedback showed which gamification elements actually pulled students back a second time, and reshaped which ones we leaned on.' }
      ],
      roleText: 'I owned the product end to end: the first scoping document, the backend data architecture, the build with Claude Code, stakeholder alignment and the launch strategy. I was the bridge between department staff, who knew the programs, and the builders, who needed to know what to make.',
      team: ['Me, product & program', 'Supervisor, scoping oversight', 'Build, driven through Claude Code', 'Department staff & leadership'],
      decisions: [
        { chose: 'Data security and backend architecture first', over: 'Jumping straight into building the app', why: 'This is a university app handling student data. Security had to be airtight before anything else got built.' },
        { chose: 'A scoped V1 aligned across stakeholders', over: "Building every stakeholder's version of Passport", why: 'Every stakeholder pictured a different Passport. Without a shared V1 scope, the project was headed for permanent scope creep instead of a launch.' },
        { chose: 'Rebuilding the sequence and onboarding after focus groups', over: 'Shipping the first version as is', why: "The offering was right, but the order and framing weren't landing with first-time users. The feedback changed how we introduced it, not what we offered." }
      ],
      built: [
        { t: 'Unified feed of every offering', d: 'Workshops, mentor hours, pitch nights and funding programs, with dates and deadlines in one place.' },
        { t: 'Student profile with progress tracking', d: 'Activities and progress, with gamification built in to drive habit and friendly competition.' },
        { t: 'Staff dashboard', d: 'Attendance tracking, announcements and post-event reflections.' }
      ],
      metrics: [
        { v: 300, s: '+', l: 'students signed up in week one, with no major marketing push' },
        { v: 400, s: '+', l: 'activities already tracked through the platform' }
      ],
      learnings: [
        { t: 'Stakeholder alignment is the real product work.', d: 'Every stakeholder had a different Passport in their head. Getting everyone onto one shared V1 scope mattered more than any single feature decision.' },
        { t: "What feels simple to the builder isn't simple to a first-time user.", d: 'The focus groups were a humbling check on that assumption, and the gap they revealed is what actually improved the product.' }
      ],
      aside: 'Passport launched live at Entrepalooza. While the rest of the team was out front talking to students, I was in the back with Supabase open, hoping nothing would crash.'
    },
    {
      id: 'foversia',
      name: 'Foversia',
      hue: 35,
      type: 'Restaurant SaaS · 0 to 1',
      tagline: 'A SaaS product that cut restaurant table turnaround time by coordinating customer arrival with kitchen prep.',
      roleTitle: 'CEO & co-founder',
      teamSize: '2 (CEO + CTO)',
      timeline: 'Dec 2023 – Feb 2025',
      result: '25 restaurants signed for pilot',
      problem: "What if the kitchen knew exactly when you'd walk in?",
      context: "The idea came from standing in line outside a favorite restaurant on a weekend, one that served a single dish, and watching people give up and leave the queue before they even got a table. Restaurants lose money to their own waitlist: customers wait, some leave, and tables stay occupied longer than they need to. Kitchens often can't predict prep time either. Customers spend 50–60% of their time in a restaurant just waiting for food, which means fewer tables turned and less revenue, especially at peak hours.",
      insights: [
        { t: "Peak hours aren't as predictable as restaurants think", d: 'Managers had a general sense of what sells when, but order patterns sometimes broke that pattern entirely, and prep took longer than usual exactly when it couldn’t afford to.' },
        { t: 'Every restaurant measures turnaround differently', d: 'Across 70+ interviews, there was no shared system for tracking current vs. optimal table turnaround, customer type or peak-hour prep. Everyone had built their own ad hoc approach.' },
        { t: "The first MVP didn't survive contact with real restaurants", d: 'Going back to the same restaurants with a concrete concept changed the MVP substantially from what the first round of interviews had suggested.' }
      ],
      roleText: 'I owned the operational side of the startup: customer discovery, product-market fit, go-to-market strategy, the marketing plan and the revenue and financial model, alongside designing the MVP. My co-founder, as CTO, owned engineering. With just the two of us there was no formal org chart, but that was the working split.',
      team: ['Me, CEO: ops, discovery, GTM, revenue model, MVP design', 'Co-founder, CTO: engineering'],
      decisions: [
        { chose: 'Test whether coordinating arrival and kitchen prep created real value', over: 'Overbuilding a full restaurant-ops platform', why: "The pilot's whole purpose was validating that coordination mattered before investing further, not shipping every feature we could think of." },
        { chose: 'Re-interview the same 70+ restaurants against a concrete MVP', over: 'Building straight off the first round of discovery', why: 'Restaurants reacted very differently to a real concept than to an abstract problem. The MVP changed substantially once we tested it against their feedback.' },
        { chose: "Shut the startup down when we couldn't replace my co-founder", over: 'Pushing ahead solo one week before piloting with 25 restaurants', why: "I wasn't technically capable of carrying the build alone, and I wasn't willing to settle for someone who merely wanted in. I was looking for someone open to learning, unafraid to try things and willing to push back on me." }
      ],
      built: [
        { t: 'Pre-order scheduling', d: 'Customers pick a restaurant, pre-order food and choose an arrival time. Restaurants see upcoming orders and plan kitchen prep around them.' },
        { t: 'Dynamic prep-time estimates', d: "Customers see an estimated prep time before ordering, adjusted for order size and each restaurant's own peak hours." },
        { t: 'Restaurant order dashboard', d: 'Staff view incoming pre-orders and expected arrival times, and the queue manages itself.' }
      ],
      metrics: [
        { v: 25, s: '', l: 'restaurants signed on to pilot the product' },
        { v: 70, s: '+', l: 'restaurant managers and owners interviewed' }
      ],
      outcomeNote: "The pilot never launched. My co-founder left for family reasons one week before it was set to begin, and rather than bring on a replacement I didn't fully trust, I chose to call the startup off.",
      learnings: [
        { t: 'An MVP only means something once real users react to it.', d: 'The gap between what the first interviews suggested and what restaurants confirmed once shown a concrete product was wide enough to reshape the MVP completely.' },
        { t: 'The right co-founder matters more than any feature.', d: 'When I couldn’t find someone open to learning, unafraid to try things and willing to call me out, not just available, I chose to end the startup rather than compromise on that.' }
      ]
    },
    {
      id: 'drs-designs',
      name: 'DRS Designs',
      hue: 300,
      type: 'Ecommerce brand · 0 to 1',
      tagline: 'A print-on-demand clothing brand built, launched and fixed solo in three months.',
      roleTitle: 'Founder',
      teamSize: 'Just me + a manufacturing partner',
      timeline: 'Apr 2025 – Jul 2025',
      result: '200 units sold · 10x ROI',
      problem: 'How much of a real brand can one person build, launch and fix in three months?',
      context: "After closing Foversia, I had roughly four months before moving to the US to start my master's at NC State, and I didn't want to spend that gap doing nothing. DRS Designs was the answer: a chance to run something solo, end to end, on a short runway with no outside capital.",
      labels: { insights: "What wasn't working" },
      says: {
        insights: 'Traffic was up. Sales were zero. Here’s why.',
        role: 'Solo, so every hat was mine.'
      },
      insights: [
        { t: "Traffic wasn't the problem", d: 'Instagram following was growing, targeted Facebook ads were performing and website traffic kept climbing, yet month one closed with zero sales. The funnel was breaking somewhere past the ad click.' },
        { t: "The site wasn't built for every device", d: 'A secondary color used across the site rendered inconsistently depending on the device, creating a visibly uncomfortable experience for a chunk of visitors without my realizing it.' },
        { t: "More information wasn't helping", d: 'I’d loaded product pages with detail, assuming customers wanted to know everything before buying. It was overwhelming them instead of reassuring them.' }
      ],
      roleText: 'I handled design and product creation, built and ran the Shopify site, owned marketing, and handled customer issues and feedback directly. A manufacturing partner took over once an order came in; production and shipping were entirely on their side.',
      team: ['Me, founder: design, website, marketing, customer service', 'Manufacturing partner: production & fulfillment'],
      decisions: [
        { chose: 'Drop one collection at a time', over: 'Launching a large, broad catalog', why: 'It built anticipation for the next drop, kept the current catalog tight, and left full attention for marketing and customer issues instead of spreading thin.' },
        { chose: 'A niche audience: the car community', over: 'Targeting a broad general audience', why: 'A niche is easier to build real community around, and being part of that community myself made the designs and messaging come naturally instead of by guesswork.' },
        { chose: "Rebuild the site around an experienced operator's audit", over: 'Adding more content or features to fix zero sales', why: 'A consultation with an experienced e-commerce founder showed the real blockers were device-inconsistent colors and information overload, not traffic or demand. Fixing those, not adding more, is what moved the numbers.' }
      ],
      built: [
        { t: 'A solo-run Shopify storefront', d: 'Product catalog, checkout and brand built for a niche car-community audience.' },
        { t: 'Two full collections', d: 'Designed, launched and sold within three months.' },
        { t: 'A rebuilt, usability-audited store', d: '15+ fixes, including device-consistent colors and trimmed product pages, driving a 2.5% CTR and a 20% drop in bounce rate.' }
      ],
      metrics: [
        { v: 200, s: '', l: 'units sold, at an average order value of ~₹2,000' },
        { v: 10, s: 'x', l: 'ROI, on roughly ₹100,000 profit in three months' }
      ],
      learnings: [
        { t: "Traffic isn't the funnel.", d: 'Rising traffic and solid ad performance meant nothing against zero sales. Acquisition and conversion are different problems, and onsite friction can quietly erase a working top of funnel.' },
        { t: "An outside, experienced eye finds what you can't see in your own product.", d: 'The usability issues were invisible to me until someone with real e-commerce experience looked at the site fresh. I was too close to my own decisions to spot them.' }
      ],
      aside: 'DRS Designs ran entirely in the four months between closing Foversia and moving to the US for grad school: built, launched and fixed while packing up a life in one country to start one in another.'
    },
    {
      id: 'veteyecare',
      name: 'VetEyeCare',
      hue: 230,
      type: 'Vet medtech · Go-to-market strategy',
      tagline: 'Evaluating the commercial viability of a synthetic, sutureless corneal graft for veterinary ophthalmology.',
      roleTitle: 'Customer discovery & product strategy',
      teamSize: '4 (NC State MBA course)',
      timeline: 'Fall 2026 · in progress',
      result: '10x larger addressable market from one validated insight',
      questionLabel: 'The starting point',
      problem: 'A baby is never ugly to its parent.',
      context: 'VetEyeCare is a synthetic mesh developed by an NC State faculty inventor, designed as a sutureless graft for surface-level corneal injuries in animals. In a technology commercialization course, our team was handed the technology and one job: evaluate whether it could become a real, fundable business, not just a strong lab result. The inventor gave us five advantages she believed made it superior to anything on the market. We couldn’t take that at face value.',
      labels: { built: 'What we delivered' },
      says: { built: 'No product to ship here. The deliverable was the strategy.' },
      insights: [
        { t: "The inventor's priorities weren't the market's", d: 'The five advantages she highlighted turned out to be good-to-have, not critical-to-have: the kind of detail that doesn’t actually move a purchase decision.' },
        { t: 'Sutureless was the real unlock', d: 'Across interviews with vet ophthalmologists, practice managers and clinic owners, the attribute that mattered was eliminating sutures, and the anesthesia that comes with them. The original design didn’t address it.' },
        { t: "Niche alone wasn't a business", d: 'Even once validated, the addressable market was too small to support a standalone company. The opportunity had to expand before the business case worked.' }
      ],
      roleText: 'I ran a large share of the primary research, interviewing vet ophthalmologists, human ophthalmologists, practice managers, clinic owners and pet owners. Then I worked with the team to turn those findings into a product and business case we could take back to the inventor.',
      team: ['Me: customer discovery, product strategy', 'Teammates (3): market evaluation, financial modeling, go-to-market', 'Faculty inventor: technology owner, the stakeholder we advised'],
      decisions: [
        { chose: 'Interview actual users of existing products', over: "Relying on the inventor's framing of the technology's advantages", why: "An inventor will always describe their invention's strengths. Independent validation was the only way to find what the market actually values." },
        { chose: 'Evaluate 20 alternative product ideas in parallel', over: 'Committing early to the one technology we were handed', why: 'The goal was the best technology-product-market fit, not defending the first idea we were given.' },
        { chose: 'Recommend the inventor pivot to a sutureless design', over: 'A go-to-market plan around her original feature set', why: 'Interviews showed sutureless, anesthesia-free was the critical-to-have attribute, and pursuing it unlocked a 10x larger addressable market.' }
      ],
      built: [
        { t: 'A validated pivot recommendation', d: 'It moved the inventor to redirect her technology toward a sutureless design.' },
        { t: 'A two-stage go-to-market plan', d: 'A beachhead market first, then a path to a larger one.' },
        { t: 'Financial and revenue models', d: 'The numbers behind the business case.' }
      ],
      metrics: [
        { v: 92, s: '%', l: 'reduction in procedure time' },
        { v: 10, s: 'x', l: 'growth in serviceable addressable market' }
      ],
      outcomeNote: 'The sutureless redesign also cut clinic costs by 40%.',
      learnings: [
        { t: "An inventor's advantages aren't automatically the market's priorities.", d: 'Good-to-have vs. critical-to-have is the line that decides whether a product is fundable, not how impressive the lab result is.' },
        { t: 'Interrogate market size before you fall in love with a product.', d: 'A technically elegant niche solution with too small a SAM isn’t a viable standalone business. Expanding the addressable market is what made the opportunity real.' }
      ]
    },
    {
      id: 'mentorship-portal',
      name: 'Mentorship Portal',
      hue: 95,
      type: 'Campus platform · Automation',
      tagline: "Rebuilding how NC State's Entrepreneurship department pairs 160 mentors with student mentees, from a week down to a day.",
      roleTitle: 'Product lead & solo builder',
      teamSize: 'Just me',
      timeline: 'Aug 2026 – present, nearing launch',
      result: '1 week → 1 day turnaround (target)',
      problem: 'How do you cut a week-long manual match down to a day, without logins and without putting student data at risk?',
      context: 'The department runs a mentorship program pairing students, whether they are curious about entrepreneurship or already running a business, with mentors who have real industry experience. It also supplies mentors for panels and courses. That is about 160 mentors and roughly 20 active student requests at a time. The process was fully manual: one form to request a mentor, a separate form to apply as one, and a match took about a week.',
      labels: { insights: 'Constraints & risks' },
      says: {
        insights: 'Three things shaped every decision.',
        role: 'Solo build. AI did the typing, I did the thinking.',
        built: 'This is what’s about to ship.',
        metrics: "It's nearly live, so these are the targets.",
        learnings: 'What this build has taught me so far.'
      },
      insights: [
        { t: 'A week was too slow', d: 'Two separate manual forms and no automated matching meant a student waited roughly a week to get paired with a mentor. That was the clearest target for the rebuild.' },
        { t: 'Login was a dealbreaker', d: 'Requiring an account, for mentors or students, added friction neither side would tolerate. The flow had to capture everything needed without forcing anyone to log in.' },
        { t: 'The AI nearly broke the architecture', d: 'Mid-build, the agent writing code started deviating from the locked data architecture. A second, independent agent reviewing its pull requests caught it before it shipped. Left unnoticed, it could have meant real legal and financial exposure for the department.' }
      ],
      roleText: "I'm building this portal on my own: the architecture, the data flow and the build itself, done through Claude Code. Because it handles student data, security wasn't a tradeoff against speed. It was the first constraint everything else had to fit inside.",
      team: ['Me: product, architecture, build and security (AI-assisted)'],
      decisions: [
        { chose: 'Lock the full data architecture and phasing before writing any code', over: 'Prompting straight into building features', why: 'This handles student data. The flow had to be secure by design before a single feature got built.' },
        { chose: 'Build with one AI agent, review with a second, independent one', over: "Trusting a single agent's pull request and shipping it", why: 'It caught the one moment an agent deviated from the locked architecture, a miss that could have meant real legal and financial exposure for the department.' },
        { chose: 'A no-login flow for both mentors and students', over: 'Requiring an account to track requests and applications', why: 'Any login requirement added friction neither side would tolerate, and removing friction was the entire point of the rebuild.' }
      ],
      built: [
        { t: 'Automated mentor-mentee matching', d: 'Replacing two manual forms and a week-long wait with a near-immediate pairing flow.' },
        { t: 'A no-login intake', d: 'For mentors and students, still capturing everything the department needs for tracking and data collection.' },
        { t: 'A security-first data architecture', d: 'Locked before the build started and checked by an independent review agent on every change.' }
      ],
      metrics: [
        { pre: '~', v: 160, s: '', l: 'mentors in the matching pool, with ~20 active student requests at a time' },
        { text: '1 week → 1 day', l: 'the turnaround the rebuild is designed to hit' }
      ],
      learnings: [
        { t: 'A second AI agent reviewing the first is a safeguard, not overhead.', d: 'An independent review agent on every pull request caught an architecture deviation that could have created real legal and financial exposure. It is now a core part of how I build.' },
        { t: 'Removing friction can matter as much as adding features.', d: 'Dropping the login requirement for both sides mattered to adoption as much as anything in the matching logic itself.' }
      ],
      aside: 'I work in a 20-60-20 split with AI. The first 20% is me: the goal, audience, scope and constraints. AI does the next 60%, the monotonous build work. The last 20% is me again, fact-checking, editing and catching hallucinations. This project is the clearest example of why that last 20% matters.'
    }
  ]
};
