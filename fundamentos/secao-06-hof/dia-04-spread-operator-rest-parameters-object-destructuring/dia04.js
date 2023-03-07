// usando HOFs
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['maça', 'pera', 'melancia'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['goiaba', 'uva', 'jamelão'];

const fruitSalad = (fruit, additional) => {
  const newFruitSalad = []
  fruit.map((fruta) => newFruitSalad.push(fruta));
  additional.map((fruta) => newFruitSalad.push(fruta));
  return newFruitSalad
};

console.log(fruitSalad(specialFruit, additionalItens));

// // usando o conteudo proposto
// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['banana', 'maçã', 'pera'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['granola', 'aveia', 'mel'];

// const fruitSalad = (fruit, additional) => {
//   // basta atribuirmos os dois arrays a uma constante usando o spread operator e retorná-lo ao final da função.
//   const fruitSaladaWithAdditional = [...fruit, ...additional];
//   return fruitSaladaWithAdditional;
// };

// console.log(fruitSalad(specialFruit, additionalItens));
