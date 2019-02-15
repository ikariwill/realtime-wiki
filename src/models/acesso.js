/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acesso', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    super: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    email: {
      type: DataTypes.STRING(70),
      allowNull: false,
      unique: true
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    senha: {
      type: DataTypes.STRING(512),
      allowNull: true
    },
    apelido: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    imagem_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    android_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    apple_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    facebook_id: {
      type: DataTypes.STRING(256),
      allowNull: true
    },
    data_ultimo_acesso: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    hora_ultimo_acesso: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    tableName: 'acesso'
  });
};
