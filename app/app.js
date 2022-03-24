"use strict"


const express = require("express");
const home = require("./src/routes/home")

const app = express();
app.use("/", home);
app.set("views", "./src/views");
app.set("view engine", "ejs");

module.exports = app;

