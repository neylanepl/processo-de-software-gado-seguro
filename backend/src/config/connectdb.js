const mysql = require("mysql2/promise");

async function connect() {
  if (global.connection && global.connection.state !== 'disconnected')
    return global.connection;
  const connection = await mysql.createConnection("mysql://testes@localhost:3306/GadoSeguro");
  global.connection = connection;
  return connection;
}

module.exports = connect