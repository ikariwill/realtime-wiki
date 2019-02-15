/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendario_planejamento', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    planejamento_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'planejamento',
        key: 'id'
      }
    },
    dt_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    dt_fim: {
      type: DataTypes.DATE,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: '1'
    },
    texto: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tipo_evento: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    parametro_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'calendario_planejamento'
  });
};
