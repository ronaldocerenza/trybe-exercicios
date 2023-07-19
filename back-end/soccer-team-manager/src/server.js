// src/server.js
const app = require('./app');
// importando o app do arquivo app.js, com o express no arquivo app.js
app.listen(3001, () => console.log('Servidor online na porta 3001’'));
// iniciando o servidor na porta 3001, e mostrando no console que o servidor está rodando
// o listen é uma função do express, que recebe a porta e uma função de callback