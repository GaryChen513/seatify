const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seatify", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});