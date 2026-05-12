import React from 'react';

export default function Marquee() {
  const messages = [
    "// SYSTEM LOG: Node 1 connected",
    "// INGESTING NEW SOURCES...",
    "// CLAIM AUDIT PASSED: Prenup Conversation Prep",
    "// USER REQUEST QUEUED: Solo Consultant Client Onboarding",
    "// RUNNING TESTS ON GARDEN PLANNER...",
    "// DEPLOYMENT: v0.1.0-alpha live"
  ];

  const tickerContent = messages.join('\u00A0\u00A0\u00A0\u00A0|\u00A0\u00A0\u00A0\u00A0');

  return (
    <div className="flex overflow-hidden w-full bg-accent-primary text-black font-mono text-[10px] uppercase border-b border-black py-1 relative z-10 selection:bg-black selection:text-white">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="mx-4">{tickerContent}</span>
      </div>
      <div className="animate-marquee flex whitespace-nowrap" aria-hidden="true">
        <span className="mx-4">{tickerContent}</span>
      </div>
      <div className="animate-marquee flex whitespace-nowrap" aria-hidden="true">
        <span className="mx-4">{tickerContent}</span>
      </div>
      <div className="animate-marquee flex whitespace-nowrap" aria-hidden="true">
        <span className="mx-4">{tickerContent}</span>
      </div>
    </div>
  );
}
