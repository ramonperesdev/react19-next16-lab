'use client';

import { useState } from 'react';

/**
 * Componente com formulário para demonstrar testes de interação
 */
export default function UserGreeting() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setSubmitted(false);
  };

  return (
    <div style={{ 
      padding: '2rem', 
      border: '2px solid #10b981', 
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '1rem 0'
    }}>
      <h3 style={{ marginTop: 0 }}>Formulário de Saudação</h3>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="name-input" style={{ display: 'block', marginBottom: '0.5rem' }}>
              Digite seu nome:
            </label>
            <input
              id="name-input"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome aqui..."
              data-testid="name-input"
              style={{
                width: '100%',
                padding: '0.5rem',
                fontSize: '1rem',
                borderRadius: '4px',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <button
            type="submit"
            data-testid="submit-button"
            disabled={!name.trim()}
            style={{
              padding: '0.5rem 1rem',
              background: name.trim() ? '#10b981' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: name.trim() ? 'pointer' : 'not-allowed',
            }}
          >
            Enviar
          </button>
        </form>
      ) : (
        <div>
          <p style={{ fontSize: '1.2rem', margin: '1rem 0' }} data-testid="greeting-message">
            Olá, <strong>{name}</strong>! Bem-vindo ao Lab 04! 👋
          </p>
          <button
            onClick={handleReset}
            data-testid="reset-form-button"
            style={{
              padding: '0.5rem 1rem',
              background: '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Tentar Novamente
          </button>
        </div>
      )}
    </div>
  );
}
