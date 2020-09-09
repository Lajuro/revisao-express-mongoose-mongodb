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
- [x] Criar todas as funções CRUD (createUser, readUser, updateUser, deleteUser).
- [x] Exportar todas as funções para serem usadas nas rotas.

#### De volta pro routes.js
- [x] Importar o controller.
- [x] Criar a rota `POST` para o método `createUser` do `controller`.
- [x] Criar a rota `GET` para o método `readUser` do `controller`.
- [x] Criar a rota `PUT` para o método `updateUser` do `controller`.
- [x] Criar a rota `DELETE` para o método `deleteUser` do `controller`.

##### REST Client
- [x] Fazer a requisição `POST` para o método `Create`.
- [x] Fazer a requisição `GET` para o método `Read`.
- [x] Fazer a requisição `PUT` para o método `Update`.
- [x] Fazer a requisição `DELETE` para o método `Delete`.

#### De volta pro index.js
- [x] Importar o arquivo de routes.
- [x] Usar na aplicação Express o routes.

#### Finalizando o projeto
- [x] Adicionar um `.gitignore` para ignorar o `node_modules`.

## Bônus:
> Aqui ficarão alguns desafios para serem feitos, podem ser adicionados novos no futuro.

### Fazer uma rota que procure por pessoas de A até Z
-> A ideia aqui é fazer uma rota onde seja possível pesquisar items de acordo com a letra inicial.

#### routes.js
- [x] Criar uma nova rota `GET` para pesquisa de A até Z.
- [x] Essa rota, deve ter um parâmetro `:letra?` para que consiga pegar através do `req.params`. O interrogação no final é para dizer que esse parâmetro é opcional, se não for passado, caso fizer uma tratativa de erro no controller, ele poderá cair nesse erro e mostrar que não foi preenchido o parâmetro.
- [x] Use, dentro da arrow function, o método que irá criar no `UsuariosController.js`, uma sugestão é um método com o nome readUserAZ, esse método deve receber como parâmetro o `req.params`.
- [x] Retorne um resultado caso positivo e outro para caso de erro.

#### UsuariosController.js
- [x] Criar uma função (readUserAz) que possua como parâmetro algo como `params`.
- [x] Como todos os outros métodos, verifique sobre a conexão com o banco, criação do Schema e faça o destructuring do Model `User` que está em `database.models`.
- [x] (Opcional) Faça uma verificação se foi passado algum parâmetro.
- [x] Crie uma variável para armazenar o `params.letra`:
```javascript
let letra = params.letra;
```
- [x] Crie uma variável para colocar o Regex que irá usar para a pesquisa.
```javascript
let regex = new RegExp(`^${}`, 'i');
```
- [x] Crie uma variável para armazenar a resposta da busca.
```javascript
let response = await User.find({name: regex});
```
- [x] Retorne então esse `response`.
- [x] (Opcional) Caso tenha feito a verificação de parâmetro, no `else` jogue um erro `É necessário passar uma letra como parâmetro!`:
```javascript
throw 'É necessário passar uma letra como parâmetro!';
```

#### api.rest
- [x] Crie mais uma rota `GET`.
- [x] O caminho deverá ser a mesma rota que passou como rota no routes.js.
- [x] No final, você pode colocar a letra que deseja buscar.
- [x] Clique em `Send Request` e veja se tudo ocorreu como esperado.

## Adicionando Swagger no projeto:
> Após concluir todas as etapas anteriores, para incluir uma documentação da sua API através do Swagger, siga as próximas etapas.

#### Etapa inicial:
- [x] No terminal, certifique-se que está no caminho onde seu projeto está hospedado e instale o `swagger` e o `swagger-ui-express`.
- [x] Para instalar o `swagger`, que no caso será globalmente, rode o seguinte comando:
```
npm install -g swaggger
```
- [x] Para instalar o `swagger-ui-express`, que no caso será nas dependências padrões, rode o seguinte comando:
```
npm install swaggger-ui-express --save
```
- [x] Crie uma pasta `middlewares` dentro da pasta `src`.
- [x] Dentro da pasta `middlewares`, crie um arquivo chamado `swagger.js`.
- [x] Dentro da pasta `src`, crie um arquivo chamado `swagger.json`.

#### Arquivo middlewares/swagger.js:
- [x] Faça a estrutura padrão de importação do Swagger:
```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const path = '/swagger';

const swaggerConfig = [
    path,
    swaggerUi.serve,
    swaggerUi.setup(swaggerDoc)
];

module.exports = {
    swaggerConfig
}
```
> É importante que seja feito a exportação da variável `swaggerConfig` para ser usado na próxima etapa.

