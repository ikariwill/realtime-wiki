/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_unidade', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    cliente_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente',
        key: 'id'
      }
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    nome: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cnpj: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    logradouro: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    bairro: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cidade: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    cep: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('A','C','S'),
      allowNull: false,
      defaultValue: 'A'
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    complemento: {
      type: DataTypes.STRING(70),
      allowNull: true
    }
  }, {
    tableName: 'cliente_unidade'
  });
};
