const express = require('express');
const env = require('dotenv');
const cors = require('cors');
const connection = require("./db");
const users = require("./routes/users");
const auth = require("./routes/auth");

env.config();
const app = express();
connection();

app.use(cors);
app.use(express.json());
app.use("/auth", auth);
app.use("/users", users);

app.listen(4000, () => {
  console.log("Server running on port 4000");
});

module.exports = app;