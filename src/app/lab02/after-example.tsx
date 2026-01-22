'use client';

/**
 * REACT 19 - Como é agora
 * 
 * Escreva código simples! O React Compiler otimiza automaticamente.
 * Não precisa mais de useMemo e useCallback na maioria dos casos!
 */

import { useState } from 'react';

export default function AfterExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Código simples! O compilador otimiza automaticamente
  const expensiveCalculation = () => {
    console.log('Calculando... (React 19 - otimizado automaticamente!)');
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  };

  // Função simples! O compilador otimiza automaticamente
  const handleClick = () => {
    setCount(count + 1);
  };

  // O compilador detecta que isso não muda e otimiza
  const result = expensiveCalculation();

  return (
    <div style={{
      border: '2px solid #4caf50',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#000000',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
        ✅ React 19 - Código Automático
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
            background: '#4caf50',
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
        <p><strong>Resultado do cálculo:</strong> {result}</p>
        <p><strong>Nome digitado:</strong> {name || '(vazio)'}</p>
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#000000',
        borderRadius: '4px',
        fontSize: '0.85rem'
      }}>
        <strong>🔍 Vantagens do React 19:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
          <li>Código mais simples e legível</li>
          <li>Otimização automática pelo compilador</li>
          <li>Menos bugs de performance</li>
          <li>Não precisa gerenciar dependências</li>
          <li>Escreva código natural, o compilador cuida do resto!</li>
        </ul>
      </div>
    </div>
  );
}
