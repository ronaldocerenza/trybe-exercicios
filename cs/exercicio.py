# 01 - Crie uma função que receba dois números e retorne o maior deles.

def maior(a, b):
    if a > b:
        return a
    else:
        return b


print(maior(5, 3))

# 02 - Calcule a média aritmética dos valores contidos em uma lista.


def media(lista):
    soma = 0
    for i in lista:
        soma += i
    return soma / len(lista)


print(media([1, 2, 3, 4, 5]))

# 03 - Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima
# na tela um quadrado feito de asteriscos de lado de tamanho n.


def quadrado(n):
    for i in range(n):
        print("*" * n)


quadrado(5)


# 04 - Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para ["José"
# , "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda"


def maior_nome(lista):
    maior = ""
    for i in lista:
        if len(i) > len(maior):
            maior = i
    return maior


print(maior_nome(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))


# 05 - Considere que a cobertura da tinta é de 1 litro para cada 3 metros
# quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo a quantidade
# de latas de tinta a serem compradas e o preço total a
# partir do tamanho de uma parede (em m²).


def tinta(m):
    litros = m / 3
    latas = litros / 18
    if litros % 18 != 0:
        latas += 1
    return (latas, latas * 80)


print(tinta(100))


# Crie uma função que receba os três lado de um triângulo e informe qual o
# tipo de triângulo formado ou "não é triangulo", caso não seja possível
# formar um triângulo.


def triangulo(a, b, c):
    if a + b > c and a + c > b and b + c > a:
        if a == b and b == c:
            return "equilatero"
        elif a == b or b == c or a == c:
            return "isosceles"
        else:
            return "escaleno"
    else:
        return "não é triangulo"


print(triangulo(1, 1, 1))
