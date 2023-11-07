class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]
        # _buckets é um array de 10 posições,
        # cada posição é um ponteiro para um objeto Employee

        # se o ponteiro for None,
        # significa que não há um objeto Employee naquela posição

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee
        # para povoar o HashMap, basta inserir um objeto Employee
        # na posição indicada pelo método get_address

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name
        # para obter o valor, basta obter o objeto Employee
        # na posição indicada pelo método get_address

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name
        # para atualizar o valor, basta obter o objeto Employee
        # na posição indicada pelo método get_address
        # e atualizar o atributo name


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
# o primeiro valor da tupla é o id_num, o segundo é o nome
hash_map = HashMap()
# povoando o HashMap, inserindo os objetos Employee
for employee in employees:
    hash_map.insert(Employee(employee[0], employee[1]))
    # o objeto Employee é criado a partir da tupla
    # o primeiro valor da tupla é o id_num, o segundo é o nome

print(hash_map.get_value(10))
