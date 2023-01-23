const myName = 'ronaldo';
const birthCity = 'Ponta Porã';
let birthYear = 1985;
birthYear = 2030;

console.log(myName)
console.log(birthCity)
console.log(birthYear)

const base = 5;
const heigth = 8;
const area = base * heigth;
const perimeter = base + heigth + area;

console.log(area)
console.log(perimeter)

const nota = 65

if (nota >= 80) {
  console.log('Parabéns');
}
else if (nota < 80 && nota >= 60) {
  console.log('Você está na nossa lista de espera');
}
else {
  console.log('Infelizmente, você reprovou');
}

const comida = 'pão na chapa';
const bebida = 'cafézinho';
if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false