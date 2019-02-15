/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('treino', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cliente_unidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente_unidade',
        key: 'id'
      }
    },
    equipe_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'equipe',
        key: 'id'
      }
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    objetivo: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    favorito: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    dt_inicio: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dt_fim: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    sessoes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    origem: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    total_sessoes: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    gasto_calorico: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'treino'
  });
};
