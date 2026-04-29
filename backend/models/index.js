const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const User = require("./user.model")(sequelize, Sequelize);
const Task = require("./task.model")(sequelize, Sequelize);

User.hasMany(Task);
Task.belongsTo(User);

sequelize.sync();

module.exports = { User, Task };