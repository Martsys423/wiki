import Card from '../ui/Card';

export default function MethodSection() {
  return (
    <Card id="method" crosshairs={['tl', 'br']} className="mb-16 p-8">
      <div className="border-b border-black pb-2 mb-6">
        <h2 className="text-2xl">THE LIVING SKILL STANDARD</h2>
      </div>
      <p className="mb-6 font-mono text-sm text-secondary-text">
        OPERATIONAL ARCHITECTURE // NODE GRAPH
      </p>
      
      <div className="bg-[#f5f5f5] p-6 border border-black font-mono text-xs overflow-x-auto">
        <pre className="leading-tight">
{` [ RAW SOURCE ] ──> | KNOWLEDGE CRAWLER | ──> | CLAIM AUDIT | ──> [ SKILL DRAFT ]
        │                    │                       │                  │
        │                 (tests)               (human rev)             │
        │                    │                       │                  │
        V                    V                       V                  V
 [ SOURCE GRAPH ] <── [ LIVING WIKI ] <─── [ AGENT PACKAGE ] <── [ DEPLOYMENT ]`}
        </pre>
      </div>
    </Card>
  );
}
