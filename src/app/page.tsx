import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>React 19 + Next.js 16 Lab</h1>
          <p>
            Bem-vindo ao laboratório de estudos! Comece explorando os labs:
          </p>
          
          <h2 style={{ marginTop: '2rem', fontSize: '1.5rem', color: '#0070f3' }}>
            React 19 & Next.js 16
          </h2>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/lab01"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              🚀 Lab 01: Server vs Client Components
            </a>
            <a
              href="/lab02"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: '#4caf50',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              ⚡ Lab 02: React Compiler
            </a>
            <a
              href="/lab03"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: '#9c27b0',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}
            >
              🎣 Lab 03: Hook use()
            </a>
          </div>

          <h2 style={{ marginTop: '3rem', fontSize: '1.5rem', color: '#ea580c' }}>
            💼 DevOps & Preparação para Entrevista
          </h2>
          <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="/lab04"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                border: '2px solid #fb923c'
              }}
            >
              🔄 Lab 04: CI/CD com GitHub Actions
            </a>
            <a
              href="/lab05"
              style={{
                display: 'inline-block',
                padding: '1rem 2rem',
                background: '#d1d5db',
                color: '#6b7280',
                textDecoration: 'none',
                borderRadius: '8px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                cursor: 'not-allowed',
                opacity: 0.6
              }}
            >
              ☁️ Lab 05: AWS Amplify (Em breve)
            </a>
          </div>
        </div>
        <div className={styles.ctas}>
          <a
            className={styles.secondary}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
