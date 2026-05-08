import { skillsData } from '../../data/mockData';

export default function FeaturedSkills() {
  return (
    <section id="skills" className="mb-16">
      <div className="border-b border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
        <h2 className="text-2xl">FEATURED SKILLS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, i) => (
          <div key={i} className="card group flex flex-col relative crosshair crosshair-tr crosshair-bl">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] px-2 py-0.5 border border-black uppercase bg-accent-primary text-white group-hover:bg-white group-hover:text-black transition-none">
                {skill.status}
              </div>
              <div className="font-mono text-[10px] text-right text-secondary-text group-hover:text-gray-400">
                {skill.sources} SOURCES<br/>
                REV: {skill.lastReviewed}
              </div>
            </div>
            <h3 className="text-xl mb-2">{skill.name}</h3>
            <p className="text-sm text-secondary-text mb-6 flex-grow group-hover:text-gray-300">{skill.promise}</p>
            
            <div className="flex justify-end items-end mt-auto pt-4 border-t border-black group-hover:border-white">
              <button className="font-mono text-sm font-bold uppercase hover:underline">
                OPEN SKILL →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
