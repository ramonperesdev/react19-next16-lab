'use client';

/**
 * EXEMPLO PRÁTICO: Lista de Produtos com Filtro
 * 
 * Este exemplo mostra como o React Compiler otimiza automaticamente
 * um caso real de uso: filtrar uma lista de produtos
 */

import { useState } from 'react';

const products = [
  { id: 1, name: 'Notebook', category: 'Eletrônicos', price: 3500 },
  { id: 2, name: 'Mouse', category: 'Eletrônicos', price: 150 },
  { id: 3, name: 'Mesa', category: 'Móveis', price: 800 },
  { id: 4, name: 'Cadeira', category: 'Móveis', price: 600 },
  { id: 5, name: 'Monitor', category: 'Eletrônicos', price: 1200 },
  { id: 6, name: 'Teclado', category: 'Eletrônicos', price: 300 },
];

export default function PracticalExample() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // ANTES (React 18): Você teria que fazer assim:
  // const filteredProducts = useMemo(() => {
  //   return products.filter(product => {
  //     const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
  //     const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
  //     return matchesSearch && matchesCategory;
  //   });
  // }, [searchTerm, selectedCategory]);

  // AGORA (React 19): Código simples! O compilador otimiza automaticamente!
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // ANTES (React 18): Você teria que fazer assim:
  // const totalPrice = useMemo(() => {
  //   return filteredProducts.reduce((sum, product) => sum + product.price, 0);
  // }, [filteredProducts]);

  // AGORA (React 19): Código simples!
  const totalPrice = filteredProducts.reduce((sum, product) => sum + product.price, 0);

  return (
    <div style={{
      border: '2px solid #2196f3',
      padding: '1.5rem',
      borderRadius: '8px',
      background: '#000000',
      marginTop: '1rem'
    }}>
      <h3 style={{ color: '#1565c0', marginTop: 0 }}>
        🛍️ Exemplo Prático: Lista de Produtos
      </h3>

      <div style={{ marginTop: '1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <input
            type="text"
            placeholder="Buscar produto..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              width: '200px',
              marginRight: '1rem'
            }}
          />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              padding: '0.5rem',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }}
          >
            <option value="all">Todas categorias</option>
            <option value="Eletrônicos">Eletrônicos</option>
            <option value="Móveis">Móveis</option>
          </select>
        </div>

        <div style={{
          background: '#000000',
          padding: '1rem',
          borderRadius: '4px',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          {filteredProducts.length === 0 ? (
            <p style={{ color: '#666' }}>Nenhum produto encontrado</p>
          ) : (
            <>
              {filteredProducts.map(product => (
                <div
                  key={product.id}
                  style={{
                    padding: '0.75rem',
                    borderBottom: '1px solid #eee',
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <strong>{product.name}</strong>
                    <span style={{ marginLeft: '0.5rem', color: '#666', fontSize: '0.9rem' }}>
                      ({product.category})
                    </span>
                  </div>
                  <div style={{ fontWeight: 'bold', color: '#4caf50' }}>
                    R$ {product.price.toFixed(2)}
                  </div>
                </div>
              ))}
              <div style={{
                marginTop: '1rem',
                paddingTop: '1rem',
                borderTop: '2px solid #2196f3',
                display: 'flex',
                justifyContent: 'space-between',
                fontWeight: 'bold',
                fontSize: '1.1rem'
              }}>
                <span>Total:</span>
                <span style={{ color: '#2196f3' }}>
                  R$ {totalPrice.toFixed(2)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      <div style={{
        marginTop: '1rem',
        padding: '0.75rem',
        background: '#000000',
        borderRadius: '4px',
        fontSize: '0.85rem'
      }}>
        <strong>🔍 O que o React Compiler faz aqui:</strong>
        <ul style={{ margin: '0.5rem 0 0 0', paddingLeft: '1.5rem' }}>
          <li>Detecta que <code>filteredProducts</code> só precisa recalcular quando <code>searchTerm</code> ou <code>selectedCategory</code> mudam</li>
          <li>Otimiza automaticamente o filtro (como se fosse useMemo)</li>
          <li>Otimiza automaticamente o cálculo do total (como se fosse useMemo)</li>
          <li>Tudo isso sem você escrever uma linha de código extra!</li>
        </ul>
      </div>
    </div>
  );
}
