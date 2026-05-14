import React from 'react';
import TopStatusBar from '../../components/layout/TopStatusBar';
import Marquee from '../../components/layout/Marquee';
import Sidebar from '../../components/layout/Sidebar';
import LiveFeed from '../../components/layout/LiveFeed';
import Footer from '../../components/layout/Footer';
import Card from '../../components/ui/Card';
import Badge from '../../components/ui/Badge';
import Button from '../../components/ui/Button';

export default function SkillsPage() {
  const skills = [
    { name: 'AUTONOMOUS CODING', level: 12, value: '$4,500', status: 'ACTIVE', desc: 'Self-correcting recursive logic implementation.' },
    { name: 'NEURAL REFINEMENT', level: 8, value: '$2,100', status: 'PENDING', desc: 'Weights optimization for distributed agent nodes.' },
    { name: 'QUANTUM LINGUISTICS', level: 4, value: '$8,900', status: 'LOCKED', desc: 'Multi-dimensional semantic mapping and retrieval.' },
    { name: 'CYBERNETIC ECOLOGY', level: 15, value: '$12,400', status: 'ACTIVE', desc: 'Harmonizing digital growth with physical hardware limits.' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-primary selection:text-white relative z-10">
      <TopStatusBar />
      <Marquee />
      
      <div className="flex flex-col lg:flex-row flex-grow">
        <Sidebar />
        
        <main className="flex-grow p-6 lg:p-12 max-w-[1000px] mx-auto overflow-y-auto">
          <div className="border-b-2 border-black pb-2 mb-8 flex justify-between items-end accent-line-bottom">
            <div className="flex items-center gap-2">
              <span className="bg-black text-white text-[10px] px-1 font-mono">CATALOG: v.2.4</span>
              <h2 className="text-2xl uppercase font-bold">Skills Catalog</h2>
            </div>
            <Badge variant="primary">MARKETPLACE</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <Card key={i} crosshairs={['tl', 'tr', 'bl', 'br']} hoverable className="group flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="font-mono text-[10px] uppercase tracking-tighter text-secondary-text">
                    LEVEL {skill.level} // REV: 402
                  </div>
                  <Badge variant={skill.status === 'ACTIVE' ? 'inverted-hover' : 'primary'}>
                    {skill.status}
                  </Badge>
                </div>
                
                <h3 className="text-xl mb-2 font-bold uppercase">{skill.name}</h3>
                <p className="text-sm text-secondary-text mb-8 flex-grow group-hover:text-gray-400">
                  {skill.desc}
                </p>
                
                <div className="flex justify-between items-end mt-auto pt-4 border-t-2 border-black group-hover:border-accent-primary transition-colors">
                  <div className="flex flex-col">
                    <span className="text-[8px] font-mono uppercase text-secondary-text">Value</span>
                    <span className="text-2xl font-bold font-mono text-accent-primary">{skill.value}</span>
                  </div>
                  <Button className="!w-auto !px-4 !py-1 text-xs">ACQUIRE</Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t-2 border-black flex justify-center">
            <Button className="!w-auto px-8 py-4 text-lg" hasArrow>
              GENERATE NEW SKILL
            </Button>
          </div>
        </main>
        
        <LiveFeed />
      </div>
      
      <Footer />
    </div>
  );
}
