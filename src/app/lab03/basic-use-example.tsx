'use client';

/**
 * EXEMPLO BÁSICO: Hook use()
 * 
 * O hook use() permite consumir Promises e Context diretamente
 */

import { use, useState } from 'react';

// Criando uma Promise simples
function fetchUserData(userId: number): Promise<{ name: string; email: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `Usuário ${userId}`,
        email: `user${userId}@example.com`
      });
    }, 1000);
  });
}

interface UserDisplayProps {
  userPromise: Promise<{ name: string; email: string }>;
}

export default function BasicUseExample() {
  const [userId, setUserId] = useState(1);
  
  // Criando a Promise
  const userPromise = fetchUserData(userId);

  return (
    <div style={{
      border: '2px solid #2196f3',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#e3f2fd',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#1565c0', marginTop: 0 }}>
        ✅ Hook use() - Exemplo Básico
      </h3>

      <div style={{ marginTop: '1rem' }}>
        <button
          onClick={() => setUserId(userId + 1)}
          style={{
            padding: '0.5rem 1rem',
            background: '#2196f3',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '1rem'
          }}
        >
          Carregar Usuário {userId + 1}
        </button>

        <UserDisplay userPromise={userPromise} />
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#bbdefb',
        borderRadius: '4px',
        fontSize: '0.85rem'
      }}>
        <strong>🔍 Como funciona:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
          <li>O hook <code>use()</code> consome a Promise diretamente</li>
          <li>O componente suspende automaticamente até a Promise resolver</li>
          <li>Não precisa de useState + useEffect!</li>
          <li>Funciona perfeitamente com Suspense</li>
        </ul>
      </div>
    </div>
  );
}

// Componente que usa o hook use()
function UserDisplay({ userPromise }: UserDisplayProps) {
  // use() consome a Promise diretamente!
  const user = use(userPromise);

  return (
    <div style={{
      padding: '1rem',
      background: '#fff',
      borderRadius: '4px',
      marginTop: '0.5rem'
    }}>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}
