import express from "express";
const app = express();

const PORT = 15000;

app.get("/", (req, res) => {
  res.send("hiya");
});

app.listen(PORT, () => {
  console.log(`[⚡️] App is running at http://localhost:${PORT}/`);
});
