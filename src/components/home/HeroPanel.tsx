export default function HeroPanel() {
  return (
    <section id="home" className="mb-16 relative overflow-hidden">
      {/* Background Graphic - Static Radar Crosshair */}
      <div className="absolute right-0 -top-10 w-[500px] h-[500px] opacity-[0.05] z-0 pointer-events-none mix-blend-multiply">
        <svg viewBox="0 0 100 100" className="w-full h-full stroke-black fill-none" strokeWidth="0.5">
          {/* Main targeting rings */}
          <circle cx="50" cy="50" r="40" />
          <circle cx="50" cy="50" r="38" strokeWidth="0.2" />
          {/* Intersecting lines */}
          <line x1="0" y1="50" x2="100" y2="50" />
          <line x1="50" y1="0" x2="50" y2="100" />
          {/* Center node */}
          <circle cx="50" cy="50" r="1.5" fill="black" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="border-b border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
          <h2 className="text-2xl">OVERVIEW</h2>
          <span className="font-mono text-[10px] px-2 py-0.5 border border-black uppercase bg-black text-white">PRIMARY NODE</span>
        </div>
        
        <h1 className="text-5xl lg:text-7xl mb-6 leading-[0.9]">
          LIVING SKILLS<br />
          FOR PEOPLE & AGENTS
        </h1>
        
        <p className="text-lg lg:text-xl text-secondary-text max-w-2xl mb-8 leading-relaxed font-mono bg-[#f5f5f5]/80 inline-block">
          Maintained, cited, tested knowledge systems that turn trusted sources into practical workflows.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md relative">
        <button className="btn relative z-10">
          EXPLORE SKILLS
          <span>→</span>
        </button>
        <button className="btn !bg-white !text-black hover:!bg-black hover:!text-white relative z-10">
          REQUEST A SKILL
        </button>
        {/* Wiring connection down to Metrics */}
        <div className="absolute left-1/4 -bottom-16 w-px h-16 border-l border-dashed border-black z-0 opacity-50 hidden md:block"></div>
      </div>
    </section>
  );
}
