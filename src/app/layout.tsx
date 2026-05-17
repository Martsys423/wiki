import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sans = Inter({ subsets: ["latin"], variable: "--font-inter" });
const mono = IBM_Plex_Mono({ weight: ["400", "500", "600", "700"], subsets: ["latin"], variable: "--font-ibm-plex-mono" });

export const metadata: Metadata = {
  title: "LIVING SKILLS // SYSTEM DASHBOARD",
  description: "Maintained, cited, tested knowledge systems that turn trusted sources into practical workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body className={`${sans.className} min-h-screen bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
