<h1 align="center">
  BANCO DE DADOS MYSQL
</h1>

## Pré requisitos

A aplicação depende da configuração prévia do banco de dados [MySQL](https://www.mysql.com/) 8+. Você pode configurar o banco de dados manualmente ou executar em container [Docker](https://www.docker.com/) utilizando o esquema já definido.

### Criando banco de dados manualmente

- Após instalação do `MySQL` acessar o banco de dados via `CLI`.
  
```
mysql -u root -p
```

- Criar uma nova base chamada `centrals` para utilizar no projeto.

```
mysql> CREATE DATABASE centrals CHARACTER SET utf8 COLLATE utf8_general_ci;
```

- Garantir autenticação a partir de senha predefinida.

```
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'sua_senha';
FLUSH PRIVILEGES;
```

### Criando banco de dados em container Docker

- Acessar a pasta do arquivo de configuração do container.

```
cd mysql
```
- Montar o container.

```
docker compose up -d
```

O serviço do banco de dados será iniciado na porta padrão `3306`