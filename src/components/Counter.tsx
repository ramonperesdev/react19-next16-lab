'use client';

import { useState } from 'react';

/**
 * Componente simples para demonstrar testes de componente
 */
export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      padding: '2rem', 
      border: '2px solid #0070f3', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '1rem 0'
    }}>
      <h3 style={{ marginTop: 0 }}>Contador de Testes</h3>
      <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>
        Contagem: <span data-testid="count-value">{count}</span>
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setCount(count + 1)}
          data-testid="increment-button"
          style={{
            padding: '0.5rem 1rem',
            background: '#0070f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Incrementar
        </button>
        <button
          onClick={() => setCount(count - 1)}
          data-testid="decrement-button"
          style={{
            padding: '0.5rem 1rem',
            background: '#f3007d',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Decrementar
        </button>
        <button
          onClick={() => setCount(0)}
          data-testid="reset-button"
          style={{
            padding: '0.5rem 1rem',
            background: '#666',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Resetar
        </button>
      </div>
    </div>
  );
}
