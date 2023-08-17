const Complains = require("./Complains");

module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments", {
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
    Comments.associate = (models) => {
      Comments.belongsTo(models.Complains,{
        foreignKey: "ComplainId"
      })
    }
  
    return Comments;
  };