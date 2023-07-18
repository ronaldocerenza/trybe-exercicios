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
  const allTeams = JSON.stringify([
    ...oldTeams,
    {id: Date.now(),
    ...newTeam}]);
  // oldTeams recebe o readSoccerTeams, que lê o arquivo
  // allTeams recebe o oldTeams, que é o arquivo lido, e o newTeam, que é o novo time
  await fs.writeFile(path.resolve(__dirname,TEAMS_FILE_PATH), allTeams);
  // o fs vai escrever no arquivo, e o path vai ler o caminho
  // o JSON vai transformar o objeto em um arquivo
} catch (error) {
  console.error(`Erro ao escrever no arquivo: ${error}`);
  // se der erro, retorna uma mensagem de erro
}
};

module.exports = {
  readSoccerTeams,
  writeSoccerTeams
};
// exportando o readSoccerTeams para ser utilizado em outros arquivos
// exportando o writeSoccerTeams para ser utilizado em outros arquivos