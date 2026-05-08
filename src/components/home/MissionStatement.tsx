export default function MissionStatement() {
  return (
    <section className="mb-16 p-8 border border-black bg-white relative">
      <div className="font-mono text-[10px] uppercase mb-4 border-b border-black pb-2 inline-block">MISSION STATEMENT</div>
      <p className="text-xl lg:text-2xl leading-relaxed font-mono">
        We turn authoritative resources into practical, versioned skills that help people make better decisions, complete complex tasks, and work with AI systems they can trust.
      </p>
      {/* Wiring connection down to Skills */}
      <div className="absolute left-1/4 -bottom-16 w-px h-16 border-l border-dashed border-black opacity-50 hidden md:block"></div>
    </section>
  );
}
