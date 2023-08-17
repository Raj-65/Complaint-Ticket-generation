const Complains = require("./Complains");

module.exports = (sequelize, DataTypes) => {
    const Completed = sequelize.define("Completed", {
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
      ComplainDetail: {
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
    Completed.associate = (models) => {
        Completed.belongsTo(models.Complains,{
          foreignKey: "ComplainId"
        })
    }
    return Completed;
};