('use strict');
const { Sequelize } = require('/app/node_modules/sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up({ context: queryInterface }) {
    await queryInterface.addColumn(
      'MERCHANTS', // Table name
      'MERCHANTNO', // New column name
      {
        type: Sequelize.STRING(30), // Data type (adjust if necessary)
      }
    );
  },
  async down({ context: queryInterface }) {
    await queryInterface.removeColumn('MERCHANTS', 'MERCHANTNO');
  },
};
