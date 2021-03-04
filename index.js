require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/login", (req, res) => {
  const user = {name: "Brian", age: 32};
  const token = jwt.sign(user, process.env.ACCESS_TOKEN, {expiresIn: "3m"});
  res.json(token);
})

app.listen(3000, () => {
  console.log("Server running on port 3000");
})