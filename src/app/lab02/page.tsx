import BeforeExample from './before-example';
import AfterExample from './after-example';
import Comparison from './comparison';
import PracticalExample from './practical-example';

export default function Lab02Page() {
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Lab 02: React Compiler (React Forget)</h1>
      
      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#000', borderRadius: '8px' }}>
        <h2>📚 O que você vai aprender:</h2>
        <ul>
          <li>O que é o React Compiler</li>
          <li>Como ele otimiza automaticamente seu código</li>
          <li>Diferença entre React 18 e React 19</li>
          <li>Quando você NÃO precisa mais de useMemo/useCallback</li>
        </ul>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>🔍 Conceito Principal</h2>
        <div style={{ background: '#000000', padding: '1.5rem', borderRadius: '8px', marginTop: '1rem' }}>
          <p>
            <strong>React Compiler:</strong> Uma ferramenta que analisa seu código e otimiza automaticamente,
            sem você precisar usar <code>useMemo</code> e <code>useCallback</code> manualmente!
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>Antes (React 18):</strong> Você tinha que lembrar de usar useMemo/useCallback<br />
            <strong>Agora (React 19):</strong> O compilador faz isso automaticamente! 🎉
          </p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>1️⃣ Como era antes (React 18)</h2>
        <p>Você tinha que otimizar manualmente com useMemo e useCallback:</p>
        <BeforeExample />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>2️⃣ Como é agora (React 19)</h2>
        <p>Escreva código simples, o compilador otimiza automaticamente:</p>
        <AfterExample />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>3️⃣ Comparação Lado a Lado</h2>
        <p>Veja a diferença prática:</p>
        <Comparison />
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>4️⃣ Exemplo Prático Real</h2>
        <p>Um exemplo mais completo de como funciona:</p>
        <PracticalExample />
      </section>

      <section style={{ marginTop: '2rem', padding: '1.5rem', background: '#000000', borderRadius: '8px' }}>
        <h2>💡 Dica Importante</h2>
        <p>
          <strong>O React Compiler está habilitado neste projeto!</strong>
          <br />
          Veja o arquivo <code>next.config.ts</code> - tem <code>reactCompiler: true</code>
        </p>
        <p style={{ marginTop: '1rem' }}>
          Isso significa que você pode escrever código simples e o compilador vai otimizar automaticamente.
          Não precisa mais se preocupar com useMemo/useCallback na maioria dos casos!
        </p>
      </section>
    </div>
  );
}
