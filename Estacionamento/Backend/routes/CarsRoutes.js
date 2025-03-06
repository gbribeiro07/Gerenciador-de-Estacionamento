const express = require("express");
const router = express.Router();
const CarsController = require("../controllers/CarsController");

router.post("/Cadastro", CarsController.Cadastrar);
router.get("/Lista", CarsController.Listar);
router.delete("/Delete/:id", CarsController.Deletar);

module.exports = router;
