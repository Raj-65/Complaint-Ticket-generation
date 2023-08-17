const Comments = require("./Comments");
const Completed = require("./Completed");

module.exports = (sequelize, DataTypes) => {
    const Complains = sequelize.define("Complains", {
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
    });
  
    Complains.associate = (models) => {
      Complains.hasMany(models.Comments, {
        onDelete: "cascade",
        foreignKey: "ComplainId"
        // foreignKey: {unique: true}
      });
     };  
     Complains.associate = (models) => {
      Complains.hasOne(models.Completed, {
        foreignKey: "ComplainId"
        // foreignKey: {unique: true}
      });
     };  

    return Complains;
  };