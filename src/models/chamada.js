/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chamada', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    turma_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'turma',
        key: 'id'
      }
    },
    dt_chamada: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    realizada: {
      type: DataTypes.ENUM('S','N'),
      allowNull: false,
      defaultValue: 'N'
    }
  }, {
    tableName: 'chamada'
  });
};
