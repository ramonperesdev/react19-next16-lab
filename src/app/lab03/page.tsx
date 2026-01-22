import BasicUseExample from './basic-use-example';
import UseWithPromise from './use-with-promise';
import UseWithContext from './use-with-context';
import Comparison from './comparison';

export default function Lab03Page() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Lab 03: Hook use() - Consumindo Promises e Contexto</h1>
      
      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#000', borderRadius: '8px' }}>
        <h2>📚 O que você vai aprender:</h2>
        <ul>
          <li>O que é o hook <code>use()</code></li>
          <li>Como usar com Promises</li>
          <li>Como usar com Context</li>
          <li>Diferença entre React 18 e React 19</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>🔍 Conceito Principal</h2>
        <div style={{ background: '#000000', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
          <p>
            <strong>Hook use():</strong> Um novo hook do React 19 que permite consumir Promises e Context diretamente,
            sem precisar de <code>useState</code> + <code>useEffect</code>!
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Antes (React 18):</strong> Você tinha que usar useState + useEffect para consumir Promises<br />
            <strong>Agora (React 19):</strong> Use o hook <code>use()</code> diretamente! 🎉
          </p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>1️⃣ Exemplo Básico: Como funciona</h2>
        <p>Veja como o hook <code>use()</code> funciona na prática:</p>
        <BasicUseExample />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>2️⃣ use() com Promises</h2>
        <p>Consumindo dados assíncronos de forma simples:</p>
        <UseWithPromise />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>3️⃣ use() com Context</h2>
        <p>Consumindo Context de forma mais flexível:</p>
        <UseWithContext />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>4️⃣ Comparação: React 18 vs React 19</h2>
        <p>Veja a diferença lado a lado:</p>
        <Comparison />
      </section>

      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#000000', borderRadius: '8px' }}>
        <h2>💡 Dica Importante</h2>
        <p>
          <strong>O hook use() funciona automaticamente com Suspense!</strong>
          <br />
          Quando você usa <code>use()</code> com uma Promise, o componente suspende automaticamente
          até que a Promise seja resolvida.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Isso torna o código muito mais simples e limpo do que usar <code>useState</code> + <code>useEffect</code>!
        </p>
      </section>
    </div>
  );
}
