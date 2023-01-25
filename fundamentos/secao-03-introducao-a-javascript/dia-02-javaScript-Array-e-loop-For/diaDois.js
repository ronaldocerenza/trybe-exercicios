// let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

// tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa no final
// tasksList.unshift('Ligar Computador');  // adiciona mais uma tarefa no inicio
// console.log(tasksList);

// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

// .pop() //remove ultimo
// .shift() // remove o primeiro
// .indexOf() // mostra o local na matriz

// Para fixar
// Obtenha o valor “Serviços” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu.indexOf('Serviços');

console.log(menuServices);

// Procure o índice do valor “Portfólio” do array menu:

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

// Adicione o valor “Contato” no final do array menu:
menu.push('Contato');

console.log(menu);