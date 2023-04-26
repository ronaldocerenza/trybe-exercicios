const pessoas = [
  { nome: 'Joana', idade: 37 },
  { nome: 'Ana', idade: 25 },
  { nome: 'João', idade: 32 },
  { nome: 'Aline', idade: 28 },
];

pessoas.forEach((pessoa) => console.log(`Nome: ${pessoa.nome}`))

// Encontre a primeira pessoa chamada Aline
console.log(pessoas.find((pessoa)=> pessoa.nome === 'Aline').nome);

// verifique se alguma pessoa tem mais de 30 anos
console.log(pessoas.some((pessoa) => pessoa.idade > 30)); //retorna um boolean com a resposta a pergunta

console.log(pessoas.sort((pessoa1, pessoa2) => pessoa1.idade - pessoa2.idade)); //ordenando do menor para o maior conforme a idade

// crie um novo array contendo os nomes de cada pessoa
console.log(pessoas.map((pessoa) => pessoa.nome));

// encontre todas as pessoas que tem 30 anos
console.log(pessoas.filter((pessoa) => pessoa.idade > 30));

// some a idade de todas as pessoas
console.log(pessoas.reduce((acc, pessoa) => acc + pessoa.idade, 0));