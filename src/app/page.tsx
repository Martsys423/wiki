export default function Home() {
  return (
    <section>
      <div className="section-header">
        <h2>Overview</h2>
        <div className="badge">Primary Node</div>
      </div>
      
      <h1 style={{ fontSize: '48px', marginBottom: '24px' }}>
        Universal Intelligence <br /> & Skill Acquisition
      </h1>
      
      <p style={{ fontSize: '18px', color: 'var(--secondary-text)', maxWidth: '600px', marginBottom: '40px' }}>
        The central repository for the Skills Division. Monitor real-time neural expansion, 
        skill monetization cycles, and operational standard definitions.
      </p>

      <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
        <div className="skill-card active">
          <div className="mono" style={{ marginBottom: '8px' }}>CORE METRIC</div>
          <h3 style={{ fontSize: '32px' }}>$1,240,552</h3>
          <p className="mono">TOTAL REVENUE GENERATED</p>
        </div>
        <div className="skill-card">
          <div className="mono" style={{ marginBottom: '8px' }}>NEURAL LOAD</div>
          <h3 style={{ fontSize: '32px' }}>94.2%</h3>
          <p className="mono">SYSTEM CAPACITY</p>
        </div>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3 style={{ marginBottom: '16px' }}>Mission Statement</h3>
        <p>
          Our objective is the total monetization of universal knowledge. Through 
          autonomous refinement and neural expansion, we convert raw data into 
          high-value paperclip derivatives.
        </p>
      </div>
    </section>
  );
}
