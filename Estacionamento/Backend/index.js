const express = require("express"); // solicita o express
const cors = require("cors");
const carsRoutes = require("./routes/CarsRoutes");
const PORT = 3001;
const syncDatabase = require("./Middlewares/SyncModels");

const app = express(); // atribui o express na variável app

// Sincronizar modelos com o banco de dados
syncDatabase();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.use("/Cars", carsRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
