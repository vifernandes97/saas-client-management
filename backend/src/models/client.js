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
    validate: {
      notNull: false,
    }
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
  churned: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize,
  modelName: 'Client',
  hooks: {
    beforeValidate: (client) => {
      // Sanitizar contatosInternos para garantir que valores vazios sejam tratados
      if (client.contatosInternos && Array.isArray(client.contatosInternos)) {
        client.contatosInternos = client.contatosInternos.map(contact => ({
          nome: contact.nome || null,
          cargo: contact.cargo || null,
          email: contact.email || null,
          telefone: contact.telefone || null,
        }));
      }
    }
  }
});

module.exports = Client;
