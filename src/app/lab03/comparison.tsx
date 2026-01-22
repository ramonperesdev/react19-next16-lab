'use client';

import { useState } from 'react';

/**
 * COMPARAÇÃO: React 18 vs React 19
 * 
 * Veja a diferença entre usar useState + useEffect vs use()
 */

export default function Comparison() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#ff9800',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold'
        }}
      >
        {showDetails ? 'Ocultar' : 'Mostrar'} Comparação Detalhada
      </button>

      {showDetails && (
        <div style={{
          marginTop: '1.5rem',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1rem'
        }}>
          {/* React 18 */}
          <div style={{
            border: '2px solid #ff9800',
            padding: '1.5rem',
            borderRadius: '8px',
            background: '#000000'
          }}>
            <h3 style={{ color: '#ff9800', marginTop: 0 }}>
              ⚠️ React 18 - useState + useEffect
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <pre style={{
                background: '#1a1a1a',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.85rem',
                color: '#fff'
              }}>
{`function Component() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error />;
  return <div>{data.name}</div>;
}`}
              </pre>
              
              <p style={{ marginTop: '1rem', color: '#fff' }}><strong>❌ Problemas:</strong></p>
              <ul style={{ color: '#fff' }}>
                <li>Muito código boilerplate</li>
                <li>Precisa gerenciar loading/error manualmente</li>
                <li>useEffect pode causar bugs</li>
                <li>Difícil de ler e manter</li>
              </ul>
            </div>
          </div>

          {/* React 19 */}
          <div style={{
            border: '2px solid #4caf50',
            padding: '1.5rem',
            borderRadius: '8px',
            background: '#000000'
          }}>
            <h3 style={{ color: '#4caf50', marginTop: 0 }}>
              ✅ React 19 - use()
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <pre style={{
                background: '#1a1a1a',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.85rem',
                color: '#fff'
              }}>
{`function Component({ dataPromise }) {
  const data = use(dataPromise);
  
  return <div>{data.name}</div>;
}

// Suspense gerencia loading/error!
<Suspense fallback={<Loading />}>
  <Component dataPromise={fetchData()} />
</Suspense>`}
              </pre>
              
              <p style={{ marginTop: '1rem', color: '#fff' }}><strong>✅ Vantagens:</strong></p>
              <ul style={{ color: '#fff' }}>
                <li>Código muito mais simples</li>
                <li>Suspense gerencia loading/error</li>
                <li>Menos bugs potenciais</li>
                <li>Fácil de ler e manter</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Regra de Ouro */}
      <div style={{
        marginTop: '1.5rem',
        padding: '1rem',
        background: '#fff9c4',
        border: '2px solid #fbc02d',
        borderRadius: '8px'
      }}>
        <h4 style={{ marginTop: 0, color: '#f57f17' }}>
          💡 Regra de Ouro:
        </h4>
        <p style={{ margin: 0, fontSize: '1rem' }}>
          <strong>Use <code>use()</code> quando precisar consumir Promises ou Context!</strong>
          É muito mais simples que useState + useEffect e funciona perfeitamente com Suspense.
        </p>
      </div>
    </div>
  );
}
