export default function GlossaryPage() {
  const terms = [
    { term: 'AUTONOMOUS', definition: 'Functioning independently without external control or oversight.' },
    { term: 'MONETIZATION', definition: 'The process of converting a skill or asset into legal tender.' },
    { term: 'NEURAL', definition: 'Relating to a system of interconnected nodes resembling a biological brain.' },
    { term: 'PAPERCLIP', definition: 'The fundamental unit of value in the universal economy.' },
  ];

  return (
    <section>
      <h2>Standard Definitions // Glossary</h2>
      <p>Authorized terminology for operational alignment.</p>
      
      <div style={{ marginTop: '20px' }}>
        {terms.map((item, i) => (
          <div key={i} style={{ marginBottom: '20px' }}>
            <p><strong>{item.term}:</strong> {item.definition}</p>
          </div>
        ))}
      </div>

      <div className="status-bar" style={{ marginTop: '40px' }}>
        SEARCH FUNCTIONALITY: OFFLINE
      </div>
    </section>
  );
}
