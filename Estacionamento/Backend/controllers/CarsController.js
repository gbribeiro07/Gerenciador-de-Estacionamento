const Cars = require("../models/CarsModel");

const CarsController = {
  //cadastrar carro (sequelize)
  async Cadastrar(req, res) {
    const { licensePlate, nameOwner, ownerCelphone } = req.body;

    // Verifica se algum campo está vazio, através do método 'Trim'
    if (!licensePlate.trim() || !nameOwner.trim() || !ownerCelphone.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Todos os campos são obrigatórios!" });
    }

    try {
      const newCar = await Cars.create({
        licensePlate,
        nameOwner,
        ownerCelphone,
      });
      return res
        .status(201)
        .json({ success: true, message: "Cadastro concluído!", data: newCar });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao cadastrar",
        error: err.message,
      });
    }
  },

  //listar carro (sequelize)
  async Listar(_, res) {
    try {
      const cars = await Cars.findAll();
      return res.json({ success: true, data: cars });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao buscar carros.",
        error: err.message,
      });
    }
  },

  //deletar carro (sequelize)
  async Deletar(req, res) {
    const { id } = req.params;

    try {
      const deleted = await Cars.destroy({ where: { idCar: id } });
      if (!deleted) {
        return res
          .status(404)
          .json({ success: false, message: "Carro não encontrado." });
      }
      return res.json({
        success: true,
        message: "Carro deletado com sucesso!",
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        message: "Erro ao deletar carro.",
        error: err.message,
      });
    }
  },
};

module.exports = CarsController;
