def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1
    # a medida que n cresce o número de operações cresce linearmente
    # O(n)

    number2 = 0
    for n1 in range(n):
        for n2 in range(n):
            number2 += n1 + n2
    # a medida que n cresce o número de operações cresce quadráticamente
    # O(n^2)

    number3 = 0
    for n1 in range(n):
        for n2 in range(n):
            for n3 in range(n):
                number3 += n1 + n2 + n3
    # a medida que n cresce o número de operações cresce cúbicamente
    # O(n^3)

    return number1, number2, number3


n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')

# Constantes: O(1);
# Elas não dependem do tamanho da entrada, são operações fixas;

# Logarítmicos: O(log n);
# Elas crescem de forma logarítmica, ou seja, crescem de forma lenta;

# Linear: O(n);
# Elas crescem de forma linear, ou seja, crescem de forma proporcional ao tamanho da entrada;

# Quadráticos: O(n²);
# Elas crescem de forma quadrática, ou seja, crescem de forma quadrática ao tamanho da entrada;

# Cúbicos: O(n³);
# Elas crescem de forma cúbica, ou seja, crescem de forma cúbica ao tamanho da entrada;

# Exponencial: O(2ⁿ);
# Elas crescem de forma exponencial, ou seja, crescem de forma exponencial ao tamanho da entrada;

# Fatorial: O(n!).
# Elas crescem de forma fatorial, ou seja, crescem de forma fatorial ao tamanho da entrada;
