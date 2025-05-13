# ScientiveDAO Frontend

![ScientiveDAO Banner](https://via.placeholder.com/1200x400/4338ca/FFFFFF?text=ScientiveDAO)

## Sobre

Este é o frontend da plataforma ScientiveDAO, desenvolvido com Next.js e Thirdweb SDK. A ScientiveDAO é uma organização autônoma descentralizada que financia pesquisas científicas de forma transparente e anônima, utilizando provas de conhecimento-zero para verificação.

## Funcionalidades Principais

- Landing page com informações sobre a DAO e seu funcionamento
- Sistema de cadastro para pesquisadores com verificação anônima via ZK proofs
- Formulário de submissão de propostas científicas
- Integração com carteiras Web3 para gerenciamento de fundos

## Tecnologias

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [Thirdweb SDK](https://portal.thirdweb.com)
- [shadcn/ui](https://ui.shadcn.com) (componentes de UI)

## Requisitos

- Node.js 18+
- Yarn ou npm

## Instalação

1. Instale as dependências:

```bash
yarn
```

2. Configure as variáveis de ambiente (copie o arquivo de exemplo):

```bash
cp .env.example .env.local
```

3. Adicione seu CLIENT_ID da Thirdweb ao arquivo `.env.local`:

```
NEXT_PUBLIC_TEMPLATE_CLIENT_ID=thirdweb_client_id_here
THIRDWEB_SECRET_KEY=thirdweb_secret
```

## Desenvolvimento

Inicie o servidor de desenvolvimento:

```bash
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) com seu navegador para ver o resultado.

## Build

Crie uma versão de produção:

```bash
yarn build
```

E inicie o servidor:

```bash
yarn start
```

## Estrutura do Projeto

```
src/
├── app/                   # Páginas e rotas (Next.js App Router)
│   ├── page.tsx           # Landing page
│   ├── register/          # Registro e submissão de propostas
│   └── layout.tsx         # Layout principal da aplicação
├── components/            # Componentes React reutilizáveis
│   ├── ui/                # Componentes de UI (shadcn)
│   ├── Header.tsx         # Cabeçalho da aplicação
│   └── Footer.tsx         # Rodapé da aplicação
└── lib/                   # Utilitários e funções auxiliares
```
