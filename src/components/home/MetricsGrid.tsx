import { metricsData } from '../../data/mockData';
import Card from '../ui/Card';

export default function MetricsGrid() {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metricsData.map((m, i) => (
          <Card key={i} crosshairs={['tl', 'br']} className="flex flex-col justify-between border-2 border-black h-32">
            <div className="flex justify-between items-start mb-4">
              <div className="font-mono text-[10px] uppercase tracking-widest text-secondary-text">{m.label}</div>
              <div className="text-[10px] font-mono opacity-30">#00{i+1}</div>
            </div>
            <div>
              <div className="flex gap-[2px] h-2 w-24 mb-2 opacity-80">
                {[...Array(10)].map((_, j) => (
                  <div key={j} className={`flex-1 ${j < m.progress ? 'bg-black' : 'bg-gray-200'}`} />
                ))}
              </div>
              <div className="font-sans text-4xl font-bold text-accent-primary tracking-tight">{m.value}</div>
            </div>
          </Card>
        ))}
      </div>
      {/* Wiring connection down to Mission Statement */}
      <div className="relative">
        <div className="absolute left-1/4 h-16 w-px border-l border-dashed border-black opacity-50 hidden md:block"></div>
      </div>
    </section>
  );
}
