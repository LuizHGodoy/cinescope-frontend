# Cinescope

Cinescope é uma aplicação de gerenciamento de filmes construída com Next.js. Permite que os usuários visualizem, reindexem e limpem filmes de um banco de dados. A aplicação suporta modo escuro e possui um design responsivo.

## Começando

Para executar este projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o seguinte instalado:

- Node.js (versão 14 ou superior)
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seuusuario/cinescope-frontend.git
   cd cinescope-frontend
   ```

2. Instale as dependências:

   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Configure as variáveis de ambiente:

   Crie um arquivo `.env.local` na raiz do projeto e adicione as seguintes variáveis:

   ```
   NEXT_PUBLIC_API_URL=https://sua-api-url.com
   NEXT_PUBLIC_IMAGE_URL=https://image.tmdb.org/t/p/
   ```

4. Execute o servidor de desenvolvimento:

   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. Abra seu navegador e navegue até [http://localhost:3000](http://localhost:3000) para ver a aplicação em ação.

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
src/
├── app/                  # Arquivos principais da aplicação
│   ├── page.tsx         # Componente da página principal
├── components/           # Componentes reutilizáveis
│   ├── Header.tsx       # Componente do cabeçalho
│   ├── MovieCard.tsx    # Componente do cartão de filme
│   ├── MovieList.tsx    # Componente da lista de filmes
│   ├── ScrollToTopButton.tsx # Botão para rolar para o topo
│   ├── ConfirmationDialog.tsx # Diálogo de confirmação
├── hooks/                # Hooks personalizados
│   ├── useMovies.ts      # Hook para buscar filmes
├── interfaces/           # Interfaces TypeScript
│   ├── movie.ts          # Interface do filme
│   ├── movie-response.ts  # Interface da resposta do filme
├── services/             # Funções de serviço da API
│   ├── movie-service.ts   # Funções para chamadas de API relacionadas a filmes
├── styles/               # Estilos globais
│   ├── globals.css       # Estilos CSS globais
├── tailwind.config.ts    # Configuração do Tailwind CSS
├── next.config.ts        # Configuração do Next.js
├── package.json          # Metadados do projeto e dependências
└── README.md             # Documentação do projeto
```

## Funcionalidades

- **Gerenciamento de Filmes**: Visualize uma lista de filmes, reindexe-os e limpe o banco de dados.
- **Modo Escuro**: Alternar entre temas claro e escuro.
- **Design Responsivo**: A aplicação é projetada para funcionar em vários tamanhos de tela.
- **Rolagem Infinita**: Carregue mais filmes à medida que você rola para baixo.

## Documentação

### Componentes

- **Header**: Exibe o título e o botão de alternância de tema.
- **MovieList**: Busca e exibe uma lista de filmes. Inclui botões para reindexar e limpar filmes.
- **MovieCard**: Representa um único filme com seu título e pôster.
- **ScrollToTopButton**: Um botão que aparece quando o usuário rola para baixo, permitindo que ele retorne rapidamente ao topo da página.
- **ConfirmationDialog**: Um diálogo que confirma ações como limpar o banco de dados de filmes.

### Hooks

- **useMovies**: Um hook personalizado que usa `react-query` para buscar filmes com capacidades de rolagem infinita.

### Serviços

- **movie-service.ts**: Contém funções para interagir com a API de filmes, incluindo busca, reindexação e limpeza de filmes.


## Licença

Este projeto não está licenciado para uso público. Todos os direitos reservados.
