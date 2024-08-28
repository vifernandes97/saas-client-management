const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('client_management', 'root', 'yourpassword', {
  host: 'db',
  dialect: 'mysql',
  port: 3306,
  logging: false,
  dialectOptions: {
    connectTimeout: 60000, // Aumenta o tempo de timeout para 60 segundos
  },
  retry: {
    max: 10, // Tenta se conectar 10 vezes antes de falhar
  }
});

module.exports = sequelize;
