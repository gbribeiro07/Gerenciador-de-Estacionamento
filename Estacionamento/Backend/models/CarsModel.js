const { DataTypes } = require("sequelize");
const sequelize = require("../Config/db"); // Importe o sequelize corretamente

const Cars = sequelize.define(
  "Cars",
  {
    idCar: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    licensePlate: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nameOwner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ownerCelphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Cars",
    timestamps: true,
  }
);

module.exports = Cars;
