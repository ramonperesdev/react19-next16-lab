import ServerExample from './server-example';
import ClientExample from './client-example';
import Comparison from './comparison';

export default function Lab01Page() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Lab 01: Server Components vs Client Components</h1>
      
      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#0000', borderRadius: '8px' }}>
        <h2>📚 O que você vai aprender:</h2>
        <ul>
          <li>Diferença entre Server e Client Components</li>
          <li>Quando usar cada um</li>
          <li>Como identificar cada tipo</li>
          <li>Exemplos práticos</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>🔍 Conceito Principal</h2>
        <div style={{ background: '#000000', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
          <p><strong>Server Component:</strong> Roda no servidor, não tem JavaScript no cliente</p>
          <p><strong>Client Component:</strong> Roda no navegador, precisa de JavaScript</p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>1️⃣ Exemplo: Server Component</h2>
        <p>Este componente busca dados diretamente no servidor, sem JavaScript no cliente:</p>
        <ServerExample />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>2️⃣ Exemplo: Client Component</h2>
        <p>Este componente precisa de interatividade (cliques, estado), então roda no cliente:</p>
        <ClientExample />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>3️⃣ Comparação Prática</h2>
        <p>Veja a diferença lado a lado:</p>
        <Comparison />
      </section>

      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#000000', borderRadius: '8px' }}>
        <h2>💡 Dica Importante</h2>
        <p>
          <strong>Por padrão no React 19, todos os componentes são Server Components!</strong>
          <br />
          Você só precisa adicionar <code style={{ background: '#000000', padding: '2px 6px', borderRadius: '4px' }}>&apos;use client&apos;</code> quando precisar de:
        </p>
        <ul>
          <li>Hooks (useState, useEffect, etc.)</li>
          <li>Eventos (onClick, onChange, etc.)</li>
          <li>APIs do navegador (localStorage, window, etc.)</li>
        </ul>
      </section>
    </div>
  );
}
