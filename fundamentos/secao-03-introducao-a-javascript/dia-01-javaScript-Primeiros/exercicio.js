// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.

const a = 83;
const b = 59;
const c = 38;

let Adição = a + b;
let Subtração = a - b;
let Multiplicação = a * b;
let Divisão = a / b;
let Módulo = a % b;

console.log(Adição);
console.log(Subtração);
console.log(Multiplicação);
console.log(Divisão);
console.log(Módulo);

if (a > b) {
  console.log(a);
}
else {
  console.log(b);
}
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.

if (a > b && a > c) {
  console.log(a);
}
else if (b > a && b > c) {
  console.log(b);
}
else {
  console.log(c);
}

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

if (a !== b){
  console.log('positive');
}
else if (a === b){
  console.log('negative');
}
else {
  console.log('zero');
}

// 🚀 Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.

if (a + b + c === 180) {
  console.log(true);
}
else if (a + b + c !== 180) {
  console.log(false);
}
else (a + b + c < 0){
  console.log('erro');
}

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
  // Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

  // Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

  // Se a peça passada for inválida, o código deve retornar uma mensagem de erro.

  // Exemplo: bishop (bispo) -> diagonals (diagonais)

  let pecaXadrez = 'CAVALO'  
  console.log(pecaXadrez.toLowerCase());
  
switch (pecaXadrez) {
  case "peão":
  console.log('são apenas permitidos movimentos frontais, de modo que o primeiro movimento de cada peão pode abranger duas casas, os outros movimentos se restringem a uma casa à frente. Embora se movimente para frente, o ataque do peão sempre ocorre na diagonal.');
    break;
  
  case "torre":
  console.log('pode correr, sem restrições de número de casas, para frente/trás/direita/esquerda.');
    break;

  case "cavalo":
  console.log('realiza movimentos em “L” (duas casas em um sentido e uma casa em sentido perpendicular àquele), para qualquer direção.');
    break;

  case "bispo":
  console.log('assim como no caso das torres, sem limitação de casas, porém apenas no sentido diagonal.');
    break;

  case "rainha":
  console.log('tem livre movimentação no jogo, só não movimenta em L.');
    break;
  
  case "rei":
  console.log('pode apenas ser movimentado de casa em casa, ainda que em qualquer direção do tabuleiro.');
    break;
  
  default:
  console.log('Peça não encontrada, você realmente conhece Xadrez?');
}
// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = 65

if (nota >= 90 && nota <= 100) {
  console.log('A');
 }
else if (nota >= 80) {
  console.log('B');
}
else if (nota >= 70) {
  console.log('C');
}
else if (nota >= 60) {
  console.log('D');
}
else if (nota >= 50) {
  console.log('E');
}
else if (nota < 50) {
  console.log('F');
}
else {
  console.log('Nota indisponivel procure o professor');
}

// 🚀 Há um par entre nós
// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.

const a = 3
const b = 7
const c = 4

if(a%2 == 0 || b%2 == 0 || c%2 == 0){
	console.log("true");
}else{
	console.log("false");
}

// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.

const a = 6
const b = 7
const c = 4

if(a%2 != 0 || b%2 != 0 || c%2 != 0){
	console.log("true");
}else{
	console.log("false");
}

// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);


const valorCusto = 700
const valorVenda = 1100
const impostoSobreOCusto = 0.20
const valorCustoTotal = valorCusto * impostoSobreOCusto
const lucro = valorVenda - valorCustoTotal


if (lucro * 1000) {
  
}

// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.