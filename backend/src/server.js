import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
//ngogiahuy3978_db_user == IBJI0DnS2nzUf1Xl

dotenv.config();
const app = express();

connectDB();

app.use("/api/tasks", tasksRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