#### Arquivo index.js:
- [x] No topo do arquivo, importe o middleware que acaba de criar.
```javascript
const {swaggerConfig} = require('./middlewares/swagger');
```
- [x] É necessário também que peça para o express use essas configurações do Swagger.
```javascript
app.use(...swaggerConfig);
```

#### Arquivo swagger.json:
- [x] Crie a estrutura inicial do Swagger, que é a seguinte:
```json
    {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "[Título da sua API]",
        "description": "[Uma breve descrição da sua API]",
        "license": {
            "name": "MIT",
            "url": "https://opensource.org/licenses/MIT"
        }
    },
    "tags": [{
        "name": "[Nome do endpoint que vai documentar, como por exemplo: Usuários]",
        "description": "[Uma descrição do que tem nesse endpoint.]"
    }],
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "paths": {},
    "definitions": {}
}
```
##### CREATE
- [x] Faça o caminho do `create` que definiu em `routes.js`, no caso aqui é `/usuarios/create`.
- [x] A estrutura para esse método é a seguinte:
```json
"paths": {
    "/usuarios/create": {
        "post": {
            "tags": [
                "Usuários"
            ],
            "summary": "Insere um novo usuário no banco de dados",
            "requestBody": {
                "description": "Propriedades do usuário",
                "required": true,
                "content": {
                    "application/json": {
                        "schema": {
                            "#ref": "#/definitions/User"
                        }
                    }
                }
            },
            "produces": [
                "application/json"
            ],
            "responses": {
                "200": {
                    "description": "Ok"
                },
                "5XX": {
                    "description": "Erro inesperado."
                }
            }
        }
    }
}
```
> Observe que esse código está dentro de `paths`, ou seja, não é para inserir esse `paths` dentro do já existente `paths`, nesse caso copie apenas o caminho `/usuarios/create` para baixo, até antes do fechamento de `paths`.

- [x] Veja que dentro de `$ref`, é passado um `definition`, que no caso é `User`, ou seja, você precisará criar esse definition em `definitions`, como abaixo:
```json
"definitions": {
    "User": {
        "type": "object",
        "properties": {
            "name": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "email": {
                "type": "string"
            }
        }
    }
}
```
> Observe que esse código está dentro de `definitions`, ou seja, não é para inserir esse `definitions` dentro do já existente `definitions`, nesse caso copie apenas a definição `User` para baixo, até antes do fechamento de `definitions`.

##### READ
- [x] Para o caminho do `read` é praticamente igual, primeiro crie o que definiu em `routes.js`, no caso aqui é `/usuarios`.
- [x] A estrutura para esse método é a seguinte:
```json
"/usuarios": {
    "get": {
        "tags": [
            "Usuários"
        ],
        "summary": "Retorna todos os usuários do banco de dados",
        "responses": {
            "200": {
                "description": "Listagem de usuários",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/definitions/Users"
                        }
                    }
                }
            },
            "5XX": {
                "description": "Erro inesperado."
            }
        }
    }
}
```
- [x] Veja que dentro de `$ref`, é passado um `definition`, que no caso é `Users`, ou seja, você precisará criar esse definition em `definitions`, como abaixo:
```json
"Users": {
    "type": "array",
    "items": {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string"
            },
            "name": {
                "type": "string"
            },
            "password": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "createdAt": {
                "type": "string"
            },
            "updatedAt": {
                "type": "string"
            },
            "_v": {
                "type": "number"
            }
        }
    }
}
```

##### READ - Porém dessa vez a rota de A até Z
- [x] Para esse caminho que também é `read` é um pouco diferente, se assemelha mais ao `delete` e o `update`, primeiro crie o que definiu em `routes.js`, no caso aqui é `/usuarios`.
- [x] A estrutura para esse método é a seguinte:
```json
"/usuarios/AZ/{letra}": {
    "get": {
        "tags": [
            "Usuários"
        ],
        "summary": "Retorna todos os usuários do banco de dados de acordo com a letra buscada",
        "parameters": [{
            "in": "path",
            "name": "letra",
            "required": true,
            "description": "Primeira letra do nome que deseja buscar.",
        }],
        "responses": {
            "200": {
                "description": "Listagem de usuários de acordo com a letra passada como parâmetro.",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/definitions/Users"
                        }
                    }
                }
            },
            "5XX": {
                "description": "Erro inesperado."
            }
        }
    }
},
```
> Veja que existe essa propriedade nova `parameters`, aqui você define o parâmetro que substituirá o que está no path `/usuarios/AZ/{letra}` que está entre chaves.
> Dentro de `parameters`, a propriedade `name` é para referenciar o que tem no `path` que está entre parênteses. Ou seja, se tivesse outro parâmetro, já que esse `parameters` é uma array, você teria que passar todo esse bloco, como abaixo, de novo.
```json
"parameters": [
    {
        "in": "path",
        "name": "letra",
        "required": true,
        "description": "Primeira letra do nome que deseja buscar.",
        "schema": {
            "$ref": "#/definitions/letra"
        }
    },
    {
        "in": "path",
        "name": "OUTRO PARÂMETRO",
        "required": true,
        "description": "DESCRIÇÃO DESSE OUTRO PARÂMETRO",
    }
]
```

