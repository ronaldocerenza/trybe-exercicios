class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name

# a principal diferença de um hash map com separate chaining
# é que cada posição do array é uma lista de objetos Employee
# e não um ponteiro para um objeto Employee


class HashMap:
    def __init__(self):
        self._buckets = [[] for i in range(10)]
        # _buckets uma lista de listas de objetos Employee,
        # cada posição é um ponteiro para um objeto Employee

        # se o ponteiro for None,
        # significa que não há um objeto Employee naquela posição

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)
        # para povoar o HashMap, basta inserir um objeto Employee
        # na posição indicada pelo método get_address

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None
        # iterar sobre a lista até encontrarmos o
        # item com o id_num procurado e retornar o nome.


employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
# o primeiro valor da tupla é o id_num, o segundo é o nome
hash_map = HashMap()
# povoando o HashMap, inserindo os objetos Employee
for employee in employees:
    hash_map.insert(Employee(employee[0], employee[1]))
    # o objeto Employee é criado a partir da tupla
    # o primeiro valor da tupla é o id_num, o segundo é o nome

print(hash_map.get_value(9))
