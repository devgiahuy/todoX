import Task from "../models/Task.js";

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createTaskAt: "desc" }); // sắp xếp giảm dần theo createAt
    res.status(200).json(tasks);
  } catch (error) {
    console.error("Error when call getAllTasks", error);
    res.status(500).json({ message: " Internal server error" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const task = new Task({ title });
    const newTask = await task.save();

    res.status(201).json(newTask);
  } catch (error) {
    console.error("Error when call createTask", error);
    res.status(500).json({ message: " Internal server error" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { title, status, completeAt } = req.body; // lấy
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, status, completeAt },
      { new: true } // nếu ko có thì trả về object cũ trước khi update
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error("Error when call updateTask", error);
    res.status(500).json({ message: " Internal server error" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    // const {id} = req.params;
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    if (!deleteTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error when call deleteTask", error);
    res.status(500).json({ message: " Internal server error" });
  }
};
