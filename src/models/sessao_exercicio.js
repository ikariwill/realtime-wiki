/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sessao_exercicio', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sessao_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sessao',
        key: 'id'
      }
    },
    exercicio_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'exercicio',
        key: 'id'
      }
    },
    series: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ordem: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
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
    },
    agrupamento_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'agrupamento',
        key: 'id'
      }
    },
    ordem_agrupamento: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    dica: {
      type: DataTypes.STRING(355),
      allowNull: true
    },
    objetivo_exercicio_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    metodo_exercicio_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'sessao_exercicio'
  });
};
