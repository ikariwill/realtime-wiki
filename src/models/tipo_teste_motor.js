/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tipo_teste_motor', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numero_tentativas: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      defaultValue: '1'
    },
    oque_mede: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    unidade_medida: {
      type: DataTypes.STRING(70),
      allowNull: false
    }
  }, {
    tableName: 'tipo_teste_motor'
  });
};
