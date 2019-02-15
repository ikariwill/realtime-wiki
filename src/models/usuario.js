/* jshint indent: 2 */

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define('usuario', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    acesso_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'acesso',
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
    cliente_unidade_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'cliente_unidade',
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
    sobrenome: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    dt_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ativo: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    imagem_id: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    matricula: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    sexo: {
      type: DataTypes.ENUM('M','F'),
      allowNull: true
    },
    observacao: {
      type: DataTypes.STRING(450),
      allowNull: true
    }
  }, 
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'usuario'

    },
);

  return usuario;
};
