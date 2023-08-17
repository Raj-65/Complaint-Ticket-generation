const ReqOwn = require("./ReqOwn");
const ReqSolv = require("./ReqSolv");

module.exports = (sequelize, DataTypes) => {
    const Requests = sequelize.define("Requests", {
      Name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
      Requirement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    Requests.associate = (models) => {
      Requests.hasMany(models.ReqOwn, {
        onDelete: "cascade",
        foreignKey: "ReqId"
        // foreignKey: {unique: true}
      });
     };  
     Requests.associate = (models) => {
      Requests.hasOne(models.ReqSolv, {
        foreignKey: "ReqId"
        // foreignKey: {unique: true}
      });
     };  

    return Requests;
  };