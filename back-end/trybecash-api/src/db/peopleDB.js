// src/db/peopleDB.js

const conn = require('./connection');
// conn é o módulo que exportamos em trybecash-api/src/db/connection.js

const insert = (person) => conn.execute(
  // insert é uma função que recebe um objeto person e insere os dados desse objeto na tabela people do banco de dados.
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
      // INSERT INTO people é uma query SQL que insere dados na tabela people.
    [person.firstName, person.lastName, person.email, person.phone],
    // [person.firstName, person.lastName, person.email, person.phone] é um array que contém os valores que serão inseridos na tabela people.
  );

const findAll = () => conn.execute('SELECT * FROM people');
// findAll é uma função que retorna todos os dados da tabela people.

const findById = (id) => conn.execute('SELECT * FROM people WHERE id = ?', [id]);
// findById é uma função que retorna os dados da tabela people que possuem o id especificado.

const update = (person, id) => conn.execute(
  // update é uma função que recebe um objeto person e atualiza os dados desse objeto na tabela people do banco de dados.
  `UPDATE people 
    SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
  // UPDATE people é uma query SQL que atualiza dados na tabela people.
  [person.firstName, person.lastName, person.email, person.phone, id],
  // [person.firstName, person.lastName, person.email, person.phone, id] é um array que contém os valores que serão atualizados na tabela people.
);

const remove = (id) => conn.execute('DELETE FROM people WHERE id = ?', [id]);
// remove é uma função que recebe um id e remove os dados da tabela people que possuem esse id.

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};