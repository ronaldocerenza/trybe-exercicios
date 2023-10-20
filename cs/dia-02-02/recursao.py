def countdown(n):
    if n == 0:
        # caso base
        print("FIM!")
    # o caso base é o que faz a recursão parar
    else:
        print(n)
        countdown(n - 1)
    # caso recursivo
    # o caso recursivo é o que faz a recursão continuar

    # o caso recursivo deve sempre se aproximar do caso base
    # para que a recursão não seja infinita
    # não podemos usar iteração para resolver esse problema


countdown(5)
