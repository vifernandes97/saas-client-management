const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Client extends Model {}

Client.init({
  nomeFantasia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  razaoSocial: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  dataInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  dataChurn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  lifetime: {
    type: DataTypes.INTEGER,  // Em meses, por exemplo
    allowNull: true,
  },
  ltv: {
    type: DataTypes.FLOAT,  // Lifetime Value em valor monetário
    allowNull: true,
  },
  nomeGestor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estrutura: {
    type: DataTypes.JSON,  // Armazenar como JSON
    allowNull: true,
  },
  contatosInternos: {
    type: DataTypes.JSON,  // Armazenar uma lista de contatos como JSON
    allowNull: true,
  },
  valorRecorrencia: {
    type: DataTypes.FLOAT,  // Valor monetário
    allowNull: false,
  },
  motivoChurn: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cidadeBuffet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plano: {
    type: DataTypes.ENUM('light', 'pro'),
    allowNull: false,
  },
  churned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Client',
});

module.exports = Client;
