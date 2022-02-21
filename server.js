const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/seatify", {
  useNewUrlParser: true,
});

