const express = require('express');
const peopleRoutes = require('./routes/peopleRoutes');

const app = express();

app.use(express.json());
// express.json é um middleware que permite que você acesse os dados enviados pelo cliente no corpo da requisição.
app.use('/people', peopleRoutes);
// app.use é um método que permite que você adicione middlewares ao seu servidor. Neste caso, estamos adicionando o middleware peopleRoutes ao caminho /people.

module.exports = app;