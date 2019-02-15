/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('telefone', {
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
    numero: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    contato: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'telefone'
  });
};
