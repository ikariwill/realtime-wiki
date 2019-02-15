/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('antropometria', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cliente_unidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente_unidade',
        key: 'id'
      }
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    unidade: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    antropometria_categoria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'antropometria_categoria',
        key: 'id'
      }
    }
  }, {
    tableName: 'antropometria'
  });
};
