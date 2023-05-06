const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("cervezas", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
    },
    ibu: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    abv: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    cerveceria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
