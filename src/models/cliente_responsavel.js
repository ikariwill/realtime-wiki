/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_responsavel', {
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
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    rg: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    celular: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'cliente_responsavel'
  });
};
