/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coleta_parametro_ortopedico', {
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
    parametro_ortopedico_local_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_local',
        key: 'id'
      }
    },
    parametro_ortopedico_lado_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_lado',
        key: 'id'
      }
    },
    parametro_ortopedico_tipo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_tipo',
        key: 'id'
      }
    },
    parametro_ortopedico_severidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_severidade',
        key: 'id'
      }
    },
    parametro_ortopedico_causa_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_causa',
        key: 'id'
      }
    },
    parametro_ortopedico_tratamento_medico_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_tratamento_medico',
        key: 'id'
      }
    },
    parametro_ortopedico_fisioterapico_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'parametro_ortopedico_fisioterapico',
        key: 'id'
      }
    },
    dt_coleta: {
      type: DataTypes.DATE,
      allowNull: false
    },
    obs: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'coleta_parametro_ortopedico'
  });
};
