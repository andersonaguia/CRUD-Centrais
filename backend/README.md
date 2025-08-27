<h1 align="center">
  BACKEND - CRUD CENTRAIS
</h1>

## Pré-requisitos

[NodeJS](https://nodejs.org/en) 22+ 

[NestJS](https://nestjs.com/) 11+

## Configuração do projeto

1 - Instale as dependências

```bash
$ npm install
```

2 - Renomeie o arquivo `.env-example` para `.env` e preencha a url para conexão com o banco de dados. Substitua os dados `USER`, `PASSWORD`, `HOST`, `PORT` e `DATABASE` com os dados configurados previamente. Caso ainda não tenha configurado o banco de dados consulte a documentação [Configurar banco de dados MySQL](../database/README.md).

```bash
$ DATABASE_URL="mysql://USER:PASSWORD@HOST:PORT/DATABASE"
```

3 - Atualize o banco de dados através das migrations

```bash
$ npx prisma migrate deploy
```

4 - Carregue o Prisma Client

```bash
$ npx prisma generate
```

5 - Popular a tabela de modelos de central

```bash
$ npx prisma db seed
```

## Compilando e rodando a aplicação

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Rodando testes

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Rotas da aplicação

