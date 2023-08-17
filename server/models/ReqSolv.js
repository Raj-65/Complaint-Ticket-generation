const Requests = require("./Requests");

module.exports = (sequelize, DataTypes) => {
    const ReqSolv = sequelize.define("ReqSolv", {
      IsComplete: {
        type: DataTypes.STRING,
        allowNull: false,
      },
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
      registered: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      AssignedTo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Remarks: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      InventoryUsed: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
     
    });
    ReqSolv.associate = (models) => {
        ReqSolv.belongsTo(models.Requests,{
          foreignKey: "ReqId"
        })
    }
    return ReqSolv;
};