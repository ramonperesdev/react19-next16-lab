'use client';

/**
 * REACT 18 - Como era antes
 * 
 * Você tinha que lembrar de usar useMemo e useCallback manualmente
 * para evitar re-renders desnecessários
 */

import { useState, useMemo, useCallback } from 'react';

export default function BeforeExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Tinha que usar useMemo para evitar recalcular
  const expensiveCalculation = useMemo(() => {
    console.log('Calculando... (React 18)');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []); // Dependências vazias = só calcula uma vez

  // Tinha que usar useCallback para evitar recriar função
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Precisa incluir count nas dependências

  return (
    <div style={{
      border: '2px solid #ff9800',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#000000',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#e65100', marginTop: 0 }}>
        ⚠️ React 18 - Código Manual
      </h3>
      
      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: '0.5rem',
            border: '1px solid #ddd',
            borderRadius: '4px',
            width: '200px',
            marginRight: '0.5rem'
          }}
        />
        <button
          onClick={handleClick}
          style={{
            padding: '0.5rem 1rem',
            background: '#000000',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Contador: {count}
        </button>
      </div>

      <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
        <p><strong>Resultado do cálculo:</strong> {expensiveCalculation}</p>
        <p><strong>Nome digitado:</strong> {name || '(vazio)'}</p>
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#000000',
        borderRadius: '4px',
        fontSize: '0.85rem'
      }}>
        <strong>🔍 Problemas do React 18:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
          <li>Tinha que lembrar de usar useMemo</li>
          <li>Tinha que lembrar de useCallback</li>
          <li>Fácil esquecer e causar bugs de performance</li>
          <li>Código mais verboso e difícil de ler</li>
          <li>Precisa gerenciar dependências manualmente</li>
        </ul>
      </div>
    </div>
  );
}
