/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('chat_professor', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    equipe_id: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    mensagem: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    dt_envio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    destinatario: {
      type: DataTypes.ENUM('E','U'),
      allowNull: false,
      defaultValue: 'E'
    },
    dt_leitura: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'chat_professor'
  });
};
