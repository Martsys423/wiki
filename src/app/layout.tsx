import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const mono = JetBrains_Mono({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WIKI // UNIVERSAL SKILLS",
  description: "A repository of skills, knowledge, and definitions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mono.className}>
        <div className="container">
          <header>
            <h1>Universal Wiki</h1>
            <div className="status-bar">
              OPERATIONAL // STATUS: NOMINAL // VERSION: 1.0.4
            </div>
            <nav className="nav">
              <Link href="/">HOME</Link>
              <Link href="/skills">SKILLS</Link>
              <Link href="/blog">BLOG</Link>
              <Link href="/glossary">GLOSSARY</Link>
            </nav>
          </header>
          <main>{children}</main>
          <hr />
          <footer>
            <p>&copy; 2026 UNIVERSAL PAPERCLIPS / SKILLS DIVISION</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
