'use client';

/**
 * use() COM CONTEXT
 * 
 * O hook use() também pode consumir Context de forma mais flexível
 */

import { createContext, use, useState, useContext } from 'react';

// Criando um Context
interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Componente usando useContext tradicional
function ComponentWithUseContext() {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('ThemeContext must be used within ThemeProvider');
  }

  const { theme, toggleTheme } = context;

  return (
    <div style={{
      padding: '1rem',
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      borderRadius: '4px',
      marginBottom: '1rem'
    }}>
      <p><strong>useContext tradicional:</strong> Tema atual: {theme}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          background: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Alternar Tema
      </button>
    </div>
  );
}

// Componente usando use() - mais flexível!
function ComponentWithUse() {
  // use() pode consumir Context também!
  const context = use(ThemeContext);
  if (!context) {
    throw new Error('ThemeContext must be used within ThemeProvider');
  }
  const { theme, toggleTheme } = context;

  return (
    <div style={{
      padding: '1rem',
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      borderRadius: '4px',
      marginBottom: '1rem'
    }}>
      <p><strong>use() hook:</strong> Tema atual: {theme}</p>
      <button
        onClick={toggleTheme}
        style={{
          padding: '0.5rem 1rem',
          background: theme === 'light' ? '#333' : '#fff',
          color: theme === 'light' ? '#fff' : '#333',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Alternar Tema
      </button>
    </div>
  );
}

export default function UseWithContext() {
  return (
    <div style={{
      border: '2px solid #9c27b0',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#f3e5f5',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#6a1b9a', marginTop: 0 }}>
        ✅ use() com Context
      </h3>

      <ThemeProvider>
        <div style={{ marginTop: '1rem' }}>
          <ComponentWithUseContext />
          <ComponentWithUse />
        </div>
      </ThemeProvider>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#e1bee7',
        borderRadius: '4px',
        fontSize: '0.85rem'
      }}>
        <strong>🔍 Diferença:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
          <li><code>useContext</code>: Precisa estar dentro do Provider</li>
          <li><code>use()</code>: Mais flexível, pode ser usado condicionalmente</li>
          <li><code>use()</code>: Pode consumir Context e Promises com a mesma API</li>
          <li>Ambos funcionam, mas <code>use()</code> é mais versátil!</li>
        </ul>
      </div>
    </div>
  );
}
