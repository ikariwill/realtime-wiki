/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('push', {
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
    equipe_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'equipe',
        key: 'id'
      }
    },
    perfil_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    comando: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    mensagem: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    dt_envio: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dt_entrega: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'push'
  });
};
