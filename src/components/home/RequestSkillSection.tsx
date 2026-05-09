import Button from '../ui/Button';

export default function RequestSkillSection() {
  return (
    <section id="request-a-skill" className="mb-16">
      <div className="border-b border-black pb-2 mb-8">
        <h2 className="text-2xl">REQUEST A NICHE SKILL</h2>
      </div>
      <p className="text-lg text-secondary-text mb-8">
        Need a skill for a specific topic, workflow, or decision? Submit a request. We research the source base, build the workflow, test the outputs, and maintain the skill over time.
      </p>
      
      <form className="border border-black bg-white p-6 space-y-6 max-w-2xl">
        <div>
          <label className="block font-mono text-xs uppercase mb-2">Topic</label>
          <input type="text" className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none focus:border-accent-primary" placeholder="e.g. Negotiating a commercial lease" />
        </div>
        <div>
          <label className="block font-mono text-xs uppercase mb-2">Desired Outcome</label>
          <textarea className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none focus:border-accent-primary h-24" placeholder="What should the user be able to do?" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block font-mono text-xs uppercase mb-2">Level</label>
            <select className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none appearance-none rounded-none">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
          <div>
            <label className="block font-mono text-xs uppercase mb-2">Preferred Output</label>
            <select className="w-full border border-black p-2 bg-[#f5f5f5] font-sans outline-none appearance-none rounded-none">
              <option>Guide</option>
              <option>Checklist</option>
              <option>Planner</option>
              <option>Chat Skill</option>
              <option>Agent Skill</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <input type="checkbox" id="regulated" className="w-4 h-4 border-black rounded-none" />
          <label htmlFor="regulated" className="font-mono text-xs uppercase">Is this legal, medical, financial, or regulated?</label>
        </div>
        <Button type="button" className="max-w-xs" hasArrow>
          QUEUE REQUEST
        </Button>
      </form>
    </section>
  );
}
