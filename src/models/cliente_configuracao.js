/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cliente_configuracao', {
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
    tamanho_impressao: {
      type: DataTypes.ENUM('G','P'),
      allowNull: false,
      defaultValue: 'P'
    },
    restricao_horario: {
      type: DataTypes.ENUM('S','N'),
      allowNull: false,
      defaultValue: 'N'
    },
    limite_email: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '10000'
    },
    tipo_vencimento: {
      type: DataTypes.ENUM('D','S','A'),
      allowNull: false,
      defaultValue: 'D'
    },
    limite_usuario: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '1000'
    },
    imprimir_treino_vencido: {
      type: DataTypes.ENUM('S','N'),
      allowNull: false,
      defaultValue: 'S'
    },
    chave_integracao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tipo_integracao: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    assinatura: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estilo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: 'default.css'
    },
    administrador_id: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'cliente_configuracao'
  });
};
