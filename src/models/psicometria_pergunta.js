/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('psicometria_pergunta', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    psicometria_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'psicometria',
        key: 'id'
      }
    },
    pergunta: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: 'scala'
    },
    menor: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    maior: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    imagem_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'psicometria_pergunta'
  });
};
