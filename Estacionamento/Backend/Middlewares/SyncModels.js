const sequelize = require("../Config/db");
const Cars = require("../models/CarsModel");

async function syncDatabase() {
  try {
    console.log("Sincronizando modelo 'Cars'...");
    await Cars.sync({ force: false }); // force: true recria a tabela, force: false mantém a tabela existente
    console.log("Tabela 'Cars' criada com sucesso!");
  } catch (error) {
    console.error("Erro ao criar tabela 'Cars':", error);
  }
}

module.exports = syncDatabase;
