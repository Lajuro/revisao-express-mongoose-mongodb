const express = require('express');
const routes = express.Router();
const controller = require('./controller/UsuariosController');

// Rota do Create
routes.post("/usuarios/create", (req, res) => {
    controller.createUser(req.body)
        .then(result => res.send(result))
        .catch(err => console.error(err));
});

// Rota do Read
routes.get('/usuarios', (req, res) => {
    controller.readUsers()
        .then(result => res.send(result))
        .catch(err => console.error(err));
});

// Rota Read por Letra
routes.get('/usuarios/AZ/:letra?', (req, res) => {
    controller.readUsersAZ(req.params)
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

// Rota do Update
routes.put('/usuarios/update/:id', (req, res) => {
    // res.json({
    //     params: req.params,
    //     body: req.body
    // });

    controller.updateUser(req.params, req.body)
        .then(result => res.send(result))
        .catch(err => console.error(err))
});

// Rota do Delete
routes.delete('/usuarios/delete/:id', (req, res) => {
    controller.deleteUser(req.params)
        .then(result => res.send(result))
        .catch(err => console.error(err));
})

module.exports = routes; // Exporta as routes para poderem ser usadas na aplicação Express.