# ❓ Perguntas Frequentes - Server vs Client Components

## 1️⃣ É possível mudar o padrão para Client Components?

**❌ NÃO!** 

No React 19 + Next.js 16, **Server Components são o padrão por design**. Isso não é configurável porque:

- **Performance**: Server Components não enviam JavaScript para o cliente, tornando a página mais rápida
- **Segurança**: Código sensível (queries de banco, tokens) fica no servidor
- **SEO**: Conteúdo renderizado no servidor é melhor indexado pelo Google
- **Arquitetura**: É uma decisão arquitetural do React 19, não uma configuração

**Solução**: Você sempre precisa adicionar `'use client'` quando precisar de interatividade. Não há como inverter isso.

---

## 2️⃣ Sobre Modais e Botões - Minha compreensão está certa?

**⚠️ Quase!** Mas precisa de um ajuste:

### ❌ **Sua compreensão inicial:**
- Modal = Server Component (só mostra dados)
- Botão = Client Component (tem cliques)

### ✅ **Correção:**

**Modal geralmente é Client Component** porque:
- Precisa abrir/fechar (estado `isOpen`)
- Precisa de `onClick` para fechar
- Precisa de interatividade

**MAS**: O conteúdo DENTRO do modal pode ser Server Component!

```typescript
// Client Component (o modal em si)
'use client'
function ProductModal() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
      {/* Server Component pode ser usado aqui! */}
      <ProductDetails productId="123" />
    </Modal>
  );
}

// Server Component (o conteúdo)
async function ProductDetails({ productId }) {
  const product = await fetchProduct(productId);
  return <div>{product.name}</div>;
}
```

**Botão**: Sempre Client Component ✅ (precisa de onClick)

---

## 🛍️ Exemplos Práticos de E-commerce

### ✅ **Server Components** (use quando):

1. **Lista de Produtos**
   ```typescript
   // Busca produtos do banco de dados
   async function ProductList() {
     const products = await db.query('SELECT * FROM products');
     return <div>{/* renderiza produtos */}</div>;
   }
   ```

2. **Detalhes do Produto**
   ```typescript
   // Busca detalhes do produto
   async function ProductDetails({ id }) {
     const product = await fetchProduct(id);
     return <div>{product.description}</div>;
   }
   ```

3. **Perfil do Usuário**
   ```typescript
   // Dados sensíveis do usuário
   async function UserProfile() {
     const user = await getUserData();
     return <div>{user.name}</div>;
   }
   ```

4. **SEO e Metadata**
   ```typescript
   // Títulos, descrições para Google
   export default function ProductPage() {
     return (
       <>
         <title>Produto XYZ</title>
         <meta name="description" content="..." />
       </>
     );
   }
   ```

### 🌐 **Client Components** (use quando):

1. **Botão Adicionar ao Carrinho**
   ```typescript
   'use client'
   function AddToCartButton({ productId }) {
     const [loading, setLoading] = useState(false);
     
     const handleClick = async () => {
       setLoading(true);
       await addToCart(productId);
       setLoading(false);
     };
     
     return <button onClick={handleClick}>Adicionar</button>;
   }
   ```

2. **Modal de Produto**
   ```typescript
   'use client'
   function ProductModal() {
     const [isOpen, setIsOpen] = useState(false);
     return (
       <Modal isOpen={isOpen}>
         <button onClick={() => setIsOpen(false)}>Fechar</button>
       </Modal>
     );
   }
   ```

3. **Barra de Busca**
   ```typescript
   'use client'
   function SearchBar() {
     const [searchTerm, setSearchTerm] = useState('');
     return (
       <input 
         value={searchTerm}
         onChange={(e) => setSearchTerm(e.target.value)}
       />
     );
   }
   ```

4. **Carrinho de Compras**
   ```typescript
   'use client'
   function ShoppingCart() {
     const [items, setItems] = useState([]);
     const [isOpen, setIsOpen] = useState(false);
     // ... lógica do carrinho
   }
   ```

5. **Filtros e Ordenação**
   ```typescript
   'use client'
   function ProductFilters() {
     const [filters, setFilters] = useState({});
     const [sortBy, setSortBy] = useState('price');
     // ... lógica de filtros
   }
   ```

---

## 💡 Regra de Ouro

**Use Server Component por padrão. Só adicione `'use client'` quando realmente precisar de:**

- ✅ Hooks (useState, useEffect, etc.)
- ✅ Eventos (onClick, onChange, etc.)
- ✅ APIs do navegador (localStorage, window, etc.)
- ✅ Estado local que muda com interação

**Pense assim:**
- **Server Component** = "Mostrar dados" (estático ou do servidor)
- **Client Component** = "Interagir com dados" (cliques, inputs, estado)

---

## 🎯 Resumo Visual

```
E-commerce:

Server Components:
├── Lista de produtos (busca no banco)
├── Detalhes do produto (dados estáticos)
├── Perfil do usuário (dados sensíveis)
└── SEO/Metadata (títulos, descrições)

Client Components:
├── Botões (adicionar, comprar, favoritar)
├── Modais (abrir/fechar)
├── Formulários (inputs, validação)
├── Carrinho (estado local)
├── Busca (input com estado)
└── Filtros (checkboxes, dropdowns)
```

---

**Veja os exemplos práticos em:** `/lab01/ecommerce-examples`
