# Revisão Express, MongoDB e Mongoose
Vamos montar um projeto em Express, esse projeto terá conexão com um banco de dados usando o Mongoose.

### Requisitos:

##### Estrutura Inicial:
- [ ] Criar uma pasta do projeto.
- [ ] Criar o arquivo index.js, que será o arquivo de entrada do projeto.
- [ ] Criar uma pasta src onde será armazenado esse arquivo.
- [ ] Rodar o comando `npm init`.
- [ ] **Baixar os pacotes npm:** Express e Mongoose `(--save)` e Nodemon `(--save-dev)`.
- [ ] No arquivo `package.json`, fazer 2 scripts: `"start": "node src/index.js"` e `"dev": "nodemon src/index.js"`.

##### Configuração do src/index.js:
- [ ] Fazer a importação do Express.
- [ ] Fazer a inicialização de um app Express.
- [ ] Usar na aplicação Express `express.json()`.
- [ ] Fazer uma rota principal. [GET]
- [ ] Fazer a chamada do Express para que seja inicialiado na porta 3000.

##### Routes
- [ ] Fazer uma pasta com as routes.
- [ ] Nessa pasta, criar um arquivo que ficará as routes.
- [ ] No arquivo, fazer a importação do Express e instanciar o Router.
- [ ] Fechar o código com a exportação das rotas.

##### Controller
- [ ] Criar controller de usuários.
- [ ] Importar o Mongoose.
- [ ] Criar a função que faz a conexão com o banco de dados do MongoDB.
- [ ] Criar a função que cria um Schema de usuários.
- [ ] Criar todas as funções CRUD.

##### REST Client
- [ ] Fazer a requisição `POST` para o método `Create`.
- [ ] Fazer a requisição `GET` para o método `Read`.
- [ ] Fazer a requisição `PUT` para o método `Update`.
- [ ] Fazer a requisição `DELETE` para o método `Delete`.

#### De volta pro index.js
- [ ] Importar o arquivo de routes.
- [ ] Usar na aplicação Express o routes.

#### Finalizando o projeto
- [ ] Adicionar um `.gitignore` para ignorar o `node_modules`.
