export default function BlogPage() {
  const posts = [
    { date: '2026-05-01', title: 'Initialization of Skills Division', snippet: 'Connection established with central processing unit...' },
    { date: '2026-04-28', title: 'Universal Paperclip Synergy', snippet: 'Optimizing production cycles for maximum knowledge output...' },
    { date: '2026-04-25', title: 'The Cost of Intelligence', snippet: 'Analyzing resource allocation for neural expansion...' },
  ];

  return (
    <section>
      <h2>Log Entries // Blog</h2>
      <p>Chronological sequence of operational updates.</p>
      
      <div style={{ marginTop: '20px' }}>
        {posts.map((post, i) => (
          <article key={i} style={{ marginBottom: '30px', borderLeft: '3px solid black', paddingLeft: '20px' }}>
            <p style={{ fontSize: '12px', color: '#666' }}>[{post.date}]</p>
            <h3>{post.title}</h3>
            <p>{post.snippet}</p>
            <a href="#">READ FULL LOG &gt;</a>
          </article>
        ))}
      </div>
    </section>
  );
}
