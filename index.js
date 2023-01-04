const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json()); // middleware

//Import Routes
const postsRoute = require("./routes/posts");
const userRoute = require("./routes/user");

app.use("/posts", postsRoute);
app.use("/user", userRoute);

// Routes
app.get("/", (req, res) => {
  res.send("We are at home");
});

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => {
    console.log("connected to DB!");
    // mongoose.set("strictQuery", false);
  }
  // mongoose.set('strictQuery', false);
);

// Listening to the server
app.listen(3000);
