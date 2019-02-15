/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('planejamento', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dt_fim: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'planejamento'
  });
};
