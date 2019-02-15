/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historico_carga_adicional', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    exercicio_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'exercicio',
        key: 'id'
      }
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    data: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    carga: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'historico_carga_adicional'
  });
};
