require("dotenv").config();
const mongoose = require("mongoose");
var express = require("express");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

mongoose.connect(process.env.MONGODB_URL);

const routerApidocs = require("./routes/router_apidocs");
const routerProdutos = require("./routes/router_produtos");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api-docs", routerApidocs);
app.use("/produtos", routerProdutos);

module.exports = app;