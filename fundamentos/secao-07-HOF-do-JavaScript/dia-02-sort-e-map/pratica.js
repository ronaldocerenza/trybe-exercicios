// SORT PARA NUMEROS

const inventory = [1, 3, 2, 5, 4, 6, 7, 8, 9, 10];
inventory.sort((a, b) => a - b);
console.log(inventory);


// Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

//CRESCENTE
people.sort((a, b) => a.age > b.age ? 1 : -1);
console.log(people);
//DECRESCENTE
people.sort((a, b) => a.age > b.age ? -1 : 1);
console.log(people);


// transformar todos os números em negativo e passá-los para um array novo.
const numbers = [1, 2, 3, 4, -5];
const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

console.log(negativeNumbers); // [ -1, -2, -3, -4, -5 ]
console.log(numbers); // [ 1, 2, 3, 4, -5 ]


// Considere que você possui duas listas: o preço do primeiro produto (Arroz) é o primeiro elemento da lista prices (2.99), e assim por diante
const products = ['Arroz', 'Feijao', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const updateProducts = (listProducts, listPrices) => listProducts.map((product, index) => (
  { [product]: listPrices[index] }
));

const listProducts = updateProducts(products, prices);
console.log(listProducts);

// O map aplica sobre os elementos de um array uma função e retorna um array novo, sem modificar o original;
// O forEach não tem retorno, ele é genérico e pode fazer diversas coisas, como executar uma função para cada elemento do array, modificar o array, atribuir valores a variáveis ou objetos, etc.


