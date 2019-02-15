/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('repeticao_sessao_exercicio', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    sessao_exercicio_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'sessao_exercicio',
        key: 'id'
      }
    },
    quantidade: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    pausa: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    unidade_medida_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'unidade_medida',
        key: 'id'
      }
    },
    intensidade: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    carga_adicional: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    velocidade_execucao: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'repeticao_sessao_exercicio'
  });
};
