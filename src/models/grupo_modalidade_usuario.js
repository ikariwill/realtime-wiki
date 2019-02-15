/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('grupo_modalidade_usuario', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    grupo_modalidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'grupo_modalidade',
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
    tableName: 'grupo_modalidade_usuario'
  });
};
