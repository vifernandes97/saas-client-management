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
  nomeGestor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estrutura: {
    type: DataTypes.ENUM('gestor sozinho', 'gestor + rd', 'gestor + rd + vend', 'equipe completa'),
    allowNull: false,
  },
  contatosInternos: {
    type: DataTypes.JSON,
    allowNull: true,
  },
  valorRecorrencia: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  cidadeBuffet: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plano: {
    type: DataTypes.ENUM('light', 'pro'),
    allowNull: false,
  },
  fonte: {
    type: DataTypes.ENUM('Facebook', 'Instagram', 'Google', 'Indicação', 'Reativação', 'Busca Direta', 'Conteúdo Blog', 'Material'),
    allowNull: true,
  },
  vendedor: {
    type: DataTypes.ENUM('Caê Castelli', 'Vinicius Fernandes', 'Marcella Drummond'),
    allowNull: true,
  },
  contratos: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  chs: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  leads: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  pacotes: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  integracaoInstagram: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  instanciaWhatsapp: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  landingPage: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  emailLogin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lifetime: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  ri: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('Onboarding', 'Acompanhamento', 'Churn'),
    allowNull: true,
  },
  churn: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  dataChurn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  ltv: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Client',
});

module.exports = Client;
