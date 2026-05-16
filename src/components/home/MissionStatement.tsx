export default function MissionStatement() {
  return (
    <section className="mb-16 p-8 border border-black bg-white relative overflow-hidden">
      <div className="font-mono text-[10px] uppercase mb-6 border-b border-black pb-2 inline-block tracking-widest text-accent-primary">SYSTEM_DIRECTIVE</div>
      
      <div className="space-y-4 max-w-[700px]">
        <div>
          <h3 className="text-[10px] font-mono mb-1 text-secondary-text tracking-widest uppercase">Core Objective</h3>
          <p className="text-lg font-mono text-foreground/80 leading-relaxed">
            Distilling expertise into actionable systems.
          </p>
        </div>
        <div>
          <h3 className="text-[10px] font-mono mb-1 text-secondary-text tracking-widest uppercase">Primary Function</h3>
          <p className="text-lg font-mono text-foreground/80 leading-relaxed">
            Optimizing human performance through versioned skill synthesis.
          </p>
        </div>
      </div>
      
      {/* Wiring connection down to Skills */}
      <div className="absolute left-1/4 -bottom-16 w-px h-16 border-l border-dashed border-black opacity-50 hidden md:block"></div>
    </section>
  );
}
