import Counter from '@/components/Counter';
import UserGreeting from '@/components/UserGreeting';

export const metadata = {
  title: 'Lab 04: CI/CD com GitHub Actions | React 19 Labs',
  description: 'Aprenda CI/CD na prática com testes automatizados e GitHub Actions',
};

export default function Lab04() {
  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '1rem',
          color: '#667eea'
        }}>
          Lab 04: CI/CD com GitHub Actions
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#666', lineHeight: '1.6' }}>
          Aprenda na prática como implementar Continuous Integration e Continuous Deployment
          com testes automatizados.
        </p>
      </header>

      {/* Seção de Conceitos */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          📚 O que você vai aprender
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '1rem',
          marginTop: '1.5rem'
        }}>
          <Card emoji="🧪" title="Testes Unitários" description="Testar funções isoladas com Jest" />
          <Card emoji="⚛️" title="Testes de Componente" description="Testar componentes React com Testing Library" />
          <Card emoji="🔗" title="Testes de Integração" description="Testar APIs e fluxos completos" />
          <Card emoji="🤖" title="GitHub Actions" description="CI/CD automatizado" />
        </div>
      </section>

      {/* Pirâmide de Testes */}
      <section style={{ 
        background: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '12px',
        marginBottom: '3rem'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          🔺 Pirâmide de Testes
        </h2>
        
        <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
          <PyramidLevel 
            level="E2E" 
            color="#dc2626" 
            width="30%"
            description="Poucos testes, lentos, alto custo"
          />
          <PyramidLevel 
            level="Integração" 
            color="#f59e0b" 
            width="50%"
            description="Testes moderados, médio custo"
          />
          <PyramidLevel 
            level="Unitários" 
            color="#10b981" 
            width="100%"
            description="Muitos testes, rápidos, baixo custo"
          />
        </div>
        
        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#666' }}>
          <strong>Regra geral:</strong> Mais testes unitários, menos testes E2E
        </p>
      </section>

      {/* Componentes de Demonstração */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          🎮 Componentes de Demonstração
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Estes componentes possuem testes completos (unitários e de componente).
          Veja os arquivos em <code>src/components/__tests__/</code>.
        </p>
        
        <Counter />
        <UserGreeting />
      </section>

      {/* Pipeline CI/CD */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          🔄 Pipeline CI/CD
        </h2>
        
        <div style={{ 
          background: '#1e293b',
          color: '#e2e8f0',
          padding: '2rem',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          overflow: 'auto'
        }}>
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#60a5fa' }}>Etapa 1:</strong> 🔍 Lint & Type Check
          </div>
          <div style={{ marginBottom: '1rem', paddingLeft: '2rem', color: '#94a3b8' }}>
            ↓ npm run lint<br />
            ↓ npm run type-check
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#34d399' }}>Etapa 2:</strong> 🧪 Testes
          </div>
          <div style={{ marginBottom: '1rem', paddingLeft: '2rem', color: '#94a3b8' }}>
            ↓ npm run test:ci
          </div>
          
          <div style={{ marginBottom: '1rem' }}>
            <strong style={{ color: '#a78bfa' }}>Etapa 3:</strong> 🏗️ Build
          </div>
          <div style={{ marginBottom: '1rem', paddingLeft: '2rem', color: '#94a3b8' }}>
            ↓ npm run build
          </div>
          
          <div>
            <strong style={{ color: '#f472b6' }}>Etapa 4:</strong> ✅ Status
          </div>
          <div style={{ paddingLeft: '2rem', color: '#94a3b8' }}>
            ↓ Verifica se todos os jobs passaram
          </div>
        </div>
        
        <p style={{ marginTop: '1.5rem', color: '#666' }}>
          <strong>💡 Dica:</strong> Se qualquer etapa falhar, o pipeline para e o deploy não acontece.
        </p>
      </section>

      {/* Comandos Úteis */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          ⚡ Comandos Úteis
        </h2>
        
        <CommandBox 
          command="npm test"
          description="Rodar testes em modo watch (desenvolvimento)"
        />
        <CommandBox 
          command="npm run test:ci"
          description="Rodar todos os testes com coverage (CI/CD)"
        />
        <CommandBox 
          command="npm run test:all"
          description="Rodar todos os checks (lint, type-check, testes)"
        />
        <CommandBox 
          command="npm run build"
          description="Build da aplicação Next.js"
        />
      </section>

      {/* Arquivos Importantes */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          📁 Arquivos Importantes
        </h2>
        
        <FileTree />
      </section>

      {/* Perguntas de Entrevista */}
      <section style={{ 
        background: '#fff7ed', 
        padding: '2rem', 
        borderRadius: '12px',
        border: '2px solid #fb923c'
      }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#ea580c' }}>
          💼 Perguntas Comuns de Entrevista
        </h2>
        
        <InterviewQuestion 
          question="Por que CI/CD é importante?"
          answer="CI/CD automatiza testes e deploy, detecta bugs mais cedo, reduz riscos, aumenta velocidade de entrega e garante qualidade consistente do código."
        />

        
        <InterviewQuestion 
          question="Qual a diferença entre testes unitários e de componente?"
          answer="Testes unitários testam funções isoladas (ex: calculator.ts). Testes de componente testam componentes React renderizados com React Testing Library."
        />
        
        <InterviewQuestion 
          question="O que acontece se um teste falhar no CI?"
          answer="O pipeline para, merge/deploy é bloqueado. O desenvolvedor é notificado para corrigir o problema antes de integrar o código."
        />
        
        <InterviewQuestion 
          question="Por que usar npm ci ao invés de npm install no CI?"
          answer="npm ci é mais rápido, determinístico e usa exatamente as versões do package-lock.json, garantindo builds consistentes."
        />
      </section>

      {/* Próximos Passos */}
      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>
          🚀 Próximos Passos
        </h2>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Continue sua jornada de aprendizado explorando os próximos labs!
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <NextLabButton href="/" label="← Voltar ao Início" />
          <NextLabButton href="/lab05" label="Lab 05: AWS Amplify →" disabled />
        </div>
      </section>
    </main>
  );
}

// Componentes auxiliares
function Card({ emoji, title, description }: { emoji: string; title: string; description: string }) {
  return (
    <div style={{
      padding: '1.5rem',
      background: 'white',
      border: '2px solid #e5e7eb',
      borderRadius: '8px',
      transition: 'transform 0.2s',
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{emoji}</div>
      <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.9rem', margin: 0 }}>{description}</p>
    </div>
  );
}

function PyramidLevel({ level, color, width, description }: { 
  level: string; 
  color: string; 
  width: string;
  description: string;
}) {
  return (
    <div style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
      <div style={{
        background: color,
        color: 'white',
        padding: '1rem',
        margin: '0 auto',
        width,
        fontWeight: 'bold',
        borderRadius: '4px',
      }}>
        {level}
      </div>
      <p style={{ fontSize: '0.8rem', color: '#666', margin: '0.5rem 0' }}>
        {description}
      </p>
    </div>
  );
}

function CommandBox({ command, description }: { command: string; description: string }) {
  return (
    <div style={{
      background: '#1e293b',
      color: '#e2e8f0',
      padding: '1rem',
      borderRadius: '8px',
      marginBottom: '0.5rem',
      fontFamily: 'monospace',
    }}>
      <code style={{ color: '#60a5fa' }}>$ {command}</code>
      <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.9rem', color: '#94a3b8' }}>
        {description}
      </p>
    </div>
  );
}

function FileTree() {
  return (
    <div style={{
      background: '#f8f9fa',
      padding: '1.5rem',
      borderRadius: '8px',
      fontFamily: 'monospace',
      fontSize: '0.9rem',
    }}>
      <div>📁 .github/workflows/</div>
      <div style={{ paddingLeft: '1rem' }}>
        <div>├── 📄 ci.yml (Pipeline de CI)</div>
        <div>├── 📄 deploy.yml (Pipeline de Deploy)</div>
        <div>└── 📄 scheduled-tests.yml (Testes agendados)</div>
      </div>
      <div style={{ marginTop: '0.5rem' }}>📁 src/</div>
      <div style={{ paddingLeft: '1rem' }}>
        <div>├── 📁 utils/__tests__/ (Testes unitários)</div>
        <div>├── 📁 components/__tests__/ (Testes de componente)</div>
        <div>└── 📁 app/api/__tests__/ (Testes de integração)</div>
      </div>
      <div style={{ marginTop: '0.5rem' }}>📁 e2e/ (Testes E2E Playwright)</div>
      <div style={{ marginTop: '0.5rem' }}>
        <div>📄 jest.config.js</div>
        <div>📄 playwright.config.ts</div>
      </div>
    </div>
  );
}

function InterviewQuestion({ question, answer }: { question: string; answer: string }) {
  return (
    <details style={{ marginBottom: '1rem', cursor: 'pointer' }}>
      <summary style={{ 
        fontWeight: 'bold', 
        fontSize: '1.1rem',
        padding: '0.5rem',
        background: 'white',
        borderRadius: '4px',
        marginBottom: '0.5rem'
      }}>
        {question}
      </summary>
      <p style={{ 
        padding: '1rem', 
        background: 'white', 
        borderRadius: '4px',
        margin: 0,
        lineHeight: '1.6'
      }}>
        {answer}
      </p>
    </details>
  );
}

function NextLabButton({ href, label, disabled }: { href: string; label: string; disabled?: boolean }) {
  return (
    <a
      href={disabled ? undefined : href}
      style={{
        display: 'inline-block',
        padding: '0.75rem 1.5rem',
        background: disabled ? '#d1d5db' : '#0070f3',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {label}
    </a>
  );
}
