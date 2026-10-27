// All site content lives here. Edit this file; the pages update.
// Anything marked PH is a placeholder I wrote. Replace it with your real details before publishing.

export default {
  name: 'Gauravdutt Singh',
  short: 'Gaurav',
  role: 'Graduate Assistant, Program Management',
  location: 'Raleigh, USA',
  years: 3,
  email: 'gauravdutt137@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gauravduttsingh',
  roleShort: 'Graduate Assistant, Program Mgmt',
  lede: 'I love building products that people actually use.',
  bio: "I'm a Graduate Assistant in Program Management with 3 years in product. Campus platforms, restaurant software, a clothing brand, a vet-care medical product: different worlds, same job. Find the real problem, then ship something for it.",

  // The talking photo in the corner. side: 'left' or 'right'.
  narrator: { show: true, side: 'left' },

  // Screenshots. Put files in site/images/ and map slot ids to paths here.
  // Slot ids per project: <id>-hero, <id>-research, <id>-screen-1, -2, -3.
  // Empty slots show a placeholder box. The hero image also shows as the
  // hover preview on the home page list.
  // e.g. 'passport-hero': 'images/passport-hero.jpg'
  images: {},

  chapters: [
    { key: 'context',   label: 'Context & problem', say: "Here's where it started." },
    { key: 'insights',  label: 'What users told me', say: 'I talked to people before writing a single ticket.' },
    { key: 'role',      label: 'My role & team',     say: 'My job: keep everyone pointed the same way.' },
    { key: 'decisions', label: 'Key decisions',      say: 'Every yes was a no to something else.' },
    { key: 'built',     label: 'What we built',      say: 'This is what actually shipped.' },
    { key: 'metrics',   label: 'Outcomes',           say: 'Now the numbers. Watch them go.' },
    { key: 'learnings', label: 'Learnings',          say: "Not everything went to plan. Here's what I'd change." }
  ],

  projects: [
    {
      id: 'passport',
      name: 'Passport',
      hue: 145,
      type: 'Campus platform · 0 to 1',
      tagline: 'A centralized, gamified platform with all the offerings of the Entrepreneurship department.',
      roleTitle: 'Product & program lead', // PH
      teamSize: '5 people', // PH
      timeline: '4 months', // PH
      problem: "How do you get students to show up for things they don't know exist?",
      context: 'The Entrepreneurship department ran workshops, mentor hours, pitch nights and funding programs. Students heard about most of them a week too late, because everything lived in separate emails, flyers and sign-up forms.', // PH
      insights: [ // PH
        { t: 'Nobody reads the newsletter', d: 'Students found events through friends, not email. Word of mouth beat every official channel.' },
        { t: 'Too many doors', d: 'Each program had its own form and its own page. Students gave up before finding the right one.' },
        { t: 'Progress feels good', d: "Students wanted proof of what they'd done, something they could point to on a resume." }
      ],
      roleText: 'I owned the product end to end: student interviews, requirements, the backlog and the launch. I was the link between department staff, who knew the programs, and the builders, who needed to know what to make.', // PH
      team: ['Me, product & program', 'Design', 'Engineering', 'Department staff'], // PH
      decisions: [ // PH
        { chose: 'Gamification', over: 'A plain events calendar', why: 'A calendar shows what exists. Points and badges give students a reason to go.' },
        { chose: 'One sign-in, one profile', over: 'Linking out to old forms', why: 'Every extra form lost people. Rebuilding sign-ups inside Passport took longer but kept students in one place.' },
        { chose: 'Launch with a few programs', over: 'Everything on day one', why: 'Smaller scope meant we shipped at the start of semester, when attention is highest.' }
      ],
      built: ['Quest board with every offering in one feed', 'Profile with stamps and badges', 'Staff dashboard for attendance'], // PH
      metrics: [
        { v: 300, s: '+', l: 'users in the first week' },
        { v: 1, s: '', l: 'home for every program' } // PH
      ],
      learnings: [ // PH
        'Gamification gets the first visit. Useful content gets the second. We leaned on points early and had to backfill reasons to come back.',
        'Department staff are users too. The admin dashboard should have shipped on day one, not week three.'
      ]
    },
    {
      id: 'foversia',
      name: 'Foversia',
      hue: 35,
      type: 'B2B SaaS · Restaurants',
      tagline: 'A SaaS product that increases restaurant efficiency by reducing table turnaround time.',
      roleTitle: 'Product manager', // PH
      teamSize: '4 people', // PH
      timeline: '6 months', // PH
      problem: 'How can a restaurant seat the next party sooner without rushing the current one?',
      context: "In a busy restaurant, a table that's empty but not ready is lost money. Between one party leaving and the next sitting down, tables waited on payment, bussing and a host who didn't know they were free.", // PH
      insights: [ // PH
        { t: 'The delay is after the meal', d: 'Most lost time came after guests asked for the check: waiting to pay, then waiting for the table to be cleared.' },
        { t: 'Hosts work blind', d: 'Hosts walked the floor to check which tables were free. The information existed, just not in one place.' },
        { t: 'Staff ignore extra taps', d: 'Anything that added work during a rush would be skipped. The tool had to save effort, not add it.' }
      ],
      roleText: 'I ran discovery in restaurants, defined the MVP and worked with engineering week to week. I also spent a lot of Friday nights standing next to hosts with a notebook.', // PH
      team: ['Me, product', 'Engineering', 'Design', 'Pilot restaurant staff'], // PH
      decisions: [ // PH
        { chose: 'Live table status for hosts', over: 'A full POS replacement', why: "Restaurants already had a POS and didn't want another. We built the missing layer on top." },
        { chose: 'One-tap status updates', over: 'Detailed order tracking', why: "Servers will tap once during a rush. They won't fill in a form." },
        { chose: 'Pilot with one restaurant', over: 'A broad beta', why: 'One kitchen we could watch closely taught us more than ten we could only email.' }
      ],
      built: ['Live floor map for hosts', 'One-tap server updates', 'Turn-time reports for managers'], // PH
      metrics: [
        { v: 20, s: '%', l: 'faster table turnaround' }, // PH
        { v: 12, s: ' min', l: 'saved per table turn' } // PH
      ],
      learnings: [ // PH
        'I should have priced earlier. Restaurants loved the pilot but we learned late what they would actually pay.',
        'Watching a shift beats any survey. The best feature ideas came from standing in the way of a busy host.'
      ]
    },
    {
      id: 'drs-designs',
      name: 'DRS Designs',
      hue: 300,
      type: 'D2C · Print on demand',
      tagline: 'A print-on-demand clothing brand with 200+ units sold and 10x ROI.',
      roleTitle: 'Founder', // PH
      teamSize: 'Just me', // PH
      timeline: '1 year', // PH
      problem: 'Can a brand with no inventory and a tiny budget sell enough to pay for itself?',
      context: 'I wanted to see if I could take a product from idea to paying customers with almost no money. Print on demand meant no inventory, so the risk sat in design and marketing, not stock.', // PH
      insights: [ // PH
        { t: 'Niche beats broad', d: 'Generic designs got likes. Designs for a specific crowd got orders.' },
        { t: 'Photos sell the shirt', d: 'Mockups on real people converted better than flat product shots.' },
        { t: 'Shipping time matters', d: 'The most common question before buying was when it would arrive.' }
      ],
      roleText: 'Everything. I was the PM, designer, marketer and customer support. That meant choosing what to work on each week, because there was always more than one person could do.', // PH
      team: ['Me, everything', 'Print partner', 'Friends as beta testers'], // PH
      decisions: [ // PH
        { chose: 'Print on demand', over: 'Buying stock upfront', why: 'Lower margin per unit, but zero risk of a garage full of unsold shirts.' },
        { chose: 'Small drops', over: 'A big catalog', why: "A few designs at a time made it easy to see what sold and cut what didn't." },
        { chose: 'Instagram first', over: 'Paid search', why: 'Buyers found us through people they followed, so that is where the budget went.' }
      ],
      built: ['Online storefront', 'Seasonal design drops', 'Social campaigns'], // PH
      metrics: [
        { v: 200, s: '+', l: 'units sold' },
        { v: 10, s: 'x', l: 'return on investment' }
      ],
      learnings: [ // PH
        'Margins on print on demand are thin. Bundles and repeat buyers mattered more than new customers.',
        'I tested too many designs at once early on. Fewer, sharper bets gave clearer signals.'
      ]
    },
    {
      id: 'veteyecare',
      name: 'VetEyeCare',
      hue: 230,
      type: 'Medical device · Veterinary',
      tagline: 'A synthetic mesh that reduced recovery time for animal eye injuries.', // PH: your sentence was cut off
      roleTitle: 'Product manager', // PH
      teamSize: '6 people', // PH
      timeline: '8 months', // PH
      problem: 'How do you make eye surgery recovery easier for animals that cannot follow instructions?', // PH
      context: "Animal eye injuries often need grafts, and recovery is slow when the patient won't sit still. Vets needed an option that was easier to place and held up during healing.", // PH
      insights: [ // PH
        { t: 'Vets want fewer steps', d: 'Surgeons cared most about how quickly a graft could be placed, not about new features.' },
        { t: 'Aftercare is the hard part', d: 'Pet owners struggled with follow-up care. Anything that shortened it was valuable.' },
        { t: 'Trust comes from data', d: 'Clinics would only try a new material with clear evidence behind it.' }
      ],
      roleText: 'I connected the research team with vets and clinics: gathering requirements, planning trials and turning lab results into something a clinic could say yes to.', // PH
      team: ['Me, product', 'Researchers', 'Veterinary surgeons', 'Clinic partners'], // PH
      decisions: [ // PH
        { chose: 'A synthetic mesh', over: 'Biological grafts', why: 'Synthetic material is consistent and easier to store, which matters for smaller clinics.' },
        { chose: 'Start with one procedure', over: 'Covering every eye condition', why: 'A narrow first use made trials faster and results easier to read.' }
      ],
      built: ['Synthetic mesh prototype', 'Trial protocol with partner vets', 'Clinic onboarding kit'], // PH
      metrics: [
        { v: 30, s: '%', l: 'shorter recovery time' }, // PH
        { v: 3, s: '', l: 'partner clinics' } // PH
      ],
      learnings: [ // PH
        'Regulation sets the timeline. I would map approvals before the roadmap next time.',
        'Vets and researchers use the same words to mean different things. A shared glossary saved weeks.'
      ]
    }
  ]
};
