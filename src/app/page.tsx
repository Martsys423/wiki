import React from 'react';
import TopStatusBar from '../components/layout/TopStatusBar';
import Sidebar from '../components/layout/Sidebar';
import LiveFeed from '../components/layout/LiveFeed';
import Footer from '../components/layout/Footer';
import HeroPanel from '../components/home/HeroPanel';
import MetricsGrid from '../components/home/MetricsGrid';
import MissionStatement from '../components/home/MissionStatement';
import FeaturedSkills from '../components/home/FeaturedSkills';
import MethodSection from '../components/home/MethodSection';
import RequestSkillSection from '../components/home/RequestSkillSection';
import FieldNotes from '../components/home/FieldNotes';
import GlossaryPreview from '../components/home/GlossaryPreview';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-accent-primary selection:text-white relative z-10">
      <TopStatusBar />
      
      <div className="flex flex-col lg:flex-row flex-grow">
        <Sidebar />
        
        <main className="flex-grow p-6 lg:p-12 max-w-[1000px] mx-auto overflow-y-auto">
          <HeroPanel />
          <MetricsGrid />
          <MissionStatement />
          <FeaturedSkills />
          <MethodSection />
          <RequestSkillSection />
          <FieldNotes />
          <GlossaryPreview />
        </main>
        
        <LiveFeed />
      </div>
      
      <Footer />
    </div>
  );
}
