/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('exercicio', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    conteudo_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'conteudo',
        key: 'id'
      }
    },
    code: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    execucao: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    grupo_exercicio_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'grupo_exercicio',
        key: 'id'
      }
    },
    video_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    imagem_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'exercicio'
  });
};
