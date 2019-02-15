/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metodo_exercicio', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    descricao: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    conteudo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'conteudo',
        key: 'id'
      }
    }
  }, {
    tableName: 'metodo_exercicio'
  });
};
