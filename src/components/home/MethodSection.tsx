import Card from '../ui/Card';
import Badge from '../ui/Badge';

export default function MethodSection() {
  const steps = [
    { title: 'RAW SOURCE', desc: 'Ingest and index authoritative documents and trusted data.', tag: 'INPUT' },
    { title: 'KNOWLEDGE CRAWLER', desc: 'Extract concepts, write automated tests, and build structural graphs.', tag: 'PROCESS' },
    { title: 'CLAIM AUDIT', desc: 'Human-in-the-loop review to rigidly verify claims against original sources.', tag: 'REVIEW' },
    { title: 'LIVING SKILL', desc: 'Deploy as a human-readable Wiki page and a machine-readable Agent Package.', tag: 'OUTPUT' }
  ];

  return (
    <Card id="method" crosshairs={['tl', 'br']} className="mb-16 p-8">
      <div className="border-b border-black pb-2 mb-6">
        <h2 className="text-2xl">THE LIVING SKILL STANDARD</h2>
      </div>
      <p className="mb-8 font-mono text-sm text-secondary-text">
        OPERATIONAL ARCHITECTURE // PIPELINE
      </p>
      
      <div className="flex flex-col space-y-4">
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-stretch gap-4 group relative">
            {/* Connecting line between nodes (hidden on last item) */}
            {i !== steps.length - 1 && (
              <div className="absolute left-6 top-12 bottom-[-16px] w-px border-l border-dashed border-black hidden sm:block"></div>
            )}
            
            {/* The Number Node */}
            <div className="w-12 h-12 shrink-0 border border-black bg-black text-white flex items-center justify-center font-mono text-xl font-bold group-hover:bg-accent-primary transition-colors z-10">
              {i + 1}
            </div>
            
            {/* The Content Card */}
            <div className="flex-grow border border-black bg-[#f5f5f5] group-hover:bg-white transition-colors p-4 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
              <div>
                <h3 className="font-mono font-bold text-sm mb-1">{step.title}</h3>
                <p className="font-sans text-sm text-secondary-text">{step.desc}</p>
              </div>
              <Badge className="self-start">{step.tag}</Badge>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
