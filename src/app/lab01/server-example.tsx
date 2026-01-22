/**
 * SERVER COMPONENT - Exemplo Simples
 * 
 * Este é um Server Component porque:
 * 1. NÃO tem 'use client' no topo
 * 2. Pode buscar dados diretamente (fetch, database, etc.)
 * 3. Não precisa de JavaScript no navegador
 * 4. É renderizado no servidor antes de chegar ao cliente
 */

// Simulando uma busca de dados (no servidor)
async function getServerData() {
  // Em um app real, isso poderia ser uma chamada a um banco de dados
  // ou uma API externa
  await new Promise(resolve => setTimeout(resolve, 500)); // Simula delay
  
  return {
    message: 'Dados buscados no SERVIDOR!',
    timestamp: new Date().toLocaleTimeString('pt-BR'),
    serverInfo: 'Este componente não tem JavaScript no cliente'
  };
}

export default async function ServerExample() {
  // Busca dados diretamente - sem useState, sem useEffect!
  const data = await getServerData();

  return (
    <div style={{
      border: '2px solid #4caf50',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#000000',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
        ✅ Server Component
      </h3>
      
      <div style={{ marginTop: '1rem' }}>
        <p><strong>Mensagem:</strong> {data.message}</p>
        <p><strong>Horário:</strong> {data.timestamp}</p>
        <p><strong>Info:</strong> {data.serverInfo}</p>
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
          <li>Não tem &apos;use client&apos;</li>
          <li>Pode usar async/await diretamente</li>
          <li>Pode fazer fetch sem useEffect</li>
          <li>Não aparece no bundle JavaScript do cliente</li>
        </ul>
      </div>
    </div>
  );
}
