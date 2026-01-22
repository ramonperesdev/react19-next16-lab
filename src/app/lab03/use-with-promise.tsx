'use client';

/**
 * use() COM PROMISES
 * 
 * Exemplo prático de como usar use() para consumir dados assíncronos
 */

import { use, Suspense, useState } from 'react';

// Simulando uma API
async function fetchProduct(id: number) {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const products: Record<number, { name: string; price: number; description: string }> = {
    1: { name: 'Notebook Gamer', price: 3500, description: 'Notebook de alta performance' },
    2: { name: 'Mouse Wireless', price: 150, description: 'Mouse ergonômico sem fio' },
    3: { name: 'Teclado Mecânico', price: 450, description: 'Teclado mecânico RGB' },
  };
  
  return products[id] || { name: 'Produto não encontrado', price: 0, description: '' };
}

function ProductDetails({ productPromise }: { productPromise: Promise<{ name: string; price: number; description: string }> }) {
  // use() consome a Promise diretamente!
  const product = use(productPromise);

  return (
    <div style={{
      padding: '1rem',
      background: '#fff',
      borderRadius: '4px',
      border: '1px solid #ddd'
    }}>
      <h4 style={{ marginTop: 0, color: '#2196f3' }}>{product.name}</h4>
      <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#4caf50' }}>
        R$ {product.price.toFixed(2)}
      </p>
      <p style={{ color: '#666', marginTop: '0.5rem' }}>{product.description}</p>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div style={{
      padding: '1rem',
      background: '#f5f5f5',
      borderRadius: '4px',
      textAlign: 'center',
      color: '#666'
    }}>
      ⏳ Carregando produto...
    </div>
  );
}

export default function UseWithPromise() {
  const [productId, setProductId] = useState(1);
  
  // Criando a Promise
  const productPromise = fetchProduct(productId);

  return (
    <div style={{
      border: '2px solid #4caf50',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#f1f8f4',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#2e7d32', marginTop: 0 }}>
        ✅ use() com Promises
      </h3>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <button
            onClick={() => setProductId(1)}
            style={{
              padding: '0.5rem 1rem',
              background: productId === 1 ? '#4caf50' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '0.5rem'
            }}
          >
            Produto 1
          </button>
          <button
            onClick={() => setProductId(2)}
            style={{
              padding: '0.5rem 1rem',
              background: productId === 2 ? '#4caf50' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginRight: '0.5rem'
            }}
          >
            Produto 2
          </button>
          <button
            onClick={() => setProductId(3)}
            style={{
              padding: '0.5rem 1rem',
              background: productId === 3 ? '#4caf50' : '#ccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Produto 3
          </button>
        </div>

        {/* Suspense gerencia o loading automaticamente! */}
        <Suspense fallback={<LoadingFallback />}>
          <ProductDetails productPromise={productPromise} />
        </Suspense>
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#e8f5e9',
        borderRadius: '4px',
        fontSize: '0.85rem'
      }}>
        <strong>🔍 Vantagens do use() com Promises:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.55rem' }}>
          <li>Não precisa de useState + useEffect</li>
          <li>Funciona automaticamente com Suspense</li>
          <li>Código mais limpo e simples</li>
          <li>Loading gerenciado automaticamente</li>
          <li>Menos boilerplate!</li>
        </ul>
      </div>
    </div>
  );
}
