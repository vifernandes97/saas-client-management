module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Clients', 'fonte', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Clients', 'vendedor', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    // Adicione mais colunas conforme necessário...
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Clients', 'fonte');
    await queryInterface.removeColumn('Clients', 'vendedor');
    // Remova as colunas correspondentes...
  }
};
