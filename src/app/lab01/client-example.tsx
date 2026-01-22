'use client';

/**
 * CLIENT COMPONENT - Exemplo Simples
 * 
 * Este é um Client Component porque:
 * 1. TEM 'use client' no topo (obrigatório!)
 * 2. Usa hooks (useState, useEffect, etc.)
 * 3. Tem interatividade (onClick, onChange, etc.)
 * 4. Precisa de JavaScript no navegador
 */

import { useState } from 'react';

export default function ClientExample() {
  // useState só funciona em Client Components!
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
    setClicked(true);
    
    // setTimeout só funciona no cliente (navegador)
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <div style={{
      border: '2px solid #2196f3',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#000000',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#1565c0', marginTop: 0 }}>
        🌐 Client Component
      </h3>
      
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Contador:</strong> {count}</p>
        <button
          onClick={handleClick}
          style={{
            padding: '0.5rem 1rem',
            background: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            marginTop: '0.5rem'
          }}
        >
          Clique aqui! ({count})
        </button>
        
        {clicked && (
          <p style={{ color: '#1565c0', marginTop: '0.5rem' }}>
            ✅ Botão clicado! (Isso só funciona em Client Component)
          </p>
        )}
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#000000',
        borderRadius: '4px',
        fontSize: '0.9rem'
      }}>
        <strong>🔍 Como identificar:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
          <li>Tem &apos;use client&apos; no topo</li>
          <li>Usa hooks (useState, useEffect, etc.)</li>
          <li>Tem eventos (onClick, onChange, etc.)</li>
          <li>Aparece no bundle JavaScript do cliente</li>
        </ul>
      </div>
    </div>
  );
}
