/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('menu', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    menu: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    visivel: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    icone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    inserir: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    excluir: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    ordem: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '999'
    },
    menu_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'menu',
        key: 'id'
      }
    }
  }, {
    tableName: 'menu'
  });
};
