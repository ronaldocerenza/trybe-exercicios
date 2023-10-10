PI = 3.14  # PI é uma "constante" em nosso módulo
# a constante PI é uma variável que não deve ser alterada,
# por isso usamos letras maiúsculas para indicar que ela é uma constante,
# e recebe um valor que não será alterado durante a execução do programa


def square(side):
    # def serve para definir uma função
    """Calculate area of square."""
    return side * side


def rectangle(length, width):
    """Calculate area of rectangle."""
    return length * width


def circle(radius):
    """Calculate area of circle."""
    return PI * radius * radius


if __name__ == "__main__":
    # essa condicional serve para que o código abaixo seja executado
    # apenas quando o módulo for executado diretamente,
    # e não quando ele for importado por outro módulo
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