##### UPDATE
- [x] Para o caminho do `update` é praticamente igual ao `read` que seleciona de A até Z, primeiro crie o que definiu em `routes.js`, no caso aqui é `/usuarios/update/{id}`.
- [x] A estrutura para esse método é a seguinte:
```json
"/usuarios/update/{id}": {
    "put": {
        "summary": "Atualiza o usuário correspondente ao ID",
        "tags": [
            "Usuários"
        ],
        "requestBody": {
            "description": "Propriedades do usuário",
            "required": true,
            "content": {
                "application/json": {
                    "schema": {
                        "$ref": "#/definitions/User"
                    }
                }
            }
        },
        "parameters": [{
            "in": "path",
            "name": "id",
            "required": true,
            "description": "ID do usuário que iremos atualizar",
            "schema": {
                "$ref": "#/definitions/id"
            }
        }],
        "responses": {
            "200": {
                "description": "Ok",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/definitions/UpdateResponse"
                        }
                    }
                }
            },
            "5XX": {
                "description": "Erro inesperado."
            }
        }
    }
}
```
> Observe que dentro de `parameters` tem uma propriedade chamada `schema` que tem uma referência ao `definitions`, no caso o nome dessa `definition` é `id`, ou seja, teremos que criar ela.
> Além disso, tem uma nova response que a gente quer quando da tudo certo no Update, no caso o nome da referência em `definitions` é `UpdateResponse`.

 - [x] Para criar o `definition` de `id` em `definitions`, faça como abaixo:
 ```json
 "id": {
    "properties": {
        "_id": {
            "type": "string"
        }
    }
}
```
 - [x] Para criar o `definition` de `UpdateResponse` em `definitions`, faça como abaixo:
 ```json
 "UpdateResponse": {
    "type": "object",
    "properties": {
        "n": {
            "type": "number"
        },
        "nModified": {
            "type": "number"
        },
        "opTime": {
            "type": "object",
            "properties": {
                "ts": {
                    "type": "string"
                },
                "t": {
                    "type": "number"
                }
            }
        },
        "electionId": {
            "type": "string"
        },
        "ok": {
            "type": "number"
        },
        "operationTime": {
            "type": "string"
        }
    }
}
```

##### DELETE
- [x] Para o caminho do `delete` é praticamente igual ao `update`, primeiro crie o que definiu em `routes.js`, no caso aqui é `/usuarios/delete/{id}`.
- [x] A estrutura para esse método é a seguinte:
```json
"/usuarios/delete/{id}": {
    "delete": {
        "summary": "Deleta o usuário correspondente ao ID",
        "tags": [
            "Usuários"
        ],
        "parameters": [{
            "in": "path",
            "name": "id",
            "required": true,
            "description": "ID do usuário que iremos apagar",
            "schema": {
                "$ref": "#/definitions/id"
            }
        }],
        "responses": {
            "200": {
                "description": "Ok",
                "content": {
                    "application/json": {
                        "schema": {
                            "$ref": "#/definitions/DeleteResponse"
                        }
                    }
                }
            },
            "5XX": {
                "description": "Erro inesperado."
            }
        }
    }
}
```
> Observe que o `definition` de quando a requisição `delete` da certo, se chama `DeleteResponse` nesse exemplo, então precisamos criar.

 - [x] Para criar o `definition` de `DeleteResponse` em `definitions`, faça como abaixo:
 ```json
 "DeleteResponse": {
    "type": "object",
    "properties": {
        "n": {
            "type": "number"
        },
        "nModified": {
            "type": "number"
        },
        "opTime": {
            "type": "object",
            "properties": {
                "ts": {
                    "type": "string"
                },
                "t": {
                    "type": "number"
                }
            }
        },
        "electionId": {
            "type": "string"
        },
        "ok": {
            "type": "number"
        },
        "operationTime": {
            "type": "string"
        },
        "deletedCount": {
            "type": "number"
        }
    }
}
```

### Conclusão
- [x] Agora podemos testar se tudo está funcionando, então no terminal rode o comando ```npm run dev```.
- [x] Acesse o link local: http://localhost:3000.
- [x] Você deverá ver 5 métodos dentro da tag "Usuários", que são um `POST`, dois `GET`, um `PUT` e um `DELETE`.
- [x] Faça os testes em cada uma dessas requisições, verifique se todas funcionam.