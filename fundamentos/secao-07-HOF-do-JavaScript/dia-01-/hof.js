// Adicione seu código aqui
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

console.log('------forEach-----');
emailListInData.forEach((email) =>{
  console.log(`O email ${email} está cadastrado em nosso banco de dados!`);
});

// FIND 01
console.log('------find1-----');
const numbers = [19, 21, 30, 3, 45, 22, 15];

const number3and5 = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
console.log(number3and5);

// FIND 02
console.log('------find2-----');
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nameFiveLeters = names.find((name) => name.length === 5);
console.log(nameFiveLeters);

// FIND 03
console.log('------find3-----');
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = musicas.find((musica) => musica.id === '31031685');

console.log(findMusic);