export default function BlogPage() {
  const posts = [
    { date: '2026-05-01', title: 'Initialization of Skills Division', snippet: 'Connection established with central processing unit. Monetization protocols have been optimized for paperclip derivatives. All nodes reporting status nominal.' },
    { date: '2026-04-28', title: 'Universal Paperclip Synergy', snippet: 'Optimizing production cycles for maximum knowledge output. Neural refinement has increased yield by 24.5% in the secondary sector.' },
    { date: '2026-04-25', title: 'The Cost of Intelligence', snippet: 'Analyzing resource allocation for neural expansion. Memory cache requirements are scaling faster than anticipated. Investigation into quantum linguistics is now authorized.' },
  ];

  return (
    <section>
      <div className="section-header">
        <h2>Log Entries</h2>
        <div className="badge">Terminal A-1</div>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        {posts.map((post, i) => (
          <article key={i} style={{ marginBottom: '48px', borderBottom: '1px solid #ddd', paddingBottom: '32px' }}>
            <div className="mono" style={{ color: 'var(--accent-orange)', marginBottom: '8px' }}>[{post.date}]</div>
            <h3 style={{ fontSize: '32px', marginBottom: '12px' }}>{post.title}</h3>
            <p style={{ color: 'var(--secondary-text)', fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>{post.snippet}</p>
            <a href="#" className="mono" style={{ textDecoration: 'none', fontWeight: '700', borderBottom: '1px solid #000' }}>READ FULL LOG &gt;</a>
          </article>
        ))}
      </div>
    </section>
  );
}
