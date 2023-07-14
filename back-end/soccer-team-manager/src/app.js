// src/app.js
const express = require('express');
// express importado para utilizar o framework, e iniciar o servidor
const app = express();
// app é a variável que vai receber o express

app.use(express.json());
// o express vai utilizar o json para fazer as requisições

// app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));
// criando uma rota, que recebe uma requisição e uma resposta
// get é o método http que vai ser utilizado, e a rota é a /, que é a raiz do projeto
// a função de callback recebe a requisição e a resposta, e retorna um status 200 e um json
// o json é um objeto, que tem uma chave message, e um valor Olá Mundo!
// 200 é o status de sucesso, que significa que a requisição foi bem sucedida
// 500 é o status de erro, que significa que a requisição não foi bem sucedida
// 404 é o status de erro, que significa que a rota não foi encontrada

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];
// array de objetos, que tem dois objetos dentro

app.get('/teams', (req, res) => res.status(200).json({ teams }));
// rota teams, que retorna um status 200 e um json

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});
// post é o método http que vai ser utilizado, e a rota é a /teams
// newteam é um objeto que recebe o body da requisição

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    return res.status(404).json({ message: 'Team not found' });
  }
  // if que verifica se o updateTeam é falso, se for, retorna um status 404 e um json

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});
// put é o método http que vai ser utilizado, e a rota é a /teams/:id

app.delete('/teams/:id', (req, res) => {
  const { id } = req.params;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});
// delete é o método http que vai ser utilizado, e a rota é a /teams/:id

module.exports = app;
// exportando o app para ser utilizado em outros arquivos