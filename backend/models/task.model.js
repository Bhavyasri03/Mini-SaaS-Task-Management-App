module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Task", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("PENDING", "COMPLETED"),
      defaultValue: "PENDING",
    },
  });
};