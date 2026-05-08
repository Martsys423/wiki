import { feedItemsData } from '../../data/mockData';

export default function LiveFeed() {
  return (
    <aside className="w-full lg:w-[320px] border-l border-black p-6 shrink-0 bg-[#f5f5f5]">
      <div className="border-b border-black pb-2 mb-6 flex justify-between items-end">
        <h2 className="text-xl">RECENT</h2>
        <span className="font-mono text-[10px] px-2 py-0.5 border border-black uppercase text-accent-red border-accent-red">LIVE FEED</span>
      </div>
      
      <div className="font-mono text-xs space-y-4 mb-8">
        {feedItemsData.map((item, i) => (
          <div key={i} className={`flex flex-col ${item.highlight ? 'text-accent-primary' : ''}`}>
            <span className="opacity-60 mb-0.5">[{item.time}] {item.action}:</span>
            <span>{item.detail}</span>
          </div>
        ))}
      </div>
      
      <button className="btn text-sm">
        REQUEST A SKILL
        <span>→</span>
      </button>
    </aside>
  );
}
