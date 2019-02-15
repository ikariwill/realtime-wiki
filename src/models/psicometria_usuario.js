/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('psicometria_usuario', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    psicometria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'psicometria',
        key: 'id'
      }
    },
    dt_resposta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    origem: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'psicometria_usuario'
  });
};
