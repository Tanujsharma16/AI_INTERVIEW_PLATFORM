const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server running 🚀");
});

// start server
app.listen(5000, () => {
  console.log("Server started on port 5000");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  // dummy check
  if (email === "admin@gmail.com" && password === "123") {
    return res.json({ msg: "Login successful" });
  }

  res.status(400).json({ msg: "Invalid credentials" });
});