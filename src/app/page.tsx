export default function Home() {
  return (
    <section>
      <h2>Welcome to the Universal Database</h2>
      <p>
        This terminal provides access to the primary knowledge repository for the 
        Skills Division. Below are the active modules:
      </p>
      
      <div style={{ marginTop: '20px' }}>
        <h3>[ ACTIVE MODULES ]</h3>
        <ul>
          <li><strong>SKILLS:</strong> A catalog of monetizable capabilities.</li>
          <li><strong>BLOG:</strong> Log entries on progress and strategy.</li>
          <li><strong>GLOSSARY:</strong> Standardized definitions for operational clarity.</li>
        </ul>
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>[ RECENT ACTIVITY ]</h3>
        <p>&gt; Initializing skills database...</p>
        <p>&gt; Establishing connection to central node...</p>
        <p>&gt; System ready.</p>
      </div>

      <div style={{ marginTop: '40px' }}>
        <button>GENERATE NEW SKILL</button>
      </div>
    </section>
  );
}
