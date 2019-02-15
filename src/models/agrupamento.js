/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('agrupamento', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sessao_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sessao',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    series: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pausa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cor: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    tipo: {
      type: DataTypes.ENUM('A','B'),
      allowNull: false,
      defaultValue: 'A'
    }
  }, {
    tableName: 'agrupamento'
  });
};
