/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('calendario_usuario', {
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
      allowNull: false
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
    },
    proxima_sessao: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'calendario_usuario'
  });
};
