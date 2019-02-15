/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chamada_presenca', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    chamada_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'chamada',
        key: 'id'
      }
    },
    presente: {
      type: DataTypes.ENUM('S','N'),
      allowNull: false,
      defaultValue: 'N'
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    }
  }, {
    tableName: 'chamada_presenca'
  });
};
