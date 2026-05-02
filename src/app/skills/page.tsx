export default function SkillsPage() {
  return (
    <section>
      <h2>Skills Catalog</h2>
      <p>The following skills are available for acquisition and deployment.</p>
      
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid black' }}>
            <th style={{ textAlign: 'left', padding: '10px' }}>SKILL</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>LEVEL</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>VALUE</th>
            <th style={{ textAlign: 'left', padding: '10px' }}>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px' }}>AUTONOMOUS CODING</td>
            <td style={{ padding: '10px' }}>12</td>
            <td style={{ padding: '10px' }}>$4,500</td>
            <td style={{ padding: '10px' }}>ACTIVE</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>NEURAL REFINEMENT</td>
            <td style={{ padding: '10px' }}>8</td>
            <td style={{ padding: '10px' }}>$2,100</td>
            <td style={{ padding: '10px' }}>PENDING</td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>QUANTUM LINGUISTICS</td>
            <td style={{ padding: '10px' }}>4</td>
            <td style={{ padding: '10px' }}>$8,900</td>
            <td style={{ padding: '10px' }}>LOCKED</td>
          </tr>
        </tbody>
      </table>

      <div style={{ marginTop: '40px' }}>
        <button>UPGRADE SELECTED SKILL</button>
      </div>
    </section>
  );
}
