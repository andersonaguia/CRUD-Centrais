<h1 align="center">
  WEB - CRUD CENTRAIS
</h1>

## Descrição

Projeto web para gerenciamento dos cadastros de centrais e modelos de centrais.

## Pré-requisitos

[NodeJS](https://nodejs.org/en) 22+ 

[API do Backend](/backend/README.md) em execução! O servidor do backend deve estar rodando na mesma URL especificada na variável de ambiente `NEXT_PUBLIC_API_URL`.


## Configuração do projeto

1 - Instale as dependências

```bash
$ npm install
```

2 - Renomeie o arquivo `.env-example` para `.env` e preencha a url base para acesso às rotas da aplicação.

```bash
$ NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Compilando e rodando a aplicação

```bash

# build
$ npm run build

# development
$ npm run start

# watch mode
$ npm run dev

```




