# Revisão Express, MongoDB e Mongoose
Vamos montar um projeto em Express, esse projeto terá conexão com um banco de dados usando o Mongoose.

### Requisitos:

##### Estrutura Inicial: 
- [x] Criar uma pasta do projeto.
- [x] Criar uma pasta src onde será armazenado esse arquivo.
- [x] Criar o arquivo index.js, que será o arquivo de entrada do projeto.
- [x] Rodar o comando `npm init`.
- [x] **Baixar os pacotes npm:** Express e Mongoose `(--save)` e Nodemon `(--save-dev)`.
- [x] No arquivo `package.json`, fazer 2 scripts: `"start": "node src/index.js"` e `"dev": "nodemon src/index.js"`.

##### Configuração do src/index.js:
- [x] Fazer a importação do Express.
- [x] Fazer a inicialização de um app Express.
- [x] Usar na aplicação Express `express.json()`.
- [x] Fazer uma rota principal. [GET]
- [x] Fazer a chamada do Express para que seja inicialiado na porta 3000.

##### Routes
- [x] Criar um arquivo que ficará as routes.
- [x] No arquivo, fazer a importação do Express e instanciar o Router.
- [x] Fechar o código com a exportação das rotas.

##### Controller
- [x] Criar controller de usuários.
- [x] Importar o Mongoose.
- [x] Criar a função que faz a conexão com o banco de dados do MongoDB.
- [x] Criar a função que cria um Schema de usuários.
- [x] Criar todas as funções CRUD.

#### De volta pro routes.js
- [x] Importar o controller.

##### REST Client
- [x] Fazer a requisição `POST` para o método `Create`.
- [x] Fazer a requisição `GET` para o método `Read`.
- [x] Fazer a requisição `PUT` para o método `Update`.
- [x] Fazer a requisição `DELETE` para o método `Delete`.

#### De volta pro index.js
- [x] Importar o arquivo de routes.
- [x] Usar na aplicação Express o routes.

#### Finalizando o projeto
- [ ] Adicionar um `.gitignore` para ignorar o `node_modules`.
