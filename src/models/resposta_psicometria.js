/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('resposta_psicometria', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    psicometria_usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'psicometria_usuario',
        key: 'id'
      }
    },
    psicometria_pergunta_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'psicometria_pergunta',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'resposta_psicometria'
  });
};
