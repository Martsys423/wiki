export default function TopStatusBar() {
  return (
    <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-xs uppercase border-b border-black">
      <div className="blinking-cursor">SYSTEM: LIVING SKILLS // VERSION: 0.1.0</div>
      <div className="flex items-center gap-4">
        <div className="hidden md:block">SOURCE INDEX ONLINE</div>
        <div className="live-pulse">
          <div className="live-dot" />
          LIVE
        </div>
        <div>{new Date().toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' })}</div>
      </div>
    </div>
  );
}
