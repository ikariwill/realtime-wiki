/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carga_adicional', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    conteudo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'conteudo',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'carga_adicional'
  });
};
