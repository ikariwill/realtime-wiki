/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('equipe', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cargo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cargo',
        key: 'id'
      }
    },
    cliente_unidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente_unidade',
        key: 'id'
      }
    },
    acesso_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'acesso',
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
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    imagem_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: true
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'equipe'
  });
};
