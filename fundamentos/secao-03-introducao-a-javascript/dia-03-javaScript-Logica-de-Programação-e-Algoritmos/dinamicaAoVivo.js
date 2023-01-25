// 1 -
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:
let soma = 0;
for (let index = 1; index <= 50; index += 1) {
    soma = soma + index;
}
console.log('A soma total de 1 a 50 é: ' + soma);
//2 -
// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let qtdNumeros = 0;
for (let index2 = 2; index2 <= 150; index2 += 1) {
    if (index2 % 3 === 0) {
        qtdNumeros = qtdNumeros + 1
    }
}
if (qtdNumeros === 50) {
    console.log("Mensagem Secreta")
} else {
    console.log(qtdNumeros);
}
// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".
let jogador1 = Math.floor(Math.random() * 3) +1;
let jogador2 = Math.floor(Math.random() * 3) +1;
console.log(jogador1);
console.log(jogador2);
// pedra = 1;
// papel = 2;
// tesoura = 3;
if (jogador1 === 1 && jogador2 === 3) {
    console.log('Player 1 Won')
} else if (jogador1 === 1 && jogador2 === 1) {
    console.log('A tie');
} else if (jogador1 === 1 && jogador2 === 2) {
    console.log('Player 2 won');
} else if (jogador1 === 2 && jogador2 === 1) {
    console.log('Player 1 Won');
} else if (jogador1 === 2 && jogador2 === 2) {
    console.log('A tie');
} else if (jogador1 === 2 && jogador2 === 3) {
    console.log('Player 2 won');
} else if (jogador1 === 3 && jogador2 === 2) {
    console.log('Player 1 Won');
} else if (jogador1 === 3 && jogador2 ===3) {
    console.log('A tie');
} else if (jogador1 === 3 && jogador2 === 1) {
    console.log('Player 2 won')
}
//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
let idadePessoa = 0;
if (idadePessoa >= 18) {
    console.log("A pessoa é maior de idade")
} else {
    console.log('A pessoa é menor de idade')
}
//bônus:
let idadePessoa2 = 20 >= 18 ? 'A pessoa é maior de idade' : 'A pessooa é menor de idade'
console.log(idadePessoa2);
// 5
//Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
let carolzita = 20;
let flavio = 30;
let noel = 40;
let maiorIdade = 0;
if (carolzita < flavio && carolzita < noel) {
    console.log('Carolzita é a mais nova')
} else if (flavio < carolzita && flavio < noel) {
    console.log('Flavio é a mais nova')
} else {
    console.log('Noel é a mais nova')
}