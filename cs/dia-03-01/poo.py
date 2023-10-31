# sobre POO podemos dizer que é um paradigma de programação que utiliza
# objetos em suas interações, para isso, é necessário que o programador
# crie classes e objetos, sendo que as classes são os moldes
# e os objetos são as instâncias das classes.

#  um exemplo simples de classe e objeto:

class Pessoa:
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade

    def falar(self):
        print(f'{self.nome} está falando...')


p1 = Pessoa('Luiz', 29)
p1.falar()

# saida: Luiz está falando...

# resumindo, uma classe é um molde para criar objetos, e os objetos são
# instâncias de uma classe, ou seja, são criados a partir de uma classe.

# 1 - Classes
# 2 - Objetos / Instâncias de uma classe
# 3 - Atributos / Características de uma classe
# 4 - Métodos / Ações de uma classe

# o construtor é um método especial utilizado para a construção do objeto,
# ele é chamado automaticamente quando o objeto é criado,
# e é nele que definimos os atributos do objeto.

# o metodo _new_ é o primeiro metodo a ser chamado quando um objeto é criado,
# ele é responsável por criar o objeto, e por isso, deve ser utilizado com
# cuidado, pois se ele não for utilizado corretamente, o objeto pode não
# ser criado.

# o metodo __init__ é o construtor da classe, ele é chamado automaticamente
# quando o objeto é criado, e é nele que definimos os atributos do objeto.

# o self é uma referência ao próprio objeto, e com ele podemos acessar
# os atributos e métodos do objeto.


class Exemplo:
    def __init__(self):
        # Observe que o nome do método privado começa com dois sublinhados __
        # O primeiro parâmetro, o self, representa a instância do objeto
        print("Inicializando Exemplo")
        self.__privado = "Eu sou privado"

    def __new__(cls, *args, **kwargs):
        # O método __new__ é responsável por criar e retornar uma nova
        # instância da classe.
        print("Criando uma nova instância de Exemplo")
        instance = super().__new__(cls)
        return instance

    def __metodo_privado(self):
        print("Este é um método privado")

    def metodo_publico(self):
        print("Este é um método público")
        self.__metodo_privado()


# Encapsulamento é um dos pilares da orientação a objetos.
# Públicos: podem ser acessados livremente por qualquer parte da aplicação
# Protegidos: podem ser acessados apenas pela classe que os definem 
#   e, quando há herança envolvida, também pelas classes “abaixo”
#   na hierarquia (veremos o tópico herança a seguir)
# Privados: podem ser acessados apenas pela classe que os definem
