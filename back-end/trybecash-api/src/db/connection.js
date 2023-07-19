const mysql = require('mysql2/promise');
// mysql2/promise é um adaptador que permite usar o mysql com async/await

const connection = mysql.createPool({
  // createPool cria uma pool de conexões, que é um conjunto de conexões que podem ser reutilizadas em vez de abrir e fechar novas conexões sempre que for necessário acessar o banco de dados.
  host: process.env.MYSQL_HOST || 'localhost',
  // host: o endereço do servidor do banco de dados
  port: process.env.MYSQL_PORT || 33060,
  // port: a porta do servidor do banco de dados
  user: process.env.MYSQL_USER || 'root',
  // user: o usuário que tem acesso ao banco de dados
  password: process.env.MYSQL_PASSWORD || 'root',
  // password: a senha do usuário
  database: process.env.DB_NAME || 'trybecashdb',
  // database: o nome do banco de dados que será usado
  waitForConnections: true,
  // waitForConnections: se true, a conexão será adiada quando não houver conexões disponíveis na pool
  connectionLimit: 10,
  // connectionLimit: o número máximo de conexões possíveis
  queueLimit: 0,
  // queueLimit: o número máximo de conexões que podem ficar na fila de espera
});

module.exports = connection;