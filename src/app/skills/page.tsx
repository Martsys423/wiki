export default function SkillsPage() {
  const skills = [
    { name: 'AUTONOMOUS CODING', level: 12, value: '$4,500', status: 'ACTIVE' },
    { name: 'NEURAL REFINEMENT', level: 8, value: '$2,100', status: 'PENDING' },
    { name: 'QUANTUM LINGUISTICS', level: 4, value: '$8,900', status: 'LOCKED' },
  ];

  return (
    <section>
      <div className="section-header">
        <h2>Skills Catalog</h2>
        <div className="badge">Marketplace</div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
        {skills.map((skill, i) => (
          <div key={i} className={`skill-card ${skill.status === 'ACTIVE' ? 'active' : ''}`}>
            <div className="mono" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <span>LVL {skill.level}</span>
              <span style={{ color: skill.status === 'ACTIVE' ? 'var(--accent-orange)' : 'inherit' }}>{skill.status}</span>
            </div>
            <h3 style={{ fontSize: '20px', marginBottom: '8px' }}>{skill.name}</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px' }}>
              <span style={{ fontSize: '24px', fontWeight: '700', fontFamily: 'var(--font-serif)' }}>{skill.value}</span>
              <button className="badge" style={{ cursor: 'pointer', background: 'none' }}>ACQUIRE</button>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px' }}>
        <button className="button" style={{ width: 'auto' }}>
          GENERATE NEW SKILL
          <span style={{ marginLeft: '12px' }}>+</span>
        </button>
      </div>
    </section>
  );
}
