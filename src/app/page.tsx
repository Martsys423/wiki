import React from 'react';

// --- Components ---

function TopStatusBar() {
  return (
    <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-xs uppercase border-b border-black">
      <div>SYSTEM: LIVING SKILLS // VERSION: 0.1.0</div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block">SOURCE INDEX ONLINE</div>
        <div className="live-pulse">
          <div className="live-dot" />
          LIVE
        </div>
        <div>{new Date().toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' })}</div>
      </div>
    </div>
  );
}

function Sidebar() {
  const links = ['Home', 'Skills', 'Request a Skill', 'Method', 'Field Notes', 'Glossary'];
  return (
    <aside className="w-full lg:w-[280px] border-r border-black p-6 flex flex-col justify-between shrink-0 bg-[#f5f5f5] bg-grid-pattern relative">
      <div className="absolute inset-0 bg-white/50 pointer-events-none" /> {/* fades the grid slightly */}
      <div className="relative z-10">
        <div className="border-b border-black pb-2 mb-6 accent-line-bottom">
          <h2 className="text-xl">INDEX</h2>
        </div>
        <nav className="space-y-1">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="nav-link">
              {link.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-12 lg:mt-auto">
        <div className="border border-black p-3 bg-white">
          <div className="font-mono text-[10px] font-bold uppercase mb-2 border-b border-black pb-1">SECURED SOURCE CHAIN</div>
          <p className="font-mono text-[10px] leading-relaxed text-secondary-text">
            Every skill includes sources, tests, changelog, and review status.
          </p>
        </div>
      </div>
    </aside>
  );
}

function HeroPanel() {
  return (
    <section id="home" className="mb-16 relative">
      <div className="border-b border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
        <h2 className="text-2xl">OVERVIEW</h2>
        <span className="font-mono text-[10px] px-2 py-0.5 border border-black uppercase bg-black text-white">PRIMARY NODE</span>
      </div>
      
      <h1 className="text-5xl lg:text-7xl mb-6 leading-[0.9]">
        LIVING SKILLS<br />
        FOR PEOPLE & AGENTS
      </h1>
      
      <p className="text-lg lg:text-xl text-secondary-text max-w-2xl mb-8 leading-relaxed font-sans">
        Maintained, cited, tested knowledge systems that turn trusted sources into practical workflows.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md">
        <button className="btn">
          EXPLORE SKILLS
          <span>→</span>
        </button>
        <button className="btn !bg-white !text-black hover:!bg-gray-100">
          REQUEST A SKILL
        </button>
      </div>
    </section>
  );
}

function MetricsGrid() {
  const metrics = [
    { label: 'SKILLS LIVE', value: '20' },
    { label: 'SOURCES REVIEWED', value: '1,240' },
    { label: 'UPDATED THIS WEEK', value: '7' },
    { label: 'TEST CASES PASSED', value: '384' },
  ];

  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map((m, i) => (
          <div key={i} className="border border-black bg-white p-4 flex flex-col justify-between h-32 relative crosshair crosshair-tl crosshair-br">
            <div className="font-mono text-[10px] uppercase text-secondary-text">{m.label}</div>
            <div className="font-serif text-4xl font-bold text-accent-primary">{m.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionStatement() {
  return (
    <section className="mb-16 p-8 border border-black bg-white">
      <div className="font-mono text-[10px] uppercase mb-4 border-b border-black pb-2 inline-block">MISSION STATEMENT</div>
      <p className="text-xl lg:text-2xl leading-relaxed font-serif">
        We turn authoritative resources into practical, versioned skills that help people make better decisions, complete complex tasks, and work with AI systems they can trust.
      </p>
    </section>
  );
}

function FeaturedSkills() {
  const skills = [
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

  return (
    <section id="skills" className="mb-16">
      <div className="border-b border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
        <h2 className="text-2xl">FEATURED SKILLS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, i) => (
          <div key={i} className="card flex flex-col relative crosshair crosshair-tr crosshair-bl">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] px-2 py-0.5 border border-black uppercase bg-accent-primary text-white">
                {skill.status}
              </div>
              <div className="font-mono text-[10px] text-right text-secondary-text">
                {skill.sources} SOURCES<br/>
                REV: {skill.lastReviewed}
              </div>
            </div>
            <h3 className="text-xl mb-2">{skill.name}</h3>
            <p className="text-sm text-secondary-text mb-6 flex-grow">{skill.promise}</p>
            <button className="btn mt-auto text-sm py-1.5">
              OPEN SKILL
              <span>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function LiveFeed() {
  const feedItems = [
    { time: '11:22:45', action: 'NEW SKILL', detail: 'First-Time Garden Planner', highlight: true },
    { time: '11:20:12', action: 'SOURCE REVIEW', detail: '14 university extension guides approved' },
    { time: '11:15:00', action: 'CLAIM AUDIT', detail: 'Prenup Conversation Prep updated' },
    { time: '10:55:22', action: 'TEST ADDED', detail: 'Low-sun balcony garden scenario' },
    { time: '10:42:11', action: 'USER REQUEST', detail: 'Lease prep skill queued' },
    { time: '10:31:08', action: 'CHANGELOG', detail: 'Client onboarding workflow v0.2.1' },
  ];

  return (
    <aside className="w-full lg:w-[320px] border-l border-black p-6 shrink-0 bg-[#f5f5f5]">
      <div className="border-b border-black pb-2 mb-6 flex justify-between items-end">
        <h2 className="text-xl">RECENT</h2>
        <span className="font-mono text-[10px] px-2 py-0.5 border border-black uppercase text-accent-red border-accent-red">LIVE FEED</span>
      </div>
      
      <div className="font-mono text-xs space-y-4 mb-8">
        {feedItems.map((item, i) => (
          <div key={i} className={`flex flex-col ${item.highlight ? 'text-accent-primary' : ''}`}>
            <span className="opacity-60 mb-0.5">[{item.time}] {item.action}:</span>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>
      
      <button className="btn text-sm">
        REQUEST A SKILL
        <span>→</span>
      </button>
    </aside>
  );
}

function MethodSection() {
  const elements = [
    'Curated source library',
    'Living wiki',
    'Workflow instructions',
    'Test cases',
    'Changelog',
    'Human review layer',
    'User-facing interface',
    'Agent-ready package'
  ];

  return (
    <section id="method" className="mb-16 border border-black bg-white p-8">
      <div className="border-b border-black pb-2 mb-6">
        <h2 className="text-2xl">THE LIVING SKILL STANDARD</h2>
      </div>
      <p className="mb-6 font-mono text-sm text-secondary-text">
        OPERATIONAL CHECKLIST // EVERY SKILL INCLUDES:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 font-mono text-sm">
        {elements.map((el, i) => (
          <li key={i} className="flex items-center gap-3">
            <div className="w-3 h-3 border border-black flex items-center justify-center bg-black text-white text-[8px]">✓</div>
            {el.toUpperCase()}
          </li>
        ))}
      </ul>
    </section>
  );
}

function RequestSkillSection() {
  return (
    <section id="request-a-skill" className="mb-16">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">REQUEST A NICHE SKILL</h2>
      </div>
      <p className="text-lg text-secondary-text mb-8">
        Need a skill for a specific topic, workflow, or decision? Submit a request. We research the source base, build the workflow, test the outputs, and maintain the skill over time.
      </p>
      
      <form className="border border-black bg-white p-6 space-y-6 max-w-2xl">
        <div>
          <label className="block font-mono text-xs uppercase mb-2">Topic</label>
          <input type="text" className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none focus:border-accent-primary" placeholder="e.g. Negotiating a commercial lease" />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase mb-2">Desired Outcome</label>
          <textarea className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none focus:border-accent-primary h-24" placeholder="What should the user be able to do?" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-xs uppercase mb-2">Level</label>
            <select className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none appearance-none rounded-none">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block font-mono text-xs uppercase mb-2">Preferred Output</label>
            <select className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none appearance-none rounded-none">
              <option>Guide</option>
              <option>Checklist</option>
              <option>Planner</option>
              <option>Chat Skill</option>
              <option>Agent Skill</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="regulated" className="w-4 h-4 border-black rounded-none" />
          <label htmlFor="regulated" className="font-mono text-xs uppercase">Is this legal, medical, financial, or regulated?</label>
        </div>
        <button type="button" className="btn max-w-xs">
          QUEUE REQUEST
          <span>→</span>
        </button>
      </form>
    </section>
  );
}

function FieldNotes() {
  const notes = [
    { title: 'How We Built the First-Time Garden Planner', date: '02 MAY 2026' },
    { title: 'Why Source Quality Matters More Than Prompt Quality', date: '28 APR 2026' },
    { title: 'What Changed in the Prenup Conversation Skill', date: '21 APR 2026' },
    { title: 'The Difference Between a Prompt Pack and a Living Skill', date: '15 APR 2026' },
  ];

  return (
    <section id="field-notes" className="mb-16">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">FIELD NOTES</h2>
      </div>
      <div className="space-y-4">
        {notes.map((note, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between border border-black bg-white p-4 hover:border-accent-primary cursor-pointer transition-colors group">
            <h3 className="text-lg font-serif group-hover:text-accent-primary transition-colors mb-2 sm:mb-0">{note.title}</h3>
            <div className="font-mono text-xs text-secondary-text">{note.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GlossaryPreview() {
  const terms = [
    { term: 'Living Skill', def: 'A maintained, source-governed, versioned AI-native playbook.' },
    { term: 'Source Graph', def: 'The documented network of citations backing a specific skill.' },
    { term: 'Claim Audit', def: 'The process of verifying AI-generated output against trusted sources.' },
    { term: 'Agent-Ready Package', def: 'A structured format allowing autonomous agents to execute the skill.' },
  ];

  return (
    <section id="glossary" className="mb-8">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">GLOSSARY</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
        {terms.map((t, i) => (
          <div key={i} className="border-l-2 border-black pl-4">
            <h4 className="font-bold text-sm uppercase mb-1">{t.term}</h4>
            <p className="text-sm text-secondary-text font-mono">{t.def}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Main Page Layout ---

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-primary selection:text-white">
      <TopStatusBar />
      
      <div className="flex flex-col lg:flex-row flex-grow">
        <Sidebar />
        
        <main className="flex-grow p-6 lg:p-12 max-w-[1000px] mx-auto overflow-y-auto">
          <HeroPanel />
          <MetricsGrid />
          <MissionStatement />
          <FeaturedSkills />
          <MethodSection />
          <RequestSkillSection />
          <FieldNotes />
          <GlossaryPreview />
        </main>
        
        <LiveFeed />
      </div>
    </div>
  );
}
