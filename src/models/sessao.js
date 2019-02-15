/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sessao', {
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
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ordem: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    icone: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'assets/global/img/icones/14.png'
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    gasto_calorico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'sessao'
  });
};
