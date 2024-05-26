const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// USE THE MIDDLEWARES
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("App Is running successfully");
});

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
