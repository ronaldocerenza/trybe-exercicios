// OBJETIVO: criar um arquivo para ler o json
const fs = require('fs').promises;
// fs é o módulo do node que lê arquivos
const path = require('path');
// path é o módulo do node que lê caminhos
const TEAMS_FILE_PATH = '../../data/teams.json';

async function readSoccerTeams () {
// async é uma função assíncrona, que vai ler o arquivo
try {
  const data = await fs.readFile(path.resolve(__dirname,TEAMS_FILE_PATH));
  const teams = JSON.parse(data);
  return teams;
  // data recebe o fs, que lê o arquivo, e o path, que lê o caminho
  // teams recebe o data, que é o arquivo lido, e o JSON, que transforma o arquivo em um objeto
} catch (error) {
  console.error(`Erro ao ler o arquivo: ${error}`);
  // se der erro, retorna uma mensagem de erro
}
};

// OBJETIVO: criar um arquivo para escrever no json
async function writeSoccerTeams (newTeam) {
// async é uma função assíncrona, que vai escrever no arquivo
try {
  const oldTeams = await readSoccerTeams();
  const newTeamWithId = { id: Date.now(), ...newTeam };
  const allTeams = JSON.stringify([...oldTeams, newTeamWithId]);
  // oldTeams recebe o readSoccerTeams, que lê o arquivo
  // allTeams recebe o oldTeams, que é o arquivo lido, e o newTeam, que é o novo time
  await fs.writeFile(path.resolve(__dirname,TEAMS_FILE_PATH), allTeams);
  // o fs vai escrever no arquivo, e o path vai ler o caminho
  // o JSON vai transformar o objeto em um arquivo
  return newTeamWithId;
} catch (error) {
  console.error(`Erro ao escrever no arquivo: ${error}`);
  // se der erro, retorna uma mensagem de erro
}
};

//OBJETIVO: atualizar um arquivo para escrever no json
async function updateSoccerTeams (id, updatedTeamData) {
// async é uma função assíncrona, que vai atualizar o arquivo
  const oldTeams = await readSoccerTeams();
  const updatedTeam = { id, ...updatedTeamData };
  const updatedTeams = oldTeams.reduce((teamsList, currentTeams) => {
    if (currentTeams.id === updatedTeam.id) return [...teamsList, updatedTeam];
    return [...teamsList, currentTeams];
  }, []);
  // oldTeams recebe o readSoccerTeams, que lê o arquivo
  // updatedTeam recebe o id e o updatedTeamData
  // updatedTeams recebe o oldTeams, que é o arquivo lido, e o updatedTeam, que é o time atualizado

  const updatedTeamsJSON = JSON.stringify(updatedTeams);
  try {
    await fs.writeFile(path.resolve(__dirname,TEAMS_FILE_PATH), updatedTeamsJSON);
    console.log(`Time atualizado com id ${id}!`);
  // o fs vai escrever no arquivo, e o path vai ler o caminho
  // o JSON vai transformar o objeto em um arquivo
    return updatedTeam;
  } catch (error) {
    console.error(`Erro ao escrever no arquivo: ${error}`);
  }
};

// OBJETIVO: deletar um time do arquivo
async function deleteSoccerTeams (id) {
// async é uma função assíncrona, que vai deletar o arquivo
  const oldTeams = await readSoccerTeams();
  const updatedTeams = oldTeams.filter((team) => team.id !== Number(id));
  // oldTeams recebe o readSoccerTeams, que lê o arquivo
  // updatedTeams recebe o oldTeams, que é o arquivo lido, e o id, que é o id do time

  const updatedTeamsJSON = JSON.stringify(updatedTeams);
  try {
    await fs.writeFile(path.resolve(__dirname,TEAMS_FILE_PATH), updatedTeamsJSON);
    console.log(`Time atualizado com id ${id}!`);
  // o fs vai escrever no arquivo, e o path vai ler o caminho
  // o JSON vai transformar o objeto em um arquivo
  } catch (error) {
    console.error(`Erro ao escrever no arquivo: ${error}`);
  }
};

module.exports = {
  readSoccerTeams,
  writeSoccerTeams,
  updateSoccerTeams,
  deleteSoccerTeams,
};
// exportando o readSoccerTeams para ser utilizado em outros arquivos
// exportando o writeSoccerTeams para ser utilizado em outros arquivos