'use client';

import { useState } from 'react';

/**
 * COMPARAÇÃO: React 18 vs React 19
 * 
 * Veja a diferença lado a lado no mesmo componente
 */

export default function Comparison() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ marginTop: '1rem' }}>
      <button
        onClick={() => setShowDetails(!showDetails)}
        style={{
          padding: '0.75rem 1.5rem',
          background: '#9c27b0',
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
            <h3 style={{ color: '#e65100', marginTop: 0 }}>
              ⚠️ React 18
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <pre style={{
                background: '#000000',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.85rem'
              }}>
{`import { useMemo, 
         useCallback } 
         from 'react';

const result = useMemo(() => {
  // cálculo pesado
  return expensiveCalc();
}, []);

const handleClick = 
  useCallback(() => {
    doSomething();
  }, [deps]);
`}
              </pre>
              
              <p style={{ marginTop: '1rem' }}><strong>❌ Problemas:</strong></p>
              <ul>
                <li>Muito código boilerplate</li>
                <li>Fácil esquecer de otimizar</li>
                <li>Dependências manuais</li>
                <li>Difícil de ler</li>
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
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
              ✅ React 19
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <pre style={{
                background: '#000000',
                padding: '1rem',
                borderRadius: '4px',
                overflow: 'auto',
                fontSize: '0.85rem'
              }}>
{`// Código simples!
const result = expensiveCalc();

const handleClick = () => {
  doSomething();
};

// Compilador otimiza 
// automaticamente! 🎉
`}
              </pre>
              
              <p style={{ marginTop: '1rem' }}><strong>✅ Vantagens:</strong></p>
              <ul>
                <li>Código limpo e simples</li>
                <li>Otimização automática</li>
                <li>Sem gerenciar dependências</li>
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
        background: '#000000',
        border: '2px solid #fbc02d',
        borderRadius: '8px'
      }}>
        <h4 style={{ marginTop: 0, color: '#f57f17' }}>
          💡 Regra de Ouro:
        </h4>
        <p style={{ margin: 0, fontSize: '1rem' }}>
          <strong>No React 19, escreva código simples!</strong> O React Compiler vai otimizar automaticamente.
          Só use useMemo/useCallback se realmente precisar de controle manual (casos raros).
        </p>
      </div>
    </div>
  );
}
