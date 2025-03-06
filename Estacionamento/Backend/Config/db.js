const { Sequelize } = require("sequelize");

// Criar uma conexão inicial para garantir que o banco existe
const sequelizeTemp = new Sequelize(
  "mysql://root:@w0rk421390977909*@localhost:3306",
  {
    dialect: "mysql",
    logging: false,
  }
);

// Criar o banco de dados se não existir
async function setupDatabase() {
  try {
    await sequelizeTemp.query("CREATE DATABASE IF NOT EXISTS Estacionamento");
    console.log("Banco de dados criado ou já existe!");
  } catch (error) {
    console.error("Erro ao criar o banco de dados:", error);
  } finally {
    await sequelizeTemp.close(); // Fecha a conexão temporária
  }
}

// Criar a conexão principal com o banco de dados
const sequelize = new Sequelize(
  "Estacionamento",
  "root",
  "@w0rk421390977909*",
  {
    host: "localhost",
    dialect: "mysql",
    logging: false,
  }
);

// Conectar ao banco de dados
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados estabelecida!");
  } catch (error) {
    console.error("Erro ao conectar no banco:", error);
  }
}

// Executar a criação do banco e a conexão
setupDatabase().then(() => connectToDatabase());

module.exports = sequelize;
