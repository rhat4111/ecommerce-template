const express = require('express');
const env = require('dotenv');
env.config();
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(4000, ()=>{
  console.log("Server running on port 4000");
});

module.exports = app;