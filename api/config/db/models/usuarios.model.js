const{Model,DataTypes}=require('sequelize');

const USUARIO_TABLE= 'usuarios';

const Usuario = sequelize.define('Usuario', {
    id_usuario: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(25),
      allowNull: false,
      unique: true,
    },
    contrasenia: {
      type: DataTypes.STRING(150),
      allowNull: false,
    }
  }, {
    schema: 'hoja_trabajo', // Especifica el esquema si es necesario
    tableName: 'usuarios',
    timestamps: false, // Si no tienes campos de timestamps como createdAt o updatedAt
  });
  
  module.exports = Usuario;