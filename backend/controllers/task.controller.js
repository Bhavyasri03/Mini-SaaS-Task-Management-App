const { Task } = require("../models");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    UserId: req.user.id,
  });

  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { UserId: req.user.id },
  });

  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, UserId: req.user.id },
  });

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.status = req.body.status;
  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, UserId: req.user.id },
  });

  res.json({ message: "Deleted" });
};