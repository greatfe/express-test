"use strict"


const express = require("express");
const home = require("./routes/home")

const app = express();
app.use("/", home);
app.set("views", "./views");
app.set("view engine", "ejs");

module.exports = app;

