const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const userRoutes = require("./routes/userRoutes");
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();
app.get("/", (req, res) => {
  res.send("this is api server first page!");
});
app.get("/api/notes", (req, res) => {
  res.send(notes);
});
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running on localhost:${PORT}`);
});
