import ErrorHandler from "../middlwares/error.js";
import Task from "../models/task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    // another way of creating entry in database
    const task = new Task({
      title,
      description,
      user: req.user._id,
    });
    await task.save();

    res.status(200).json({
      success: true,
      message: "task created!",
    });
  } catch (error) {
    next(error);
  }
};

export const getMyTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });

    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const udpateTask = async (req, res, next) => {
  try {
    const id = req.params.taskId;
    const task = await Task.findById(id);

    if (!task) return next(new ErrorHandler("Task not found", 404));

    task.isCompleted = !task.isCompleted;
    await task.save();

    res.status(200).json({
      success: true,
      taskCompleted: task.isCompleted,
      message: "task updated!",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const id = req.params.taskId;
    const task = await Task.findById(id);
    if (!task) return next(new ErrorHandler("task not found", 404));

    await Task.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: `${task.title} deleted!`,
    });
  } catch (error) {
    next(error);
  }
};
