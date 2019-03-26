'use strict';
module.exports = (sequelize, DataTypes) => {
  const tb_user = sequelize.define('tb_user', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    audio_id: {
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    price_start: {
      type: Sequelize.INTEGER
    },
    price_end: {
      type: Sequelize.INTEGER
    },
    detail: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  tb_user.associate = function (models) {
    // associations can be defined here

  };
  return tb_user;
};