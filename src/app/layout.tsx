import type { Metadata } from "next";
import { JetBrains_Mono, Inter, EB_Garamond } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const mono = JetBrains_Mono({ subsets: ["latin"] });
const sans = Inter({ subsets: ["latin"] });
const serif = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "POLSIA // UNIVERSAL WIKI",
  description: "Advanced skill monetization and knowledge repository.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.className}>
        <div className="top-bar">
          <div className="mono">SYSTEM: OPERATIONAL // VERSION: 1.0.4</div>
          <div className="live-pulse">
            <div className="live-dot" />
            LIVE
          </div>
          <div className="mono">04:30:22-07:00</div>
        </div>
        
        <div className="grid-container">
          {/* Navigation Column */}
          <aside className="column" style={{ width: '300px' }}>
            <div className="section-header">
              <h2>Index</h2>
            </div>
            <nav>
              <Link href="/" className="nav-link">HOME</Link>
              <Link href="/skills" className="nav-link">SKILLS</Link>
              <Link href="/blog" className="nav-link">BLOG</Link>
              <Link href="/glossary" className="nav-link">GLOSSARY</Link>
            </nav>
            
            <div style={{ marginTop: 'auto' }}>
              <div className="badge">Secured Connection</div>
              <p className="mono" style={{ marginTop: '8px', fontSize: '10px' }}>
                All skill transactions are encrypted using Universal Paperclip Protocol.
              </p>
            </div>
          </aside>

          {/* Main Content Column */}
          <main className="column">
            {children}
          </main>

          {/* Activity/Sidebar Column */}
          <aside className="column" style={{ width: '350px' }}>
            <div className="section-header">
              <h2>Recent</h2>
              <div className="badge">Live Feed</div>
            </div>
            <div className="mono" style={{ lineHeight: '1.8' }}>
              <p style={{ color: 'var(--accent-orange)' }}>[11:22:45] NEW SKILL: QUANTUM LINGUISTICS</p>
              <p>[11:20:12] NODE SYNC COMPLETE</p>
              <p>[11:15:00] REVENUE CYCLE INITIALIZED</p>
              <p>[10:55:22] SYNERGY OPTIMIZATION: 98.4%</p>
              <p>[10:42:11] MEMORY CACHE PURGED</p>
            </div>
            
            <div style={{ marginTop: '40px' }}>
              <button className="button">
                UPGRADE SYSTEM
                <span>→</span>
              </button>
            </div>
          </aside>
        </div>
      </body>
    </html>
  );
}
