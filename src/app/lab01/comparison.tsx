'use client';

import { useState } from 'react';

/**
 * COMPARAÇÃO: Server vs Client Component
 * 
 * Este componente mostra a diferença prática entre os dois tipos
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
          {/* Server Component */}
          <div style={{
            border: '2px solid #4caf50',
            padding: '1.5rem',
            borderRadius: '8px',
            background: '#000000'
          }}>
            <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
              🖥️ Server Component
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <p><strong>✅ Pode:</strong></p>
              <ul>
                <li>Buscar dados diretamente</li>
                <li>Acessar banco de dados</li>
                <li>Usar APIs do servidor</li>
                <li>Ter código sensível (tokens, etc.)</li>
                <li>Ser mais rápido (sem JS no cliente)</li>
              </ul>
              
              <p style={{ marginTop: '1rem' }}><strong>❌ Não pode:</strong></p>
              <ul>
                <li>Usar hooks (useState, useEffect)</li>
                <li>Ter eventos (onClick, onChange)</li>
                <li>Acessar APIs do navegador</li>
                <li>Ter estado local</li>
              </ul>
            </div>
          </div>

          {/* Client Component */}
          <div style={{
            border: '2px solid #2196f3',
            padding: '1.5rem',
            borderRadius: '8px',
            background: '#000000'
          }}>
            <h3 style={{ color: '#1565c0', marginTop: 0 }}>
              🌐 Client Component
            </h3>
            <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
              <p><strong>✅ Pode:</strong></p>
              <ul>
                <li>Usar hooks (useState, useEffect)</li>
                <li>Ter eventos (onClick, onChange)</li>
                <li>Acessar localStorage, window</li>
                <li>Ter estado local</li>
                <li>Ser interativo</li>
              </ul>
              
              <p style={{ marginTop: '1rem' }}><strong>❌ Não pode:</strong></p>
              <ul>
                <li>Buscar dados diretamente (precisa useEffect)</li>
                <li>Acessar banco de dados diretamente</li>
                <li>Ter código sensível (expõe no bundle)</li>
                <li>Ser async diretamente</li>
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
          <strong>Use Server Component por padrão.</strong> Só adicione <code>&apos;use client&apos;</code> quando realmente precisar de interatividade!
        </p>
      </div>
    </div>
  );
}
