import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`[⚡️] connected to mongo`);
});

const app = express();

const PORT = process.env.PORT || 15000;

app.get("/", (req, res) => {
  res.send("hiya");
});

app.listen(PORT, () => {
  console.log(`[⚡️] App is running at http://localhost:${PORT}/`);
});
