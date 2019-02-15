/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('turma', {
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
    nome: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    dia: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: false
    },
    vagas: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    local: {
      type: DataTypes.STRING(75),
      allowNull: true
    },
    obs: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'turma'
  });
};
