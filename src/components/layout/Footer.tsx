export default function Footer() {
  return (
    <footer className="w-full border-t border-black bg-black text-white p-6 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-20">
      <div className="flex flex-col gap-4">
        <h2 className="text-4xl lg:text-5xl leading-none tracking-tight">END OF FILE</h2>
        <div className="font-mono text-xs text-gray-400 space-y-1">
          <p>SYSTEM UPTIME: 9,241 HOURS</p>
          <p>BUILD VERSION: v0.1.0-alpha</p>
          <p>LIVING SKILLS DASHBOARD // TERMINAL NODE 1</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 font-mono text-xs">
        <div className="flex flex-col gap-3">
          <span className="text-gray-500 font-bold mb-1 uppercase">Resources</span>
          <a href="#" className="hover:text-accent-primary hover:underline">Documentation</a>
          <a href="#" className="hover:text-accent-primary hover:underline">API Reference</a>
          <a href="#" className="hover:text-accent-primary hover:underline">Skill Manifests</a>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-gray-500 font-bold mb-1 uppercase">System</span>
          <a href="#" className="hover:text-accent-primary hover:underline">Status Board</a>
          <a href="#" className="hover:text-accent-primary hover:underline">Commit Log</a>
          <a href="#" className="hover:text-accent-primary hover:underline">Telemetry</a>
        </div>
        <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
          <span className="border border-white px-2 py-0.5 self-start uppercase font-bold tracking-widest text-[10px] bg-white text-black">
            System Normal
          </span>
          <p className="text-gray-400 max-w-[150px] leading-relaxed">
            All nodes functioning within optimal parameters. Connected to main grid.
          </p>
        </div>
      </div>
    </footer>
  );
}
