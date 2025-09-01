<h1 align="center">
  BACKEND - CRUD CENTRAIS
</h1>

## Descrição

API para gerenciamento dos cadastros de centrais e modelos de centrais.

## Pré-requisitos

[NodeJS](https://nodejs.org/en) 22+ 

[NestJS](https://nestjs.com/) 11+

[Banco de dados MySQL](../database/README.md) deve estar configurado e rodando conforme documentação.

## Configuração do projeto

1 - Instale as dependências

```bash
$ npm install
```

2 - Renomeie o arquivo `.env-example` para `.env` e preencha a url para conexão com o banco de dados. Substitua os dados `USER`, `PASSWORD`, `HOST` e `DATABASE` com os dados configurados previamente. Também inclua a porta para disponibilizar a aplicação `PORT`. Caso ainda não tenha configurado o banco de dados consulte a documentação [Configurar banco de dados MySQL](../database/README.md).

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

# build
$ npm run build

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
### As rotas da aplicação estão documentadas via [Swagger](https://swagger.io/) e após rodar o projeto você pode utilizá-las acessando [localhost:3000/api](http://localhost:3000/api)

- `GET /` → verificar o estado da api
```JSON
# Retorno esperado

ok

```
- `GET /centrals` → listar todas as centrais (com paginação, filtros e ordenação)
```JSON
# Retorno esperado

{
  "data": [
    {
      "id": 3,
      "name": "Central 25",
      "mac": "55:55:55:55:55:55",
      "model": {
        "id": 1,
        "name": "AMT 4010"
      }
    },
    {
      "id": 10,
      "name": "Central 2",
      "mac": "10:E0:09:00:50:08",
      "model": {
        "id": 1,
        "name": "AMT 4010"
      }
    }
  ],
  "total": 17
}
```

- `GET /centrals/:id` → obter uma central específica
```JSON
# Retorno esperado

{
  "id": 10,
  "name": "Central 2",
  "mac": "10:E0:09:00:50:08",
  "model": {
    "id": 1,
    "name": "AMT 4010"
  }
}  
```

- `POST /centrals` → criar uma nova central
```JSON
# Retorno esperado

{
  "id": 10,
  "name": "Central Nova",
  "mac": "10:E0:09:00:50:08",
  "model": {
    "id": 1,
    "name": "AMT 4010"
  }
}  
```

- `PUT /centrals/:id` → atualizar uma central existente
```JSON
# Retorno esperado

{
  "id": 10,
  "name": "Central Atualizada",
  "mac": "10:E0:09:00:50:08",
  "model": {
    "id": 1,
    "name": "AMT 4010"
  }
}  
```

- `DELETE /centrals/:id` → remover uma central definitivamente
  
```
Status: 204 No Content
```

- `GET /centrals/count` → obter o total de centrais cadastradas
```JSON
# Retorno esperado

{
  "total": 15
}
```

- `GET /models` → listar modelos de centrais
```JSON
# Retorno esperado

[
  {
    "id": 1,
    "name": "AMT 4010"
  },
  {
    "id": 2,
    "name": "AMT 4010 SMART"
  },
  {
    "id": 3,
    "name": "AMT 2018"
  },
  {
    "id": 4,
    "name": "AMT 2018 E/EG"
  },
  {
    "id": 5,
    "name": "AMT 1000"
  },
  {
    "id": 6,
    "name": "AMT 8000"
  }
]  
```

### A aplicação possui envio de notificações em tempo real para criação, atualização ou remoção de centrais no banco de dados via websockets.
- Endpoint
```
ws://localhost:3000/notifications

```
- Namespace
```
/notifications

```
- Evento emitido pelo servidor
```
'centralNotification'

```
- Formato da mensagem
```JSON
{
  "message": "Nova central disponível: Central 1",
  "totalCentrals": 17,
  "centralId": 10 // campo opcional
}

```