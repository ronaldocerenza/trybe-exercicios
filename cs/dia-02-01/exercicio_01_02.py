# Exercicio 1
# Faça um programa que solicite o nome de uma pessoa usuária e
# imprima-o na vertical.
NAME = input("Insira seu nome: ")

for letter in NAME:
    print(letter)


# Exercicio 2
# Escreva um programa que receba vários números naturais e
# calcule a soma desses valores. Caso algum valor da entrada
# seja inválido (por exemplo uma letra), uma mensagem deve ser
# exibida na saída de erros no seguinte formato: “Erro ao somar
# valores, {valor} é um valor inválido”. Ao final,
# você deve imprimir a soma dos valores válidos.
nums = input("Insira valores aqui, separados por espaço: ")
print(type(nums))
nums_arr = nums.split(" ")

sum = 0
for num in nums_arr:
    if not num.isdigit():
        # isdigit é uma função que verifica se o valor é um dígito
        print(f"Erro ao somar valores, {num} não é um dígito.")
    else:
        sum += int(num)

print(f"A soma dos valores válidos é: {sum}")
