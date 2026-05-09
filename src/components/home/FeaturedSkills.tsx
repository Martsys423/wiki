import { skillsData } from '../../data/mockData';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function FeaturedSkills() {
  return (
    <section id="skills" className="mb-16">
      <div className="border-b border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
        <h2 className="text-2xl">FEATURED SKILLS</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, i) => (
          <Card key={i} crosshairs={['tr', 'bl']} className="group flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="inverted-hover">
                {skill.status}
              </Badge>
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
          </Card>
        ))}
      </div>
    </section>
  );
}
