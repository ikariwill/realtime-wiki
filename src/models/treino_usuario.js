/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treino_usuario', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    treino_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'treino',
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
    }
  }, {
    tableName: 'treino_usuario'
  });
};
