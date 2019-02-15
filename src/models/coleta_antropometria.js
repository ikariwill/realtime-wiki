/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coleta_antropometria', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    antropometria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'antropometria',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    dt_coleta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    valor: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'coleta_antropometria'
  });
};
