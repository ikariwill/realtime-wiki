/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('galeria_treino', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    galeria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'galeria',
        key: 'id'
      }
    },
    treino_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'treino',
        key: 'id'
      }
    },
    ativo: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'galeria_treino'
  });
};
