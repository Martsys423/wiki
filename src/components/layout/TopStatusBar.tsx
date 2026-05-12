"use client";

import React, { useState, useEffect } from 'react';

export default function TopStatusBar() {
  const [inverted, setInverted] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-US', { hour12: false, timeZoneName: 'short' }));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleInvert = () => {
    const isCurrentlyInverted = document.documentElement.classList.contains('invert-mode');
    if (isCurrentlyInverted) {
      document.documentElement.classList.remove('invert-mode');
      setInverted(false);
    } else {
      document.documentElement.classList.add('invert-mode');
      setInverted(true);
    }
  };

  return (
    <div className="bg-black text-white px-4 py-2 flex justify-between items-center font-mono text-xs uppercase border-b border-black">
      <div className="blinking-cursor">SYSTEM: LIVING SKILLS // VERSION: 0.1.0</div>
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleInvert} 
          className="border border-white px-2 py-0.5 hover:bg-white hover:text-black transition-colors"
        >
          {inverted ? 'SWAP: LIGHT' : 'SWAP: DARK'}
        </button>
        <div className="hidden md:block">SOURCE INDEX ONLINE</div>
        <div className="live-pulse">
          <div className="live-dot" />
          LIVE
        </div>
        <div>{time}</div>
      </div>
    </div>
  );
}
