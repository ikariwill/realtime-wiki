/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coleta_parametro_bioquimico', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    parametro_bioquimico_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_bioquimico',
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
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'coleta_parametro_bioquimico'
  });
};
