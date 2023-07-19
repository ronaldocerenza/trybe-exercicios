const readline = require('readline-sync');
// readline é o módulo do node que lê o input do usuário
const { readSoccerTeams, writeSoccerTeams } = require('./src/utils/fsUtils');
// readSoccerTeams e writeSoccerTeams são funções que leem e escrevem no arquivo

async function main () {
  const name = readline.question('Qual o nome do time? ');
  const initials = readline.question('Qual a sigla do time? ');
  // name e initials recebem o readline, que lê o input do usuário

  const newTeam = { name, initials };
  // newTeam recebe o name e o initials

  writeSoccerTeams(newTeam);
  // writeSoccerTeams recebe o newTeam, que é o novo time

  console.log("Time cadastrado com sucesso!");
  // retorna uma mensagem de sucesso
}

main();