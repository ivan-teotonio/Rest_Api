'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("contacts", {
      id: { 
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primarykey: true
      },
      name: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updated_at: {
        type: Sequelize.DATE,
        allowNull: false
    },
    customer_id: {
      type: Sequelize.INTEGER,
      references: { model: 'customers',key: 'id'},
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      allowNull: false,
    }
    })
  },

  down: queryInterface => {
     return queryInterface.dropTable("contact")
  }
};
