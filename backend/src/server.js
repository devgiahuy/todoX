import express from "express";
import tasksRoutes from "./routes/tasksRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
//ngogiahuy3978_db_user == IBJI0DnS2nzUf1Xl

dotenv.config();

const PORT = process.env.PORT || 5001;

const app = express();

connectDB();

// middleware ê sever tất cả request đi qua kiểm tra xem có phải json không, nếu đúng thì parse no ra thành object
// nếu ko có middleware này thì req.body sẽ undefined và viết hàm xử lý parse
// middleware giống như một trạm trung gian xử lý dữ liệu request trước khi đến các route handler
app.use(express.json());

app.use("/api/tasks", tasksRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
