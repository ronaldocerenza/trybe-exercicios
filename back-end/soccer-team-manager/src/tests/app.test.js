const chai = require('chai');
const chaiHttp = require('chai-http');
// chai e chai-http importados para fazer os testes
const { expect } = chai;

chai.use(chaiHttp); 
// chai utiliza o chai-http para fazer os testes
const app = require('../app');

const teams = require('../data');

describe('Testes da aplicação', () => {
  it('Testa se a aplicação retorna um array', async () => {
    const response = await chai
    .request(app).get('/teams');
    // response recebe o chai, que faz uma requisição do tipo get, na rota /teams
    expect(response.status).to.be.equal(200);
    expect(response.body.teams).to.deep.equal(teams);
    // expect verifica se o status da resposta é igual a 200
    // expect verifica se o body da resposta é igual ao output
  });
});

// mocha é uma biblioteca que executa os testes,
// o chai é uma biblioteca que faz as verificações,
// e o sinon é uma biblioteca que faz os mocks