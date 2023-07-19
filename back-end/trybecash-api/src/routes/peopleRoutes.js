const express = require('express');

const peopleDB = require('../db/peopleDB');
// peopleDB é o módulo que exportamos em trybecash-api/src/db/peopleDB.js

const router = express.Router();
// router é um objeto que permite que você crie rotas. Neste caso, estamos criando um roteador para lidar com as rotas de people.

router.get('/', async (_req, res) => {
  try {
    const [result] = await peopleDB.findAll();
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [[result]] = await peopleDB.findById(id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.post('/', (req, res) => {
  // req é um objeto que contém informações sobre a requisição HTTP que disparou o endpoint.
  // res é um objeto que contém métodos para enviar uma resposta HTTP para o cliente que fez a requisição.
  const person = req.body;
  // req.body é um objeto que contém os dados enviados pelo cliente para o servidor.
  res.status(201).json(person);
  // res.status é um método que define o status da resposta HTTP. Neste caso, estamos definindo o status como 201, que significa que a requisição foi bem sucedida e um novo recurso foi criado.
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const person = req.body;
    const [result] = await peopleDB.update(person, id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} atualizada com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await peopleDB.remove(id);
    if (result.affectedRows > 0) {
      res.status(200).json({ message: `Pessoa de id ${id} excluída com sucesso` });
    } else {
      res.status(404).json({ message: 'Pessoa não encontrada' });
    }
  } catch (err) {
    res.status(500).json({ message: err.sqlMessage });
  }
});

module.exports = router;