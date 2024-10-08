const express = require("express");
const dbConnection = require("./config/db");
const Config = require("./config");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");

const app = express();
const PORT = Config.PORT || 5000;

// Middleware to parse incoming JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// dbConnection
dbConnection();

// api
app.use("/api/posts", postRoutes);

app.listen(PORT, (err) => {
  if (err) {
    console.log(err, "server is not Connected");
  }
  console.log(`listening on port : http://localhost:${PORT}`);
});
