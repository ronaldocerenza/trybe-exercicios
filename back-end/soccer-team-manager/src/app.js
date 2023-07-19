// src/app.js
const express = require('express');
// express importado para utilizar o framework, e iniciar o servidor
const app = express();
// app é a variável que vai receber o express

const { readSoccerTeams, writeSoccerTeams, updateSoccerTeams, deleteSoccerTeams } = require('./utils/fsUtils');
// readSoccerTeams é uma função que lê o arquivo

app.use(express.json());
// o express vai utilizar o json para fazer as requisições

// 200 é o status de sucesso, que significa que a requisição foi bem sucedida
// 201 é o status de sucesso, que significa que a requisição foi bem sucedida e um novo recurso foi criado
// 204 é o status de sucesso, que significa que a requisição foi bem sucedida, mas não tem conteúdo para retornar
// 500 é o status de erro, que significa que a requisição não foi bem sucedida
// 404 é o status de erro, que significa que a rota não foi encontrada

app.get('/teams', async (req, res) => {
  const teams = await readSoccerTeams();
  res.status(200).json( { teams } );
});
// rota teams, que retorna um status 200 e um json  

app.post('/teams', async (req, res) => {
  const newTeam = req.body;
  const newTeamWithId = await writeSoccerTeams(newTeam);
  res.status(201).json({ team: newTeamWithId });
});
// post é o método http que vai ser utilizado, e a rota é a /teams
// newteam é um objeto que recebe o body da requisição

app.put('/teams/:id', async (req, res) => {
  const { id } = req.params;
  const updateTeam = req.body;

  const updateTeamId = await updateSoccerTeams(Number(id), updateTeam);
  // updateTeamId recebe o id e o updateTeam, que é o time atualizado
  return res.status(201).json({ updateTeamId });
});
// put é o método http que vai ser utilizado, e a rota é a /teams/:id, que serve para atualizar um recurso

app.delete('/teams/:id', async (req, res) => {
  const { id } = req.params;
  await deleteSoccerTeams(id);

  return res.status(204).end();
});
// delete é o método http que vai ser utilizado, e a rota é a /teams/:id

module.exports = app;
// exportando o app para ser utilizado em outros arquivos


// resumo post: cria um novo recurso com os dados enviados no corpo da requisição
// resumo put: atualiza um recurso com os dados enviados no corpo da requisição
// resumo delete: deleta um recurso com o id enviado na url da requisição
// resumo get: retorna um recurso com o id enviado na url da requisição
// resumo patch: atualiza um recurso com os dados enviados no corpo da requisição