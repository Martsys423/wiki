import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function HeroPanel() {
  return (
    <section id="home" className="mb-16 relative overflow-hidden">
      <div className="relative z-10">
        <div className="border-b-2 border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
          <div className="flex items-center gap-2">
            <span className="bg-black text-white text-[10px] px-1 font-mono">NODE: 01-A</span>
            <h2 className="text-2xl">OVERVIEW</h2>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[8px] font-mono text-secondary-text tracking-[0.2em] leading-none">LOC: 40.7128° N, 74.0060° W</span>
            <Badge variant="primary">PRIMARY NODE</Badge>
          </div>
        </div>
        
        <h1 className="text-5xl lg:text-7xl mb-6 leading-[0.9]">
          LIVING SKILLS<br />
          FOR PEOPLE & AGENTS
        </h1>
        
        <p className="text-lg lg:text-xl text-secondary-text max-w-2xl mb-8 leading-relaxed font-mono bg-[#f5f5f5]/80 inline-block">
          Maintained, cited, tested knowledge systems that turn trusted sources into practical workflows.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 max-w-md relative z-10">
        <Button hasArrow>EXPLORE SKILLS</Button>
        <Button variant="inverted">REQUEST A SKILL</Button>
      </div>
      
      {/* Wiring connection down to Metrics */}
      <div className="absolute left-1/4 -bottom-16 w-px h-16 border-l border-dashed border-black z-0 opacity-50 hidden md:block"></div>
    </section>
  );
}
