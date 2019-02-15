/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendario_treino', {
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
    dt_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_fim: {
      type: DataTypes.DATE,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false
    }
  }, {
    tableName: 'calendario_treino'
  });
};
