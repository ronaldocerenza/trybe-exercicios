// escreva sum abaixo
const sum = (...num) => num.reduce((acc, cur) => acc + cur, 0)

console.log(sum(4,5,6));