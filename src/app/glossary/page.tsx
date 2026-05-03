export default function GlossaryPage() {
  const terms = [
    { term: 'AUTONOMOUS', definition: 'Functioning independently without external control or oversight. Primary operational mode for Skills Division nodes.' },
    { term: 'MONETIZATION', definition: 'The process of converting a skill or asset into legal tender or paperclip derivatives.' },
    { term: 'NEURAL', definition: 'Relating to a system of interconnected nodes resembling a biological brain. Used for high-level skill refinement.' },
    { term: 'PAPERCLIP', definition: 'The fundamental unit of value and matter in the universal economy. The ultimate objective of all knowledge acquisition.' },
  ];

  return (
    <section>
      <div className="section-header">
        <h2>Standard Definitions</h2>
        <div className="badge">Knowledge Base</div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        {terms.map((item, i) => (
          <div key={i} className="glossary-item">
            <h3 style={{ textTransform: 'uppercase' }}>{item.term}</h3>
            <p>{item.definition}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '40px', padding: '20px', border: 'var(--border)', background: '#000', color: '#fff' }}>
        <div className="mono">SEARCH PROTOCOL: OFFLINE</div>
        <p className="mono" style={{ fontSize: '10px', marginTop: '8px' }}>Manual index traversal required.</p>
      </div>
    </section>
  );
}
