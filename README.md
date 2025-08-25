# Cooper Pro

Um sistema completo para gestão de avaliandos e testes de performance, desenvolvido com Next.js 15, Supabase e TypeScript.

## 🚀 Funcionalidades

- **Autenticação completa** com Supabase Auth
- **CRUD de avaliandos** com informações pessoais e de contato
- **Gestão de testes de performance** com múltiplas métricas
- **Dashboard com estatísticas** e visualização de dados
- **PWA (Progressive Web App)** para instalação em dispositivos móveis
- **Interface responsiva** com Tailwind CSS
- **Testes automatizados** (unitários e end-to-end)

## 🛠️ Tecnologias

- **Frontend:** Next.js 15 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS 4
- **Backend:** Supabase (PostgreSQL, Auth, Real-time)
- **Testes:** Jest, Testing Library, Playwright
- **Deploy:** Vercel
- **PWA:** Service Worker, Web App Manifest

## 📋 Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Conta no Supabase
- Conta na Vercel (para deploy)

## 🔧 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd cooper-pro
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute o script SQL em `supabase-setup.sql` no SQL Editor
3. Configure as variáveis de ambiente:

```env
NEXT_PUBLIC_SUPABASE_URL=sua_url_do_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima
```

### 4. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

## 📱 PWA (Progressive Web App)

O Cooper Pro é uma PWA completa que pode ser instalada em dispositivos móveis e desktop:

- **Instalação:** Clique no ícone de instalação na barra de endereços
- **Offline:** Funciona offline com cache inteligente
- **Atualizações:** Notificações automáticas de novas versões

## 🧪 Testes

### Testes Unitários
```bash
npm run test
npm run test:watch
npm run test:coverage
```

### Testes End-to-End
```bash
npm run test:e2e
npm run test:e2e:ui
```

## 📊 Estrutura do Projeto

```
src/
├── app/                 # App Router (Next.js 15)
│   ├── (auth)/         # Rotas de autenticação
│   ├── dashboard/      # Dashboard principal
│   ├── students/       # Gestão de avaliandos
│   └── tests/          # Gestão de testes
├── components/         # Componentes React
│   ├── ui/            # Componentes de UI base
│   └── __tests__/     # Testes dos componentes
├── lib/               # Utilitários e configurações
│   ├── actions/       # Server Actions
│   ├── supabase.ts    # Cliente Supabase
│   ├── types.ts       # Tipos TypeScript
│   └── utils.ts       # Funções utilitárias
public/                # Arquivos estáticos
├── icons/             # Ícones da PWA
├── manifest.json      # Web App Manifest
└── sw.js             # Service Worker
```

## 🔐 Autenticação

O sistema utiliza Supabase Auth com:
- Login/logout seguro
- Proteção de rotas
- Middleware de autenticação
- Redirecionamento automático

## 📈 Funcionalidades Principais

### Gestão de Avaliandos
- Cadastro completo com informações pessoais
- Upload de fotos
- Histórico de testes
- Status ativo/inativo

### Testes de Performance
- Teste de Cooper (VO2 máximo)
- Múltiplas métricas personalizáveis
- Cálculos automáticos
- Histórico e estatísticas

### Dashboard
- Visão geral dos dados
- Estatísticas em tempo real
- Gráficos e métricas
- Navegação intuitiva

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas

O projeto é compatível com qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte, abra uma issue no GitHub ou entre em contato através do email.

---

**Cooper Pro** - Sistema profissional para avaliação e acompanhamento de performance física.