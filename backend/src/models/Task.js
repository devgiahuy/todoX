import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
    completeAt: {
      type: Date,
      default: null,
    },
  },

  { timestamps: true }
);

const Task = mongoose.model("Task", tasksSchema);
export default Task;
