// Utilizando o array abaixo, percorra-o somando todos os valores. Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, imprima a mensagem: “valor menor que 16”:

let fruits = [3, 4, 10, 1, 12];
let valorTotal =0;

for (index = 0; index < fruits.length; index += 1) {
  valorTotal = valorTotal + fruits[index]
} if (valorTotal>15){
  console.log(valorTotal);
} else {
  console.log('valor menor que 16');
}

