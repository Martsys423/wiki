import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background} />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.badge}>Next.js Premium Starter</div>
          <h1 className={styles.title}>
            The Future of <br /> Web Development
          </h1>
          <p className={styles.description}>
            Experience the power of Next.js with a premium, high-performance starter kit. 
            Built with modern aesthetics and state-of-the-art performance in mind.
          </p>
          
          <div className={styles.ctas}>
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.primary}
            >
              Get Started
            </a>
            <a
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              GitHub Repository
            </a>
          </div>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <h3>Performance First</h3>
            <p>Optimized for Core Web Vitals with automatic code splitting and image optimization.</p>
          </div>
          <div className={styles.card}>
            <h3>Modern Styling</h3>
            <p>Pure Vanilla CSS with HSL variables for maximum flexibility and stunning aesthetics.</p>
          </div>
          <div className={styles.card}>
            <h3>Developer Experience</h3>
            <p>Fast Refresh, robust type-checking, and a seamless development workflow.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
