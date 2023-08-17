const Requests = require("./Requests");

module.exports = (sequelize, DataTypes) => {
    const ReqOwn = sequelize.define("ReqOwn", {
      AssignedTo: {
        type: DataTypes.STRING,
        // allowNull: false,
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
// sequelize.sync({alter:true})
    ReqOwn.associate = (models) => {
      ReqOwn.belongsTo(models.Requests,{
        foreignKey: "ReqId"
      })
    }
  
    return ReqOwn;
  };