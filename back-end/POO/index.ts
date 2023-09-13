class Vehicle {
  // criando uma classe com atributos e métodos
  constructor(
    // construtor é um método especial que é executado no momento da criação do objeto
    public brand: string,
    // puclic é um modificador de acesso que permite que os atributos sejam acessados fora da classe
    private automaker: string) { }
    // private é um modificador de acesso que permite que os atributos sejam acessados apenas dentro da classe
  
  public speed(): string {
    // podemos criar métodos dentro da classe
    console.log(`O ${this.brand} acelera!`);
    // e executar métodos dentro da classe
    
    return `O ${this.brand} acelera!`;
  }
} 

class Car extends Vehicle {
  // criando uma classe que herda os atributos e métodos da classe Vehicle
  constructor(
    brand: string,
    automaker: string) {
    super(brand, automaker)
    // super é um método que chama o construtor da classe pai
    }

  public speed(): string {
    console.log(`Acelera o ${this.brand}!`);
    return super.speed() + `Acelera o ${this.brand}!`;
  }
}

const carro = new Car('Fusca', 'Volkswagen');
carro.speed();