/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tutoriais', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    descricao: {
      type: DataTypes.STRING(450),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    plataforma: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ordem: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    ativo: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'tutoriais'
  });
};
