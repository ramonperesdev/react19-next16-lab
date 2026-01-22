# Lab 02: React Compiler (React Forget)

## 📚 O que é o React Compiler?

O **React Compiler** é uma ferramenta que analisa seu código e otimiza automaticamente, sem você precisar usar `useMemo` e `useCallback` manualmente na maioria dos casos.

---

## 🔍 Conceito Principal

**Antes (React 18):** Você tinha que lembrar de usar `useMemo` e `useCallback` manualmente.

**Agora (React 19):** O compilador faz isso automaticamente! 🎉

---

## ⚠️ React 18 - Como era antes

```typescript
import { useState, useMemo, useCallback } from 'react';

function Component() {
  const [count, setCount] = useState(0);
  
  // Tinha que usar useMemo manualmente
  const expensiveCalc = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, []); // Dependências vazias
  
  // Tinha que usar useCallback manualmente
  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Precisa incluir dependências
  
  return <button onClick={handleClick}>Count: {count}</button>;
}
```

**Problemas:**
- Tinha que lembrar de usar `useMemo`
- Tinha que lembrar de `useCallback`
- Fácil esquecer e causar bugs de performance
- Código mais verboso e difícil de ler
- Precisa gerenciar dependências manualmente

---

## ✅ React 19 - Como é agora

```typescript
import { useState } from 'react';

function Component() {
  const [count, setCount] = useState(0);
  
  // Código simples! O compilador otimiza automaticamente
  const expensiveCalc = () => {
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
  
  const result = expensiveCalc();
  
  return <button onClick={handleClick}>Count: {count}</button>;
}
```

**Vantagens:**
- Código mais simples e legível
- Otimização automática pelo compilador
- Menos bugs de performance
- Não precisa gerenciar dependências
- Escreva código natural, o compilador cuida do resto!

---

## 🎯 Exemplo Prático: Lista de Produtos

### React 18 (Manual)

```typescript
const filteredProducts = useMemo(() => {
  return products.filter(product => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
      product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
}, [searchTerm, selectedCategory]);

const totalPrice = useMemo(() => {
  return filteredProducts.reduce(
    (sum, product) => sum + product.price, 
    0
  );
}, [filteredProducts]);
```

### React 19 (Automático)

```typescript
// Código simples! O compilador otimiza automaticamente
const filteredProducts = products.filter(product => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());
  const matchesCategory = selectedCategory === 'all' || 
    product.category === selectedCategory;
  return matchesSearch && matchesCategory;
});

const totalPrice = filteredProducts.reduce(
  (sum, product) => sum + product.price, 
  0
);
```

---

## 🤔 Quando ainda usar useCallback manualmente?

Você **ainda pode** usar `useCallback` quando precisar de controle explícito:

### ✅ Caso 1: Dependência de useEffect/useMemo

```typescript
const handleSave = useCallback(() => {
  console.log('Salvando...');
}, [deps]);

useEffect(() => {
  doSomething(handleSave);
}, [handleSave]); // Precisa de referência estável!
```

### ✅ Caso 2: Componentes filhos com React.memo

```typescript
const handleClick = useCallback(() => {
  doSomething();
}, []);

<MemoizedChild onClick={handleClick} />
```

### ✅ Caso 3: Controle explícito de dependências

```typescript
// Você quer controle total sobre quando recalcular
const fn = useCallback(() => {
  // lógica complexa
}, [deps]); // Dependências explícitas
```

### ❌ Caso 4: Na maioria dos casos, NÃO precisa!

```typescript
// O React Compiler otimiza automaticamente!
const simpleFn = () => {
  return count + 1;
};
```

---

## 💡 Regra de Ouro

**No React 19, escreva código simples!** O React Compiler vai otimizar automaticamente.

Só use `useMemo`/`useCallback` se realmente precisar de controle manual (casos raros).

---

## 📋 Resumo Prático

| Situação | React 18 | React 19 |
|----------|----------|----------|
| **Cálculo pesado** | `useMemo` manual | Código simples (compilador otimiza) |
| **Função como callback** | `useCallback` manual | Código simples (compilador otimiza) |
| **Dependência de useEffect** | `useCallback` necessário | `useCallback` ainda útil |
| **React.memo** | `useCallback` necessário | `useCallback` ainda útil |
| **Código simples** | Funciona sem otimização | Compilador otimiza automaticamente |

---

## 🚀 Como está configurado neste projeto?

O React Compiler está habilitado no `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  reactCompiler: true, // ✅ Habilitado!
};
```

Isso significa que você pode escrever código simples e o compilador vai otimizar automaticamente!

---

## 📝 Checklist de Migração

Se você está migrando de React 18 para React 19:

- [ ] Remova `useMemo` desnecessários (deixe o compilador fazer)
- [ ] Remova `useCallback` desnecessários (deixe o compilador fazer)
- [ ] Mantenha `useCallback` apenas quando precisar de referência estável
- [ ] Mantenha `useMemo` apenas quando precisar de controle explícito
- [ ] Teste a performance - o compilador deve otimizar automaticamente
- [ ] Escreva código mais simples e legível!

---

## 🎓 Próximos Passos

1. Veja os exemplos interativos em `/lab02`
2. Experimente remover `useMemo`/`useCallback` do seu código
3. Deixe o compilador fazer o trabalho pesado
4. Use controle manual apenas quando realmente necessário

---

**Lembre-se:** Escreva código simples. O React Compiler cuida da otimização! 🎉
