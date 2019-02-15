/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('etapa', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    planejamento_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'planejamento',
        key: 'id'
      }
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
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'etapa'
  });
};
