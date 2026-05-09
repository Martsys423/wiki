import { feedItemsData } from '../../data/mockData';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function LiveFeed() {
  return (
    <aside className="w-full lg:w-[320px] border-l border-black p-6 shrink-0 bg-[#f5f5f5]">
      <div className="border-b border-black pb-2 mb-6 flex justify-between items-end">
        <h2 className="text-xl">RECENT</h2>
        <Badge variant="red">LIVE FEED</Badge>
      </div>
      
      <div className="font-mono text-xs space-y-4 mb-8">
        {feedItemsData.map((item, i) => (
          <div key={i} className={`flex flex-col ${item.highlight ? 'text-accent-primary' : ''}`}>
            <span className="opacity-60 mb-0.5">[{item.time}] {item.action}:</span>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>
      
      <Button className="text-sm" hasArrow>
        REQUEST A SKILL
      </Button>
    </aside>
  );
}
