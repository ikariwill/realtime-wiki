/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('evento', {
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
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    local: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    dt_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    dt_fim: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    hora_inicio: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    hora_fim: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: '00:00:00'
    },
    dt_criacao: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    imagem_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'evento'
  });
};
