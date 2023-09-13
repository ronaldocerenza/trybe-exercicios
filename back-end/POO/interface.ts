// Interface é o molde de uma classe, ou seja, é um contrato que define quais atributos e métodos uma classe deve ter.

interface Animal {
  // interface é um contrato que define quais atributos e métodos uma classe deve ter
  name: string;
  age: number;
  info: string;
  // podemos definir atributos que devem ser implementados

  getBirthDate(): Date;
  // podemos definir métodos que devem ser implementados
}

class Bird implements Animal {
  // a classe Bird implementa a interface Animal, que define quais atributos e métodos a classe Bird deve ter
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    // get é um método especial que permite que o atributo seja acessado
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  get info() {
    // get é um método especial que permite que o atributo seja acessado
    // note que o atributo info não tinha sido usado em bird, por isso foi usado o metodo get
    // se não tivesse sido usado, o atributo info não seria criado
    return `${this.name} tem ${this.age} anos de idade`;
  }

  getBirthDate() { return this.birthDate; }
  // getBirthDate é um método que deve ser implementado, devido a interface Animal

  fly() { console.log(`${this.name} está voando!`); }
  // fly é um método apenas da classe Bird
}

const parrot = new Bird(
  'Papagaio',
  new Date(Date.parse('Aug 16, 2015')),
);

console.log(parrot.age);
parrot.fly();

/*
Saída (código executado em Mar/2022):
6
Papagaio está voando!
*/