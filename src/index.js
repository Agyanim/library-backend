const express = require("express");
const cors = require("cors");
const pgConnect = require("./pgConnection");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my server");
});

pgConnect.connect((err) => {
  !err
    ? console.log("connection successful")
    : console.log("connection failed");
});
app.listen("5000", () => {
  console.log("server connected and listening on port 5000");
});
