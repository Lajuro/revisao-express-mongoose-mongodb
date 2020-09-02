const mongoose = require('mongoose');

let database; // Essa variável pertence ao escopo global, porque ela está fora de todos os blocos, ou seja, da para ser usada em todo o código, mesmo que dentro de outras funções. Por padrão uma variável sem valor é undefined, e undefined é igual a false.
let userSchema;

// O método connectDatabase faz a conexão com o banco de dados MongoDB, porém se já tiver sido instanciado uma conexão, ele irá retornar a mesma conexão.
const connectDatabase = async () => {
    database = database || mongoose.connect('mongodb://127.0.0.1:27017/revisao', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    return database;
}

const createUserSchema = async (database) => {
    if (userSchema) {
        return;
    }

    // Aqui a gente cria o Schema
    userSchema = new database.Schema({
        name: String,
        password: String,
        email: String
    }, {
        timestamps: true
    });

    // Com o Schema criado, bora criar o Model
    database.model('User', userSchema);
}

// Abaixo, fazemos o CRUD (Create, Read, Update, Delete)

// Método Create

const createUser = async ({name, password, email}) => {
    // O parâmetro body está com tudo o que foi passado no POST, ela vem do req.body passado na rota post de createUser.
    let database = await connectDatabase(); // Verifica se já ta conectado, se não estiver, conecta na hora (Na verdade é uma Promise, então pode não ser na hora).
    await createUserSchema(database); // Verifica se já foi criado um Schema do usuário, se sim, ele pode seguir, se não, ele vai criar e então após criado, ele segue.

    const {User} = database.models; // A mesma coisa que const User = database.models.User - Isso aqui vai resgatar o model criado e salvar na variável User.

    // const {name, password, email} = body; Essa seria uma opção

    // const user = new User({
    //     name,
    //     password,
    //     email
    // }) 

    // -> Ai você chamaria da forma que está acima

    const user = new User({
        name,
        password,
        email
    }); // Essa forma é a mais rápida, usando o Spread operator.

    user.save();

    return user;
}

// Read
const readUsers = async () => {
    let database = await connectDatabase();

    await createUserSchema(database);

    const {User} = database.models;

    return User.find();

}

const readUsersAZ = async (params) => {
    let database = await connectDatabase();

    await createUserSchema(database);

    const {User} = database.models;

    if (params.letra) {
        let letra = params.letra;
        let regex = new RegExp(`^${letra.charAt(0)}`, 'i')
        let response = await User.find({name: regex});

        return {
            "status": 200,
            ...response
        };
    } else {
        throw {
            "status": 400,
            "message": "É necessário passar uma letra como parâmetro!"
        }
    }
}

// Update
const updateUser = async ({id}, {name, password, email}) => {
    let database = await connectDatabase();

    await createUserSchema(database);

    const {User} = database.models;

    return User.updateOne({_id: id}, {name, password, email});
}

// Delete
const deleteUser = async ({id}) => {
    let database = await connectDatabase();

    await createUserSchema(database);

    const {User} = database.models;

    return User.deleteOne({_id: id});
}

module.exports = {
    createUser,
    readUsers,
    readUsersAZ,
    updateUser,
    deleteUser
}