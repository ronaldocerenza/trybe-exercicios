let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media =0;

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let index =0; index < numbers.length; index +=1) {
  console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;
for (let index =0; index < numbers.length; index +=1) {
  soma = soma + (numbers[index]);
}
console.log(soma);

// Calcule e imprima a média aritmética dos valores contidos no array;
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
media = soma / numbers.length
console.log(media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

if (media > 20) {
  console.log('valor maior que 20')
} else {
  console.log('valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

let maiorNumero = numbers[0];

for (let index =1; index < numbers.length; index +=1) {
if (numbers[index] > maiorNumero) {
  maiorNumero = (numbers[index]);
}
}
console.log(maiorNumero);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = [];

for (let index =0; index < numbers.length; index +=1) {
  if (numbers[index]%2!==0){
    impares.push(numbers[index]);
  } 
  };
  
  console.log(impares)

  // Utilizando for, descubra qual o menor valor contido no array e imprima-o;
  
let menorNumero = numbers[0];

for (let index =1; index < numbers.length; index +=1) {
if (numbers[index] < menorNumero) {
  menorNumero = (numbers[index]);
}
}
console.log(menorNumero);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

let list25 = [];

for (let index = 1; index <= 25; index += 1){
  list25.push(index)
}
console.log(list25);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.

for (let index = 1; index < list25.length; index += 1){
  console.log(list25[index] / 2);
}


