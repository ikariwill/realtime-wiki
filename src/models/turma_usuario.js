/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('turma_usuario', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    turma_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'turma',
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
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'turma_usuario'
  });
};
