const express = require("express");
const dbConnection = require("./config/db");
const Config = require("./config");

const app = express();

const PORT = Config.PORT || 5000;

// dbConnection
dbConnection();

app.listen(PORT, (err) => {
  if (err) {
    console.log(err, "server is not Connected");
  }
  console.log(`listening on port : http://localhost:${PORT}`);
});
