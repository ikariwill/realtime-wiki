/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('endereco', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'usuario',
        key: 'id'
      }
    },
    logradouro: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: 'Brasil'
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    numero: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    complemento: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'endereco'
  });
};
