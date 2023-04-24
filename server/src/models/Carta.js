const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("carta", {
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
