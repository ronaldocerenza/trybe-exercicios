const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
// app é o módulo que exportamos em trybecash-api/src/app.js
const connection = require('../../src/db/connection');
// connection é o módulo que exportamos em trybecash-api/src/db/connection.js

const { expect, use } = chai;

use(chaiHttp);
// use é um método que permite que você adicione plugins ao chai. Neste caso, estamos adicionando o plugin chaiHttp, que permite que você faça requisições HTTP com o chai.

const peopleList = [
  {
    id: 1,
    firstName: 'Luke',
    lastName: 'Skywalker',
    email: 'luke.skywalker@trybe.com',
    phone: '851 678 4453',
  },
  {
    id: 2,
    firstName: 'Dart',
    lastName: 'Vader',
    email: 'dart.vader@trybe.com',
    phone: '851 678 5665',
  },
];

describe('Testando os endpoints de people', function () {
  it('Testando o cadastro de uma pessoa ', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);
    // stub é um método que permite que você substitua uma função por outra. Neste caso, estamos substituindo a função execute do módulo connection por uma função que retorna uma promise que resolve com um array contendo um objeto com a propriedade insertId e o valor 42.

    const response = await chai
      .request(app)
      .post('/people')
      // .post é um método que faz uma requisição HTTP do tipo POST para o caminho /people
      .send(
      // .send é um método que envia dados para o servidor
        {
          firstName: 'Luke',
          lastName: 'Skywalker',
          email: 'luke.skywalker@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(201);
    // expect é um método que permite que você faça asserções. Neste caso, estamos fazendo a asserção de que o status da resposta é 201.
    expect(response.body).to.
      deep.equal({
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke.skywalker@trybe.com',
        phone: '851 678 4453',
      });
  });

  it('Testando a listagem de todas as pessoas', async function () {
    sinon.stub(connection, 'execute').resolves([peopleList]);
    const response = await chai
      .request(app)
      .get('/people');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList);
  });

  it('Testando a listagem da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[peopleList[0]]]);
    const response = await chai
      .request(app)
      .get('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal(peopleList[0]);
  });

  it('Testando a alteração de uma pessoa com o id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .put('/people/1')
      .send(
        {
          firstName: 'Lucão',
          lastName: 'Andarilho dos céus',
          email: 'lucao.andarilho@trybe.com',
          phone: '851 678 4453',
        },
      );

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 atualizada com sucesso' });
  });

  it('Testando a exclusão da pessoa com id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const response = await chai
      .request(app)
      .delete('/people/1');

    expect(response.status).to.equal(200);
    expect(response.body).to
      .deep.equal({ message: 'Pessoa de id 1 excluída com sucesso' });
  });


  afterEach(sinon.restore);
  // afterEach é um método que executa uma função depois de cada teste. Neste caso, estamos restaurando a função execute do módulo connection para que ela volte a funcionar normalmente.
});