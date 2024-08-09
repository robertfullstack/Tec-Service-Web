const express = require('express');
const database = require('./firebaseConfig'); // Importa a configuração do Firebase

const routes = express.Router();

// Rota de cadastro
routes.post('/register', (req, res) => {
    const { name, email, password } = req.body;

    // Verifica se o usuário já existe no Firebase
    database.ref('users').orderByChild('email').equalTo(email).once('value', snapshot => {
        if (snapshot.exists()) {
            return res.status(400).json({ message: 'E-mail já registrado' });
        }

        // Cria um novo usuário no Firebase
        const newUserRef = database.ref('users').push();
        const newUser = {
            id: newUserRef.key,
            name,
            email,
            password
        };

        newUserRef.set(newUser, error => {
            if (error) {
                return res.status(500).json({ message: 'Erro ao registrar o usuário' });
            }
            return res.status(201).json(newUser);
        });
    });
});

module.exports = routes;
