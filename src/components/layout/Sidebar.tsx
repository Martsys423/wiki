export default function Sidebar() {
  const links = ['Home', 'Skills', 'Request a Skill', 'Method', 'Field Notes', 'Glossary'];
  return (
    <aside className="w-full lg:w-[280px] border-r border-black p-6 flex flex-col justify-between shrink-0 bg-[#f5f5f5] bg-grid-pattern relative">
      <div className="absolute inset-0 bg-white/50 pointer-events-none" /> {/* fades the grid slightly */}
      <div className="relative z-10">
        <div className="border-b border-black pb-2 mb-6 accent-line-bottom">
          <h2 className="text-xl">INDEX</h2>
        </div>
        <nav className="space-y-1">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="nav-link">
              {link.toUpperCase()}
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-12 lg:mt-auto">
        <div className="border border-black p-3 bg-white">
          <div className="font-mono text-[10px] font-bold uppercase mb-2 border-b border-black pb-1">SECURED SOURCE CHAIN</div>
          <p className="font-mono text-[10px] leading-relaxed text-secondary-text">
            Every skill includes sources, tests, changelog, and review status.
          </p>
        </div>
      </div>
    </aside>
  );
}
